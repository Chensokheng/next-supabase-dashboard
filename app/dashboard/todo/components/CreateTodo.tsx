import { Button } from "@/components/ui/button";
import React from "react";
import DailogForm from "./DialogForm";
import MemberTodo from "./MemberTodo";

export default function CreateTodo() {
	return (
		<DailogForm
			id="create-trigger"
			title="Create Todo"
			Trigger={<Button variant="outline">Create+</Button>}
			form={<MemberTodo isEdit={false} />}
		/>
	);
}
