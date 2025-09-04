

import heroCoding from '../assets/hero-coding.svg';

// 3D Join Button styled with branding yellow
const JoinButton = () => (
	<div
		className="button w-44 h-16 bg-primary-yellow rounded-full cursor-pointer select-none
			active:translate-y-2 active:[box-shadow:0_0px_0_0_#FFD300,0_0px_0_0_#FFD30041]
			active:border-b-[0px]
			transition-all duration-150 [box-shadow:0_10px_0_0_#bd5959,0_15px_0_0_#FFD30041]
			border-b-[2px] border-yellow-400 shadow-lg mt-8"
	>
		<span className="flex flex-col justify-center items-center h-full text-gray-900 font-extrabold text-lg tracking-wide">Join Now</span>
	</div>
);


const Hero = () => {
	return (
		<section className="w-full flex flex-col items-center justify-center text-center py-16 px-4">
			<img src={heroCoding} alt="Coding Illustration" className="w-1/2 max-w-full mb-2" />
			<h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Welcome to Code4Campus</h1>
			<p className="text-lg text-gray-800 font-medium">Learn. Code. Grow. 🚀</p>
			<JoinButton />
		</section>
	);
};

export default Hero;
