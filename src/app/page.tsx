"use client";

import PageView from "@/components/PageView/PageView";
import { useAppSelector } from "@/hooks/reduxHooks";

export default function Home() {
  const authState = useAppSelector((state) => state.auth);

  return (
    <PageView>
      <h1 className="w-min self-center text-9xl text-blue-600">
        HOME PAGE
      </h1>

      {authState.isLoggedIn && (
        <h1 className="w-min self-center text-4xl text-blue-600">
          {authState.user} Is Logged In.
        </h1>
      )}

      <div className="w-full p-4 flex flex-row flex-wrap justify-center">
        <a href="/forgot-password">Forgot Password</a>
        <a href="/register">Register</a>
        {!authState.isLoggedIn && <a href="/login">Login</a>}
        {authState.isLoggedIn && <a href="/dashboard/info">Info</a>}
      </div>
    </PageView>
  );
}
