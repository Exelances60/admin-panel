import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookIcon from "@mui/icons-material/Book";
import ShieldIcon from "@mui/icons-material/Shield";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import Product from "../pages/Product/Product";
import NotFound from "../pages/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";

export const routes = [
  { component: Home, exact: true, path: "/Home" },
  { path: "/dashboard/users", component: Users, exact: true },
  { path: "/dashboard/product", component: Product, exact: true },
  { path: "/dashboard/blog", component: Blog, exact: true },
  { path: "*", component: NotFound, exact: true },
];
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
