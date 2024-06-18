"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

export function AboutMe() {
    return (
        <>
            <p className="text-justify text-muted-foreground">
                I'm a backend developement engineer from Argentina. I love technology and new ideas, always checking out
                what's new. When I'm not coding, I enjoy playing tennis, riding motorcycles, and traveling.
            </p>
            <br />
            <p className="text-justify text-muted-foreground">
                As a developer, I bring a versatile skill set to the table. I use JavaScript, TypeScript, and Java to
                build top-notch applications. I'm experienced with both frontend and backend frameworks and tools such
                as React.js, Next.js, Node.js, Express.js, Nest.js, and Spring, enabling faster development and better
                user experiences. I handle data using SQL and NoSQL databases, utilizing various Object-Relational
                Mapping tools. I'm always learning and ready for new challenges in the software world.
            </p>
            <br />
            <div className="flex flex-wrap justify-between -mx-2">
                <div className="w-full md:w-3/4  px-2 pb-2">
                    <p className="text-justify text-muted-foreground">
                        Check out my GitHub's profile and let's team up for creative solutions!
                    </p>
                </div>

                <div className="w-full md:w-1/4  px-2 pb-2 flex justify-center md:justify-end gap-3">
                    <Link href="https://github.com/sebafermanelli" target="_blank">
                        <Button variant="outline">
                            GitHub <GitHubLogoIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
