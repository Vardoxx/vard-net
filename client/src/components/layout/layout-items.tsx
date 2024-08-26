import { FaFireAlt, FaGamepad } from "react-icons/fa";
import { GiPoliceOfficerHead, GiVrHeadset } from "react-icons/gi";

export const layoutItmes = [
  {
    id: 1,
    color: "text-orange-500",
    border: "border-orange-500",
    Icon: <FaFireAlt />,
    title: "Популярное",
    sortValue: "popular",
  },
  {
    id: 2,
    color: "text-blue-500",
    border: "border-blue-500",
    Icon: <GiPoliceOfficerHead />,
    title: "Политика",
    sortValue: "policy",
  },
  {
    id: 3,
    color: "text-orange-300",
    border: "border-orange-300",
    Icon: <GiVrHeadset />,
    title: "Блогеры",
    sortValue: "bloger",
  },
  {
    id: 4,
    color: "text-green-500",
    border: "border-green-500",
    Icon: <FaGamepad />,
    title: "Игры",
    sortValue: "game",
  },
];
