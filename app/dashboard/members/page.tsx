import React from "react";
import MemberTable from "./components/MemberTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchMembers from "./components/SearchMembers";
import CreateMember from "./components/create/CreateMember";
import { useUserStore } from "@/lib/store/user";

export default function Members() {
	const user = useUserStore.getState().user;

	const isAdmin = user?.user_metadata.role === "admin";

	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Members</h1>
			{isAdmin && (
				<div className="flex gap-2">
					<SearchMembers />
					<CreateMember />
				</div>
			)}

			<MemberTable />
		</div>
	);
}
