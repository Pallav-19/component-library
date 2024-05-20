import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const SideNavItemLayout = ({
  Icon,
  title,
  iconSize,
  titleSize,
  open,
  isNotNavigation = false,
  to,
}) => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleNavigate = () => navigate(to);

  const isCurrentPath = () =>
    location.pathname.split("/").includes(to?.split("/")[1]);

  return (
    <div
      onClick={handleNavigate}
      className={`flex gap-8 align-middle rounded p-2 ${
        !open && "justify-center"
      } w-full ${!isNotNavigation && "cursor-pointer hover:bg-gray-500"} ${
        isCurrentPath() && "bg-gray-600"
      } `}
    >
      <Icon className={`text-amber-300 text-${iconSize}`} />

      {open && (
        <h1
          className={`text-white text-${titleSize} font-semibold  duration-0`}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

SideNavItemLayout.propTypes = {
  Icon: PropTypes.any,
  title: PropTypes.string,
  iconSize: PropTypes.string,
  titleSize: PropTypes.string,
  open: PropTypes.bool,
  isNotNavigation: PropTypes.bool,
  to: PropTypes.string,
};

export default SideNavItemLayout;
