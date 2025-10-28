import ExtraAct from '@/assets/studentlife/extra_act.png';
import Image from 'next/image';

export default function ExtraActivitivesBlock() {
    return (
        <div className=" overflow-clip flex flex-col gap-[41px]">
            <h1 className="lg:block hidden text-h1 offset-text-background">
                Extracurricular Activities
            </h1>

            <div className="flex flex-col gap-[24px]">
                <Image
                    src={ExtraAct}
                    alt="Student"
                    className="h-[300px] object-cover w-full"
                />

                <p className="text-isd-font-1">
                    Our diverse student body has many different interests.
                    Extracurricular activities are generated and led by ISD
                    students. Multidisciplinary student efforts include
                    technology repair parties to encourage the sustainable use
                    of electronics and appliances, and a robotics camp for
                    outreach to high school students.
                </p>
            </div>
        </div>
    );
}
