import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicForm from "./BasicForm";
import AccountForm from "./AccountForm";
import AdvanceForm from "./AdvanceForm";
import { cn } from "@/lib/utils";
import { IPermission } from "@/lib/types";

export default function EditForm({
	isAdmin,
	permission,
}: {
	isAdmin: boolean;
	permission: IPermission;
}) {
	return (
		<Tabs defaultValue="basic" className="w-full space-y-5">
			<TabsList
				className={cn(
					"grid w-full ",
					isAdmin ? "grid-cols-3" : "grid-cols-1"
				)}
			>
				<TabsTrigger value="basic">Basic</TabsTrigger>
				{isAdmin && (
					<>
						<TabsTrigger value="account">Acccount</TabsTrigger>
						<TabsTrigger value="advance">Advance</TabsTrigger>
					</>
				)}
			</TabsList>
			<TabsContent value="basic">
				<BasicForm permission={permission} />
			</TabsContent>
			{isAdmin && (
				<>
					<TabsContent value="account">
						<AccountForm permission={permission} />
					</TabsContent>
					<TabsContent value="advance">
						<AdvanceForm permission={permission} />
					</TabsContent>
				</>
			)}
		</Tabs>
	);
}
