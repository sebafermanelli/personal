"use client";

import { Menubar } from "@/components/ui/menubar";
import { Separator } from "./ui/separator";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
// import { p } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SocialNetworks() {
    return (
        <Menubar>
            <TooltipProvider>
                <a href="https://www.linkedin.com/in/sebastianfermanelli/" target="_blank">
                    <Tooltip>
                        <TooltipTrigger className="mx-1">
                            <LinkedInLogoIcon />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>LinkedIn</p>
                        </TooltipContent>
                    </Tooltip>
                </a>

                <Separator orientation="vertical" />

                <a href="https://github.com/sebafermanelli" target="_blank">
                    <Tooltip>
                        <TooltipTrigger className="mx-1">
                            <GitHubLogoIcon />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>GitHub</p>
                        </TooltipContent>
                    </Tooltip>
                </a>

                <Separator orientation="vertical" />

                <a href="https://instagram.com/sebafermanelli" target="_blank">
                    <Tooltip>
                        <TooltipTrigger className="mx-1">
                            <InstagramLogoIcon />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Instagram</p>
                        </TooltipContent>
                    </Tooltip>
                </a>
            </TooltipProvider>
        </Menubar>
    );
}
