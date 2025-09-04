
import heroCoding from '../assets/hero-coding.svg';

const Hero = () => {
	return (
		<section className="w-full flex flex-col items-center justify-center text-center py-16 px-4">
			<img src={heroCoding} alt="Coding Illustration" className="w-64 max-w-full mb-6" />
			<h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Welcome to Code4Campus</h1>
			<p className="text-lg text-gray-800 font-medium">Learn. Code. Grow. 🚀</p>
		</section>
	);
};

export default Hero;
