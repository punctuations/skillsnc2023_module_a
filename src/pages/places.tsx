import {Card} from '../components/card';
import {Footer} from '../components/footer';
import {Main} from '../components/main';
import {Nav} from '../components/nav';

export default function Places() {
	const hotels = [
		{
			name: 'Best Western Plus Pembina Inn & Suites',
			price: '$147/night',
			image: '/hotels/best-western-plus-pembing-inn.jpg',
		},
		{
			name: 'Hyatt House Winnipeg',
			price: '$199/night',
			image: '/hotels/hyatt-house-winnipeg.jpg',
		},
		{
			name: 'Victoria Inn Hotel & Convention Centre',
			price: '$203/night',
			image: '/hotels/victoria-inn-hotel.jpg',
		},
		{
			name: 'Fort Garry Hotel, Spa and Conference Centre',
			price: '$180/night',
			image: '/hotels/fort-garry-hotel.jpg',
		},
		{
			name: 'Best Western Premier Winnipeg East',
			price: '$154/night',
			image: '/hotels/best-western-premier.jpg',
		},
		{
			name: 'Super 8 by Wyndham Winnipeg East MB',
			price: '$144/night',
			image: '/hotels/super-8-by-wyndham-winnipeg-east-mb.jpg',
		},
	];

	return (
		<Main>
			<Nav />
			<section className="mx-6 grid place-content-center gap-4 pt-32 sm:grid-cols-1 md:grid-cols-3">
				{hotels.map(hotel => {
					return (
						<Card
							name={hotel.name}
							location={null}
							phone={null}
							price={hotel.price}
							image={hotel.image}
						/>
					);
				})}
			</section>

			<Footer />
		</Main>
	);
}
