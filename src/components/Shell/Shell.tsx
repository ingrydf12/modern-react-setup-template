import type { PropsWithChildren } from "react";
import lenovoLogo from "@/assets/img/lenovo-square-round-logo.png";
import { Badge } from "../ui/badge";
import {
  ClipboardClockIcon,
  HomeIcon,
  MessageCircle,
  MonitorCogIcon,
  ScanHeartIcon,
} from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

function AppVersionBadge() {
  const versionLabel = "Evolution";
  return (
    <Badge variant={"secondary"} className="mx-3 h-4 font-bold uppercase">
      {versionLabel}
    </Badge>
  );
}

function AppPrimaryHeader() {
  return (
    <div className="bg-primary flex flex-row p-2">
      <div className="px-2">
        <img src={lenovoLogo} alt="" />
      </div>
      <div>
        <span className="text-primary-foreground flex flex-col">
          Lenovo{" "}
          <span className="text-bold text-xl leading-2 font-bold uppercase">
            Diagnostics
          </span>
        </span>
      </div>
      <div className="mt-auto">
        <AppVersionBadge />
      </div>
    </div>
  );
}

interface AppNavHeaderItemProps {
  title: string;
  icon: React.ReactNode;
  path: string;
  sticked?: boolean;
}

function AppNavHeaderItem({
  title,
  icon,
  path,
  sticked,
}: AppNavHeaderItemProps) {
  const location = useLocation();
  const isActive = path === location.pathname;
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className={`${isActive && "bg-navbar-active text-navbar-active-foreground"} active:bg-navbar-active hover:bg-navbar-active focus:bg-navbar-active`}
        render={
          <Link to={path}>
            <div>{icon}</div>
            {!sticked && <span className="ml-2">{title}</span>}
          </Link>
        }
      />
    </NavigationMenuItem>
  );
}

function AppSecondaryHeader() {
  const items = [
    { title: "Home", icon: <HomeIcon />, path: "/", sticked: true },
    {
      title: "Diagnostics",
      icon: <ClipboardClockIcon />,
      path: "/diagnostics",
    },
    { title: "Monitor", icon: <ScanHeartIcon />, path: "/monitor" },
    {
      title: "Information Center",
      icon: <MonitorCogIcon />,
      path: "/systemInformation",
    },
    { title: "Assistant", icon: <MessageCircle />, path: "/assistant" },
  ];
  return (
    <div className="bg-primary">
      <NavigationMenu className="px-4 pb-2">
        <NavigationMenuList className="px gap-2">
          {items.map((item, i) => (
            <AppNavHeaderItem
              key={i}
              title={item.title}
              icon={item.icon}
              path={item.path}
              sticked={item.sticked}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex-0">
        <AppPrimaryHeader />
        <AppSecondaryHeader />
      </header>
      <div className="bg-page-background text-page-foreground mx-1 flex-1 rounded-xl p-4">
        {children}
      </div>
    </div>
  );
}

export default AppShell;
