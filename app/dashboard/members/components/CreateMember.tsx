import { Button } from "@/components/ui/button";
import React from "react";
import DailogForm from "./DialogForm";

export default function CreateMember() {
	return (
		<DailogForm
			id="create-trigger"
			title="Create Member"
			Trigger={<Button variant="outline">Create+</Button>}
		/>
	);
}
