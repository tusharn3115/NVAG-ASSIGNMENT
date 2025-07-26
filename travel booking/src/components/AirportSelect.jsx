import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // using Lucide icon, install with: npm i lucide-react

const airports = [
  { code: "BLR", city: "Bengaluru", name: "Kempegowda International Airport" },
  { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport" },
  { code: "DEL", city: "Delhi", name: "Indira Gandhi International Airport" },
];

const AirportSelect = ({ label, value, onSelect, error }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="relative w-full text-left">
      <label className="text-xs text-gray-500 font-medium mb-1 block">{label}</label>

      <div
        className={`border rounded-xl p-3 transition-all duration-200 cursor-pointer ${
          showList ? "border-blue-600 shadow-md" : "border-gray-300"
        } flex items-center justify-between bg-white hover:border-blue-400`}
        onClick={() => setShowList((prev) => !prev)}
      >
        <div>
          {value ? (
            <>
              <div className="text-base font-semibold text-gray-900">{value.city}</div>
              <div className="text-sm text-gray-500">{value.code}, {value.name}</div>
            </>
          ) : (
            <span className="text-gray-400 text-base">Select airport</span>
          )}
        </div>
        <ChevronDown size={18} className="text-gray-500 ml-2" />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {showList && (
        <div className="absolute z-50 mt-1 w-full bg-white border rounded-xl shadow-lg overflow-hidden animate-fade-in">
          {airports.map((airport) => (
            <div
              key={airport.code}
              onClick={() => {
                onSelect(airport);
                setShowList(false);
              }}
              className="px-4 py-3 text-sm hover:bg-blue-50 cursor-pointer transition-all"
            >
              <div className="font-semibold">{airport.city} ({airport.code})</div>
              <div className="text-xs text-gray-500">{airport.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportSelect;