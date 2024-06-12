import { Menubar } from "@/components/ui/menubar";
import { Separator } from "./ui/separator";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function SocialNetworks() {
    return (
        <Menubar>
            <a href="https://www.linkedin.com/in/sebastianfermanelli/" target="_blank">
                <LinkedInLogoIcon className="mx-1" />
            </a>
            <Separator orientation="vertical" />
            <a href="https://github.com/sebafermanelli" target="_blank">
                <GitHubLogoIcon className="mx-1" />
            </a>
            <Separator orientation="vertical" />
            <a href="https://instagram.com/sebafermanelli" target="_blank">
                <InstagramLogoIcon className="mx-1" />
            </a>
        </Menubar>
    );
}
