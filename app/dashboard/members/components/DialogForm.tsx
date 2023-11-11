import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import React, { ReactNode } from "react";
import MemberForm from "./MemberForm";

export default function DailogForm({
	Trigger,
	id,
	title,
}: {
	title: string;
	Trigger: ReactNode;
	id: string;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild id={id}>
				{Trigger}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when
					</DialogDescription>
				</DialogHeader>
				<MemberForm />
			</DialogContent>
		</Dialog>
	);
}
