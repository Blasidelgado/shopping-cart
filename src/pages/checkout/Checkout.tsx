import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import CheckoutAlert from '@/components/alerts/checkoutAlert';
import CheckoutProduct from '@/components/product/CheckoutProduct';
import { ProductType } from '@/types';

export default function Checkout() {
	const [isPaid, setIsPaid] = useState(false);

	const [, , cart] = useOutletContext() as [
		ProductType[],
		(product: ProductType, amount: number) => void,
		ProductType[],
	];
	const total = cart
		.reduce((acc, product) => acc + product.price * (product.amount || 0), 0)
		.toFixed(2);

	return (
		<section>
			<div className="h-screen grid grid-cols-3">
				<div
					id="checkout-info"
					className="hidden lg:block lg:col-span-2 bg-indigo-50 space-y-8 px-12"
				>
					<div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
						<div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
							<div className="text-yellow-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 sm:w-5 h-6 sm:h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h1 className="text-sm font-medium ml-3">Checkout</h1>
						</div>
						<h2 className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
							Complete your shipping and payment details below.
						</h2>
						<div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</div>
					</div>
					<div className="rounded-md">
						<form id="payment-form" method="POST" action="">
							<section>
								<h3 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
									Shipping & Billing Information
								</h3>
								<fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
									<label className="flex border-b border-gray-200 h-12 py-3 items-center">
										<span className="text-right px-2">Name</span>
										<input
											name="name"
											className="focus:outline-none px-3"
											placeholder="Try Odinsson"
											required
										/>
									</label>
									<label className="flex border-b border-gray-200 h-12 py-3 items-center">
										<span className="text-right px-2">Email</span>
										<input
											name="email"
											type="email"
											className="focus:outline-none px-3"
											placeholder="try@example.com"
											required
										/>
									</label>
									<label className="flex border-b border-gray-200 h-12 py-3 items-center">
										<span className="text-right px-2">Address</span>
										<input
											name="address"
											className="focus:outline-none px-3"
											placeholder="10 Street XYZ 654"
										/>
									</label>
									<label className="flex border-b border-gray-200 h-12 py-3 items-center">
										<span className="text-right px-2">City</span>
										<input
											name="city"
											className="focus:outline-none px-3"
											placeholder="San Francisco"
										/>
									</label>
									<label className="inline-flex w-2/4 border-gray-200 py-3">
										<span className="text-right px-2">State</span>
										<input
											name="state"
											className="focus:outline-none px-3"
											placeholder="CA"
										/>
									</label>
									<label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
										<span className="text-right px-2 xl:px-0 xl:text-none">
											ZIP
										</span>
										<input
											name="postal_code"
											className="focus:outline-none px-3"
											placeholder="98603"
										/>
									</label>
									<label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
										<span className="text-right px-2">Country</span>
										<select
											name="country"
											className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none px-3"
										>
											<option value="AU">Australia</option>
											<option value="BE">Belgium</option>
											<option value="BR">Brazil</option>
											<option value="CA">Canada</option>
											<option value="CN">China</option>
											<option value="DK">Denmark</option>
											<option value="FI">Finland</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
											<option value="HK">Hong Kong</option>
											<option value="IE">Ireland</option>
											<option value="IT">Italy</option>
											<option value="JP">Japan</option>
											<option value="LU">Luxembourg</option>
											<option value="MX">Mexico</option>
											<option value="NL">Netherlands</option>
											<option value="PL">Poland</option>
											<option value="PT">Portugal</option>
											<option value="SG">Singapore</option>
											<option value="ES">Spain</option>
											<option value="TN">Tunisia</option>
											<option value="GB">United Kingdom</option>
											<option value="US" selected>
												United States
											</option>
										</select>
									</label>
								</fieldset>
							</section>
						</form>
					</div>
					<div className="rounded-md">
						<section>
							<h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
								Payment Information
							</h2>
							<fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
								<label className="flex border-b border-gray-200 h-12 py-3 items-center">
									<span className="text-right px-2">Card</span>
									<input
										name="card"
										className="focus:outline-none px-3 w-full"
										placeholder="Card number MM/YY CVC"
										required
									/>
								</label>
							</fieldset>
						</section>
					</div>
					<button
						className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors0"
						onClick={() => setIsPaid(true)}
					>
						Pay ${total}
					</button>
				</div>
				<div id="products-info" className="col-span-3 bg-white lg:col-span-1">
					<h2 className="py-6 border-b-2 text-xl text-gray-600 px-8">
						Order Summary
					</h2>
					<ul className="py-6 border-b space-y-6 px-8">
						{cart.map((cartProduct) => (
							<CheckoutProduct key={cartProduct.id} product={cartProduct} />
						))}
					</ul>
					<div className="px-8 border-b">
						<div className="flex justify-between py-4 text-gray-600">
							<span>Subtotal</span>
							<span className="font-semibold text-pink-500">{total}</span>
						</div>
						<div className="flex justify-between py-4 text-gray-600">
							<span>Shipping</span>
							<span className="font-semibold text-pink-500">Free</span>
						</div>
					</div>
					<div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
						<span>Total</span>
						<span>${total}</span>
					</div>
				</div>
			</div>
			{isPaid && <CheckoutAlert onClick={setIsPaid} />}
		</section>
	);
}
