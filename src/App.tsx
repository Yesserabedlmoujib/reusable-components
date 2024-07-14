import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import Button from "./components/Tailwind-Button/Button";
import { FaPlus } from "react-icons/fa";
import StButton from "./components/Styled-Button/Button";
import CsButton from "./components/Css-Button/Button";

const App: React.FC = () => {
  const items = [
    {
      title: "Dashboard",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      children: [
        {
          title: "Analytics",
          icon: <PresentationChartBarIcon className="h-4 w-4" />,
        },
        {
          title: "Reporting",
          icon: <PresentationChartBarIcon className="h-4 w-4" />,
        },
      ],
    },

    {
      title: "E-Commerce",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      children: [
        {
          title: "Orders",
          icon: <ShoppingBagIcon className="h-4 w-4" />,
        },
        {
          title: "Products",
          icon: <ShoppingBagIcon className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Inbox",
      icon: <InboxIcon className="h-5 w-5" />,
    },
    {
      title: "Profile",
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
    {
      title: "Settings",
      icon: <Cog6ToothIcon className="h-5 w-5" />,
    },
  ];

  const handleClick = () => {
    alert("tailwind Button clicked");
  };
  return (
    <div className="flex h-screen">
      <Sidebar items={items} />
      <div className="flex-1">
        <Nav />
        <div className="p-20">
          <div className="flex justify-center gap-10">
            <Button title="Add Item" icon={<FaPlus />} onClick={handleClick} />

            <StButton
              title="Add Item"
              icon={<FaPlus />}
              onClick={() => alert("Styled Button clicked")}
              variant="secondary"
            />
            <CsButton
              title="Add Item"
              icon={<FaPlus />}
              onClick={() => alert("Css Button clicked")}
              // variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
