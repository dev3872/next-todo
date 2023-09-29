"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Login from "./login";
import { Spin } from "antd";
import Landing from "./landing";

export default function Home() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spin />;
  if (user) {
    return <Landing />;
  } else return <Login />;
}
