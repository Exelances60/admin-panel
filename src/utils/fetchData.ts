import { companyData } from "../store/ComponyData/CompanyReducer";

export const fetchCompanyData = async (url: string): Promise<companyData[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return new Promise<companyData[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};
