"use client";

import { DynamicNavBar } from "@/components/dynamicExports";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useWindowSize from "@/hooks/useWindowSize";
import { LOGOUT } from "@/redux/auth";
import { logout } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { size } = useWindowSize();

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res) {
        dispatch(LOGOUT());
      } else {
        toast("Error");
      }
    } catch (error) {
      toast("Error");
    }
  };

  useEffect(() => {
    if (!authState.isLoggedIn) {
      toast("Logging Out");
      router.push("/login");
    }
  }, [authState.isLoggedIn]);

  return (
    <div className="h-full w-full">
      <DynamicNavBar
        handleLogout={() => handleLogout()}
        isMobile={size.isMobile ? size.isMobile : false}
      />
      <div
        className={`h-full  ${size.isMobile ? "w-10/12 float-right absolute top-0 right-0 z-0" : "w-full mt-16"}`}
      >
        {children}
      </div>
    </div>
  );
}
