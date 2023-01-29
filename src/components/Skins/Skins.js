import SkinComponent from '@/components/SkinComponent/SkinComponent';
import skinsdata from '../../config/skins.json';

export default function Skins() {
	let skins = [];
	for (let i = 0; i < skinsdata.skins.length; i++) {
		skins.push(<SkinComponent key={i} data={skinsdata.skins[i]} />);
	}
	skins = skins.reverse();
	return (
		<div className='grid justify-center justify-items-center grid-cols-[repeat(auto-fit,500px)] m-[5%_10%_0_10%] pb-[10%] bg-black'>
			{skins}
		</div>
	);
}
