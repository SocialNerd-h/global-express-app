import Link from 'next/link';

const Logo = () => {
	return (
		<div className='flex items-center'>
			<Link
				href={'/'}
				className='flex flex-col  items-center ml-6 shrink-0'
			>
				<span className='uppercase text-3xl font-bold text-secondary'>
					global express
				</span>
				<span className='text-xl border-2 p-1 rounded-lg bg-neutral text-primary'>
					экспресс-доставка
				</span>
			</Link>
		</div>
	);
};

export default Logo;
