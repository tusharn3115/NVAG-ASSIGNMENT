const TripTypeSelector = ({ value, onChange }) => {
  return (
    <div className="flex gap-2">
      {["oneway", "roundtrip"].map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-4 py-2 rounded-full ${
            value === type
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-600"
          }`}
        >
          {type === "oneway" ? "One Way" : "Round Trip"}
        </button>
      ))}
    </div>
  );
};

export default TripTypeSelector;