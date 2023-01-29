import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta charset='utf-8' />
				<link rel='icon' href='logo.png' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<link rel='apple-touch-icon' href='logo.png' />
			</Head>
			<Navbar />
			<AnimatePresence initial={false} mode='sync'>
				<motion.div
					style={{ position: 'absolute', width: '100vw' }}
					layout='position'
					key={router.route}
					initial='initialState'
					animate='animateState'
					exit='exitState'
					transition={{
						duration: 0.2,
					}}
					variants={{
						initialState: () => {
							return {
								x: router.pathname !== '/' ? '100%' : '-100%',
							};
						},
						animateState: {
							x: 0,
						},
						exitState: () => {
							return {
								x: router.pathname !== '/' ? '100%' : '-100%',
							};
						},
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</>
	);
}
