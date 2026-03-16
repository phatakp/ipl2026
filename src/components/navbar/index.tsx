import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useLocation } from "@tanstack/react-router";
import {
	ArrowRight,
	HandshakeIcon,
	HomeIcon,
	LayoutDashboardIcon,
	UserKeyIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ADMINROLE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Navbar() {
	const { isLoaded, user } = useUser();
	const isAdmin = user?.publicMetadata?.role === ADMINROLE;

	return (
		<header
			className={cn(
				"sticky inset-x-0 top-0 z-99 px-4 items-center flex transition-colors duration-400 ease-in-out h-12",
				"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80",
			)}
		>
			<nav className="flex items-center justify-between mx-auto max-w-360 w-full h-full py-4 md:py-2">
				<Link to={"/"} className="w-20 h-full relative hidden md:flex">
					<Logo />
				</Link>
				<div className="flex items-center justify-center gap-8 text-primary-foreground">
					<NavLink
						href="/"
						title="Home"
						icon={<HomeIcon className="md:hidden text-primary-foreground" />}
					/>
					<SignedIn>
						<NavLink
							href="/dashboard"
							title="Dashboard"
							icon={
								<LayoutDashboardIcon className="md:hidden  text-primary-foreground" />
							}
						/>
						{isAdmin && (
							<NavLink
								href="/admin"
								title="Admin"
								icon={
									<UserKeyIcon className="md:hidden text-primary-foreground" />
								}
							/>
						)}
					</SignedIn>
					<NavLink
						href="/rules"
						title="Rules"
						icon={
							<HandshakeIcon className="md:hidden text-primary-foreground" />
						}
					/>
				</div>
				{!isLoaded && (
					<div className="flex items-center gap-4">
						<Skeleton className="h-8 w-18" />
					</div>
				)}
				<SignedIn>
					<UserButton>
						<UserButton.MenuItems>
							{isAdmin && (
								<UserButton.Link
									label="Admin"
									labelIcon={<UserKeyIcon />}
									href="/admin"
								/>
							)}
							<UserButton.Action label="signOut" />
						</UserButton.MenuItems>
					</UserButton>
				</SignedIn>
				<SignedOut>
					<div className="flex items-center gap-4">
						<Button size={"sm"} asChild>
							<Link to="/sign-in/$" className="flex items-center">
								Let&apos;s Play <ArrowRight />
							</Link>
						</Button>
					</div>
				</SignedOut>
			</nav>
		</header>
	);
}

function NavLink({
	href,
	title,
	icon,
}: {
	href: string;
	title: string;
	icon: ReactNode;
}) {
	const location = useLocation();

	return (
		<Link to={href} className="flex flex-col items-center gap-1">
			<span className="hidden md:flex  font-semibold">{title}</span>
			{icon}
			<span
				className={cn(
					"bg-secondary h-1 w-12 transition-all duration-1000 ease-in-out",
					location.pathname === href
						? "opacity-100 translate-x-0"
						: "opacity-0 -translate-x-full",
				)}
			></span>
		</Link>
	);
}
