import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Spinner from "@/components/svg/spinner";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function RouterLayout() {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (state.token && state.isEmailVerified) navigate("app/medical-history");
    else navigate("signin");
  }, [state]);

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
      <ScrollRestoration />
    </>
  );
}

function Fallback() {
  return (
    <main className="flex items-center justify-center">
      <Spinner secondaryFill="#a3a3a3" />
    </main>
  );
}
