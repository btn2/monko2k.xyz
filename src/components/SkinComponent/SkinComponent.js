import Image from 'next/image';

export default function SkinComponent(props) {
	return (
		<div
			className='mt-[40px] mx-[20px] w-[440px] h-[300px] bg-[#020202] rounded-[8px] drop-shadow-[0_0_1px_rgb(255,255,255,0.4)] hover:drop-shadow-[1px_2px_4px_rgb(255,255,255,0.8)] hover:cursor-pointer'
			onClick={() => window.open(props.data.download, '_self')}
		>
			<div className='relative h-[45px]'>
				<div className='text-white float-left pl-[20px] pt-[12px] font-bold text-[20px]'>
					{props.data.name}
				</div>
				<div className='float-left pl-[8px] pt-[18px] text-[gray] text-[16px]'>
					{props.data.ver}
				</div>
				<div className='float-right pr-[20px] pt-[18px] text-[gray] text-[16px]'>
					{props.data.year}
				</div>
			</div>

			<Image
				className='relative w-[400px] h-[225px] rounded-[4px] pt-[12px] m-auto'
				src={`/preview/skin${props.data.id}.jpg`}
				alt={props.data.name}
			/>
		</div>
	);
}
