/* eslint-disable react/no-unescaped-entities */
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
            <span className="font-semibold font-serif text-2xl">
              Digital Interface
            </span>
            <span className="w-full font-semibold font-serif max-w-md text-center">
              Choreograph every element of your shower experience with built-in
              Wi-Fi, Bluetooth, and voice-activated technology when paired with
              Google Home™* or Amazon® Alexa®. Plus, use the DFC@Home™" app to
              craft up to twelve shower presets with spa options, remotely warm
              your steam shower and customize the interface.
            </span>
          </div>
          
        </div>
      </div>
    </main>
  );
}
