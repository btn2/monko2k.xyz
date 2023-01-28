import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<meta name='description' content='shitbag sheet v2' />
				<title key='title'>Monko2k</title>
			</Head>
			<div className={styles.Home}>
				<h1 className={styles.h1}>HELLO</h1>
				<Link href='/skins'>
					<u className={styles.p}>you are probably here for these</u>
				</Link>
			</div>
		</div>
	);
}
