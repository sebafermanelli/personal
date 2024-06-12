import nodemailer, { SentMessageInfo } from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

interface EmailParams {
    subject: string;
    message: string;
}

export const sendEmail = async ({ subject, message }: EmailParams) => {
    try {
        const result: SentMessageInfo = await transporter.sendMail({
            from: process.env.EMAIL,
            to: "sebastianfermanelli@gmail.com",
            subject: subject,
            html: message,
        });

        return { status: 201, message: "Message sent!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { status: 500, message: "Invalid request" };
    }
};
