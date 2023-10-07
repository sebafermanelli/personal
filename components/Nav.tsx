'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
	const currentPath = usePathname();

	return (
		<nav>
			<section className="flex items-center justify-center p-3">
				<Image
					src="/assets/images/logo.svg"
					alt="sebastian logo"
					width={40}
					height={40}
					className="object-contain hover:rotate-180 transition-all duration-1000"
				/>
			</section>
			<section className="flex items-center justify-center p-3">
				<Link href="/">
					<div
						className={
							currentPath === '/'
								? 'mx-3 border-b border-current'
								: 'mx-3 text-gray-500 hover:text-current border-b border-transparent transition-all duration-500'
						}
					>
						About
					</div>
				</Link>
				<Link href="/projects">
					<div
						className={
							currentPath === '/projects'
								? 'mx-3 border-b border-current'
								: 'mx-3 text-gray-500 hover:text-current border-b border-transparent transition-all duration-500'
						}
					>
						Projects
					</div>
				</Link>
				<Link href="/contact">
					<div
						className={
							currentPath === '/contact'
								? 'mx-3 border-b border-current'
								: 'mx-3 text-gray-500 hover:text-current border-b border-transparent transition-all duration-500'
						}
					>
						Contact
					</div>
				</Link>
			</section>
		</nav>
	);
};

export default Nav;
