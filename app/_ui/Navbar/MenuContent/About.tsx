import Link from 'next/link';

const About = () => {
	return (
		<div className='w-64  bg-white p-6 shadow-xl'>
			<div className='mb-2 border-b-2 border-primary/10 leading-6 block text-sm hover:underline'>
				<Link href={'/'}>общая информация</Link>
			</div>
			<div className='mb-2 border-b-2 border-primary/10 leading-6 block text-sm hover:underline'>
				<Link href={'/'}>контакты</Link>
			</div>
			<div className='mb-2 border-b-2 border-primary/10 leading-6 block text-sm hover:underline'>
				<Link href={'/'}>стандартные условия</Link>
			</div>
			<div className=' border-b-2 border-primary/10 leading-6 block text-sm hover:underline'>
				<Link href={'/'}>вакансии</Link>
			</div>
		</div>
	);
};

export default About;
