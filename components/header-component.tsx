"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function Header() {
    return (
        <header className="container mx-auto max-w-screen-xl flex justify-between items-center p-3">
            <Link href="https://github.com/sebafermanelli" target="_blank" className="flex items-center gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="mx-1">
                            <Avatar>
                                <AvatarImage src="https://github.com/sebafermanelli.png" alt="@sebafermanelli" />
                                <AvatarFallback>SF</AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                            <h1>@sebafermanelli</h1>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Link>
            <ModeToggle />
        </header>
    );
}
