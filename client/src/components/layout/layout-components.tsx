import { FaFireAlt, FaGamepad } from "react-icons/fa";
import { GiPoliceOfficerHead, GiVrHeadset } from "react-icons/gi";

export const layoutItmes = [
  { id: 1, color: "-orange-500", Icon: <FaFireAlt />, title: "Популярное" },
  {
    id: 2,
    color: "-blue-500",
    Icon: <GiPoliceOfficerHead />,
    title: "Политика",
  },
  { id: 3, color: "-orange-300", Icon: <GiVrHeadset />, title: "Блогеры" },
  { id: 4, color: "-green-500", Icon: <FaGamepad />, title: "Игры" },
];
