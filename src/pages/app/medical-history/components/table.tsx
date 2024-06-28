import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MedicalHistory } from "@/state/services/medicalHistory";
export default function MedicalHistoryTable({
  medicalHistories,
}: {
  medicalHistories: MedicalHistory[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Appointment</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {medicalHistories.map((medicalHistory) => (
          <TableRow>
            <TableCell>
              <div className="flex gap-x-2 items-center">
                <div
                  style={{ backgroundColor: medicalHistory.mockProfilePicture }}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p>{medicalHistory.patientName}</p>
                  <p className="font-normal text-[C5D0E6]">
                    {medicalHistory.mockProfilePicture}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>{medicalHistory.appointment}</TableCell>
            <TableCell>{medicalHistory.date}</TableCell>
            <TableCell>{medicalHistory.date}</TableCell>
            <TableHead>{medicalHistory.status}</TableHead>
            <TableHead>action</TableHead>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
