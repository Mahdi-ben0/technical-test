import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
} from "@/components/ui/dialog";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function AlertDialogI({ message }: { message: string }) {
  const state = useSelector((state: RootState) => state.alert);
  return (
    <AlertDialog open={state.open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
