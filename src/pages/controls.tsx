import { BottomCarousel } from "@/components/BottomCarousel";
import { StaticTextContent } from "@/components/StaticTextContent";
import Image from "next/image";
import { useState } from "react";

export default function Controls() {
  const [isActionsVisible, setIsActionsVisible] = useState(true);
  return (
    <main className={`flex min-h-screen flex-col`}>
      <div
        style={{ backgroundImage: 'url("/images/background.png")' }}
        className="h-[100vh] bg-contain">
        {isActionsVisible ? (
          <div className="flex flex-col fixed bottom-2 z-20 h-1/2 w-full">
            <div className="opacity-80 bg-black h-14 w-full flex items-center justify-end px-5">
              <Image
                width={35}
                height={35}
                src={"/images/cross-icon.png"}
                alt={""}
                className="cursor-pointer"
                onClick={() => {
                  setIsActionsVisible(false);
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-center p-5 gap-10 opacity-60 bg-black h-full w-full">
              <StaticTextContent />
              <BottomCarousel />
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              setIsActionsVisible(true);
            }}
            className="cursor-pointer flex items-center justify-center fixed bottom-16 right-16 h-16 w-16 bg-black rounded-full">
            <Image
              width={22}
              height={22}
              src={"/images/rightarrow.png"}
              alt={""}
              className="-rotate-90"
            />
          </div>
        )}
      </div>
    </main>
  );
}
