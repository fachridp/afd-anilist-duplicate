import { Link } from "react-router";
import PropTypes from "prop-types";
import { memo } from "react";

function HeaderNavItem({ linkTo, innerText }) {
 return (
  <Link to={linkTo} data-innertext={innerText} className="hover:text-[#d3d5f3] duration-75 ease-in-out nth-2:bg-[#3577ff] nth-2:py-[0.56rem] nth-2:px-[0.95rem] nth-2:rounded-md nth-2:font-extrabold nth-2:text-white data-[innertext=Search]:pb-5">
   {innerText}
  </Link>
 )
}

HeaderNavItem.propTypes = {
 linkTo: PropTypes.string,
 innerText: PropTypes.string,
}

export default memo(HeaderNavItem);