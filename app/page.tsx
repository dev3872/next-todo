"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Login from "./login";

export default function Home() {
  const { user } = useUser();
  if (user) {
    return (
      <div className="flex w-full h-full justify-center content-center">
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
    );
  } else return <Login />;
}
