import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const columns: GridColDef[] = [
  { field: "fusionId", headerName: "Fusion ID", flex: 1, minWidth: 120 },
  { field: "fullName", headerName: "Full Name", flex: 1, minWidth: 180 },
  { field: "nationality", headerName: "Nationality", flex: 1, minWidth: 140 },
  { field: "rtaPermitNo", headerName: "RTA Permit No", flex: 1, minWidth: 150 },
  {
    field: "permitExpiryDate",
    headerName: "Permit Expiry Date",
    flex: 1,
    minWidth: 180,
  },
  { field: "trafficCode", headerName: "Traffic Code", flex: 1, minWidth: 140 },
  { field: "dob", headerName: "Date of Birth", flex: 1, minWidth: 150 },
  { field: "mobileNo", headerName: "Mob No", flex: 1, minWidth: 140 },
  { field: "eidNo", headerName: "EID No", flex: 1, minWidth: 150 },
  {
    field: "eidExpiryDate",
    headerName: "EID Expiry Date",
    flex: 1,
    minWidth: 180,
  },
  {
    field: "drivingLicenseNo",
    headerName: "Driving License No",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "dlExpiryDate",
    headerName: "DL Expiry Date",
    flex: 1,
    minWidth: 180,
  },
];

export default function DriverTable() {
  const drivers = useSelector((state: any) => state.driver.drivers);
  console.log("🚀 ~ DriverTable ~ drivers:", drivers);

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <DataGrid
        rows={drivers}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
}
