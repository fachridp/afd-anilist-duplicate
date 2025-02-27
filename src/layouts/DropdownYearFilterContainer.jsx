import { memo } from "react";
import { useSelector } from "react-redux";
import DropdownYear from "../components/DropdownYear";
import { DROPDOWN_ITEMS } from "../constants/constants";

function DropdownYearFilterContainer() {
 // RTK store
 const isDropdownYear = useSelector((state) => state.dropdownFiltersManager.mainFilters.year);
 return (
  <>
   {isDropdownYear && (
    <div className="max-md:fixed max-md:top-[25vh] max-md:left-[5vw] z-10 md:absolute left-0 md:w-full md:top-[4.6rem]">
     <div className="flex justify-between md:hidden">
      <h2 className="text-white font-bold text-[15px] uppercase">Year</h2>

      <svg className="w-3 cursor-pointer fill-white" aria-hidden="true" focusable="false" role="img" data-icon="minus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 695 137"><path fillRule="evenodd" d="M68 0h558c38 0 69 31 69 68 0 38-31 69-69 69H68c-37 0-68-31-68-69C0 31 31 0 68 0Z" clipRule="evenodd" /></svg>
     </div>

     <div className="bg-background-100 rounded-md overflow-y-auto overflow-scroll-dropdown-filter shadow-md closest-genres-filter max-h-[60vh] max-md:w-[90vw] p-2">
      <DropdownYear htmlfor="year" dropdownName="Year" isDropdownYear={isDropdownYear} mainData={DROPDOWN_ITEMS.year} />
     </div>
    </div>
   )}
  </>
 )
}

export default memo(DropdownYearFilterContainer);