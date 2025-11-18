import React from "react";
import Button from "./Button";

export default function YearSelector({ year, setYear }) {
  return (
    <div className="flex items-center space-x-2">
      <Button onClick={() => setYear(year - 1)}>←</Button>
      <span className="font-semibold">{year}</span>
      <Button onClick={() => setYear(year + 1)}>→</Button>
    </div>
  );
}
