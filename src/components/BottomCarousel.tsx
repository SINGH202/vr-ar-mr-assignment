import Image from "next/image";
import { useState } from "react";

export const BottomCarousel = () => {
  const [activePoint, setActivePoint] = useState(1);

  return (
    <div className="flex items-center justify-between w-full  p-2 max-w-lg">
      {activePoint !== 1 ? (
        <Image
          width={20}
          height={20}
          src={"/images/leftarrow.png"}
          alt={""}
          className="cursor-pointer p-1"
          onClick={() => {
            setActivePoint((present) => {
              if (present > 1) return present - 1;
              return present;
            });
          }}
        />
      ) : (
        <div className="w-5"></div>
      )}
      <div className="flex items-center">
        <div
          className={`circular-img-container ${
            activePoint === 1 ? `active-container` : ``
          }`}>
          <Image
            width={35}
            height={35}
            src={"/images/profiles-icon.png"}
            alt={""}
            className={`${activePoint === 1 ? `scale-105 visible` : `hidden`}`}
          />
        </div>
        <div className="circular-img-joiner"></div>
        <div
          className={`circular-img-container ${
            activePoint === 2 ? `active-container` : ``
          }`}>
          <Image
            width={35}
            height={35}
            src={"/images/wallpapers-icon.png"}
            alt={""}
            className={`${activePoint === 2 ? `scale-105 visible` : `hidden`}`}
          />
        </div>
        <div className="circular-img-joiner"></div>
        <div
          className={`circular-img-container ${
            activePoint === 3 ? `active-container` : ``
          }`}>
          <Image
            width={35}
            height={35}
            src={"/images/steam-profile-icon.png"}
            alt={""}
            className={`${activePoint === 3 ? `scale-105 visible` : `hidden`}`}
          />
        </div>
        <div className="circular-img-joiner"></div>
        <div
          className={`circular-img-container ${
            activePoint === 4 ? `active-container` : ``
          }`}>
          <Image
            width={35}
            height={35}
            src={"/images/speaker-profile-icon.png"}
            alt={""}
            className={`${activePoint === 4 ? `scale-105 visible` : `hidden`}`}
          />
        </div>
        <div className="circular-img-joiner"></div>
        <div
          className={`circular-img-container ${
            activePoint === 5 ? `active-container` : ``
          }`}>
          <Image
            width={35}
            height={35}
            src={"/images/light-profile-icon.png"}
            alt={""}
            className={`${activePoint === 5 ? `scale-105 visible` : `hidden`}`}
          />
        </div>
        <div className="circular-img-joiner"></div>
        <div
          className={`circular-img-container ${
            activePoint === 6 ? `active-container` : ``
          }`}>
          <Image
            width={35}
            height={35}
            src={"/images/aroma-profile-icon.png"}
            alt={""}
            className={`${activePoint === 6 ? `scale-105 visible` : `hidden`}`}
          />
        </div>
      </div>
      {activePoint !== 6 ? (
        <Image
          width={20}
          height={20}
          src={"/images/rightarrow.png"}
          alt={""}
          className="cursor-pointer p-1"
          onClick={() => {
            setActivePoint((present) => {
              if (present < 6) return present + 1;
              return present;
            });
          }}
        />
      ) : (
        <div className="w-5"></div>
      )}
    </div>
  );
};
