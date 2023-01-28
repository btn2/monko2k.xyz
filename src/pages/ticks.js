import Sheet from '@/components/Sheet/Sheet';
import styles from '@/styles/Ticks.module.css';
import Head from 'next/head';
import { getQuotes } from '@/lib/quotes';

export default function Ticks({ quotesData }) {
	return (
		<>
			<Head>
				<meta name='description' content='shitbag sheet v2' />
				<title>Shitbags</title>
			</Head>
			<div>
				<Sheet quotesData={quotesData} />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const quotesData = await getQuotes();
	return {
		props: {
			quotesData,
		},
		revalidate: 600,
	};
}
