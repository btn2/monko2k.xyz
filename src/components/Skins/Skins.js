import SkinComponent from '@/components/SkinComponent/SkinComponent';
import skinsdata from '../../config/skins.json';
import styles from './Skins.module.css';

export default function Skins() {
	let skins = [];
	for (let i = 0; i < skinsdata.skins.length; i++) {
		skins.push(<SkinComponent key={i} data={skinsdata.skins[i]} />);
	}
	skins = skins.reverse();
	return <div className={styles.Skins}>{skins}</div>;
}
