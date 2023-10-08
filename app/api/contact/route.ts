import { sendEmail } from '@/utils/nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		return res.status(400).json({ message: 'Bad request, missing required fields' });
	}

	try {
		await sendEmail({
			from: email,
			subject: subject,
			message: `
        Contact entry from ${name}, ${email}
        
        ${message}
      `,
		});

		return res.status(200).json({ message: 'Email sent successfully' });
	} catch (error) {
		console.error('Error sending email:', error);
		return res.status(500).json({ message: 'There was an error sending the email' });
	}
}
