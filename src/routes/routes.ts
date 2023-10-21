import { lazy } from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookIcon from "@mui/icons-material/Book";
import ShieldIcon from "@mui/icons-material/Shield";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
const Home = lazy(() => import("../pages/Home/Home"));
const Users = lazy(() => import("../pages/Users/Users"));
const Product = lazy(() => import("../pages/Product/Product"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export type routesType = {
  component: React.LazyExoticComponent<React.FC>;
  exact: boolean;
  path: string;
};
export const routes = [
  { path: "/Home", component: Home, exact: true },
  { path: "/dashboard/users", component: Users, exact: true },
  { path: "/dashboard/product", component: Product, exact: true },
  { path: "/dashboard/blog", component: Blog, exact: true },
  { path: "*", component: NotFound, exact: true },
] as routesType[];

export const menuData = [
  {
    name: "Dashboard",
    path: "/Home",
    componet: LeaderboardIcon,
  },
  {
    name: "User",
    path: "/dashboard/users",
    componet: AccountBoxIcon,
  },
  {
    name: "Product",
    path: "/dashboard/product",
    componet: ShoppingCartIcon,
  },
  {
    name: "Blog",
    path: "/dashboard/blog",
    componet: BookIcon,
  },
  {
    name: "Login",
    path: "/",
    componet: ShieldIcon,
  },
  {
    name: "Not Found",
    path: "/*",
    componet: NotInterestedIcon,
  },
];
