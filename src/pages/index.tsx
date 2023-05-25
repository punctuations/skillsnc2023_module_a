/* required for carousel */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
/* end of required */

import {useRouter} from 'next/router';

import {Main} from '../components/main';
import {Nav} from '../components/nav';
import {Footer} from '../components/footer';

export default function Home() {
	const router = useRouter();

	const events = [
		{name: 'Skills Canada Day 1', date: new Date('May 25 2023')},
		{name: 'Skills Canada Day 2', date: new Date('May 26 2023')},
		{name: 'Skills Canda Closing Ceromonies', date: new Date('May 27 2023')},
	];

	const provinces = [
		'NL',
		'PE',
		'NS',
		'NB',
		'QC',
		'ON',
		'MB',
		'SK',
		'AB',
		'BC',
		'YT',
		'NT',
		'NU',
	];
	return (
		<Main>
			<Nav />
			<section className="mx-6 flex flex-col items-center justify-center space-y-12">
				<div className="relative">
					<Carousel className="mx-6 mt-36" showThumbs={false}>
						<div>
							<img
								className="rounded-lg"
								src="banners/winnipeg-exchange-district-book.jpg"
							/>
						</div>
						<div>
							<img className="rounded-lg" src="banners/winnepeg-hero.jpg" />
						</div>

						<div>
							<img
								className="rounded-lg"
								src="banners/winnipeg-skyline-canada.jpg"
							/>
						</div>
					</Carousel>
					<button
						onClick={() => router.push('/places')}
						className="absolute bottom-2 right-8 z-10 rounded-lg border-2 border-white bg-black px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black"
					>
						Explore Winnepeg &rarr;
					</button>
				</div>
				<header className="flex flex-col justify-center text-center">
					<h3 className="text-xl font-bold">About Winnepeg</h3>
					<p>
						Winnipeg is the capital and largest city of the province of Manitoba
						in Canada. It is centred on the confluence of the Red and
						Assiniboine rivers, near the longitudinal centre of North America.
						As of 2021, Winnipeg had a city population of 749,607 and a
						metropolitan population of 834,678, making it Canada's sixth-largest
						city and eighth-largest metropolitan area.
					</p>
				</header>
			</section>

			<section className="mx-12 mt-6 flex w-full flex-row justify-around space-x-6">
				<article className="flex flex-col items-center justify-center space-y-5">
					<header className="text-lg font-bold">Upcoming events</header>
					{events.map(e => {
						return (
							<div>
								{e.date.toDateString()}: {e.name}
							</div>
						);
					})}
				</article>
				<article className="flex flex-col items-center justify-center">
					<header className="text-lg font-bold">Newsletter</header>
					<form className="flex flex-col items-center space-y-2">
						<span className="flex flex-row items-center space-x-2">
							<span>Name: </span>
							<div className="relative mt-2 rounded-md shadow-sm">
								<input
									className="ml-1 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
									type="text"
								></input>
								<div className="absolute inset-y-0 right-0 flex items-center">
									<label htmlFor="province" className="sr-only">
										Province
									</label>
									<select
										id="province"
										name="province"
										className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
									>
										{provinces.map(p => {
											return <option>{p}</option>;
										})}
									</select>
								</div>
							</div>
						</span>
						<span className="flex flex-row items-center">
							<span>Email: </span>
							<input
								className="ml-3.5 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
								type="email"
							></input>
						</span>
					</form>
				</article>
			</section>

			<Footer />
		</Main>
	);
}
