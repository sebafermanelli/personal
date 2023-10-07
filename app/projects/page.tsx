import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex-1 h-full w-full p-2">
			<section className="flex flex-col items-center justify-center">
				<span className="text-2xl sm:text-4xl text-gradient-primary">My projects</span>

				<div className="flex flex-wrap gap-10 items-center justify-center mt-5">
					{/* <div className='project'>
						<Image src="/assets/images/project1.png" alt="project 1" width={320} height={180} className="object-contain rounded-t-xl" />
					<span className="text-xl sm:text-2xl text-gradient-primary my-1">Project name</span>
					</div> */}
				</div>
			</section>
		</main>
	);
}
