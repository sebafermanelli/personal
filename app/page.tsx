"use client";

import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center m-12">
                <div className="text-center inline-block space-y-1">
                    <h1 className="text-5xl font-semibold">Sebastian Fermanelli</h1>
                    <Separator className="w-full" />
                    <p className="text-sm text-muted-foreground">
                        Systems Engineering student and a Software Engineer from Argentina
                    </p>
                </div>
            </div>

            <AboutMe />
            <ContactForm />
        </>
    );
}
