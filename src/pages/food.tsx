import {Card} from '../components/card';
import {Footer} from '../components/footer';
import {Main} from '../components/main';
import {Nav} from '../components/nav';

export default function Food() {
	const food = [
		{
			name: '529 Wellington',
			price: '$$$$',
			location: '33 Elm Street',
			phone: '(204) 555-3214',
			image: '/food/529-wellington.jpg',
		},
		{
			name: 'Chop Steakhouse & Bar',
			price: '$$$',
			location: '101 Cooper Crescent',
			phone: '(204) 555-8821',
			image: '/food/chop-steakhouse.jpg',
		},
		{
			name: "Rae & Jerry's Steak House",
			price: '$$$$',
			location: '98 Admiral Place',
			phone: '(204) 555-2912',
			image: '/food/rae-jerrys-steak-house.jpg',
		},
		{
			name: 'Resto Gare Bistro',
			price: '$$$$$',
			location: '122 Elizabeth Ave',
			phone: '(204) 555-3434',
			image: '/food/resto-gare-bistro.jpg',
		},
		{
			name: 'Enoteca',
			price: '$$$',
			location: '22 Empire Ave',
			phone: '(204) 555-4431',
			image: '/food/enoteca.jpg',
		},
		{
			name: "Hy's Steakhouse Winnipeg",
			price: '$$$',
			location: '1441 Grenfell Ave',
			phone: '(204) 555-0912',
			image: '/food/hys-steakhouse-winnipeg.jpg',
		},
	];

	return (
		<Main>
			<Nav />
			<section className="mx-6 grid place-content-center gap-4 pt-32 sm:grid-cols-1 md:grid-cols-3">
				{food.map(food => {
					return (
						<Card
							name={food.name}
							location={food.location}
							phone={food.phone}
							price={food.price}
							image={food.image}
						/>
					);
				})}
			</section>

			<Footer />
		</Main>
	);
}
