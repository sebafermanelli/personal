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

export const sendEmail = async ({ from, subject, message }: EmailParams) => {
	try {
		const result: SentMessageInfo = await transporter.sendMail({
			from: from,
			to: process.env.EMAIL,
			subject: subject,
			html: message,
		});

		console.log({ result });

		return { status: 201, message: 'Email sent successfully' };
	} catch (error) {
		console.error('Error sending email:', error);
		return { status: 500, message: 'There was an error sending' };
	}
};
