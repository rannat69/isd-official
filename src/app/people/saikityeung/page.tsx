'use client';

import { useRouter } from 'next/navigation';

export default function SaiKit() {
    const router = useRouter();
    router.replace(`/people/?keyword=sai+kit+yeung
`);
}
