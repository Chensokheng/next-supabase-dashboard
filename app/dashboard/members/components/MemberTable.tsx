import { Button } from "@/components/ui/button";
import React from "react";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import ListOfMembers from "./ListOfMembers";

export default function MemberTable() {
	const tableHeader = ["Name", "Role", "Joined", "Status"];

	return (
		<div className="rounded-md  border-zinc-200 dark:border-zinc-800  w-full overflow-y-auto border  dark:bg-graident-dark">
			<div className="w-[900px] lg:w-full bg-white dark:bg-inherit rounded-md space-y-5 py-5">
				<div className=" grid grid-cols-5 px-5 py-2  border-b pb-5 dark:border-zinc-600">
					{tableHeader.map((header, index) => {
						return (
							<h1
								key={index}
								className="font-semibold text-sm text-gray-500"
							>
								{header}
							</h1>
						);
					})}
				</div>

				<ListOfMembers />
			</div>
		</div>
	);
}
