export type Person = {
    id: number;
    name: string;
    details?: string | null;
    role?: string | null;
    position?: string | null;
    keywords?: string[] | null;
    photo?: string | null;
    email?: string | null;
    phone?: string | null;
    location?: string | null;
    link?: string | null;
    areas?: string[] | null;
    tags?: string[] | null;
    primaryApt?: string | null;
};

type Options = {
    keyword?: string;
    area?: string;
    context?: 'faculty' | 'affiliate' | 'staff';
    tag?: string;
};

const facultyTagsOrder = [
    'regular',
    'joint_appointment',
    'teaching_track',
    'research_track',
    'adjunct',
    'emeritus',
    'affiliate',
];

const facultyPositionOrder = [
    'head of isd / tencent professor of engineering and chair professor of cse',
    'chair professor',
    'chair professor (joint)',
    'professor emeritus',
    'professor',
    'professor (joint)',
    'associate professor',
    'associate professor of engineering education',
    'associate professor (joint)',
    'lecturer',
    'part-time lecturer',
    'research assistant professor',
    'adjunct professor',
    'adjunct associate professor',
    'adjunct assistant professor',
    'assistant professor',
];

const staffPositionOrder = [
    'senior manager',
    'assistant manager',
    'officer',
    'senior technical officer',
    'technical officer',
    'teaching associate',
    'instructional assistant',
];

function normalize(s?: string | null) {
    if (!s) return '';
    return s.toLowerCase().trim();
}

function nameKey(name?: string) {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].toLowerCase();
    const last = parts[parts.length - 1];
    const first = parts.slice(0, parts.length - 1).join(' ');
    return (last + ' ' + first).toLowerCase();
}

function positionRank(
    position?: string | null,
    context: Options['context'] = 'faculty'
) {
    const pos = normalize(position);
    if (context === 'staff') {
        const idx = staffPositionOrder.findIndex((p) => pos === p);
        return idx >= 0 ? idx : staffPositionOrder.length;
    }
    // faculty/affiliate or default
    const idx = facultyPositionOrder.findIndex((p) => pos === p);
    return idx >= 0 ? idx : facultyPositionOrder.length;
}

export function filterAndSortPeople(items: Person[], options: Options = {}) {
    const {
        keyword = '',
        area = 'all',
        context = 'faculty',
        tag = '',
    } = options;
    const tokens = keyword
        .split(/\s+/)
        .map((t) => normalize(t))
        .filter(Boolean);

    let filtered = items.filter((it) => {
        if (tokens.length === 0) return true;
        let hay = [it.name, it.role, it.position, it.location, it.email]
            .filter(Boolean)
            .map((s) => normalize(String(s)))
            .join(' ');
        // include keywords array (normalize and append)
        if (Array.isArray(it.keywords) && it.keywords.length) {
            const k = it.keywords.map((s) => normalize(String(s))).join(' ');
            if (k) hay = (hay ? hay + ' ' : '') + k;
        }

        return tokens.every((t) => hay.includes(t));
    });

    // filter by tag or area only if faculty
    if (context === 'faculty') {
        if (tag) {
            filtered = filtered.filter((it) => {
                if (!Array.isArray(it.tags)) return false;
                return it.tags.includes(tag);
            });
        }

        if (area !== 'all') {
            filtered = filtered.filter((it) => {
                if (!Array.isArray(it.areas)) return false;
                return it.areas.includes(area);
            });
        }
    }

    const sorted = filtered.slice();

    console.log('sorted', sorted);

    // sort by tag, then position, then last name
    sorted.sort((a, b) => {
        const tagA = facultyTagsOrder.indexOf(a.tags?.[0] ?? '');
        const tagB = facultyTagsOrder.indexOf(b.tags?.[0] ?? '');
        const tagRankA = tagA >= 0 ? tagA : facultyTagsOrder.length;
        const tagRankB = tagB >= 0 ? tagB : facultyTagsOrder.length;
        if (tagRankA !== tagRankB) return tagRankA - tagRankB;

        const ra = positionRank(a.role ?? '', context);

        console.log('ra', ra);

        const rb = positionRank(b.role ?? '', context);

        console.log('rb', rb);

        if (ra !== rb) return ra - rb;

        return nameKey(a.name).localeCompare(nameKey(b.name));
    });

    return sorted;
}

export default filterAndSortPeople;
