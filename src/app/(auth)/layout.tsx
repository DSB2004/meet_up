import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MeetUp: All is one solution to online meets",
    description: "Generated by create next app",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="w-full flex justify-center items-center h-screen">
            {children}
        </main >


    );
}