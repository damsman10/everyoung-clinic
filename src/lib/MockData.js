export const patients = [
  { id: 1, name: "Ade Johnson", age: 32, gender: "Male", contact: "08012345678", address: "Lagos" },
  { id: 2, name: "Chioma Eze", age: 27, gender: "Female", contact: "08098765432", address: "Abuja" },
];

export const doctors = [
  { id: 1, name: "Dr. Adebayo", specialty: "General Physician", contact: "08011112222", availability: "Mon-Fri" },
  { id: 2, name: "Dr. Fatima", specialty: "Pediatrics", contact: "08033334444", availability: "Tue-Thu" },
];

export const appointments = [
  { id: 1, patientId: 1, doctorId: 1, date: "2025-11-12", time: "10:00", reason: "Checkup", status: "Pending" },
  { id: 2, patientId: 2, doctorId: 2, date: "2025-11-13", time: "12:00", reason: "Vaccination", status: "Pending" },
];

export const users = [
  { id: 1, name: "Admin", email: "admin@everyoung.com", password: "admin123" },
];
