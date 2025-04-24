import PropTypes from "prop-types"
import _ from "lodash";
import { memo } from "react";

function DropdownFilterContainer({ dropdownName, mainDataLength, content }) {
 return (
  <div className="max-md:fixed max-md:top-[25vh] max-md:left-[5vw] md:absolute left-0 md:w-full md:top-[4.6rem] z-10">
   <div className="flex justify-between md:hidden">
    <h2 className="text-white font-bold text-[15px] uppercase">{dropdownName}</h2>

    <svg className="w-3 cursor-pointer fill-white" aria-hidden="true" focusable="false" role="img" data-icon="minus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 695 137"><path fillRule="evenodd" d="M68 0h558c38 0 69 31 69 68 0 38-31 69-69 69H68c-37 0-68-31-68-69C0 31 31 0 68 0Z" clipRule="evenodd" /></svg>
   </div>

   <div className={`bg-background-100 rounded-md overflow-y-auto overflow-scroll-dropdown-filter shadow-md z-30 closest-${_.camelCase(dropdownName)}-filter max-md:w-[90vw] ${mainDataLength > 8 && 'max-h-[60vh] pl-2 pr-2'} py-2 px-2`}>
    {content}
   </div>
  </div>
 )
}

DropdownFilterContainer.propTypes = {
 dropdownName: PropTypes.string,
 mainDataLength: PropTypes.number,
 screenSize: PropTypes.string,
 content: PropTypes.element,
}

export default memo(DropdownFilterContainer);