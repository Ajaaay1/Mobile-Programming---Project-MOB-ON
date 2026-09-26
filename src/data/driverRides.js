// Dummy ride requests for the Driver Home activity.
// Each request has a unique id used by src/app/driver/details/[id].jsx.
const DRIVER_RIDES = [
  {
    id: "1",
    passenger: "Maria Santos",
    pickup: "Matina Town Square",
    destination: "SM City Davao",
    fare: "₱120",
    distance: "4.2 km",
    status: "Waiting for driver",
  },
  {
    id: "2",
    passenger: "John Dela Cruz",
    pickup: "Abreeza Mall",
    destination: "Davao Airport",
    fare: "₱180",
    distance: "7.1 km",
    status: "Waiting for driver",
  },
  {
    id: "3",
    passenger: "Ana Reyes",
    pickup: "Bajada",
    destination: "University of Mindanao",
    fare: "₱95",
    distance: "3.5 km",
    status: "Waiting for driver",
  },
  {
    id: "4",
    passenger: "Carlos Garcia",
    pickup: "Ecoland Bus Terminal",
    destination: "Roxas Avenue",
    fare: "₱110",
    distance: "4.8 km",
    status: "Waiting for driver",
  },
  {
    id: "5",
    passenger: "Sofia Lim",
    pickup: "Lanang",
    destination: "People's Park",
    fare: "₱135",
    distance: "5.6 km",
    status: "Waiting for driver",
  },
];

export default DRIVER_RIDES;
