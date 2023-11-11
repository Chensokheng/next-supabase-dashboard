import * as z from "zod";

export const CreateFormSchema = z
	.object({
		name: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		role: z.enum(["user", "admin"]),
		status: z.enum(["active", "resigned"]),
		email: z.string().email(),
		password: z
			.string()
			.min(6, { message: "Password should be 6 characters" }),
		confirm: z
			.string()
			.min(6, { message: "Password should be 6 characters" }),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Passowrd doesn't match",
		path: ["confirm"],
	});

export const UpdateFormSchema = z
	.object({
		name: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		role: z.enum(["user", "admin"]),
		status: z.enum(["active", "resigned"]),
		email: z.string().email(),
		password: z.string().optional(),
		confirm: z.string().optional(),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Passowrd doesn't match",
		path: ["confirm"],
	});
