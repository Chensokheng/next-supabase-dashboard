import React from "react";
import MemberTable from "./components/TodoTable";
import SearchTodo from "./components/SearchTodo";
import CreateTodo from "./components/CreateTodo";

export default function Todo() {
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Todo</h1>
			<div className="flex gap-2">
				<SearchTodo />
				<CreateTodo />
			</div>
			<MemberTable />
		</div>
	);
}
