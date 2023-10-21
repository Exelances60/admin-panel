import { ComponentType, lazy, startTransition } from "react";
import { companyData } from "../store/ComponyData/CompanyReducer";
import { ChartDataProps } from "./Data/Data";

export type articlesType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id?: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

export type BlogData = {
  articles: articlesType[];
  status: string;
  totalResults: number;
};

export const fetchCompanyData = async (url: string): Promise<companyData[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return new Promise<companyData[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const fetchChartsData = async (
  url: string
): Promise<ChartDataProps[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return new Promise<ChartDataProps[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const fetchTasksData = async (url: string): Promise<string[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchGetProduct = async (url: string): Promise<any> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const fetchGetBlogData = async (url: string): Promise<BlogData> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
