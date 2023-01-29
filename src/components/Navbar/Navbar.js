import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import twitter from '@/../public/hp_icons/twitter.png';
import twitch from '@/../public/hp_icons/twitch.png';
import youtube from '@/../public/hp_icons/youtube.png';
import github from '@/../public/hp_icons/github.png';
import osu from '@/../public/hp_icons/osu.png';

export default function Navbar() {
	const pathname = useRouter().pathname;
	function checkurl(event, target) {
		if (pathname === target) event.preventDefault();
	}

	const HomeLink = () => (
		<Link
			href='/'
			className='pr-[8px] mx-[8px] mt-auto h-[25px] leading-[20px] rounded-[5px] duration-[0.3] text-[20px]'
			onClick={(e) => checkurl(e, '/')}
		>
			Home
		</Link>
	);

	const SkinLink = () => (
		<Link
			href='/skins'
			className='pr-[8px] mx-[8px] mt-auto h-[25px] leading-[20px] rounded-[5px] duration-[0.3] text-[20px]'
			onClick={(e) => checkurl(e, '/skins')}
		>
			Skins
		</Link>
	);

	const NavBarIcon = ({ href, image, alt }) => {
		return (
			<a href={href} className='text-inherit'>
				<Image
					src={image}
					className='pt-[16px] pl-[14px] h-[25px] w-[25px] opacity-[.67] hover:opacity-100'
					alt={alt}
				/>
			</a>
		);
	};

	return (
		<div className='w-[96vw] px-[2vw] h-[45px] flex items-center justify-between text-[#aaaaaa]'>
			<div className='flex flex-row'>
				<div className='font-bold text-white text-[30px] pr-[40px]'>Monko2k</div>
				<HomeLink />
				<SkinLink />
			</div>
			<div className='flex flex-row'>
				<NavBarIcon
					href='https://twitter.com/Monko2k'
					image={twitter}
					alt='Twitter'
				/>

				<NavBarIcon
					href='https://www.twitch.tv/monko2k'
					image={twitch}
					alt='Twitch'
				/>
				<NavBarIcon
					href='https://www.youtube.com/c/monko2k'
					image={youtube}
					alt='youtube'
				/>
				<NavBarIcon
					href='https://github.com/Monko2k'
					image={github}
					alt='github'
				/>
				<NavBarIcon
					href='https://osu.ppy.sh/users/4852013'
					image={osu}
					alt='osu'
				/>
			</div>
		</div>
	);
}
