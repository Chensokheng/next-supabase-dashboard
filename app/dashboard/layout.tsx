import React, { ReactNode } from "react";
import SideNav from "./components/SideNav";
import ToggleSidebar from "./components/ToggleSidebar";
import MobileSideNav from "./components/MobileSideNav";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="w-full flex">
			<SideNav />
			<MobileSideNav />
			<div className="flex-1 p-10 space-y-5">
				<ToggleSidebar />
				{children}
			</div>
		</div>
	);
}
