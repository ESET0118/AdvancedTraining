// src/Components/Table.jsx
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MoreVertical } from "lucide-react";

export default function Table({
  columns,
  data,
  rowsPerPage = 10,
  onAction,
  menuOptions = [],
  rowKeyProp,
}) {
  const [page, setPage] = useState(1);
  const [openRowKey, setOpenRowKey] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef({});
  const totalPages = Math.max(1, Math.ceil(data.length / rowsPerPage));
  const startIdx = (page - 1) * rowsPerPage;
  const pageData = data.slice(startIdx, startIdx + rowsPerPage);

  const getRowKey = (row, fallbackIndex) =>
    rowKeyProp && row[rowKeyProp] !== undefined
      ? String(row[rowKeyProp])
      : row.id !== undefined
      ? String(row.id)
      : row.meterId !== undefined
      ? String(row.meterId)
      : `r-${startIdx + fallbackIndex}`;

  const toggleMenuFor = (rowKey) => {
    if (openRowKey === rowKey) return setOpenRowKey(null);

    const btn = buttonRefs.current[rowKey];
    if (!btn) return setOpenRowKey(null);

    const rect = btn.getBoundingClientRect();
    const dropdownWidth = 160; // px
    const left = Math.min(
      Math.max(8, rect.right - dropdownWidth),
      window.innerWidth - dropdownWidth - 8
    );
    const top = rect.bottom + window.scrollY + 6;
    setMenuPos({ top, left });
    setOpenRowKey(rowKey);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      const clickedInside = Object.values(buttonRefs.current).some(
        (el) => el && el.contains(e.target)
      );
      if (!clickedInside) setOpenRowKey(null);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Recalculate dropdown position on scroll/resize
  useEffect(() => {
    if (!openRowKey) return;
    const handle = () => toggleMenuFor(openRowKey);
    window.addEventListener("scroll", handle, true);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle, true);
      window.removeEventListener("resize", handle);
    };
  }, [openRowKey]);

  return (
    <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 shadow-sm relative">
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 font-semibold border-b border-gray-200 dark:border-gray-700"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map((row, idx) => {
            const rowKey = getRowKey(row, idx);
            return (
              <tr
                key={rowKey}
                className="border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 align-top">
                    {col.key === "actions" ? (
                      <button
                        ref={(el) => (buttonRefs.current[rowKey] = el)}
                        onClick={() => toggleMenuFor(rowKey)}
                        className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                        aria-expanded={openRowKey === rowKey}
                        aria-haspopup="true"
                      >
                        <MoreVertical size={16} />
                      </button>
                    ) : (
                      (row[col.key] ?? "").toString()
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      {data.length > rowsPerPage && (
        <div className="flex justify-center items-center gap-3 py-4 text-sm">
          <button
            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            ← Previous
          </button>
          <span className="text-gray-600 dark:text-gray-400">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next →
          </button>
        </div>
      )}

      {/* Dropdown Portal */}
      {openRowKey &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: menuPos.top,
              left: menuPos.left,
              zIndex: 9999,
            }}
          >
            <div className="w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg animate-fadeIn">
              {menuOptions.map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => {
                    const rowObj = data.find((r) =>
                      rowKeyProp && r[rowKeyProp] !== undefined
                        ? String(r[rowKeyProp]) === openRowKey
                        : r.meterId !== undefined && String(r.meterId) === openRowKey
                    );
                    onAction?.(opt.type, rowObj);
                    setOpenRowKey(null);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    opt.type === "deactivate"
                      ? "text-red-600 dark:text-red-400"
                      : opt.type === "activate"
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
