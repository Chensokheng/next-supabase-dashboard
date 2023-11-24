import React from "react";
import DailogForm from "../DialogForm";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import EditForm from "./EditorForm";
import { IPermission } from "@/lib/types";

export default function EditMember({
	isAdmin,
	permission,
}: {
	isAdmin: boolean;
	permission: IPermission;
}) {
	return (
		<DailogForm
			id="update-trigger"
			title="Edit Member"
			Trigger={
				<Button variant="outline">
					<Pencil1Icon />
					Edit
				</Button>
			}
			form={<EditForm isAdmin={isAdmin} permission={permission} />}
		/>
	);
}
