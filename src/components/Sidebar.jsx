import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdLocalLibrary } from "react-icons/md";
import PropTypes from "prop-types";

import SideNavItemLayout from "../Layouts/SideNavItemLayout";
import NavItems from "./NavItems";

const SideChevronButton = ({ handleToggleOpenSidebar, open }) => (
  <BsArrowLeftShort
    onClick={handleToggleOpenSidebar}
    className={`bg-white
         text-purple-900 
         rounded-full
         p-1
         text-3xl
         absolute
         -right-3 
         top-9
         border
         border-purple-900 
         cursor-pointer ${!open ? "rotate-180" : "rotate-0"} `}
  />
);

const HeaderAndLogoNavItem = ({ open }) => (
  <SideNavItemLayout
    iconSize="2xl"
    titleSize="xl"
    Icon={MdLocalLibrary}
    open={open}
    title="Andolasoft"
    isNotNavigation={true}
  />
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpenSidebar = () => setOpen(!open);

  return (
    <div
      className={`bg-purple-900 
      h-screen 
      ${open ? "p-5" : "p-2"} 
      pt-8 
      ${open ? "w-72" : "w-20"} 
      relative transition-all ease-in`}
    >
      <SideChevronButton
        handleToggleOpenSidebar={handleToggleOpenSidebar}
        open={open}
      />

      <div className="flex flex-col gap-12 align-middle">
        <HeaderAndLogoNavItem open={open} />

        <NavItems open={open} />
      </div>
    </div>
  );
};

SideChevronButton.propTypes = {
  handleToggleOpenSidebar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

HeaderAndLogoNavItem.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
