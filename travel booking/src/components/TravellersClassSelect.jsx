import React, { useState, useEffect, useRef } from "react";
import { Users, ChevronDown } from "lucide-react";

const TravellersClassSelect = ({ value, onChange }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  // Calculate total traveller count on value change
  useEffect(() => {
    const total =
      (value.adults || 0) + (value.children || 0) + (value.seniors || 0);
    onChange({ ...value, count: total });
  }, [value.adults, value.children, value.seniors]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full text-left" ref={dropdownRef}>
      <label className="text-xs text-gray-500 font-medium mb-1 block">
        Travellers & Class
      </label>

      <div
        className={`border rounded-xl p-3 transition-all duration-200 cursor-pointer ${
          show ? "border-blue-600 shadow-md" : "border-gray-300"
        } flex items-center justify-between bg-white hover:border-blue-400`}
        onClick={() => setShow((prev) => !prev)}
      >
        <div>
          <div className="text-base font-semibold text-gray-900">
            {value.count} {value.count > 1 ? "Travellers" : "Traveller"}
          </div>
          <div className="text-sm text-gray-500">{value.class}</div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-gray-500" size={18} />
          <ChevronDown className="text-gray-500" size={16} />
        </div>
      </div>

      {show && (
        <div className="absolute z-50 mt-1 w-full bg-white border rounded-xl shadow-lg overflow-hidden animate-fade-in p-4 space-y-4">
          {/* Traveller Counts */}
          {["adults", "children", "seniors"].map((type) => {
            const labelMap = {
              adults: "Adults",
              children: "Children",
              seniors: "Seniors",
            };
            const min = type === "adults" ? 1 : 0;
            return (
              <div
                className="flex justify-between items-center"
                key={type}
              >
                <span className="text-sm text-gray-700 font-medium">
                  {labelMap[type]}
                </span>
                <input
                  type="number"
                  min={min}
                  max={9}
                  value={value[type]}
                  onChange={(e) =>
                    onChange({
                      ...value,
                      [type]:
                        Math.max(min, parseInt(e.target.value) || min),
                    })
                  }
                  className="w-16 border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            );
          })}

          {/* Class Selector */}
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="text-sm text-gray-700 font-medium">Class</span>
            <select
              value={value.class}
              onChange={(e) =>
                onChange({ ...value, class: e.target.value })
              }
              className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravellersClassSelect;