"use client";
import Image from "next/image";

export default function ImageLayout() {
  return (
    <div className="px-4 -mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[40px] place-items-center items-start">
          <div className="grid grid-cols-1 w-full gap-y-[24px]">
            <div className="w-full h-[300px] rounded-[8px] relative overflow-hidden">
              <Image src="/image/Default.jpg" width={500} height={500} alt="image of people" className="w-full h-full object-cover cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="font-semibold">Ewherhe Akpesiri</h2>
                <p className="font-extralight">London, United Kingdom</p>
              </div>
            </div>
            <div className="w-full h-[600px] rounded-[8px] relative overflow-hidden">
              <Image src="/image/Default.jpg" width={500} height={500} alt="image of people" className="w-full h-full object-cover cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="font-semibold">Ewherhe Akpesiri</h2>
                <p className="font-extralight">London, United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-full gap-y-[24px]">
            <div className="w-full h-[600px] rounded-[8px] relative overflow-hidden">
              <Image src="/image/Default.jpg" width={500} height={500} alt="image of people" className="w-full h-full object-cover cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="font-semibold">Ewherhe Akpesiri</h2>
                <p className="font-extralight">London, United Kingdom</p>
              </div>
            </div>
            <div className="w-full h-[500px] rounded-[8px] relative overflow-hidden">
              <Image src="/image/Default.jpg" width={500} height={500} alt="image of people" className="w-full h-full object-cover cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="font-semibold">Ewherhe Akpesiri</h2>
                <p className="font-extralight">London, United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-full gap-y-[24px]">
            <div className="w-full h-[400px] rounded-[8px] relative overflow-hidden">
              <Image src="/image/Default.jpg" width={500} height={500} alt="image of people" className="w-full h-full object-cover cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="font-semibold">Ewherhe Akpesiri</h2>
                <p className="font-extralight">London, United Kingdom</p>
              </div>
            </div>
            <div className="w-full h-[650px] rounded-[8px] relative overflow-hidden">
              <Image src="/image/Default.jpg" width={500} height={500} alt="image of people" className="w-full h-full object-cover cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="font-semibold">Ewherhe Akpesiri</h2>
                <p className="font-extralight">London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}