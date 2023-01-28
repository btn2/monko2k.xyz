import styles from './SkinComponent.module.css';

export default function SkinComponent(props) {
	return (
		<div
			className={styles.SkinComponent}
			onClick={() => window.open(props.data.download, '_self')}
		>
			<div className={styles.SkinHeader}>
				<div className={styles.SkinName}>{props.data.name}</div>
				<div className={styles.SkinVersion}>{props.data.ver}</div>
				<div className={styles.SkinYear}>{props.data.year}</div>
			</div>

			<img
				className={styles.SkinPreview}
				src={`/preview/skin${props.data.id}.jpg`}
				alt={props.data.name}
			/>
		</div>
	);
}
