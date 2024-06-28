import { useGetMedicalHistoryQuery } from "@/state/services/medicalHistory";
import MedicalHistoryTable from "@/pages/app/medical-history/components/table";
import TableSkeleton from "@/components/ui/table-skeleton";
export default function MedicalHistoryList() {
  const {
    data: medicalHistories,
    isError,
    isLoading,
  } = useGetMedicalHistoryQuery();

  if (isLoading)
    return (
      <TableSkeleton
        headerTitles={[
          "Patient",
          "Appointment",
          "Date",
          "Time",
          "Status",
          "Action",
        ]}
      />
    );

  if (isError || !medicalHistories)
    return <div>Error! please try again later</div>;

  return <MedicalHistoryTable medicalHistories={medicalHistories} />;
}
