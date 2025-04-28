import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

// Import components
import ActiveFilterDropdown from "../components/ActiveFilterDropdown";

// Import RTK features
import { setSortLargeFilter } from "../features/dropdownFiltersManager";
import GridActiveFilter from "../components/GridActiveFilter";

function SelectsWrap() {
 const dispatch = useDispatch();

 // RTK Store
 const selectedSortFilter = useSelector((state) => state.selectedFiltersManager.radioDropdownFilters.sort !== '' ? state.selectedFiltersManager.radioDropdownFilters.sort : 'Popularity');

 const handleOpenDropdownSortLarge = () => {
  dispatch(setSortLargeFilter());
 }

 return (
  <div className="flex gap-x-4 items-center relative">
   {/* Sort */}
   <div onClick={handleOpenDropdownSortLarge} className="items-center gap-x-2 cursor-pointer group/popularity hidden closest-sort-large-filter sm:flex">
    <svg className='w-2 duration-75 ease-in-out fill-gray-500 group-hover/popularity:fill-gray-700' aria-hidden="true" focusable="false" role='img' data-icon="sort" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 84"><path d="M22.309.5.661 38h43.301L22.309.5ZM22.309 83.5 43.961 46H.66l21.649 37.5Z" />
    </svg>

    <p className="text-gray-600 text-[0.8125rem] group-hover/popularity:text-gray-700 duration-75 ease-in-out">{selectedSortFilter}</p>

    <ActiveFilterDropdown />
   </div>

   <GridActiveFilter />

  </div>
 )
}

export default memo(SelectsWrap);