import { useState } from "react";
import logo from "../assets/logo-no-bg.png";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="w-full border bg-primary-yellow fixed top-0 left-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
				{/* Logo */}
				<a href="#" className="flex items-center">
					<img src={logo} alt="Code4Campus Logo" className="h-10 w-auto" />
					<span className="font-bold text-xl tracking-tight">Code4Campus</span>
				</a>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-8 items-center">
					<a href="#features" className="text-gray-700 hover:text-white font-medium transition">Features</a>
					<a href="#courses" className="text-gray-700 hover:text-white font-medium transition">Courses</a>
					<a href="#about" className="text-gray-700 hover:text-white font-medium transition">About</a>
					<a href="#contact" className="text-gray-700 hover:text-white font-medium transition">Contact</a>
				</div>

				{/* Mobile Hamburger */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-400 focus:outline-none"
						aria-label="Toggle menu"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							{menuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
					<a href="#features" className="block text-gray-700 hover:text-yellow-400 font-medium transition">Features</a>
					<a href="#courses" className="block text-gray-700 hover:text-yellow-400 font-medium transition">Courses</a>
					<a href="#about" className="block text-gray-700 hover:text-yellow-400 font-medium transition">About</a>
					<a href="#contact" className="block text-gray-700 hover:text-yellow-400 font-medium transition">Contact</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
