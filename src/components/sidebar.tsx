import ChartIcon from "@/assets/chart.svg?react";
import ChatIcon from "@/assets/chat.svg?react";
import UsersIcon from "@/assets/users.svg?react";
import CalendartIcon from "@/assets/calendar.svg?react";
import ActivitytIcon from "@/assets/activity.svg?react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const APP_LINKS = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: ChartIcon,
  },
  {
    name: "Patients list",
    path: "patients-list",
    icon: UsersIcon,
  },
  {
    name: "Messages",
    path: "messages",
    icon: ChatIcon,
  },
  {
    name: "Appointment",
    path: "appointment",
    icon: CalendartIcon,
  },
  {
    name: "Medical History",
    path: "medical-history",
    icon: ActivitytIcon,
  },
];
export default function SideBare() {
  return (
    <div className="basis-[240px] border-r border-r-gray-300 py-5">
      <nav className="w-fit ml-auto mr-auto">
        <ul className="space-y-2">
          {APP_LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    "flex gap-x-2 items-center px-6 py-4 rounded-md",
                    isActive && "bg-[#EFF3FA]",
                  )
                }
                to={link.path}
              >
                <link.icon />
                <span className="text-gray-600 font-medium">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
