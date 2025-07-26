import React from "react";
import { CalendarDays } from "lucide-react";

const DateSelector = ({
  tripType,
  departureDate,
  returnDate,
  onDepartureChange,
  onReturnChange,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Wrapper for both date fields */}
      <div className={`flex ${tripType === "roundtrip" ? "flex-col md:flex-row gap-4" : "flex-col"} w-full`}>
        
        {/* Departure */}
        <div className="flex-1 relative">
          <label className="text-xs text-gray-500 font-medium mb-1 block">Departure</label>
          <div className="relative flex items-center">
            <input
              type="date"
              value={departureDate || ""}
              onChange={(e) => onDepartureChange(e.target.value)}
              className={`w-full appearance-none bg-white border ${
                errors?.departureDate ? "border-red-500" : "border-gray-300"
              } rounded-xl p-3 pr-10 text-sm focus:outline-none focus:border-blue-600 hover:border-blue-400 transition-all`}
            />
            <CalendarDays className="absolute right-3 text-gray-400" size={18} />
          </div>
          {errors?.departureDate && (
            <p className="text-xs text-red-500 mt-1">{errors.departureDate}</p>
          )}
        </div>

        {/* Return (Only if Round Trip) */}
        {tripType === "roundtrip" && (
          <div className="flex-1 relative">
            <label className="text-xs text-gray-500 font-medium mb-1 block">Return</label>
            <div className="relative flex items-center">
              <input
                type="date"
                value={returnDate || ""}
                onChange={(e) => onReturnChange(e.target.value)}
                className={`w-full appearance-none bg-white border ${
                  errors?.returnDate ? "border-red-500" : "border-gray-300"
                } rounded-xl p-3 pr-10 text-sm focus:outline-none focus:border-blue-600 hover:border-blue-400 transition-all`}
              />
              <CalendarDays className="absolute right-3 text-gray-400" size={18} />
            </div>
            {errors?.returnDate && (
              <p className="text-xs text-red-500 mt-1">{errors.returnDate}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;