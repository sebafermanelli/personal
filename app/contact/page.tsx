'use client';

import Button from '@/components/Button';
import ErrorMessage from '@/components/ErrorMessage';
import SuccessMessage from '@/components/SuccessMessage';

export default function Home() {
	const handleSubmitContact = () => {
		// logica para enviar el email y conectar con la api
	};

	return (
		<main className="flex-1 h-full w-full p-2">
			<section className="flex flex-col items-center justify-center">
				<span className="text-2xl sm:text-4xl text-gradient-primary">Contact me</span>

				<form className="flex flex-col w-full md:w-1/2" aria-required>
					<label htmlFor="name" className="text-l mt-3 ms-2">
						Name
					</label>
					<input type="text" name="name" id="name" placeholder="" className="input" required />

					<label htmlFor="email" className="text-l mt-3 ms-2">
						Email
					</label>
					<input type="email" name="email" id="email" placeholder="" className="input" required />

					<label htmlFor="subject" className="text-l mt-3 ms-2">
						Subject
					</label>
					<input type="text" name="subject" id="subject" placeholder="" className="input" required />

					<label htmlFor="message" className="text-l mt-3 ms-2">
						Message
					</label>
					<textarea name="message" id="message" placeholder="" className="input" required />

					<div className="flex justify-end mt-3">
						<Button text="Send" onClick={handleSubmitContact} />
					</div>
				</form>

				{/* <SuccessMessage message="I received your email" />
				<ErrorMessage message="An error occurred" /> */}
			</section>
		</main>
	);
}
