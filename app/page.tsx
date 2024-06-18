"use client";

import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <>
            <AboutMe />
            <Separator className="my-3" />
            <ContactForm />
        </>
    );
}
