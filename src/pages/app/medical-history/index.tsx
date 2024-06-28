import MedicalHistoryList from "./components/medicalHistoryList";

export default function MedicalHistory() {
  return (
    <main className="flex-grow p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-[#192252]">Medical History</h1>
      <MedicalHistoryList />
    </main>
  );
}
