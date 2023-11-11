import { Input } from "@/components/ui/input";
import React from "react";

export default function SearchMembers() {
	return (
		<Input
			placeholder="search by role, name"
			className=" border-zinc-600  focus:border-zinc-600"
		/>
	);
}
