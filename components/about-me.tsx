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
                    I'm passionate about technology and innovation, constantly diving into new advancements in the tech
                    world. When I'm not coding, I enjoy playing tennis, riding motorcycles, and travel around the world.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    In my journey as a developer, I bring a versatile skill set to software development, having
                    experience with JavaScript, TypeScript, and Java to create high-quality applications. My expertise
                    extends to frontend and backend frameworks such as React.js, Next.js, Node.js, Express.js, Nest.js,
                    and Spring, enabling accelerated development and improved user experiences. In data management, I
                    have worked with SQL and NoSQL databases, utilizing tools such as Sequelize, TypeORM, JPA,
                    Hibernate, MyBatis, and Mongoose. Additionally, I have experience in automation testing for web,
                    API, and mobile applications, employing tools like TestNG, Selenium, Rest Assured, Appium, and the
                    Carina framework. This expertise ensures the quality and reliability of the applications
                    accelerating the development process by quickly identifying potential issues or errors. I am
                    constantly learning and improving my skills, and I am always excited to take on new challenges in
                    the world of software development.
                </p>
                <br />
                <p>Feel free to explore my GitHub and connect with me to create innovative solutions!</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={handleDownloadResume}>
                    Resume <PinBottomIcon className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
