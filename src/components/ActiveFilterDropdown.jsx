import { useDispatch, useSelector } from "react-redux";

// Import constant variables
import { DROPDOWN_ITEMS } from "../constants/constants"
import { setSortLargeFilter } from "../features/dropdownFiltersManager";
import { useCallback, useEffect } from "react";

export default function ActiveFilterDropdown() {
 const dispatch = useDispatch();

 // RTK store
 const isSortLargeFilterOpen = useSelector((state) => state.dropdownFiltersManager.sortLargeFilter);

 const handleClickedOutsideDropdownSortLargeFilter = useCallback((event) => {
  if (!event.target.closest(`.closest-sort-large-filter`) && isSortLargeFilterOpen) {
   dispatch(setSortLargeFilter())
  }
 }, [dispatch, isSortLargeFilterOpen]);

 useEffect(() => {
  document.addEventListener('click', handleClickedOutsideDropdownSortLargeFilter);

  return () => {
   document.removeEventListener('click', handleClickedOutsideDropdownSortLargeFilter);
  }
 }, [handleClickedOutsideDropdownSortLargeFilter]);
 return (
  <div className={`bg-background-100 shadow-md pl-4 py-4 pr-8 rounded-md text-gray-700 text-[0.8125rem] font-semibold space-y-3 absolute top-8 -left-5 ${!isSortLargeFilterOpen && 'hidden'}`}>
   {DROPDOWN_ITEMS.sort.map(item => (
    <p key={item.id} className="hover:text-blue-600 duration-75 ease-in-out">{item.name}</p>
   ))}
  </div>
 )
}
