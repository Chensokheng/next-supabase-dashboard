import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

import { cn } from "@/lib/utils";
import ModeToggle from "../todo/components/ToggleDarkMode";

export default function SideNav() {
	return <SideBar className=" hidden lg:block dark:bg-graident-dark" />;
}

export const SideBar = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"flex-1 w-full lg:w-96 lg:p-10 space-y-5 lg:border-r  ",
				className
			)}
		>
			<div className="flex items-center gap-2">
				<h1 className="text-3xl font-bold">Daily Todo</h1>

				<ModeToggle />
			</div>
			<NavLinks />
		</div>
	);
};
