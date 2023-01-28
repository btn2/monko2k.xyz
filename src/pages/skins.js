import Skins from '@/components/Skins/Skins';
import Head from 'next/head';

export default function SkinPage() {
	return (
		<>
			<Head>
				<meta name='description' content='Monko2k skins' />
				<title>Skins</title>
			</Head>
			<Skins />;
		</>
	);
}
