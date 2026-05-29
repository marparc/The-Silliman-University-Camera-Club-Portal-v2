"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/atoms/sidebar";
import { TooltipProvider } from "@/components/atoms/tooltip";
import {
  CalendarCheck,
  Sparkles,
  Users,
  UserCheck,
  Camera,
  ChevronRight,
  Search,
  PackageCheck,
  RotateCcw,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atoms/collapsible";
import { useRouter, usePathname } from "next/navigation";

const navMain = [
  { label: "Bookings", icon: CalendarCheck, href: "/dashboard/bookings" },
  { label: "Events", icon: Sparkles, href: "/dashboard/events" },
  { label: "Clients", icon: Users, href: "/dashboard/clients" },
  { label: "Members", icon: UserCheck, href: "/dashboard/members" },
];

const equipmentSub = [
  { label: "Browse Gear", icon: Search, href: "/dashboard/equipment/browse" },
  {
    label: "My Equipment",
    icon: PackageCheck,
    href: "/dashboard/equipment/mine",
  },
  {
    label: "My Borrowings",
    icon: RotateCcw,
    href: "/dashboard/equipment/borrowings",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader className="bg-black p-3 flex-row items-center justify-between">
            <img
              src="/succ-portal-homepage-logo.png"
              alt="SUCC Portal"
              className="w-55 object-contain group-data-[collapsible=icon]:hidden"
            />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navMain.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        tooltip={item.label}
                        isActive={pathname === item.href}
                        onClick={() => router.push(item.href)}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}

                  {/* Equipment collapsible */}
                  <Collapsible
                    asChild
                    className="group/collapsible"
                    defaultOpen={pathname.startsWith("/dashboard/equipment")}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip="Equipment"
                          isActive={pathname.startsWith("/dashboard/equipment")}
                        >
                          <Camera />
                          <span>Equipment</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {equipmentSub.map((sub) => (
                            <SidebarMenuSubItem key={sub.label}>
                              <SidebarMenuSubButton
                                isActive={pathname === sub.href}
                                onClick={() => router.push(sub.href)}
                              >
                                <sub.icon />
                                <span>{sub.label}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" tooltip="Jamie Dela Cruz">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-[10px] font-medium shrink-0">
                    JD
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium">Jamie Dela Cruz</span>
                    <span className="text-xs text-muted-foreground">Admin</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="h-full">{children}</SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
