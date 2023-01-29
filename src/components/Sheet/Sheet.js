import SheetItem from '@/components/SheetItem/SheetItem';
export default function Sheet({ quotesData }) {
	return (
		<div>
			<div className='text-white text-[x-large] my-[40px]'>
				monkopppeople shitbag wall
			</div>
			{quotesData.map((quote, index) => (
				<SheetItem key={index} data={quote} />
			))}
		</div>
	);
}
