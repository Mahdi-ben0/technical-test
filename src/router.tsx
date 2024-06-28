import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import SignIn from "./pages/login/components/singin";
import SignUp from "./pages/login/components/signup";
import AppLayout from "./components/layout/appLayout";
import { Provider } from "react-redux";
import { store } from "./state/store";
import RouterLayout from "./components/layout/routerLayout";
import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/app/dashboard"));
const PatientList = lazy(() => import("./pages/app/patient-list"));
const Messages = lazy(() => import("./pages/app/messages"));
const Appointement = lazy(() => import("./pages/app/appointement"));
const MedicalHistory = lazy(() => import("./pages/app/medical-history"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "app",
        element: <AppLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "patients-list",
            element: <PatientList />,
          },
          {
            path: "messages",
            element: <Messages />,
          },
          {
            path: "appointment",
            element: <Appointement />,
          },
          {
            path: "medical-history",
            element: <MedicalHistory />,
          },
        ],
      },
      {
        path: "",
        element: <Login />,
        children: [
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

function NotFound() {
  return (
    <div className="mx-auto flex items-center justify-center">
      <h1 className="mt-14 text-5xl font-bold">Not Found</h1>
    </div>
  );
}
