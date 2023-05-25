import {useRouter} from 'next/router';

export const Card = (props: {
	name: string;
	location: string | null;
	phone: string | null;
	price: string;
	image: string;
}) => {
	const router = useRouter();

	return (
		<div className="flip-card relative rounded-lg">
			<div className="flip-card-inner">
				<div className="flip-card-front rounded-lg">
					<img className="h-full w-full rounded-lg" src={props.image} />
					<div className="absolute bottom-0 h-full w-full rounded-lg bg-black/40 p-5 font-bold text-white">
						<p
							className={`absolute ${
								props.phone ? 'bottom-12' : 'bottom-4'
							} left-2 text-lg`}
						>
							{props.name}
						</p>
						{props.phone && (
							<p className="absolute bottom-6 text-sm">{props.phone}</p>
						)}
					</div>
				</div>
				<div className="flip-card-back rounded-lg">
					<img className="h-full w-full rounded-lg" src={props.image} />
					<div className="absolute bottom-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black/80 p-5 font-bold text-white">
						<p>{props.name}</p>
						<p>{props.location}</p>
						<p>{props.phone}</p>
						<p>{props.price}</p>
						<button
							onClick={() => router.push('https://google.com')}
							className="mt-5 rounded-lg border border-white bg-black px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black "
						>
							{props.phone ? 'Reserve now' : 'Book now'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
