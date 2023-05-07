export default function App() {
	return (
		<div className="flex items-center justify-center h-screen">
			{/* data-test? https://docs.cypress.io/guides/references/best-practices#Selecting-Elements */}
			<h1 className="text-3xl font-bold underline" data-test="header-msg">
				Hello world!
			</h1>
		</div>
	);
}
