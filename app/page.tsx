"use client";

import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center mb-6">
                <div className="text-center inline-block space-y-2">
                    <h1 className="text-4xl font-semibold">Sebastian Fermanelli</h1>
                    <Separator className="w-full" />
                    <p>Systems Engineering student and Back End Engineer from Argentina</p>
                </div>
            </div>

            <AboutMe />
            <ContactForm />
        </>
    );
}
