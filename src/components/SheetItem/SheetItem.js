export default function SheetItem({ data }) {
	const time = new Date(data.time);
	const timestring = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;

	return (
		<div className='max-w-[600px] flex flex-row mt-[10px] bg-[#36393f] p-[5px_10px_5px_10px] rounded-[5px] text-white'>
			<div className='text-left text-[small] w-[80px]'>{data.nickname}</div>
			<div className='w-[calc(100%-160px)] text-center text-[medium]'>
				{data.quote}
			</div>
			<div className='text-right text-[x-small] w-[80px]'>{timestring}</div>
		</div>
	);
}
