import Link from 'next/link';

const Usefulnfo = () => {
	return (
		<div className='w-64 bg-white p-6 shadow-xl'>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>тарифы</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>как рассчитать объемный вес</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>запрещено к пересылке</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>требования к упаковке грузов</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>документы</Link>
			</div>
		</div>
	);
};

export default Usefulnfo;
