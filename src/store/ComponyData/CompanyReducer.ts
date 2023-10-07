import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type companyData = {
  count: string;
  name: string;
  component: string;
  color: string;
};

export type CompanyState = {
  data: companyData[];
};

const initialState: CompanyState = {
  data: [] as companyData[],
};

export const companySlice = createSlice({
  name: "company",
  initialState: initialState,
  reducers: {
    addCompany: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addCompany } = companySlice.actions;
export const selectCompany = (state: RootState) => state.company.data;

export default companySlice.reducer;
