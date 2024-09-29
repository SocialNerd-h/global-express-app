'use client';

import AddressCard from './AddressCard';
import Logo from '../Logo';

const Footer = () => {
	return (
		<footer>
			<div className='flex justify-between px-32 h-[31.25rem] bg-primary py-10 items-center'>
				<Logo />
				<div className='flex items-center'>
					<div className=''>
						<AddressCard />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
