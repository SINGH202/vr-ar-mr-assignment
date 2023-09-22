import { Inter } from "next/font/google";
import { Timer } from "@/components/Timer";
import { BackgroundVideo } from "@/components/BackgroundVideo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className} `}>
      <div className="">
        <BackgroundVideo>
          <Timer />
        </BackgroundVideo>
      </div>
    </main>
  );
}
