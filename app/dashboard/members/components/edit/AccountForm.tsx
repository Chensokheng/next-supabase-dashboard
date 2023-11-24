"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { IPermission } from "@/lib/types";
import { useTransition } from "react";
import { updateMemberAcccountById } from "../../actions";

const FormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().optional(),
		confirm: z.string().optional(),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Passowrd doesn't match",
		path: ["confirm"],
	});

export default function AccountForm({
	permission,
}: {
	permission: IPermission;
}) {
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: permission.member.email,
			password: "",
			confirm: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		startTransition(async () => {
			const { error } = JSON.parse(
				await updateMemberAcccountById(permission.member_id, data)
			);
			if (error?.message) {
				toast({
					title: "Fail to update",
					description: (
						<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
							<code className="text-white">error?.message</code>
						</pre>
					),
				});
			} else {
				toast({
					title: "successfully update",
				});
			}
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-6"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="email@gmail.com"
									type="email"
									{...field}
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="******"
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									placeholder="******"
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="flex gap-2 items-center w-full"
					variant="outline"
				>
					Update
					<AiOutlineLoading3Quarters
						className={cn(" animate-spin", "hidden")}
					/>
				</Button>
			</form>
		</Form>
	);
}
