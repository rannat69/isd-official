import HeroImageFile from '@/assets/MPTIE.jpg';

import HeroImage from '@/components/HeroImage';
import Entr49014904Block from '@/components/blocks/academics/Entr49014904';

export default function Entr49014904Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <Entr49014904Block />
        </div>
    );
}
