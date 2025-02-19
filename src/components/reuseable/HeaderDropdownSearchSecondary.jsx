import { Link } from "react-router";
import PropTypes from "prop-types"

export default function HeaderDropdownSearchSecondary({ linkTo, typeDropdownSearch, innerText }) {
 return (
  <Link
   to={linkTo}
   data-search={typeDropdownSearch}
   className="text-gray-600 text-[0.6875rem] font-semibold hover:text-gray-800 data-[search=footer]:text-gray-700 data-[search=footer]:group-hover:text-gray-900 data-[search=footer]:w-full ease-in-out duration-75 nth-[3]:mx-[0.6875rem]">
   {innerText}
  </Link>
 )
}

HeaderDropdownSearchSecondary.propTypes = {
 linkTo: PropTypes.string,
 typeDropdownSearch: PropTypes.string,
 innerText: PropTypes.string,
}