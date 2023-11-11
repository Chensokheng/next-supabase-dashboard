import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function SideNav() {
	return (
		<div className="h-screen w-96 p-10 space-y-5 border-r ">
			<Link href="/dashboard">
				<h1 className="text-3xl font-bold">Daily Todo</h1>
			</Link>
			<NavLinks />
		</div>
	);
}
