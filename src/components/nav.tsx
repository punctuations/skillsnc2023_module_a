import Link from 'next/link';

import {Search} from 'react-feather';

export const Nav = () => {
	return (
		<>
			<nav className="fixed top-0 z-20 inline-flex h-16 w-full flex-row items-center justify-around bg-white font-semibold text-black">
				<img className="h-4 w-4" src="temp_logo.png" />
				<Link href="/">Home</Link>
				<Link href="/places">Places to stay</Link>
				<Link href="/food">Restaurants</Link>
				<div>
					<div className="relative mt-2 rounded-md">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<span className="items-center">
								<Search />
							</span>
						</div>
						<input
							type="text"
							name="price"
							id="price"
							className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-12 pr-20 placeholder:text-gray-700 focus:border-0 focus:ring-0 sm:text-sm sm:leading-6"
							placeholder="The Forks"
						/>
					</div>
				</div>
			</nav>
		</>
	);
};
