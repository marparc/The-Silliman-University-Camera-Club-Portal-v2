"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CalendarIcon,
} from "lucide-react";
import { format } from "date-fns";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  maxDate?: Date;
  minDate?: Date;
  placeholder?: string;
}

export function DatePicker({
  value,
  onChange,
  maxDate,
  minDate,
  placeholder = "Pick a date",
}: DatePickerProps) {
  const today = new Date();
  const initialDate = value ?? maxDate ?? today;

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setMonthDropdownOpen(false);
        setYearDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const minYear = minDate ? minDate.getFullYear() : 1950;
  const maxYear = maxDate ? maxDate.getFullYear() : today.getFullYear();

  function isDateDisabled(year: number, month: number, day: number) {
    const d = new Date(year, month, day);
    if (maxDate && d > maxDate) return true;
    if (minDate && d < minDate) return true;
    return false;
  }

  function isToday(year: number, month: number, day: number) {
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  }

  function isSelected(year: number, month: number, day: number) {
    return (
      value !== undefined &&
      value.getFullYear() === year &&
      value.getMonth() === month &&
      value.getDate() === day
    );
  }

  function prevMonth() {
    if (viewMonth === 0) {
      if (viewYear - 1 >= minYear) {
        setViewMonth(11);
        setViewYear((v) => v - 1);
      }
    } else {
      setViewMonth((v) => v - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      if (viewYear + 1 <= maxYear) {
        setViewMonth(0);
        setViewYear((v) => v + 1);
      }
    } else {
      setViewMonth((v) => v + 1);
    }
  }

  function canGoPrev() {
    return !(viewMonth === 0 && viewYear <= minYear);
  }

  function canGoNext() {
    if (maxDate) {
      return !(
        viewYear > maxDate.getFullYear() ||
        (viewYear === maxDate.getFullYear() && viewMonth >= maxDate.getMonth())
      );
    }
    return !(viewMonth === 11 && viewYear >= maxYear);
  }

  function selectDay(day: number) {
    if (isDateDisabled(viewYear, viewMonth, day)) return;
    const selected = new Date(viewYear, viewMonth, day);
    onChange?.(selected);
    setOpen(false);
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  // Build calendar grid: nulls for leading blanks
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // Pad to full rows
  while (cells.length % 7 !== 0) cells.push(null);

  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  ).reverse();

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "w-full flex items-center gap-2 px-3 py-2.5 text-sm transition-colors",
          "bg-neutral-800/60 border border-neutral-700",
          "focus:outline-none focus:border-red-800",
          value ? "text-white" : "text-neutral-600",
        ].join(" ")}
      >
        <CalendarIcon
          size={14}
          strokeWidth={1.5}
          className="text-neutral-500 shrink-0"
        />
        {value ? format(value, "MMMM d, yyyy") : placeholder}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 top-full left-0 mt-1 w-full bg-neutral-900 border border-neutral-700 shadow-xl shadow-black/60">
          {/* Header: month + year controls */}
          <div className="flex items-center justify-between px-3 pt-3 pb-2 border-b border-neutral-800">
            {/* Prev */}
            <button
              type="button"
              onClick={prevMonth}
              disabled={!canGoPrev()}
              className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} strokeWidth={1.5} />
            </button>

            {/* Month selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMonthDropdownOpen((o) => !o)}
                className="text-xs font-medium text-neutral-200 hover:text-white px-2 py-1 hover:bg-neutral-800 transition-colors"
              >
                {MONTHS[viewMonth]}
              </button>
              {monthDropdownOpen && (
                <div className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-1 bg-neutral-900 border border-neutral-700 shadow-xl shadow-black/60 grid grid-cols-3 gap-px p-1 w-48">
                  {MONTHS.map((m, i) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setViewMonth(i);
                        setMonthDropdownOpen(false);
                      }}
                      className={[
                        "text-xs py-1.5 px-1 transition-colors text-center",
                        i === viewMonth
                          ? "bg-red-800 text-white"
                          : "text-neutral-300 hover:bg-neutral-700 hover:text-white",
                      ].join(" ")}
                    >
                      {m.slice(0, 3)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Year dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setYearDropdownOpen((o) => !o)}
                className="text-xs font-medium text-neutral-200 hover:text-white px-2 py-1 hover:bg-neutral-800 transition-colors flex items-center gap-1"
              >
                {viewYear}
                <ChevronDown
                  size={10}
                  strokeWidth={2}
                  className="text-neutral-500"
                />
              </button>
              {yearDropdownOpen && (
                <div
                  className="absolute z-20 top-full left-1/2 -translate-x-1/2 mt-1 bg-neutral-900 border border-neutral-700 shadow-xl shadow-black/60 w-20 max-h-48 overflow-y-auto
                  [&::-webkit-scrollbar]:w-1
                  [&::-webkit-scrollbar-track]:bg-neutral-900
                  [&::-webkit-scrollbar-thumb]:bg-neutral-600
                  [&::-webkit-scrollbar-thumb:hover]:bg-red-800
                  [scrollbar-width:thin]
                  [scrollbar-color:#525252_#171717]"
                >
                  {years.map((y) => (
                    <button
                      key={y}
                      type="button"
                      onClick={() => {
                        setViewYear(y);
                        setYearDropdownOpen(false);
                      }}
                      className={[
                        "w-full text-xs py-1.5 px-2 text-center transition-colors",
                        y === viewYear
                          ? "bg-red-800 text-white"
                          : "text-neutral-300 hover:bg-neutral-700 hover:text-white",
                      ].join(" ")}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextMonth}
              disabled={!canGoNext()}
              className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight size={14} strokeWidth={1.5} />
            </button>
          </div>

          {/* Day-of-week labels */}
          <div className="grid grid-cols-7 px-3 pt-2">
            {DAY_LABELS.map((d) => (
              <div
                key={d}
                className="text-center text-[10px] text-neutral-600 font-medium py-1 select-none"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 px-3 pb-3 gap-y-0.5">
            {cells.map((day, idx) => {
              if (day === null) return <div key={`blank-${idx}`} />;

              const disabled = isDateDisabled(viewYear, viewMonth, day);
              const selected = isSelected(viewYear, viewMonth, day);
              const todayCell = isToday(viewYear, viewMonth, day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => selectDay(day)}
                  disabled={disabled}
                  className={[
                    "text-xs py-1.5 w-full transition-colors select-none",
                    selected
                      ? "bg-red-800 text-white"
                      : disabled
                      ? "text-neutral-700 cursor-not-allowed"
                      : todayCell
                      ? "text-red-400 hover:bg-neutral-700 hover:text-white"
                      : "text-neutral-300 hover:bg-neutral-700 hover:text-white",
                  ].join(" ")}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Footer: today shortcut */}
          {!isDateDisabled(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
          ) && (
            <div className="border-t border-neutral-800 px-3 py-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  onChange?.(today);
                  setViewYear(today.getFullYear());
                  setViewMonth(today.getMonth());
                  setOpen(false);
                }}
                className="text-[10px] text-neutral-500 hover:text-red-400 transition-colors"
              >
                Today
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
