'use client';
import Link from 'next/link';
import FlyoutLink from './FlyoutLink';
import ServiceContent from './MenuContent/ServiceContent';
import ToolsContent from './MenuContent/ToolsContent';
import About from './MenuContent/About';
import Usefulnfo from './MenuContent/Usefulnfo';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { HiEnvelope } from 'react-icons/hi2';

const Nav = () => {
	return (
		<div className=''>
			<div className='bg-neutral text-primary text-base py-2 font-bold flex justify-center'>
				{/* вставить icons рядом с контактами; продумать место для этого блока*/}
				<span>Свяжитесь с нами:</span>

				<a
					className='ml-6 flex items-center'
					href='mailto: gexpress@mail.ru'
				>
					<HiEnvelope className='mr-2' />
					gexpress@mail.ru
				</a>
				<div className='ml-6 flex items-center'>
					<HiDevicePhoneMobile className='mr-2' />
					<a
						className='flex'
						href='tel:515-500'
					>
						515-500
					</a>
					<span className='mx-2'>,</span>
					<a href='tel:555-300'>555-300</a>
				</div>
			</div>

			<div className='flex items-center px-32 justify-center py-4 bg-primary text-neutral '>
				<div className='flex w-[50%] items-center'>
					<div className='ml-6'>
						{/* <Link
							className='border-2 bg-[#faf3dd]  text-[#FF8C42] font-bold text-2xl uppercase px-6 py-6 rounded-[6rem]'
							href={'/'}
						>
							<span className='text-[#08415C] text-3xl border-2 border-[#08415C] rounded-full py-2 px-3 mr-2 '>
								G
							</span>
							Express
						</Link> */}
					</div>
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

				<div className='-justify-self-end ml-32 w-[50%]'>
					<ul className='flex  min-w-[400px] justify-around '>
						<li>
							<FlyoutLink
								href='#'
								FlyoutContent={ServiceContent}
							>
								<span className='text-neutral'>Услуги</span>
							</FlyoutLink>
						</li>
						<li>
							<FlyoutLink
								href='#'
								FlyoutContent={ToolsContent}
							>
								<span className='text-neutral'>Инструменты</span>
							</FlyoutLink>
						</li>
						<li>
							<FlyoutLink
								href='#'
								FlyoutContent={About}
							>
								<span className='text-neutral'>О компании</span>
							</FlyoutLink>
						</li>
						<li>
							<FlyoutLink
								href='#'
								FlyoutContent={Usefulnfo}
							>
								<span className='text-neutral'>Полезное</span>
							</FlyoutLink>
						</li>
					</ul>
				</div>
				<div className='shrink-0 mr-4 ml-2'>
					<Link
						className='border-2 p-4 rounded-lg '
						href={'/'}
					>
						Личный кабинет
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
