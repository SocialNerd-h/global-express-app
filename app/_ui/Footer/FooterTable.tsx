import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableRow,
} from '@/components/ui/table';

const FooterTable = (props) => {
	let city = props.cities.orenburg;
	if (props.isCity == 'orsk') {
		city = props.cities.orsk;
	}

	if (props.isCity == 'oren') {
		city = props.cities.orenburg;
	}

	return (
		<div className=''>
			<Table className='w-[450px]'>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>Адрес</TableCell>
						<TableCell>{city.address.primary}</TableCell>
						<TableCell>{city.address.secondary}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>телефон</TableCell>
						<TableCell>{city.telNum.primary}</TableCell>
						<TableCell>{city.telNum.secondary}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>время работы</TableCell>
						<TableCell>{city.hours}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>почта</TableCell>
						<TableCell>{city.mail}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default FooterTable;
