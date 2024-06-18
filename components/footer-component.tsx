import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SocialNetwork } from "./social-network";
import { Separator } from "./ui/separator";
import { Menubar } from "./ui/menubar";

export function Footer() {
    return (
        <footer className="flex justify-center items-center">
            <Menubar>
                <SocialNetwork
                    title="LinkedIn"
                    icon={<LinkedInLogoIcon />}
                    href="https://www.linkedin.com/in/sebastianfermanelli/"
                />
                <Separator orientation="vertical" />
                <SocialNetwork title="GitHub" icon={<GitHubLogoIcon />} href="https://github.com/sebafermanelli" />
                <Separator orientation="vertical" />
                <SocialNetwork
                    title="Instagram"
                    icon={<InstagramLogoIcon />}
                    href="https://instagram.com/sebafermanelli"
                />
            </Menubar>
        </footer>
    );
}
