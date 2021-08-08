import MaterialTable from "material-table";
import PatchedPagination from "../provider/PatchedPagination";

const DataTable = (props) => {
  return (
    <MaterialTable
      {...props}
      components={{
        Pagination: PatchedPagination,
      }}
    />
  );
};

export default DataTable;
