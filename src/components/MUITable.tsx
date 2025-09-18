import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { Box, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";

const handleApprove = (driver: any) => {
  console.log("Approved driver:", driver);
  // You can dispatch a Redux action here or call an API
};
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
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    minWidth: 150,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleApprove(params.row)}
      >
        Approve
      </Button>
    ),
  },
];

export default function DriverTable() {
  const { drivers, searchTerm } = useSelector((state: any) => state.driver);

  const filteredDrivers = useMemo(() => {
    if (!searchTerm) return drivers;
    return drivers.filter((driver: any) =>
      driver.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [drivers, searchTerm]);

  return (
    <Box sx={{ height: "100vh", width: "100vw", p: 2 }}>
      <DataGrid
        rows={filteredDrivers}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 20]}
        getRowId={(row) => row.id || row.fusionId}
      />
    </Box>
  );
}
