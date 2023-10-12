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

export const DonutBarData = [
  {
    type: "demo1",
    value: 27,
  },
  {
    type: "demo2",
    value: 25,
  },
  {
    type: "demo3",
    value: 18,
  },
  {
    type: "demo4",
    value: 15,
  },
  {
    type: "demo5",
    value: 10,
  },
  {
    type: "demo6",
    value: 5,
  },
];
