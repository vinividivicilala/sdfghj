import type {
  MetaFunction,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import "./tailwind.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useSearchParams,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
// Import ClerkApp
import { ClerkApp } from "@clerk/remix";
import { clerkEnv } from "./env.server";
import React from "react";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "BlogStack",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader: LoaderFunction = (args: LoaderFunctionArgs) => {
  return rootAuthLoader(args, clerkEnv);
};

export function Layout({ children }: { children: React.ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = searchParams.get("theme");
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={` ${
          theme == "dark"
            ? "bg-[url(../public/bgd.png)]"
            : "bg-[url(../public/bg.jpg)]"
        } bg-cover bg-no-repeat`}
      >
        <div></div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);
