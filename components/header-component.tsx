"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Link href="https://github.com/sebafermanelli" target="_blank">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="m-1">
                                <Avatar>
                                    <AvatarImage src="https://github.com/sebafermanelli.png" alt="@sebafermanelli" />
                                    <AvatarFallback>SF</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <h2>@sebafermanelli</h2>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
                <h1 className="font-semibold">Sebastian Fermanelli</h1>
            </div>

            <div className="flex items-center gap-3">
                <Link href="https://github.com/Venedicto" target="_blank">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="m-1">
                                <Avatar>
                                    <AvatarImage src="https://github.com/venedicto.png" alt="@venedicto" />
                                    <AvatarFallback>VD</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <h2>@venedicto</h2>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
                <ModeToggle />
            </div>
        </header>
    );
}
