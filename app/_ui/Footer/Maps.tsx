const Maps = (props) => {
	let displayVisOren = '';
	let displayVisOrsk = '';

	if (props.isCity == 'orsk') {
		displayVisOren = '[display:none]';
		displayVisOrsk = '';
	}

	if (props.isCity == 'oren') {
		displayVisOren = '';
		displayVisOrsk = '[display:none]';
	}

	return (
		<div>
			<div className={`w-[600px] ${displayVisOren} `}>
				<iframe
					className='w-full h-96'
					src='https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,%20%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%20%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3,%20%D1%88.%20%D0%A8%D0%B0%D1%80%D0%BB%D1%8B%D0%BA%D1%81%D0%BA%D0%BE%D0%B5,%201%D0%BA2+(Global%20Express)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
				></iframe>
			</div>
			{/* сделать вместо двух разных карт по Оренбургу одну отдаленную с двумя метками */}
			{/* 			<div className='w-[600px] [display:none]'>
				<iframe
					className='w-full h-96'
					src='https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,%20%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%20%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3,%20%D1%83%D0%BB.%20%D0%A2%D1%83%D1%80%D0%BA%D0%B5%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,%208%D0%90+(Global%20Express)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
				></iframe>
			</div> */}
			<div className={`w-[600px] ${displayVisOrsk}`}>
				<iframe
					className='w-full h-96'
					src='https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,%20%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%20%D0%9E%D1%80%D1%81%D0%BA,%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%9C%D0%B8%D1%80%D0%B0,%206+(Global%20Express)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
				></iframe>
			</div>
		</div>
	);
};

export default Maps;
