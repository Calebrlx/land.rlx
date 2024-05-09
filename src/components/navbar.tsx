// "use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// import { cn } from "@/lib/utils";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

export const Navbar = () => {

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <Image fill src="/logo.png" alt="Logo" />
                </div>
                <h1 className="text-2xl font-bold text-white">Relix</h1>
                {/* <h1 className={cn("text-2xl font-bold text-white", font.className)}>Relix</h1> */}
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href="https://app.relix.ai">
                    <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        Get Started
                    </button>
                </Link>
            </div>
        </nav>
    );
};