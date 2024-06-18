"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { ReactElement } from "react";

export function SocialNetwork({ title, icon, href }: { title: string; icon: ReactElement; href: string }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <Link href={href} target="_blank">
                    <TooltipTrigger className="m-1">{icon}</TooltipTrigger>
                    <TooltipContent>
                        <p>{title}</p>
                    </TooltipContent>
                </Link>
            </Tooltip>
        </TooltipProvider>
    );
}
