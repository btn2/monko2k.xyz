import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<meta name='description' content='shitbag sheet v2' />
				<title key='title'>Monko2k</title>
			</Head>
			<div className='text-white bg-black'>
				<h1 className='text-[200px] font-bold my-[134px]'>HELLO</h1>
				<Link href='/skins'>
					<u className='text-white underline'>
						you are probably here for these
					</u>
				</Link>
			</div>
		</div>
	);
}
