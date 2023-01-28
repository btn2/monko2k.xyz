import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import twitter from '@/../public/hp_icons/twitter.png';
import twitch from '@/../public/hp_icons/twitch.png';
import youtube from '@/../public/hp_icons/youtube.png';
import github from '@/../public/hp_icons/github.png';
import osu from '@/../public/hp_icons/osu.png';

import styles from './Navbar.module.css';

export default function Navbar() {
	const pathname = useRouter().pathname;
	function checkurl(event, target) {
		if (pathname === target) event.preventDefault();
	}

	const HomeLink = () => (
		<Link href='/' className={styles.NavbarButton} onClick={(e) => checkurl(e, '/')}>
			Home
		</Link>
	);

	const SkinLink = () => (
		<Link
			href='/skins'
			className={styles.NavbarButton}
			onClick={(e) => checkurl(e, '/skins')}
		>
			Skins
		</Link>
	);

	return (
		<div className={styles.Navbar}>
			<div className={styles.NavbarContainer}>
				<div className={styles.NavbarBadge}>Monko2k</div>
				<HomeLink />
				<SkinLink />
			</div>
			<div className={styles.NavbarContainer}>
				<a href='https://twitter.com/Monko2k' className={styles.a}>
					<Image src={twitter} className={styles.NavbarIcon} alt='Twitter' />
				</a>
				<a href='https://www.twitch.tv/monko2k' className={styles.a}>
					<Image src={twitch} className={styles.NavbarIcon} alt='Twitch' />
				</a>
				<a href='https://www.youtube.com/c/monko2k' className={styles.a}>
					<Image src={youtube} className={styles.NavbarIcon} alt='youtube' />
				</a>
				<a href='https://github.com/Monko2k' className={styles.a}>
					<Image src={github} className={styles.NavbarIcon} alt='github' />
				</a>
				<a href='https://osu.ppy.sh/users/4852013' className={styles.a}>
					<Image src={osu} className={styles.NavbarIcon} alt='osu' />
				</a>
			</div>
		</div>
	);
}
