'use client';

import AboutMe from '@/components/AboutMe';
import TechnologiesImg from '@/components/TechnologiesImg';
import Image from 'next/image';

export default function Home() {
	const handleDownloadResume = () => {
		const downloadLink = document.createElement('a');
		downloadLink.href = '/assets/resume.pdf';
		downloadLink.download = 'sebastian_fermanelli_resume.pdf';
		downloadLink.click();
	};

	const handleContactButton = () => {
		const contactLink = document.createElement('a');
		contactLink.href = '/contact';
		contactLink.click();
	};

	return (
		<main className="flex-1 h-full w-full p-2">
			<section className="flex flex-col text-justify">
				<div className="text-xl sm:text-2xl my-2">
					<span>Hi there! I'm</span>
					<h1>
						<span className="text-2xl sm:text-4xl text-gradient-black">Sebastian</span>,
					</h1>
					<span>
						a Systems Engineering student and a Full Stack developer from
						<div className="flex">
							Argentina
							<Image
								src="/assets/images/argentina.svg"
								alt="argentina flag"
								width={30}
								height={30}
								className="object-contain mx-2"
							/>
						</div>
					</span>
				</div>

				<AboutMe />

				<div className="flex-center gap-14 my-5">
					<button className="btn-black" onClick={handleDownloadResume}>
						Resume
					</button>

					<button className="btn-black" onClick={handleContactButton}>
						Contact
					</button>
				</div>

				<div className="flex-center flex-col gap-2">
					<span className="text-xl text-gradient-black">Technologies</span>
					<TechnologiesImg />
				</div>
			</section>
		</main>
	);
}
