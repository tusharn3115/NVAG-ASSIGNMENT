import React, { useState } from "react";
import TripTypeSelector from "./TripTypeSelector";
import AirportSelect from "./AirportSelect";
import DateSelector from "./DateSelector";
import TravellersClassSelect from "./TravellersClassSelect";

const BookingContainer = () => {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    seniors: 0,
    count: 1,
    class: "Economy",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!from) newErrors.from = "Please select departure airport";
    if (!to) newErrors.to = "Please select arrival airport";
    if (from?.code === to?.code) newErrors.to = "Departure and arrival cannot be the same";
    if (!departureDate) newErrors.departureDate = "Please select departure date";

    if (tripType === "roundtrip") {
      if (!returnDate) {
        newErrors.returnDate = "Please select return date";
      } else if (departureDate && new Date(returnDate) < new Date(departureDate)) {
        newErrors.returnDate = "Return date cannot be before departure date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white border border-gray-500/30 rounded-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Book Your Flight</h2>

      <TripTypeSelector value={tripType} onChange={setTripType} />

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px]">
          <AirportSelect label="From" value={from} onSelect={setFrom} error={errors.from} />
        </div>
        <div className="flex-1 min-w-[250px]">
          <AirportSelect label="To" value={to} onSelect={setTo} error={errors.to} />
        </div>
        <div className="flex-1 min-w-[250px]">
          <DateSelector
            tripType={tripType}
            departureDate={departureDate}
            returnDate={returnDate}
            onDepartureChange={setDepartureDate}
            onReturnChange={setReturnDate}
            errors={errors}
          />
        </div>
        <div className="flex-1 min-w-[250px]">
          <TravellersClassSelect value={travellers} onChange={setTravellers} />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => {
            if (validate()) {
              alert("Booking successful!");
            }
          }}
          className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default BookingContainer;