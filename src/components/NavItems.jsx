import PropTypes from "prop-types";

import { AppRoutes } from "../constants/Routes.jsx";
import SideNavItemLayout from "../Layouts/SideNavItemLayout";

const NavItemsMapper = ({ open }) =>
  AppRoutes.map((route) => (
    <SideNavItemLayout
      key={route.id}
      {...route}
      titleSize="lg"
      iconSize="2xl"
      open={open}
    />
  ));

const NavItems = ({ open }) => {
  return (
    <div className={`flex flex-col gap-4 rounded align-middle`}>
      <NavItemsMapper open={open} />
    </div>
  );
};

NavItems.propTypes = {
  open: PropTypes.bool,
};

NavItemsMapper.propTypes = {
  open: PropTypes.bool,
};

export default NavItems;
