export const Footer = () => {
	return (
		<>
			<hr className="border-1 mx-6 h-2 w-full border-gray-200" />

			<footer className="space-x mx-6 mb-32 flex w-full flex-row items-center justify-around">
				<div className="flex flex-col items-start">
					<header className="text-xl font-bold">Contact Deatils</header>
					<p>Winnepeg Tourism Office</p>
					<p>PO Box 100</p>
					<p>Winnepeg, MB</p>
					<p>A1A 1A1</p>
				</div>
				<div>
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
