"use client";

import { Menubar } from "@/components/ui/menubar";
import { Separator } from "./ui/separator";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Badge } from "./ui/badge";

export function SocialNetworks() {
    return (
        <Menubar>
            <TooltipProvider>
                <a href="https://www.linkedin.com/in/sebastianfermanelli/" target="_blank">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <LinkedInLogoIcon className="mx-1" />
                        </TooltipTrigger>
                        <TooltipContent className="mb-1">
                            <Badge>LinkedIn</Badge>
                        </TooltipContent>
                    </Tooltip>
                </a>

                <Separator orientation="vertical" />

                <a href="https://github.com/sebafermanelli" target="_blank">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <GitHubLogoIcon className="mx-1" />
                        </TooltipTrigger>
                        <TooltipContent className="mb-1">
                            <Badge>GitHub</Badge>
                        </TooltipContent>
                    </Tooltip>
                </a>

                <Separator orientation="vertical" />

                <a href="https://instagram.com/sebafermanelli" target="_blank">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <InstagramLogoIcon className="mx-1" />
                        </TooltipTrigger>
                        <TooltipContent className="mb-1">
                            <Badge>Instagram</Badge>
                        </TooltipContent>
                    </Tooltip>
                </a>
            </TooltipProvider>
        </Menubar>
    );
}
