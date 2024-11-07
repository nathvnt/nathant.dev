import Image from "next/image";

import pixelcomputer from '../../../public/pixelcomputer.png';

export default function HomeImage() {


  return (
    <div className="mx-auto w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-black bg-opacity-65 dark:bg-slate-300 dark:bg-opacity-15 border-2 border-emerald-600 overflow-hidden flex items-center justify-center shadow-md">
        <div className="w-[70%] h-[70%] relative">
            <Image src={pixelcomputer} alt="computer graphic" layout="fill" objectFit="cover" />
        </div>
    </div>
  );
}
