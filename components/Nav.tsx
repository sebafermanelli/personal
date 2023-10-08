'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
	const currentPath = usePathname();

	return (
		<nav>
			<section className="flex-center p-3">
				<Link href="/">
					<Image
						src="/assets/images/logo.svg"
						alt="sebastian logo"
						width={40}
						height={40}
						className="object-contain hover:rotate-180 transition-all duration-1000"
					/>
				</Link>
			</section>

			<section className="flex-center p-3">
				<Link href="/">
					<div className={currentPath === '/' ? 'nav-item-active' : 'nav-item'}>About</div>
				</Link>
				<Link href="/projects">
					<div className={currentPath === '/projects' ? 'nav-item-active' : 'nav-item'}>Projects</div>
				</Link>
				<Link href="/contact">
					<div className={currentPath === '/contact' ? 'nav-item-active' : 'nav-item'}>Contact</div>
				</Link>
			</section>
		</nav>
	);
};

export default Nav;
