import React, { useState, useMemo } from "react";

export interface GitHubCalendarProps {
  username?: string;
  year?: number | "last";
  colorScheme?: "dark" | "light";
  blockSize?: number;
  blockMargin?: number;
  fontSize?: number;
}

// Exact 15 active contribution cells matching Akhil's GitHub screenshot (28 contributions in the last year)
// [col, row (0=Sun..6=Sat), count, level (1..4), dateLabel]
const EXACT_GRID_DATA: { col: number; row: number; count: number; level: 1 | 2 | 3 | 4; date: string }[] = [
  { col: 17, row: 5, count: 2, level: 3, date: "Friday, February 27, 2026" },
  { col: 29, row: 0, count: 1, level: 2, date: "Sunday, May 17, 2026" },
  { col: 35, row: 1, count: 4, level: 4, date: "Monday, June 29, 2026" },
  { col: 42, row: 2, count: 4, level: 4, date: "Tuesday, August 18, 2026" },
  { col: 42, row: 5, count: 2, level: 3, date: "Friday, August 21, 2026" },
  { col: 45, row: 3, count: 1, level: 2, date: "Wednesday, September 9, 2026" },
  { col: 48, row: 2, count: 2, level: 3, date: "Tuesday, September 29, 2026" },
  { col: 49, row: 1, count: 2, level: 3, date: "Monday, October 5, 2026" },
  { col: 49, row: 2, count: 4, level: 4, date: "Tuesday, October 6, 2026" },
  { col: 49, row: 3, count: 1, level: 2, date: "Wednesday, October 7, 2026" },
  { col: 51, row: 1, count: 1, level: 2, date: "Monday, October 19, 2026" },
  { col: 53, row: 2, count: 1, level: 2, date: "Tuesday, October 27, 2026" },
  { col: 53, row: 3, count: 4, level: 4, date: "Wednesday, October 28, 2026" },
  { col: 53, row: 4, count: 1, level: 2, date: "Thursday, October 29, 2026" },
  { col: 53, row: 6, count: 2, level: 3, date: "Saturday, October 31, 2026" },
];

const MONTH_HEADERS = [
  { name: "Nov", col: 0 },
  { name: "Dec", col: 5 },
  { name: "Jan", col: 9 },
  { name: "Feb", col: 13 },
  { name: "Mar", col: 18 },
  { name: "Apr", col: 22 },
  { name: "May", col: 27 },
  { name: "Jun", col: 31 },
  { name: "Jul", col: 36 },
  { name: "Aug", col: 40 },
  { name: "Sep", col: 45 },
  { name: "Oct", col: 49 },
];

// GitHub native dark mode contribution colors
const LEVEL_COLORS: Record<number, string> = {
  0: "#161b22", // GitHub dark empty block
  1: "#0e4429", // Level 1 green
  2: "#006d32", // Level 2 green
  3: "#26a641", // Level 3 bright green
  4: "#39d353", // Level 4 neon green
};

export default function GitHubCalendar({
  username = "AkhilSrinivasa7",
}: GitHubCalendarProps) {
  const [tooltip, setTooltip] = useState<{
    text: string;
    subText?: string;
    x: number;
    y: number;
  } | null>(null);

  // Map of active commits by "col-row"
  const activeMap = useMemo(() => {
    const map = new Map<string, { count: number; level: 1 | 2 | 3 | 4; date: string }>();
    EXACT_GRID_DATA.forEach((item) => {
      map.set(`${item.col}-${item.row}`, item);
    });
    return map;
  }, []);

  const totalColumns = 54;
  const cellSize = 11;
  const cellGap = 3.5;
  const step = cellSize + cellGap;

  return (
    <div className="w-full text-left font-sans select-none">
      {/* 1. Header: Matches GitHub Screenshot exactly */}
      <div className="flex items-center justify-between pb-3 text-xs sm:text-sm">
        <h3 className="font-semibold text-white/90">
          28 contributions in the last year
        </h3>

        <div className="text-[12px] text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors">
          <span>Contribution settings</span>
          <span className="text-[10px]">▼</span>
        </div>
      </div>

      {/* 2. Calendar Frame (Matching GitHub #0d1117 box) */}
      <div className="relative rounded-lg border border-[#30363d] bg-[#0d1117] p-4 sm:p-5 overflow-x-auto shadow-inner">
        {/* Tooltip Float */}
        {tooltip && (
          <div
            className="pointer-events-none fixed z-50 rounded-md bg-[#21262d] border border-[#30363d] px-2.5 py-1.5 text-[11px] text-white shadow-xl -translate-x-1/2 -translate-y-full mb-2"
            style={{ left: tooltip.x, top: tooltip.y - 8 }}
          >
            <div className="font-semibold">{tooltip.text}</div>
            {tooltip.subText && (
              <div className="text-neutral-400 text-[10px]">{tooltip.subText}</div>
            )}
          </div>
        )}

        <div className="min-w-[720px]">
          {/* Months Header Row */}
          <div className="relative h-5 mb-1.5 text-[10px] text-neutral-400 font-mono">
            {MONTH_HEADERS.map((m) => (
              <span
                key={m.name}
                className="absolute"
                style={{ left: 32 + m.col * step }}
              >
                {m.name}
              </span>
            ))}
          </div>

          {/* Grid with Day Labels on Left */}
          <div className="flex">
            {/* Weekday Labels (Mon, Wed, Fri) */}
            <div className="w-8 flex flex-col justify-between pr-2 text-[9px] text-neutral-400 font-mono select-none" style={{ height: 7 * step - cellGap }}>
              <span style={{ transform: `translateY(${1 * step}px)` }}>Mon</span>
              <span style={{ transform: `translateY(${2 * step - 5}px)` }}>Wed</span>
              <span style={{ transform: `translateY(${3 * step - 8}px)` }}>Fri</span>
            </div>

            {/* Grid Columns */}
            <div className="flex gap-[3.5px]">
              {Array.from({ length: totalColumns }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3.5px]">
                  {Array.from({ length: 7 }).map((_, rowIdx) => {
                    const active = activeMap.get(`${colIdx}-${rowIdx}`);
                    const count = active ? active.count : 0;
                    const level = active ? active.level : 0;
                    const color = LEVEL_COLORS[level];

                    return (
                      <div
                        key={rowIdx}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltip({
                            text: count === 0 ? "No contributions" : `${count} contribution${count > 1 ? "s" : ""}`,
                            subText: active?.date,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          width: `${cellSize}px`,
                          height: `${cellSize}px`,
                          backgroundColor: color,
                        }}
                        className={`rounded-[2px] cursor-pointer transition-all ${
                          count > 0
                            ? "hover:ring-1 hover:ring-white/80 hover:scale-125 hover:z-20 shadow-sm"
                            : "hover:ring-1 hover:ring-white/30"
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Footer: Learn how we count contributions & Legend */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-[11px] text-neutral-400 border-t border-[#30363d]/60">
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-lime transition-colors"
            >
              Learn how we count contributions
            </a>

            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <span className="mr-1">Less</span>
              <span className="inline-block w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[0] }} />
              <span className="inline-block w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[1] }} />
              <span className="inline-block w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[2] }} />
              <span className="inline-block w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[3] }} />
              <span className="inline-block w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: LEVEL_COLORS[4] }} />
              <span className="ml-1">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}