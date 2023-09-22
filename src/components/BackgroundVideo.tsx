import { BackgroundVideoProps } from "../../types";

export const BackgroundVideo = ({ children }: BackgroundVideoProps) => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        src="/video/loading-steam.mp4"
        className="w-full absolute object-cover -z-20"></video>
      <div className="z-20">{children}</div>
    </div>
  );
};
