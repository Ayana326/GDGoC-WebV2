import React, { useState, useEffect } from "react";
import { YearBarProps } from "~/types/index";

export const YearBox: React.FC<YearBarProps> = ({
  years,
  selectedYear,
  onYearChange,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(event.target.value);
  };

  return (
    <div className="year-bar">
      {
        <select value={selectedYear} onChange={handleChange}>
            {years.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
            ))}
        </select>
      }
    </div>
  );
};

export default YearBox;
