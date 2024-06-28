import {
  Table,
  TableBody,
  TableCellSkeleton,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function TableSkeleton({
  headerTitles,
}: {
  headerTitles: string[];
}) {
  return (
    <>
      <div className="w-full overflow-hidden rounded-md border-[0.5px] border-blue-200 bg-gray-white">
        <Table>
          <TableHeader>
            <TableRow>
              {headerTitles.map((title, i) => (
                <TableHead key={i}>{title}</TableHead>
              ))}
            </TableRow>
            {/* HACK for border to work with sticky */}
            <tr>
              <th
                colSpan={headerTitles.length}
                className="h-[0.5px] bg-blue-200 p-0"
              />
            </tr>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 20 }).map((_, i) => (
              <TableRow key={i}>
                {Array.from({
                  length: headerTitles.length,
                }).map((_, index) => (
                  <TableCellSkeleton key={index} />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
