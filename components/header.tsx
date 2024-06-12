"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { CodeIcon, RocketIcon } from "@radix-ui/react-icons";

export function Header() {
    return (
        <header className="container mx-auto max-w-screen-xl flex justify-between items-center p-3">
            <Link href="/">
                <RocketIcon className="w-10 h-10" />
            </Link>
            <ModeToggle />
        </header>
    );
}
