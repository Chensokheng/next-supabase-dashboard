import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditTodo from "./EditTodo";
import { Badge } from "@/components/ui/badge";

export default function ListOfTodo() {
	const todos = [
		{
			title: "Subscribe to my channel",
			status: "completed",
			created_at: new Date().toLocaleDateString(),
			create_by: "sokheng",
		},
	];
	return (
		<>
			{todos.map((todo, index) => {
				return (
					<div
						className=" grid grid-cols-5  rounded-sm mx-2 p-3 align-middle"
						key={index}
					>
						{Object.keys(todo).map((key, index) => {
							if (key === "status") {
								return (
									<div
										key={index}
										className="flex items-center"
									>
										<Badge variant="complete">
											{todo[key as keyof typeof todo]}
										</Badge>
									</div>
								);
							} else {
								return (
									<h1
										className="flex items-center text-white text-lg"
										key={index}
									>
										{todo[key as keyof typeof todo]}
									</h1>
								);
							}
						})}

						<div className="flex gap-2 items-center">
							<Button variant="outline">
								<TrashIcon />
								delete
							</Button>
							<EditTodo />
						</div>
					</div>
				);
			})}
		</>
	);
}
