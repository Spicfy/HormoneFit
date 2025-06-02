export default function Header() {
	return (
		<header className="top-0 w-full flex flex-row sticky h-20 bg-accent2 items-center  justify-between text-primarytxt font-bold px-8 z-10">
			<h1 className="bold">Hormone Fit</h1>
			<div className="flex flex-row items-center space-x-5 ">
				<h5>Treatments</h5>
				<h5>About Us</h5>
				<h5>Shop</h5>
				<a
					className="bg-accent1 px-3 rounded-xl py-2 text-whitetxt"
					href=""
				>
					Get Started
				</a>
			</div>
		</header>
	);
}
