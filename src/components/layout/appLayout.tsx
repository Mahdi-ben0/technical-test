import SettingsIcon from "@/assets/setting.svg?react";
import NotificationIcon from "@/assets/notification.svg?react";
import { Outlet } from "react-router-dom";
import SideBare from "../sidebar";
import Spinner from "../svg/spinner";
import { Suspense } from "react";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex px-12 py-3 border border-gray-300">
        <img src="/logo.svg" width={182} />
        <div className="flex gap-6 ml-auto items-center">
          <SettingsIcon />
          <NotificationIcon />
          <span className="rounded-full h-8 w-8 block bg-slate-400" />
        </div>
      </div>

      <div className="flex flex-1">
        <SideBare />
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <main className="flex flex-grow items-center justify-center">
      <Spinner secondaryFill="#a3a3a3" />
    </main>
  );
}
