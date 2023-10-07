export type ChartDataProps = {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};
export type timelineItemsProps = {
  color: string;
  content: string;
};

export const timelineItems: timelineItemsProps[] = [
  {
    color: "red",
    content: "Create a services site 2015-09-01",
  },
  {
    color: "green",
    content: "Solve initial network problems 2015-09-01",
  },
  {
    color: "blue",
    content: "Technical testing 2015-09-01",
  },
  {
    color: "purple",
    content: "Network problems being solved 2015-09-01",
  },
];
