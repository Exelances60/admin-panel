import AVATAR12 from "../../assets/avatar_12.jpg";
import AVATAR11 from "../../assets/avatar_2.jpg";
import AVATAR10 from "../../assets/avatar_22.jpg";
import AVATAR9 from "../../assets/avatar_23.jpg";
import AVATAR8 from "../../assets/avatar_5.jpg";

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
export interface DataType {
  key: string;
  name: string;
  avatar: string;
  age: number;
  address: string;
  position: string;
  tags: string[];
}

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

export const TableData: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    position: "Developer",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    position: "UX Designer",
    avatar: AVATAR12,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    position: "Manager",
    avatar: AVATAR11,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    avatar: AVATAR10,
    position: "Manager",
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    position: "Team Leader",
    avatar: AVATAR9,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    age: 32,
    avatar: AVATAR8,
    position: "Developer",
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
