import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavbarProps } from '@/types';

const Navbar = ({ cartCount }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav id="navbar" className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-5 xl:mx-auto">
				<Link
					id="navbar-logo"
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Shopping Cart
					</span>
				</Link>
				<button
					id="navbar-toggle"
					onClick={toggleNavbar}
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline- focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={isOpen ? 'true' : 'false'}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
					id="navbar-links"
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link
								to="/"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
									location.pathname === '/'
										? 'md:text-blue-700 dark:text-white md:dark:text-blue-500'
										: ''
								}`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/shop"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
									location.pathname === '/shop'
										? 'md:text-blue-700 dark:text-white md:dark:text-blue-500'
										: ''
								}`}
							>
								Shop
							</Link>
						</li>
						<li>
							<Link
								to="/checkout"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
									location.pathname === '/checkout'
										? 'md:text-blue-700 dark:text-white md:dark:text-blue-500'
										: ''
								}`}
							>
								Checkout
							</Link>
						</li>
						<li className="flex gap-2 py-2 px-3 md:p-0">
							<span id="navbar-cart-count" className="text-white">
								{cartCount}
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="white"
								className="w-6 h-6"
							>
								<path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
