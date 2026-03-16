import { useUser } from "@clerk/clerk-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useActivateProfile } from "@/data/users/hooks";
import { allUsersQueryOptions } from "@/data/users/query-options";
import { ADMINROLE } from "@/lib/constants";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function PendingUsers() {
	const { data: users } = useSuspenseQuery(allUsersQueryOptions);
	const { mutate } = useActivateProfile();
	const { user } = useUser();
	if (user?.publicMetadata?.role !== ADMINROLE) return;

	return (
		<div className="py-4">
			<Table>
				<TableCaption>A list of users pending activation.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[150px]">Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((u) => (
						<TableRow key={u.clerkId}>
							<TableCell className="font-medium">
								{u.firstName} {u.lastName}
							</TableCell>
							<TableCell>{u.email}</TableCell>
							<TableCell>
								{u.isActive ? (
									<Badge variant={"success"}>Active</Badge>
								) : (
									<Button
										size={"sm"}
										onClick={() => mutate({ data: { clerkId: u.clerkId } })}
									>
										Activate Now
									</Button>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
