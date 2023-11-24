import React, { ReactNode } from "react";
import SideNav from "./components/SideNav";
import ToggleSidebar from "./components/ToggleSidebar";
import MobileSideNav from "./components/MobileSideNav";
import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import { useUserStore } from "@/lib/store/user";

export default async function Layout({ children }: { children: ReactNode }) {
	const { data: userSession } = await readUserSession();

	if (!userSession.session) {
		return redirect("/auth");
	}

	useUserStore.setState({ user: userSession.session.user });

	return (
		<div className="w-full flex ">
			<div className="h-screen flex flex-col">
				<SideNav />
				<MobileSideNav />
			</div>

			<div className="w-full sm:flex-1 p-5 sm:p-10 space-y-5 bg-gray-100 dark:bg-inherit">
				<ToggleSidebar />
				{children}
			</div>
		</div>
	);
}
