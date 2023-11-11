import React from "react";
import ListOfTodo from "./ListOfTodo";

export default function TodoTable() {
	const tableHeader = ["Title", "Status", "Created at", "Created by"];

	return (
		<div className="  rounded-sm pb-5 w-full overflow-y-auto  ">
			<div className="w-[800px] sm:w-full bg-gray-100 dark:bg-inherit rounded-md space-y-5 pb-3">
				<div className=" grid grid-cols-5 px-5 py-2  dark:border-b dark:pb-5 dark:border-zinc-600">
					{tableHeader.map((header, index) => {
						return (
							<h1
								key={index}
								className="font-semibold text-sm dar:text-gray-400"
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
