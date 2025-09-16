import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Driver {
  id: number;
  fusionId: string;
  fullName: string;
  nationality: string;
  rtaPermitNo: string;
  permitExpiryDate: string;
  trafficCode: string;
  dob: string;
  mobileNo: string;
  eidNo: string;
  eidExpiryDate: string;
  drivingLicenseNo: string;
  dlExpiryDate: string;
}

interface DriverState {
  drivers: Driver[];
  searchTerm: string; // 🔍 New field
}

const initialState: DriverState = {
  drivers: [
    {
      id: 1,
      fusionId: "F123",
      fullName: "John Doe",
      nationality: "Pakistani",
      rtaPermitNo: "RTA4567",
      permitExpiryDate: "2026-05-20",
      trafficCode: "TC7890",
      dob: "1995-02-10",
      mobileNo: "0501234567",
      eidNo: "EID123456",
      eidExpiryDate: "2027-01-01",
      drivingLicenseNo: "DL98765",
      dlExpiryDate: "2028-06-15",
    },
    {
      id: 2,
      fusionId: "F124",
      fullName: "Jane Smith",
      nationality: "Indian",
      rtaPermitNo: "RTA9876",
      permitExpiryDate: "2025-11-10",
      trafficCode: "TC6543",
      dob: "1990-08-12",
      mobileNo: "0559876543",
      eidNo: "EID987654",
      eidExpiryDate: "2026-04-30",
      drivingLicenseNo: "DL54321",
      dlExpiryDate: "2027-09-20",
    },
    {
      id: 3,
      fusionId: "F125",
      fullName: "Ali Khan",
      nationality: "Pakistani",
      rtaPermitNo: "RTA1122",
      permitExpiryDate: "2027-02-18",
      trafficCode: "TC3322",
      dob: "1988-03-25",
      mobileNo: "0561239876",
      eidNo: "EID654321",
      eidExpiryDate: "2028-05-05",
      drivingLicenseNo: "DL67890",
      dlExpiryDate: "2029-12-31",
    },
    {
      id: 4,
      fusionId: "F126",
      fullName: "Maria Garcia",
      nationality: "Spanish",
      rtaPermitNo: "RTA2233",
      permitExpiryDate: "2026-08-22",
      trafficCode: "TC7788",
      dob: "1993-12-15",
      mobileNo: "0528765432",
      eidNo: "EID112233",
      eidExpiryDate: "2027-07-12",
      drivingLicenseNo: "DL11223",
      dlExpiryDate: "2028-03-11",
    },
    {
      id: 5,
      fusionId: "F127",
      fullName: "Chen Wei",
      nationality: "Chinese",
      rtaPermitNo: "RTA4455",
      permitExpiryDate: "2025-06-01",
      trafficCode: "TC9988",
      dob: "1992-06-19",
      mobileNo: "0581122334",
      eidNo: "EID556677",
      eidExpiryDate: "2026-09-30",
      drivingLicenseNo: "DL33445",
      dlExpiryDate: "2027-11-01",
    },
  ],
  searchTerm: "", // 🔍 New initial value
};

const driverSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    addDriver: (state, action: PayloadAction<Driver>) => {
      state.drivers.push(action.payload);
    },
    removeDriver: (state, action: PayloadAction<number>) => {
      state.drivers = state.drivers.filter((d) => d.id !== action.payload);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addDriver, removeDriver, setSearchTerm } = driverSlice.actions;
export default driverSlice.reducer;
