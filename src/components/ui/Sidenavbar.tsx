import { useState } from "react";
import { Nav } from "./nav";
import {
  Archive,
  Trash2,
  LayoutDashboard,
  UsersRound,
  ShoppingCart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "./button";

import { useWindowWidth } from "@react-hook/window-size";

const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r border-white/5 px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            to: "/",
            label: "",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            to: "/users",
            label: "",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            to: "/orders",
            label: "",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            to: "/settings",
            label: "23",
            icon: Settings,
            variant: "ghost",
          },
          {
            title: "Trash",
            to: "/",
            label: "",
            icon: Trash2,
            variant: "ghost",
          },
          {
            title: "Archive",
            to: "/",
            label: "",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default Sidenavbar;
