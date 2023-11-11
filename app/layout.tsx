import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://daily-todo.vercel.app/"),

	title: {
		template: "%s | Daily Todo",
		default: "Daily Todo",
	},
	authors: {
		name: "chensokheng",
	},
	description:
		"Build dashboard with role managemanet using next.js and supabase.",
	openGraph: {
		title: "Daily Todo",
		description: "Build dashboard with next.js and supabase ",
		url: "https://daily-todo.vercel.app/",
		siteName: "Daily Todo",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
