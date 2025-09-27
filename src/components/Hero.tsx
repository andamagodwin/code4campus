


import { useEffect, useState } from 'react';
// import heroCoding from '../assets/hero-coding.svg';

// 3D Join Button styled with branding yellow
// const JoinButton = () => (
// 	<div
// 		className="button w-44 h-16 bg-primary-yellow rounded-full cursor-pointer select-none
// 			active:translate-y-2 active:[box-shadow:0_0px_0_0_#FFD300,0_0px_0_0_#FFD30041]
// 			active:border-b-[0px]
// 			transition-all duration-150 [box-shadow:0_10px_0_0_#bd5959,0_15px_0_0_#FFD30041]
// 			border-b-[2px] border-yellow-400 shadow-lg mt-8"
// 	>
// 		<span className="flex flex-col justify-center items-center h-full text-gray-900 font-extrabold text-lg tracking-wide">Join Now</span>
// 	</div>
// );



const words = ["Learn Code", "Learn Vibecode", "Learn. Create. Inspire."];

const TypingAnimation = () => {
	const [text, setText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const typingSpeed = isDeleting ? 60 : 120;
		let timeout: number;
		const currentWord = words[wordIndex % words.length];

		if (!isDeleting && charIndex <= currentWord.length) {
			setText(currentWord.substring(0, charIndex));
			timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
		} else if (isDeleting && charIndex >= 0) {
			setText(currentWord.substring(0, charIndex));
			timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed);
		} else if (!isDeleting && charIndex > currentWord.length) {
			timeout = setTimeout(() => setIsDeleting(true), 1000);
		} else if (isDeleting && charIndex < 0) {
			setIsDeleting(false);
			setWordIndex((prev) => (prev + 1) % words.length);
			timeout = setTimeout(() => setCharIndex(0), 500);
		}
		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, wordIndex]);

	return (
		<span className="font-mono text-2xl md:text-3xl font-bold text-primary-yellow">
			{text}
			<span className="animate-blink">|</span>
		</span>
	);
};

// Add blinking cursor animation to Tailwind
const blinkStyle = `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } } .animate-blink { animation: blink 1s step-end infinite; }`;

const Hero = () => {
	return (
		<section className="w-full flex flex-col items-center justify-center text-center py-10 px-4">
			<style>{blinkStyle}</style>
			{/* <img src={heroCoding} alt="Coding Illustration" className="w-1/2 max-w-full mb-2" /> */}
			<h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Welcome to Code4Campus</h1>
			<div className="mb-2">
				<TypingAnimation />
			</div>
			<p className="text-lg text-gray-800 font-medium">Learn. Code. Grow. 🚀</p>
			
			{/* Coming Soon Notice */}
			<div className="mt-6 mb-4 p-4 bg-orange-100 border-l-4 border-orange-500 rounded-lg max-w-lg">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
						</svg>
					</div>
					<div className="ml-3">
						<p className="text-sm text-orange-700 font-medium">
							🚧 <strong>Coming Soon!</strong> We're still working on this webpage. 
							Stay tuned for amazing coding courses and resources!
						</p>
					</div>
				</div>
			</div>
			
			{/* <JoinButton /> */}
		</section>
	);
};

export default Hero;
