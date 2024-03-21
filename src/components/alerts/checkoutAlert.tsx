import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutAlert({ onClick }) {
	return (
		<div
			className="w-screen h-screen bg-slate-300 z-50 fixed top-0 left-0"
			style={{ background: 'rgba(0, 0, 0, 0.5)' }}
		>
			<div className="flex min-h-screen items-center justify-center">
				<div className="rounded-lg bg-gray-50 px-16 py-14">
					<div className="flex justify-center">
						<div className="rounded-full bg-green-200 p-6">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4 opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="h-8 w-8 text-white"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									/>
								</svg>
							</div>
						</div>
					</div>
					<h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
						Congratulations! Your order has been taken
					</h3>
					<div className="flex flex-wrap">
						<button
							onClick={() => onClick(false)}
							className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300"
						>
							Back to checkout
						</button>
						<button className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-green-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
							<Link to={'/shop'}>Back to shop</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
