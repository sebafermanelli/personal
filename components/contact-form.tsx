"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { PaperPlaneIcon, SymbolIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export function ContactForm() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "Contact Form Submission from Personal Website",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const data = await response.json();

            if (data.status === 201) {
                toast({
                    title: data.message,
                });
            } else {
                toast({
                    title: "Error",
                    description: data.message,
                });
            }

            form.reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "Invalid request",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Let's get in touch!</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 pb-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-2 pb-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full px-2 pb-2">
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Write your message" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-2">
                            <Button type="submit" disabled={loading}>
                                {loading ? (
                                    <>
                                        Sending <SymbolIcon className="ml-2 h-4 w-4 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Submit{" "}
                                        <PaperPlaneIcon className="ml-2 h-4 w-4 transition-transform transform hover:scale-110" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
