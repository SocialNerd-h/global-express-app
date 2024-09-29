'use client';
import Link from 'next/link';
import FlyoutLink from './FlyoutLink';
import ServiceContent from './MenuContent/ServiceContent';
import ToolsContent from './MenuContent/ToolsContent';
import About from './MenuContent/About';
import Usefulnfo from './MenuContent/Usefulnfo';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { HiEnvelope } from 'react-icons/hi2';
import Logo from '../Logo';

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

			<div className='flex items-center px-32 justify-between py-4 bg-primary text-neutral '>
				<Logo />
				<div className='flex ml-64'>
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
		</div>
	);
};

export default Nav;
