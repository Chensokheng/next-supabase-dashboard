import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditMember from "./edit/EditMember";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/lib/store/user";
import { readMembers } from "../actions";
import { IPermission } from "@/lib/types";
import DeleteMember from "./DeleteMember";

export default async function ListOfMembers() {
	const { data: permissions } = await readMembers();

	const user = useUserStore.getState().user;
	const isAdmin = user?.user_metadata.role === "admin";
	return (
		<div className="dark:bg-inherit bg-white mx-2 rounded-sm">
			{(permissions as IPermission[])?.map((permission, index) => {
				return (
					<div
						className=" grid grid-cols-5  rounded-sm  p-3 align-middle font-normal"
						key={index}
					>
						<h1>{permission.member.name}</h1>

						<div>
							<span
								className={cn(
									" dark:bg-zinc-800 px-2 py-1 rounded-full shadow capitalize  border-[.5px] text-sm",
									{
										"border-green-500 text-green-600 bg-green-200":
											permission.role === "admin",
										"border-zinc-300 dark:text-yellow-300 dark:border-yellow-700 px-4 bg-yellow-50":
											permission.role === "user",
									}
								)}
							>
								{permission.role}
							</span>
						</div>
						<h1>
							{new Date(permission.created_at).toDateString()}
						</h1>
						<div>
							<span
								className={cn(
									" dark:bg-zinc-800 px-2 py-1 rounded-full  capitalize text-sm border-zinc-300  border",
									{
										"text-green-600 px-4 dark:border-green-400 bg-green-200":
											permission.status === "active",
										"text-red-500 bg-red-100 dark:text-red-300 dark:border-red-400":
											permission.status === "resigned",
									}
								)}
							>
								{permission.status}
							</span>
						</div>

						<div className="flex gap-2 items-center">
							{isAdmin && (
								<DeleteMember user_id={permission.member.id} />
							)}

							<EditMember
								isAdmin={isAdmin}
								permission={permission}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
