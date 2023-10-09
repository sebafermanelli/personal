'use client';

import ErrorMessage from '@/components/ErrorMessage';
import SuccessMessage from '@/components/SuccessMessage';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Home() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitted, setSubmitted] = useState(false);
	const [isError, setError] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const data = {
			name: name,
			email: email,
			subject: subject,
			message: message,
		};

		try {
			await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					const result = response.json();
					result
						.then((data) => {
							if (data.status === 201) {
								setSubmitted(true);
							} else {
								setError(true);
							}
							console.log(data.message);
							setAlertMessage(data.message);
						})
						.catch((error) => {
							setError(true);
							setAlertMessage('There was an error sending');
						});
				})
				.catch((error) => {
					setError(true);
					setAlertMessage('There was an error sending');
				});
		} catch (error) {
			setError(true);
			setAlertMessage('There was an error sending');
		}
	};

	return isSubmitted ? (
		<main className="flex-1 h-full w-full p-2">
			<div className="flex-center flex-col gap-5">
				<SuccessMessage message={alertMessage} />
				<Link
					href="/contact"
					onClick={() => {
						setSubmitted(false);
						setError(false);
						setName('');
						setEmail('');
						setSubject('');
						setMessage('');
					}}
				>
					<button className="btn-black">Go back</button>
				</Link>
			</div>
		</main>
	) : (
		<main className="flex-1 h-full w-full p-2">
			<section className="flex-center flex-col">
				<span className="text-2xl sm:text-4xl text-gradient-black">Contact me</span>

				<form className="flex flex-col w-full md:w-1/2" onSubmit={handleSubmit}>
					<label htmlFor="name" className="label">
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder=""
						className="input"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>

					<label htmlFor="email" className="label">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder=""
						className="input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<label htmlFor="subject" className="label">
						Subject
					</label>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder=""
						className="input"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required
					/>

					<label htmlFor="message" className="label">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						placeholder=""
						className="input"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>

					<div className="flex justify-end mt-3">
						<button type="submit" className="btn-black">
							Send
						</button>
					</div>
				</form>

				{isError && <ErrorMessage message={alertMessage} />}
			</section>
		</main>
	);
}
