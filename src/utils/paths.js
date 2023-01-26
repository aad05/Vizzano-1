import Flow from "../components/Flow";
import FlowSection from "../components/FlowSection";
import Home from "../components/Home";
import Report from "../components/Report";
import Store from "../components/Store";

export const paths = [
  {
    id: 0,
    Component: Home,
    path: "/",
  },
  {
    id: 1,
    Component: Flow,
    path: "/flow/:idFlow",
  },
  {
    id: 2,
    Component: FlowSection,
    path: "/flow/:idFlow/:typeFlow/:prefixTime",
  },
  {
    id: 3,
    Component: Store,
    path: "/store",
  },
  {
    id: 4,
    Component: Report,
    path: "/report",
  },
];
