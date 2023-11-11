import React, { ReactNode } from "react";
import SideNav from "./components/SideNav";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="w-full flex">
			<SideNav />
			<div className="flex-1 p-10">{children} </div>
		</div>
	);
}
