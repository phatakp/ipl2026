import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Logo } from "./logo";

export function Navbar() {
	const location = useLocation();

	return (
		<header
			className={cn(
				"sticky inset-x-0 top-0 z-99 px-2 items-center flex transition-colors duration-400 ease-in-out",
				"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80",
			)}
		>
			<nav className="flex items-center justify-between mx-auto max-w-360 w-full h-full">
				<Link to={"/"} className="w-20 h-full relative">
					<Logo />
				</Link>
				<div className="flex-1 items-center justify-center gap-8 text-primary-foreground hidden md:flex ">
					<Link to={"/"} className="flex flex-col items-center">
						Home
						<span
							className={cn(
								"bg-accent h-1 w-12 transition-all duration-1000 ease-in-out",
								location.pathname === "/"
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-full",
							)}
						></span>
					</Link>
					<Link to={"/dashboard"} className="flex flex-col items-center">
						Dashboard
						<span
							className={cn(
								"bg-accent h-1 w-12 transition-all duration-1000 ease-in-out",
								location.pathname === "/dashboard"
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-full",
							)}
						></span>
					</Link>
					<Link to={"/rules"} className="flex flex-col items-center">
						Rules
						<span
							className={cn(
								"bg-accent h-1 w-12 transition-all duration-1000 ease-in-out",
								location.pathname === "/rules"
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-full",
							)}
						></span>
					</Link>
				</div>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<div className="flex items-center gap-4">
						<Button size={"sm"} asChild>
							<Link to="/sign-in/$">Sign In</Link>
						</Button>
						<Button variant={"outline"} size={"sm"} asChild>
							<Link to="/sign-up/$">Register</Link>
						</Button>
					</div>
				</SignedOut>
			</nav>
		</header>
	);
}
