import Link from 'next/link';

const ServiceContent = () => {
	return (
		<div className='w-64  bg-white p-6 shadow-xl'>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>экспресс-почта</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>доставка посылок</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>доставка грузов</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>доп. услуги</Link>
			</div>
		</div>
	);
};

export default ServiceContent;
