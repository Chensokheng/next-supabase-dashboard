import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function SideNav() {
	return <SideBar className=" hidden lg:block" />;
}

export const SideBar = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"h-screen w-full lg:w-96 lg:p-10 space-y-5 lg:border-r ",
				className
			)}
		>
			<h1 className="text-3xl font-bold">Daily Todo</h1>
			<NavLinks />
		</div>
	);
};
