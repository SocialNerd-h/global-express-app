'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FooterTable from './FooterTable';
import { useState } from 'react';
import Maps from './Maps';

const cities = {
	orenburg: {
		telNum: {
			primary: '8-3532-515-500',
			secondary: '8-3532-555-300',
		},
		address: {
			primary: 'ш. Шарлыкское, 1к2',
			secondary: 'ул. Туркестанская, 8А',
		},
		hours: '9:00 - 19:00',
		mail: 'gexpress@mail.ru',
	},
	orsk: {
		telNum: { primary: 'TBA.' },
		address: { primary: 'просп. Мира, 6' },
		hours: '9:00 - 18:30',
		mail: 'TBA.',
	},
};

const AddressCard = () => {
	const [oren, setOren] = useState(true);
	const [orsk, setOrsk] = useState(false);

	const isCity = () => {
		if (oren) {
			return 'oren';
		}
		if (orsk) {
			return 'orsk';
		}
	};

	return (
		<div className='flex'>
			<div className='bg-neutral border-r-2 h-96 w-[600px] p-4 flex items-center justify-center'>
				<Tabs
					defaultValue='account'
					className='w-[500px] border-2 border-primary/50 py-8 flex flex-col items-center'
				>
					{/* почему при изменении value пропадает TabsContent при первом рендере? */}
					<TabsList>
						<TabsTrigger
							onClick={() => {
								setOren(true);
								setOrsk(false);
							}}
							value='account'
						>
							Оренбург
						</TabsTrigger>
						<TabsTrigger
							onClick={() => {
								setOrsk(true);
								setOren(false);
							}}
							value='password'
						>
							Орск
						</TabsTrigger>
					</TabsList>
					<TabsContent value='account'>
						<FooterTable
							isCity={isCity()}
							cities={cities}
						/>
					</TabsContent>
					<TabsContent value='password'>
						<FooterTable
							isCity={isCity()}
							cities={cities}
						/>
					</TabsContent>
				</Tabs>
			</div>
			<Maps isCity={isCity()} />
		</div>
	);
};

export default AddressCard;
