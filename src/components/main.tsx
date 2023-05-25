import {ReactNode} from 'react';

export const Main = (props: {children: ReactNode}) => {
	return (
		<main className="absolute flex h-full w-full flex-col items-center justify-center space-y-6">
			{props.children}
		</main>
	);
};
