"use client";

import React, { useState } from "react";
import { SidebarTrigger } from "@/components/atoms/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Download,
  Search,
  Filter,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type BookingStatus = "confirmed" | "pending" | "completed" | "cancelled";

interface Booking {
  id: string;
  clientName: string;
  eventName: string;
  bookedOn: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
}

interface StatusConfigEntry {
  label: string;
  className: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const bookings: Booking[] = [
  {
    id: "#BK-001",
    clientName: "Ana Reyes",
    eventName: "Silver Anniversary Gala",
    bookedOn: "May 2, 2026",
    startDate: "Jun 14, 2026",
    endDate: "Jun 14, 2026",
    status: "confirmed",
  },
  {
    id: "#BK-002",
    clientName: "Marco Santos",
    eventName: "Product Launch Night",
    bookedOn: "May 5, 2026",
    startDate: "Jun 20, 2026",
    endDate: "Jun 21, 2026",
    status: "pending",
  },
  {
    id: "#BK-003",
    clientName: "Lena Villanueva",
    eventName: "Corporate Team Outing",
    bookedOn: "May 7, 2026",
    startDate: "Jun 28, 2026",
    endDate: "Jun 29, 2026",
    status: "confirmed",
  },
  {
    id: "#BK-004",
    clientName: "David Tan",
    eventName: "Wedding Reception",
    bookedOn: "May 8, 2026",
    startDate: "Jul 5, 2026",
    endDate: "Jul 6, 2026",
    status: "confirmed",
  },
  {
    id: "#BK-005",
    clientName: "Sofia Lim",
    eventName: "Art Exhibit Opening",
    bookedOn: "May 10, 2026",
    startDate: "Jul 12, 2026",
    endDate: "Jul 15, 2026",
    status: "pending",
  },
  {
    id: "#BK-006",
    clientName: "Jerome Cruz",
    eventName: "Tech Summit 2026",
    bookedOn: "May 11, 2026",
    startDate: "Jul 18, 2026",
    endDate: "Jul 19, 2026",
    status: "completed",
  },
  {
    id: "#BK-007",
    clientName: "Marisol Ortega",
    eventName: "Charity Dinner Ball",
    bookedOn: "May 13, 2026",
    startDate: "Jul 25, 2026",
    endDate: "Jul 25, 2026",
    status: "confirmed",
  },
  {
    id: "#BK-008",
    clientName: "Patrick Aquino",
    eventName: "Music Festival Stage",
    bookedOn: "May 15, 2026",
    startDate: "Aug 2, 2026",
    endDate: "Aug 4, 2026",
    status: "cancelled",
  },
  {
    id: "#BK-009",
    clientName: "Grace Mendoza",
    eventName: "Kids Birthday Bash",
    bookedOn: "May 16, 2026",
    startDate: "Aug 9, 2026",
    endDate: "Aug 9, 2026",
    status: "confirmed",
  },
  {
    id: "#BK-010",
    clientName: "Nico Bautista",
    eventName: "Alumni Reunion Night",
    bookedOn: "May 18, 2026",
    startDate: "Aug 16, 2026",
    endDate: "Aug 17, 2026",
    status: "pending",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors: { bg: string; text: string }[] = [
  { bg: "bg-blue-100", text: "text-blue-700" },
  { bg: "bg-green-100", text: "text-green-700" },
  { bg: "bg-amber-100", text: "text-amber-700" },
  { bg: "bg-pink-100", text: "text-pink-700" },
  { bg: "bg-teal-100", text: "text-teal-700" },
  { bg: "bg-orange-100", text: "text-orange-700" },
];

const statusConfig: Record<BookingStatus, StatusConfigEntry> = {
  confirmed: { label: "Confirmed", className: "bg-green-100 text-green-800" },
  pending: { label: "Pending", className: "bg-amber-100 text-amber-800" },
  completed: { label: "Completed", className: "bg-blue-100 text-blue-800" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-800" },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: BookingStatus }) {
  const { label, className } = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        className
      )}
    >
      {label}
    </span>
  );
}

function Avatar({ name, index }: { name: string; index: number }) {
  const color = avatarColors[index % avatarColors.length];
  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-medium shrink-0",
        color.bg,
        color.text
      )}
    >
      {initials(name)}
    </span>
  );
}

function StatCard({
  label,
  value,
  delta,
  deltaUp,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaUp?: boolean;
}) {
  return (
    <div className="rounded-lg bg-muted/50 p-4">
      <p className="text-xs text-muted-foreground mb-1.5">{label}</p>
      <p className="text-2xl font-medium">{value}</p>
      {delta && (
        <p
          className={cn(
            "text-xs mt-1",
            deltaUp
              ? "text-green-700"
              : deltaUp === false
              ? "text-red-700"
              : "text-muted-foreground"
          )}
        >
          {delta}
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const BookingsPage = () => {
  const [query, setQuery] = useState("");

  const filtered = bookings.filter((b) => {
    const q = query.toLowerCase();
    return (
      b.clientName.toLowerCase().includes(q) ||
      b.eventName.toLowerCase().includes(q) ||
      b.id.toLowerCase().includes(q) ||
      b.status.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* Top bar */}
      <header className="flex items-center justify-between border-b px-6 py-4 bg-background">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <div>
            <h1 className="text-base font-medium">Bookings</h1>
            <p className="text-xs text-muted-foreground">
              Manage all event reservations
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard
            label="Total bookings"
            value="248"
            delta="↑ 12% this month"
            deltaUp={true}
          />
          <StatCard
            label="Confirmed"
            value="184"
            delta="↑ 8% this month"
            deltaUp={true}
          />
          <StatCard label="Pending" value="41" delta="Awaiting approval" />
          <StatCard
            label="Cancelled"
            value="23"
            delta="↓ 3% this month"
            deltaUp={false}
          />
        </div>

        {/* Table card */}
        <div className="rounded-lg border bg-background overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-1.5">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search bookings..."
                  className="h-auto border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0 w-44"
                />
              </div>
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                <Filter className="h-3.5 w-3.5" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                <CalendarDays className="h-3.5 w-3.5" /> Date range
              </Button>
            </div>
            <span className="text-xs text-muted-foreground">
              {filtered.length} booking{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">ID</TableHead>
                <TableHead>Client name</TableHead>
                <TableHead>Event name</TableHead>
                <TableHead>Booked on</TableHead>
                <TableHead>Start date</TableHead>
                <TableHead>End date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center text-muted-foreground py-10"
                  >
                    No bookings found.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((booking, i) => (
                  <TableRow key={booking.id} className="cursor-pointer">
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {booking.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar name={booking.clientName} index={i} />
                        <span className="text-sm">{booking.clientName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-sm">
                      {booking.eventName}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {booking.bookedOn}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {booking.startDate}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {booking.endDate}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={booking.status} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <span className="text-xs text-muted-foreground">
              Showing 1–{filtered.length} of {filtered.length} bookings
            </span>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon-sm" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                1
              </Button>
              <Button variant="outline" size="icon-sm">
                2
              </Button>
              <Button variant="outline" size="icon-sm">
                3
              </Button>
              <Button variant="outline" size="icon-sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingsPage;
