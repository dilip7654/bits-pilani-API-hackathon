const HospitalList = ({ hospitals, selectedHospital, onHospitalSelect }) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hospitals.map((hospital) => (
        <div
          key={hospital.id}
          className={`p-4 border rounded-md ${
            selectedHospital?.id === hospital.id ? "border-blue-500" : "border-gray-300"
          } hover:shadow-md cursor-pointer`}
          onClick={() => onHospitalSelect(hospital)}
        >
          <h3 className="font-semibold">{hospital.name}</h3>
          <p>{hospital.distance} away</p>
          <p>Rating: {hospital.rating.toFixed(1)}</p>
        </div>
      ))}
    </div>
  );
};

export default HospitalList;
