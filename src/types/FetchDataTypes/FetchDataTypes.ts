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

export type Datasets = {
  label: string;
  data: Array<number>;
  borderWidth: number;
};

export type companyData = {
  count: string;
  name: string;
  component: string;
  color: string;
};

export type MenuDataTypes = {
  name: string;
  path: string;
  componet: any;
};

export type dataProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any;
  title: string;
};
