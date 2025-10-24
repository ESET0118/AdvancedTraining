// src/Components/Charts/LineChart.jsx
import { useState, useEffect } from "react";

export default function LineChart({
  dataSets = {
    day: [120, 150, 130, 170, 160, 180, 200],
    week: [400, 600, 550, 800, 750, 900, 950],
    month: [1200, 1500, 1600, 1800, 1700, 2000, 2100],
  },
  width = 700,
  height = 260,
  darkMode = false,
}) {
  const [mode, setMode] = useState("day");
  const [data, setData] = useState(dataSets[mode]);
  const [animatedData, setAnimatedData] = useState(dataSets[mode]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animate transitions when switching mode
  useEffect(() => {
    const target = dataSets[mode];
    let frame = 0;
    const duration = 25; // lower = faster
    const animation = setInterval(() => {
      setAnimatedData((prev) =>
        prev.map((p, i) => p + (target[i] - p) / (duration - frame))
      );
      frame++;
      if (frame >= duration) {
        clearInterval(animation);
        setAnimatedData(target);
      }
    }, 16);
    setData(target);
  }, [mode]);

  if (!animatedData || animatedData.length === 0) return null;

  const max = Math.max(...animatedData);
  const min = Math.min(...animatedData);
  const padding = 30;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const stepX = innerW / (animatedData.length - 1 || 1);

  const points = animatedData.map((d, i) => {
    const x = padding + i * stepX;
    const y = padding + innerH - ((d - min) / (max - min || 1)) * innerH;
    return { x, y, value: Math.round(d) };
  });

  const areaPath = `M ${padding},${padding + innerH} L ${points
    .map((p) => `${p.x},${p.y}`)
    .join(" L ")} L ${padding + innerW},${padding + innerH} Z`;

  // Theme colors
  const bgColor = darkMode ? "#1F2937" : "#ffffff";
  const areaColor = darkMode ? "#374151" : "#f3f4f6";
  const lineColor = darkMode ? "#60A5FA" : "#2563EB";
  const circleColor = darkMode ? "#F9FAFB" : "#111827";
  const tooltipBg = darkMode ? "#111827" : "#f9fafb";

  // Compute analytics for hovered point
  const hoveredData =
    hoveredIndex !== null
      ? {
          value: points[hoveredIndex].value,
          change:
            hoveredIndex > 0
              ? (
                  ((points[hoveredIndex].value -
                    points[hoveredIndex - 1].value) /
                    points[hoveredIndex - 1].value) *
                  100
                ).toFixed(1)
              : null,
        }
      : null;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Mode Switcher */}
      <div className="flex gap-3 mb-4">
        {["day", "week", "month"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 rounded-md text-sm capitalize transition-colors ${
              mode === m
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto transition-transform duration-300"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Background */}
          <rect x="0" y="0" width={width} height={height} rx="8" fill={bgColor} />

          {/* Area */}
          <path d={areaPath} fill={areaColor} />

          {/* Line */}
          <polyline
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke={lineColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "all 0.3s ease-in-out" }}
          />

          {/* Hover vertical line */}
          {hoveredIndex !== null && (
            <line
              x1={points[hoveredIndex].x}
              x2={points[hoveredIndex].x}
              y1={padding}
              y2={height - padding}
              stroke={lineColor}
              strokeWidth="1"
              strokeDasharray="4"
            />
          )}

          {/* Data points */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={hoveredIndex === i ? 6 : 4}
              fill={circleColor}
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredIndex(i)}
            />
          ))}
        </svg>

        {/* Tooltip / Analytics */}
        {hoveredData && (
          <div
            className="absolute text-xs px-3 py-2 rounded-md shadow-md border border-gray-300 dark:border-gray-700"
            style={{
              backgroundColor: tooltipBg,
              color: darkMode ? "#f9fafb" : "#111827",
              top: `${points[hoveredIndex].y - 50}px`,
              left: `${Math.min(points[hoveredIndex].x + 40, width - 100)}px`,
            }}
          >
            <div className="font-semibold text-sm">
              Value: {hoveredData.value}
            </div>
            {hoveredData.change !== null && (
              <div
                className={`${
                  hoveredData.change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } font-medium`}
              >
                {hoveredData.change >= 0 ? "▲" : "▼"} {hoveredData.change}%
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
