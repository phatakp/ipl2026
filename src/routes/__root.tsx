import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import ClerkProvider from "@/integrations/clerk/provider";
import { ReactHotToast } from "@/integrations/react-toast";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import { getThemeServerFn } from "@/lib/theme";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "IPL 2026",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: "https://api.fontshare.com/v2/css?f[]=pilcrow-rounded@400,500,600,700&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	loader: () => getThemeServerFn(),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const theme = Route.useLoaderData();
	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider theme={theme}>
					<ClerkProvider>
						<div className="mx-auto grid min-h-screen grid-rows-[auto_1fr]">
							<Navbar />
							<main className="mx-auto w-full">{children}</main>
							<ReactHotToast />
						</div>
						<TanStackDevtools
							config={{
								position: "bottom-right",
							}}
							plugins={[
								{
									name: "Tanstack Router",
									render: <TanStackRouterDevtoolsPanel />,
								},
								TanStackQueryDevtools,
							]}
						/>
					</ClerkProvider>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
