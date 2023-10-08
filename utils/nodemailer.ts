import nodemailer, { SentMessageInfo } from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASSWORD,
	},
});

interface EmailParams {
	from: string;
	subject: string;
	message: string;
}

interface EmailResponse {
	success: boolean;
	message?: string;
	error?: string;
}

export const sendEmail = async ({ from, subject, message }: EmailParams): Promise<EmailResponse> => {
	try {
		const result: SentMessageInfo = await transporter.sendMail({
			from: from,
			to: process.env.EMAIL,
			subject: subject,
			html: message,
		});

		console.log({ result });

		return { success: true, message: 'Email sent successfully' };
	} catch (error) {
		console.error('Error sending email:', error);
		return { success: false, error: 'There was an error sending the email' };
	}
};
