export type NewsType = 'News' | 'Achievements' | 'Events';

export interface NewsEntry {
    id: number;
    title: string;
    date: string; // ISO date
    type: NewsType;
    details: string;
    pictures?: string[];
    evt_date?: string | null;
    evt_time?: string | null;
    evt_location?: string | null;
}

export type CategoryFilter = 'All' | NewsType;
export type SortOption = 'newest' | 'oldest';

export interface ListOptions {
    category?: CategoryFilter;
    year?: number | 'All';
    sort?: SortOption;
}

export function filterNews(items: NewsEntry[], opts: ListOptions = {}) {
    const { category = 'All', year = 'All' } = opts;
    return items.filter((it) => {
        const inCategory = category === 'All' || it.type === category;
        const inYear =
            year === 'All' || new Date(it.date).getFullYear() === Number(year);
        return inCategory && inYear;
    });
}

export function sortNews(items: NewsEntry[], sort: SortOption = 'newest') {
    return [...items].sort((a, b) => {
        const da = new Date(a.date).getTime();
        const db = new Date(b.date).getTime();
        return sort === 'newest' ? db - da : da - db;
    });
}

export function getYears(items: NewsEntry[]): number[] {
    const years = new Set<number>();
    items.forEach((it) => years.add(new Date(it.date).getFullYear()));
    return Array.from(years).sort((a, b) => b - a);
}
