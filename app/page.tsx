import Image from 'next/image';
import airplane from './/public/airplane.webp';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center'>
			<div className='h-[700px] overflow-hidden'>
				{/* чтобы позиционировать img нужно задать ей самой height */}
				<Image
					className='h-full object-cover object-center'
					src={airplane}
					alt='airplane'
				/>
			</div>
		</main>
	);
}
