import React from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

type SidebarItem = {
  title: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
};

type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-80 h-screen bg-gray-800 text-white flex flex-col pt-20 ">
      <div className="p-4 flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png"
          alt="brand"
          className="h-8 w-8"
        />
        <span className="ml-2 text-xl font-semibold">Foodietry</span>
      </div>
      <nav className="flex-1 p-4">
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            <div
              className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOpen(index)}
            >
              <span className="mr-2">{item.icon}</span>
              <span className="flex-1">{item.title}</span>
              {item.children && (
                <span>
                  {open === index ? (
                    <ChevronDownIcon className="h-4 w-4" />
                  ) : (
                    <ChevronRightIcon className="h-4 w-4" />
                  )}
                </span>
              )}
            </div>
            {item.children && open === index && (
              <div className="ml-6 mt-2">
                {item.children.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                  >
                    <span className="mr-2">{child.icon}</span>
                    <span>{child.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
