import { sendEmail } from '@/utils/nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface ContactProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export async function POST(req: NextRequest) {
	try {
		const data: ContactProps = await req.json();
		const { name, email, subject, message } = data;

		if (!name || !email || !subject || !message) {
			return NextResponse.json({ status: 404, message: 'Missing data' });
		}
		const emailContent = `
		<p>Contact entry from ${name},</p>
		<p>${email}</p>
		<br>
		<p>Message: ${message}</p>
	`;

		const emailResponse = await sendEmail({
			from: email,
			subject: subject,
			message: emailContent,
		});

		return NextResponse.json({ status: emailResponse.status, message: emailResponse.message });
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json({ status: 500, message: 'There was an error sending' });
	}
}
