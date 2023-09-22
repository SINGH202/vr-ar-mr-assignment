import { Inter } from "next/font/google";
import { Timer } from "@/components/Timer";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (seconds < 8) {
      const timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      router.push("/controls");
    }
  }, [seconds]);
  return (
    <main className={`flex min-h-screen flex-col ${inter.className} `}>
      <BackgroundVideo>
        <Timer />
      </BackgroundVideo>
    </main>
  );
}
