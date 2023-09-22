import { Inter } from "next/font/google";
import { Timer } from "@/components/Timer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <div className="border border-white">
        <Timer />
      </div>
    </main>
  );
}
