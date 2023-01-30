import SkinComponent from '@/components/SkinComponent/SkinComponent';
import skinsdata from '../../config/skins.json';

export default function Skins() {
	return (
		<div className='grid justify-center justify-items-center grid-cols-[repeat(auto-fit,500px)] m-[5%_10%_0_10%] pb-[10%] bg-black'>
			{skinsdata.skins.reverse().map((data, i) => (
				<SkinComponent key={i} data={data} />
			))}
		</div>
	);
}
