import { Button } from "@/components/ui/button";
import React from "react";
import DailogForm from "./DialogForm";
import TodoForm from "./TodoForm";

export default function CreateTodo() {
	return (
		<DailogForm
			id="create-trigger"
			title="Create Todo"
			Trigger={<Button variant="outline">Create+</Button>}
			form={<TodoForm isEdit={false} />}
		/>
	);
}
