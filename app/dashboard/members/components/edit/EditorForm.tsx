import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicForm from "./BasicForm";
import AccountForm from "./AccountForm";
import AdvanceForm from "./AdvanceForm";

export default function EditForm() {
	return (
		<Tabs defaultValue="basic" className="w-full space-y-5">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="basic">Basic</TabsTrigger>
				<TabsTrigger value="account">Acccount</TabsTrigger>
				<TabsTrigger value="advance">Advance</TabsTrigger>
			</TabsList>
			<TabsContent value="basic">
				<BasicForm />
			</TabsContent>
			<TabsContent value="account">
				<AccountForm />
			</TabsContent>
			<TabsContent value="advance">
				<AdvanceForm />
			</TabsContent>
		</Tabs>
	);
}
