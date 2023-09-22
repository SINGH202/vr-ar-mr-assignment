import { BottomCarousel } from "@/components/BottomCarousel";
import { StaticTextContent } from "@/components/StaticTextContent";
import Image from "next/image";

export default function Controls() {
  return (
    <main className={`flex min-h-screen flex-col`}>
      <div
        style={{ backgroundImage: 'url("/images/background.png")' }}
        className="h-[100vh] bg-contain">
        <div className="flex flex-col fixed bottom-2 z-20 h-1/2 w-full">
          <div className="opacity-80 bg-black h-14 w-full flex items-center justify-end px-5">
            <Image
              width={35}
              height={35}
              src={"/images/cross-icon.png"}
              alt={""}
            />
          </div>
          <div className="flex flex-col items-center justify-center p-5 gap-10 opacity-60 bg-black h-full w-full">
            <StaticTextContent />
            <BottomCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
