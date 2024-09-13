import Link from 'next/link';

const ToolsContent = () => {
	return (
		<div className='w-64 bg-white p-6 shadow-xl'>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>вызов курьера</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>отследить заказ</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>рассчитать стоимость</Link>
			</div>
			<div className='mb-2 block text-sm hover:underline'>
				<Link href={'/'}>определить сроки</Link>
			</div>
		</div>
	);
};

export default ToolsContent;
