"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
    return (
        <header className="container mx-auto max-w-screen-xl flex justify-between items-center p-3">
            <Link href="https://github.com/sebafermanelli" target="_blank" className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="https://github.com/sebafermanelli.png" alt="@sebafermanelli" />
                    <AvatarFallback>SF</AvatarFallback>
                </Avatar>
                <h1 className="text-sm">@sebafermanelli</h1>
            </Link>
            <ModeToggle />
        </header>
    );
}
