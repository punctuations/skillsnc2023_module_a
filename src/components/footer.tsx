export const Footer = () => {
	return (
		<>
			<hr className="border-1 mx-6 h-2 w-full border-gray-200" />

			<footer className="space-x mx-6 mb-32 grid w-full place-content-center gap-x-6 sm:grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col items-center">
					<header className="text-xl font-bold">Contact Deatils</header>
					<p>Winnepeg Tourism Office</p>
					<p>PO Box 100</p>
					<p>Winnepeg, MB</p>
					<p>A1A 1A1</p>
				</div>
				<div className="flex flex-col items-center">
					<header className="text-xl font-bold">Socials</header>
					<p>
						Instagram:{' '}
						<a
							className="underline"
							href="https://instagram.com/tourismwinnepeg"
						>
							@tourismwinnepeg
						</a>
					</p>
					<p>
						Twitter:{' '}
						<a className="underline" href="https://twitter.com/tourismwinnepeg">
							@tourismwinnepeg
						</a>
					</p>
					<p>
						Youtube:{' '}
						<a
							className="underline"
							href="https://youtube.com/officialwinnepegtourism"
						>
							@officialwinnepegtourism
						</a>
					</p>
				</div>
			</footer>
		</>
	);
};
