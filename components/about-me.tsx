"use client";

import { PinBottomIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function AboutMe() {
    function handleDownloadResume() {
        const downloadLink = document.createElement("a");
        downloadLink.href = "/assets/resume.pdf";
        downloadLink.download = "sebastian_fermanelli_resume.pdf";
        downloadLink.click();
    }

    return (
        <Card className="mb-4 text-justify">
            <CardHeader>
                <CardTitle>About me</CardTitle>
                <CardDescription>
                    I love technology and new ideas, always checking out what's new. When I'm not coding, I enjoy
                    playing tennis, riding motorcycles, and traveling.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    As a developer, I bring a versatile skill set to the table, using JavaScript, TypeScript, and Java
                    to build top-notch applications. I'm familiar with frontend and backend frameworks like React.js,
                    Next.js, Node.js, Express.js, Nest.js, and Spring, making development faster and user experiences
                    better. I handle data with SQL and NoSQL databases, using tools like Sequelize, TypeORM, JPA,
                    Hibernate, MyBatis, and Mongoose. I'm always learning and ready for new challenges in the software
                    world.
                </p>
            </CardContent>
            <CardFooter className="flex flex-wrap justify-between -mx-2">
                <div className="w-full md:w-3/4  px-2 pb-2">
                    <p>Check out my resume and let's team up for creative solutions!</p>
                </div>

                <div className="w-full md:w-1/4  px-2 pb-2 flex justify-end">
                    <Button onClick={handleDownloadResume}>
                        Resume <PinBottomIcon className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
