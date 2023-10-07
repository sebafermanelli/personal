import Image from 'next/image';

export default function Home() {
	return (
		<main className="h-full w-full p-2">
			<section className="flex flex-col items-stretch justify-stretch">
				<div className="flex items-center justify-center">
					<Image src="/assets/icons/wrench.svg" alt="wrench" width={30} height={30} className="object-contain mx-2" />
					<span className="text-2xl sm:text-4xl text-gradient-primary">Under construction</span>
				</div>
			</section>
		</main>
	);
}
