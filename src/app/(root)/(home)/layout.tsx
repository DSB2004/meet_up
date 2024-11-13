import type { Metadata } from "next";
import Header from "./header";
export const metadata: Metadata = {
  title: "MeetUp: All is one solution to online meets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex">
      <div className="h-screen w-full relative overflow-y-auto">
        <Header></Header>
        <div
          className=" text-3 m-3 "
          style={{ height: "calc(100% - 60px)" }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
