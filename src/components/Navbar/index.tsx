import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navigation = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-20 border-b border-[#e9e9ef]/80 bg-white/80 backdrop-blur-2xl">
			<nav
				className="relative mx-auto flex min-h-[72px] max-w-[1120px] items-center justify-between px-[18px] sm:px-6"
				aria-label="Main navigation"
			>
				<a
					className="group inline-flex items-center gap-2.5 text-[1.2rem] leading-none font-bold tracking-[-0.04em] text-[#181824] no-underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c63ff]"
					href="#home"
					onClick={() => setIsOpen(false)}
				>
					<span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f0eeff] text-sm font-bold text-[#6c63ff] transition-colors group-hover:bg-[#e7e4ff]">
						FS
					</span>
					<span>
						Faizulla Syed<span className="text-[#6c63ff]">.</span>
					</span>
				</a>

				<button
					className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-[#e9e9ef] bg-white text-[#343442] transition hover:border-[#d3d0ff] hover:bg-[#f7f6ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff] sm:hidden"
					type="button"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					aria-controls="navbar-links"
					onClick={() => setIsOpen((open) => !open)}
				>
					{isOpen ? (
						<FiX className="h-5 w-5" aria-hidden="true" />
					) : (
						<FiMenu className="h-5 w-5" aria-hidden="true" />
					)}
				</button>

				<ul
					id="navbar-links"
					data-open={isOpen}
					className="absolute inset-x-[18px] top-[calc(100%+0.5rem)] z-10 m-0 hidden list-none flex-col gap-1 rounded-2xl border border-[#e9e9ef] bg-white/95 p-2 shadow-[0_16px_48px_rgba(24,24,36,0.1)] backdrop-blur-xl data-[open=true]:flex sm:static sm:flex sm:flex-row sm:items-center sm:gap-1 sm:rounded-full sm:border-0 sm:bg-white/70 sm:p-1.5 sm:shadow-[inset_0_0_0_1px_#e9e9ef] sm:backdrop-blur-xl"
				>
					{navigation.map(({ label, href }) => (
						<li key={href}>
							<a
								className={`flex min-h-11 items-center justify-between gap-2 rounded-xl px-4 text-sm font-medium no-underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff] sm:justify-center sm:rounded-full ${
									href === "#contact"
										? "bg-[#6c63ff] text-white hover:bg-[#554be8] sm:ml-1 sm:px-5"
										: "text-[#555563] hover:bg-[#f2f0ff] hover:text-[#554be8] sm:px-4"
								}`}
								href={href}
								onClick={() => setIsOpen(false)}
							>
								{label}
								{href === "#contact" && (
									<FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
								)}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
