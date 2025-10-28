import HeroImageFile from '@/assets/rpg-hero.jpg';
import HeroImage from '@/components/HeroImage';
import RPGBlock from './RPGBlock';

export default function PRGPage() {
    return (
        <div className="flex flex-col">
            <HeroImage image={HeroImageFile} />
            <div className="lg:dot-pattern before:top-[-115px] before:right-[-10px] [--dot-color:var(--isd-primary-2)]" />
            <RPGBlock />
        </div>
    );
}
