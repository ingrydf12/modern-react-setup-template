import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AppShell from "@/components/Shell/Shell";
import { Outlet } from "@tanstack/react-router";

function Root() {
  return (
    <>
      <AppShell>
        <Outlet />
      </AppShell>
      <TanStackRouterDevtools />
    </>
  );
}

export default Root;
