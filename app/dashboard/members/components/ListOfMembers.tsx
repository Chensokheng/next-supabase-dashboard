import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditMember from "./EditMember";

export default function ListOfMembers() {
	const members = [
		{
			name: "Sokheng",
			role: "Admin",
			join: new Date().toLocaleDateString(),
			status: "Active",
		},
		{
			name: "Sokheng",
			role: "Admin",
			join: new Date().toLocaleDateString(),
			status: "Active",
		},
		{
			name: "Sokheng",
			role: "Admin",
			join: new Date().toLocaleDateString(),
			status: "Active",
		},
		{
			name: "Sokheng",
			role: "Admin",
			join: new Date().toLocaleDateString(),
			status: "Active",
		},
	];
	return (
		<>
			{members.map((member, index) => {
				return (
					<div
						className=" grid grid-cols-5  rounded-sm mx-2 p-3 align-middle"
						key={index}
					>
						{Object.keys(member).map((key, index) => {
							return (
								<h1
									className="flex items-center text-white text-lg"
									key={index}
								>
									{member[key as keyof typeof member]}
								</h1>
							);
						})}

						<div className="flex gap-2 items-center">
							<Button variant="outline">
								<TrashIcon />
								delete
							</Button>
							<EditMember />
						</div>
					</div>
				);
			})}
		</>
	);
}
