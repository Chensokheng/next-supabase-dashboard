import React from "react";
import ListOfTodo from "./ListOfTodo";

export default function TodoTable() {
	const tableHeader = ["Title", "Status", "Created at", "Created by"];

	return (
		<div className=" rounded-md  border-zinc-800 w-full overflow-y-auto border dark:bg-graident-dark  ">
			<div className="w-[800px] sm:w-full  py-5  bg-white dark:bg-inherit rounded-md space-y-5 ">
				<div className=" grid grid-cols-5 px-5 py-2  dark:border-b dark:pb-5 dark:border-zinc-600">
					{tableHeader.map((header, index) => {
						return (
							<h1
								key={index}
								className="font-medium text-sm dark:text-gray-500"
							>
								{header}
							</h1>
						);
					})}
				</div>

				<ListOfTodo />
			</div>
		</div>
	);
}
