import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex-1 h-full w-full p-2">
			<section className="flex flex-col items-stretch justify-stretch">
				<div className="text-xl sm:text-2xl my-2">
					<h2>Hi there! I'm</h2>
					<h1>
						<span className="text-2xl sm:text-4xl text-gradient-primary">Sebastian</span>,
					</h1>
					<h2>
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
					</h2>{' '}
					<h2>
						Welcome to my <span className="text-gradient-primary">Portfolio</span>!
					</h2>
				</div>

				<div className="text-l my-2">
					<span className="text-xl text-gradient-primary">About me</span>
					<p>
						I'm passionate about technology and innovation, constantly diving into new advancements in the tech world.
						When I'm not coding, I enjoy playing tennis, riding motorcycles, and travel around the world.
					</p>
					<br />
					<p>
						In my journey as a developer, I've gained experience working with various programming languages like
						JavaScript, TypeScript, and Java. These languages allow me to create high-quality and high-performance
						applications. My skill set also have proficiency in frontend and backend frameworks, libraries, and
						technologies, such as React.js, Next.js, Node.js, Express.js, and Spring, allowing me to accelerate
						development and elevate user experiences. Also, I acquired expertise in data management utilizing MySQL and
						MongoDB databases, with data querying tools like Sequelize, JPA, Hibernate, and Mongoose.
					</p>
					<br />
					<p>Feel free to explore my GitHub and connect with me to create innovative solutions!</p>
				</div>

				<div className="my-5 flex gap-14 items-center justify-center">
					<a
						href="/sebastian_fermanelli_resume.pdf"
						download="Sebastian Fermanelli Resume.pdf"
						className="bg-black text-white py-2 px-4 rounded-3xl border border-black hover:bg-transparent hover:text-black transition-all duration-500"
					>
						Resume
					</a>

					<a
						href="mailto:sebastianfermanelli@gmail.com"
						className="bg-black text-white py-2 px-4 rounded-3xl border border-black hover:bg-transparent hover:text-black transition-all duration-500"
					>
						Contact
					</a>
				</div>

				<div className="my-2 flex flex-col gap-4 items-center justify-center">
					<span className="text-xl text-gradient-primary">Technologies</span>
					<div className="flex gap-10">
						<Image
							src="/assets/icons/technologies/js.svg"
							alt="js logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>

						<Image
							src="/assets/icons/technologies/ts.svg"
							alt="ts logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>

						<Image
							src="/assets/icons/technologies/java.svg"
							alt="java logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>
					</div>

					<div className="flex gap-10">
						<Image
							src="/assets/icons/technologies/reactjs.svg"
							alt="reactjs logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>
					</div>

					<div className="flex gap-10">
						<Image
							src="/assets/icons/technologies/nodejs.svg"
							alt="nodejs logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>

						<Image
							src="/assets/icons/technologies/expressjs.svg"
							alt="expressjs logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>

						<Image
							src="/assets/icons/technologies/nextjs.svg"
							alt="nextjs logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>

						<Image
							src="/assets/icons/technologies/spring.svg"
							alt="spring logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>
					</div>

					<div className="flex gap-10">
						<Image
							src="/assets/icons/technologies/mysql.svg"
							alt="mysql logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>

						<Image
							src="/assets/icons/technologies/mongodb.svg"
							alt="mongodb logo"
							width={50}
							height={50}
							className="object-contain hover:mx-3 transition-all duration-500"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
