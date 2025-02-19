import { Link } from "react-router";
import PropTypes from "prop-types";

export default function HeaderDropdownSearchTitle({ linkTo, innerText, handleChooseBrowseFilter }) {
 return (
  <Link
   to={linkTo}
   className={`hover:text-gray-900 group-hover:text-gray-900 duration-75 ease-in-out w-fit block leading-4`}
   data-value={innerText}
   onClick={handleChooseBrowseFilter}
  >
   {innerText}
  </Link>
 )
}

HeaderDropdownSearchTitle.propTypes = {
 linkTo: PropTypes.string,
 innerText: PropTypes.string,
 handleChooseBrowseFilter: PropTypes.func,
}