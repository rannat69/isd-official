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

const facultyPositionOrder = [
    'head',
    'chair professor',
    'chair professor (joint)',
    'professor',
    'professor (joint)',
    'associate professor',
    'associate professor (joint)',
    'lecturer',
    'part-time lecturer',
    'research assistant professor',
    'adjunct professor',
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
        const idx = staffPositionOrder.findIndex((p) => pos.includes(p));
        return idx >= 0 ? idx : staffPositionOrder.length;
    }
    // faculty/affiliate or default
    const idx = facultyPositionOrder.findIndex((p) => pos.includes(p));
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

    // sort by position using id then rank then name as tiebreaker
    sorted.sort((a, b) => {
        // First, compare by id
        if (a.id !== b.id) return a.id - b.id; // Assuming id is numeric

        // Useless for now but might serve later
        //const ra = positionRank(a.position ?? a.role ?? '', context);
        //const rb = positionRank(b.position ?? b.role ?? '', context);
        //if (ra !== rb) return ra - rb;
        return nameKey(a.name).localeCompare(nameKey(b.name));
    });

    return sorted;
}

export default filterAndSortPeople;
