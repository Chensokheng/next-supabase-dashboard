import React, { ReactNode } from "react";
import SideNav from "./components/SideNav";
import ToggleSidebar from "./components/ToggleSidebar";
import MobileSideNav from "./components/MobileSideNav";
import { Switch } from "@/components/ui/switch";
import ToggleDarkMode from "./todo/components/ToggleDarkMode";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="w-full flex">
			<div className="h-screen flex flex-col">
				<SideNav />
				<MobileSideNav />
			</div>

			<div className="w-full sm:flex-1 p-5 sm:p-10 space-y-5">
				<ToggleSidebar />
				{children}
			</div>
		</div>
	);
}
