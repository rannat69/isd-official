import type { StaticImageData } from 'next/image';
import noneImg from '@/assets/news/noneImg.png';
import ach_2024_03_08 from '@/assets/news/ach.2024.03.08.jpg';
import ach_2024_03_08_02 from '@/assets/news/ach.2024.03.08.02.jpg';
import ach_2024_03_08_03 from '@/assets/news/ach.2024.03.08.03.jpg';
import ach_2024_03_08_04 from '@/assets/news/ach.2024.03.08.04.jpg';
import all_png from '@/assets/news/all.png';
import banner_png from '@/assets/news/banner.png';
import evt_2024_10_22 from '@/assets/news/evt.2024.10.22.png';
import evt_2024_10_29 from '@/assets/news/evt.2024.10.29.png';
import evt_2025_07_02 from '@/assets/news/evt.2025.07.02.png';
import news_2024_09_27 from '@/assets/news/news.2024.09.27.jpg';
import news_2025_04_07 from '@/assets/news/news.2025.04.07.jpg';
import news_2025_07_07_01 from '@/assets/news/news.2025.07.07.01.jpg';
import news_2025_07_07_02 from '@/assets/news/news.2025.07.07.02.jpg';
import news_2025_07_07_03 from '@/assets/news/news.2025.07.07.03.jpg';
import news_2025_07_07_04 from '@/assets/news/news.2025.07.07.04.jpg';
import news_2025_07_28_01 from '@/assets/news/news.2025.07.28.01.png';
import news_2025_07_28_02 from '@/assets/news/news.2025.07.28.02.png';
import news_2025_07_28_03 from '@/assets/news/news.2025.07.28.03.png';
import news_2025_07_28_04 from '@/assets/news/news.2025.07.28.04.png';
import news_2025_07_28_05 from '@/assets/news/news.2025.07.28.05.png';
import news_2025_08_21_01 from '@/assets/news/news.2025.08.21.01.png';
import news_2025_08_21_02 from '@/assets/news/news.2025.08.21.02.png';
import news_2025_08_21_03 from '@/assets/news/news.2025.08.21.03.png';
import news_2025_08_21_04 from '@/assets/news/news.2025.08.21.04.png';
import news_2025_08_21_05 from '@/assets/news/news.2025.08.21.05.png';
import news_2025_08_21_06 from '@/assets/news/news.2025.08.21.06.png';
import news_2025_09_02 from '@/assets/news/news.2025.09.02.png';
import news_2025_15_10 from '@/assets/news/news.2025.15.10.png';
import event_2025_09_18 from '@/assets/news/evt.2025.09.18.png';
import event_2025_11_13 from '@/assets/news/evt.2025.11.13.png';

// Map by filename for easy lookup regardless of provided path prefix
const imageByFileName: Record<string, StaticImageData> = {
    'ach.2024.03.08.jpg': ach_2024_03_08,
    'ach.2024.03.08.02.jpg': ach_2024_03_08_02,
    'ach.2024.03.08.03.jpg': ach_2024_03_08_03,
    'ach.2024.03.08.04.jpg': ach_2024_03_08_04,
    'all.png': all_png,
    'banner.png': banner_png,
    'evt.2024.10.22.png': evt_2024_10_22,
    'evt.2024.10.29.png': evt_2024_10_29,
    'evt.2025.07.02.png': evt_2025_07_02,
    'news.2024.09.27.jpg': news_2024_09_27,
    'news.2025.04.07.jpg': news_2025_04_07,
    'news.2025.07.07.01.jpg': news_2025_07_07_01,
    'news.2025.07.07.02.jpg': news_2025_07_07_02,
    'news.2025.07.07.03.jpg': news_2025_07_07_03,
    'news.2025.07.07.04.jpg': news_2025_07_07_04,
    'news.2025.07.28.01.png': news_2025_07_28_01,
    'news.2025.07.28.02.png': news_2025_07_28_02,
    'news.2025.07.28.03.png': news_2025_07_28_03,
    'news.2025.07.28.04.png': news_2025_07_28_04,
    'news.2025.07.28.05.png': news_2025_07_28_05,
    'news.2025.08.21.01.png': news_2025_08_21_01,
    'news.2025.08.21.02.png': news_2025_08_21_02,
    'news.2025.08.21.03.png': news_2025_08_21_03,
    'news.2025.08.21.04.png': news_2025_08_21_04,
    'news.2025.08.21.05.png': news_2025_08_21_05,
    'news.2025.08.21.06.png': news_2025_08_21_06,
    'news.2025.09.02.png': news_2025_09_02,
    'news.2025.15.10.png': news_2025_15_10,
    'evt.2025.09.18.png': event_2025_09_18,
    'evt.2025.11.13.png': event_2025_11_13,
};

export function resolveNewsImage(path?: string | null): StaticImageData {
    if (!path) return noneImg;
    const fileName = path.split('/').pop() || path;
    return imageByFileName[fileName] ?? noneImg;
}

export function resolveImages(paths?: Array<string | null>): StaticImageData[] {
    if (!paths || paths.length === 0) return [noneImg];
    const images = paths
        .map((p) => resolveNewsImage(p || undefined))
        .filter((img) => img !== noneImg);
    return images.length > 0 ? images : [noneImg];
}
