import Image from 'next/image';

const TechnologiesImg = () => {
	return (
		<div className="flex-center flex-wrap gap-6">
			{/* Languages */}
			<Image
				src="/assets/icons/technologies/js.svg"
				alt="js logo"
				width={50}
				height={50}
				className="object-contain"
			/>{' '}
			<Image src="/assets/icons/technologies/ts.svg" alt="ts logo" width={50} height={50} className="object-contain" />{' '}
			<Image
				src="/assets/icons/technologies/java.svg"
				alt="java logo"
				width={50}
				height={50}
				className="object-contain"
			/>
			{/* Frontend technologies */}
			<Image
				src="/assets/icons/technologies/reactjs.svg"
				alt="reactjs logo"
				width={50}
				height={50}
				className="object-contain"
			/>{' '}
			<Image
				src="/assets/icons/technologies/nextjs.svg"
				alt="nextjs logo"
				width={50}
				height={50}
				className="object-contain"
			/>
			{/* Backend technologies */}
			<Image
				src="/assets/icons/technologies/nodejs.svg"
				alt="nodejs logo"
				width={50}
				height={50}
				className="object-contain"
			/>{' '}
			<Image
				src="/assets/icons/technologies/expressjs.svg"
				alt="expressjs logo"
				width={50}
				height={50}
				className="object-contain"
			/>{' '}
			<Image
				src="/assets/icons/technologies/spring.svg"
				alt="spring logo"
				width={50}
				height={50}
				className="object-contain"
			/>
			{/* Data querying technologies */}
			<Image
				src="/assets/icons/technologies/mysql.svg"
				alt="mysql logo"
				width={50}
				height={50}
				className="object-contain"
			/>{' '}
			<Image
				src="/assets/icons/technologies/mongodb.svg"
				alt="mongodb logo"
				width={50}
				height={50}
				className="object-contain"
			/>
		</div>
	);
};

export default TechnologiesImg;
