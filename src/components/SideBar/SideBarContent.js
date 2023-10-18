import { BsBarChartSteps } from "react-icons/bs";
import { NAVIGATION_ROUTES } from "../routes/routes.constant";
import { AiOutlineDashboard } from "react-icons/ai";

export const sidebarContent = [
  {
    name: "Dashboard",
    to: NAVIGATION_ROUTES.DASHBOARD,
    icon: <AiOutlineDashboard size={"26px"} />,
  },
  {
    name: "Chart",
    to: NAVIGATION_ROUTES.CHART,
    icon: <BsBarChartSteps />,
  },
];
