import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="flex-center p-3">
			<a
				href="https://www.linkedin.com/in/sebastianfermanelli/"
				className="mx-1 hover:mx-3 transition-all duration-500"
				target="_blank"
			>
				<Image src="/assets/icons/linkedin.svg" alt="github logo" width={20} height={20} className="object-contain" />
			</a>

			<a
				href="https://github.com/sebafermanelli"
				className="mx-1 hover:mx-3 transition-all duration-500"
				target="_blank"
			>
				<Image src="/assets/icons/github.svg" alt="github logo" width={20} height={20} className="object-contain" />
			</a>

			<a
				href="https://instagram.com/sebafermanelli"
				className="mx-1 hover:mx-3 transition-all duration-500"
				target="_blank"
			>
				<Image src="/assets/icons/instagram.svg" alt="github logo" width={20} height={20} className="object-contain" />
			</a>
		</footer>
	);
};

export default Footer;
