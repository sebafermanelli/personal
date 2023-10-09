import { sendEmail } from '@/utils/nodemailer';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	const { name, email, subject, message }: any = req.body;

	console.log({ name, email, subject, message });

	if (!name || !email || !subject || !message) {
		return new Response('Bad request, missing required fields', { status: 404 });
	}

	try {
		await sendEmail({
			from: email,
			subject: subject,
			message: `
        Contact entry from ${name}, ${email}
        
        ${message}
      `,
		})
			.then((response) => {
				console.log(response);
				return new Response('Email sent successfully', { status: 200 });
			})
			.catch((error) => {
				console.error('Error sending email:', error);
				return new Response('There was an error sending email', { status: 500 });
			});
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response('There was an error sending email', { status: 500 });
	}
}