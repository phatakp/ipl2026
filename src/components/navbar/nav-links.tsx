import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { Link, useLocation } from "@tanstack/react-router";
import { useModal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserCard } from "./user-card";

export function NavLinks() {
	const { closeModal, modalId } = useModal();
	const location = useLocation();
	const { isLoaded } = useAuth();
	return (
		<div className="flex flex-col items-center justify-center inset-0 relative">
			<Button
				asChild
				variant={location.pathname === "/" ? "default" : "ghost"}
				size={"lg"}
				onClick={() => closeModal(modalId)}
				className="text-4xl font-bold font-serif w-full rounded-none py-8 tracking-wide"
			>
				<Link to={"/"}>Home</Link>
			</Button>

			<Button
				asChild
				variant={location.pathname === "/rules" ? "default" : "ghost"}
				size={"lg"}
				onClick={() => closeModal(modalId)}
				className="text-4xl font-bold font-serif w-full rounded-none py-8 tracking-wide"
			>
				<Link to={"/rules"}>Cultural</Link>
			</Button>

			{isLoaded ? (
				<>
					<SignedOut>
						<Button
							asChild
							variant={"ghost"}
							size={"lg"}
							onClick={() => closeModal(modalId)}
							className="text-4xl font-bold font-serif w-full rounded-none py-8 tracking-wide"
						>
							<Link
								to={"/sign-in"}
								className="flex flex-col items-center justify-center"
							>
								<span>Login</span>
								<span className="text-sm text-muted-foreground">
									Only use this if you are a committee member
								</span>
							</Link>
						</Button>
					</SignedOut>

					<SignedIn>
						<Button
							asChild
							variant={
								location.pathname.startsWith("/dashboard") ? "default" : "ghost"
							}
							size={"lg"}
							onClick={() => closeModal(modalId)}
							className="text-4xl font-bold font-serif w-full rounded-none py-8 tracking-wide"
						>
							<Link to={"/dashboard"}>Dashboard</Link>
						</Button>

						<UserCard closeNav={() => closeModal(modalId)} />
					</SignedIn>
				</>
			) : (
				<Skeleton className="w-full h-10" />
			)}
		</div>
	);
}
