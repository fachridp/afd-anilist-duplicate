import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

// Import constant variables
import { DROPDOWN_ITEMS } from "../constants/constants"

// Import RTK features
import { setSortLargeFilter } from "../features/dropdownFiltersManager";
import { setFilterRadio } from "../features/selectedFiltersManager";

export default function ActiveFilterDropdown() {
 const dispatch = useDispatch();

 // RTK store
 const isSortLargeFilterOpen = useSelector((state) => state.dropdownFiltersManager.sortLargeFilter);

 const handleSelectFilterSort = (event) => {
  const { innerText } = event.target;

  const keyFilter = 'sort';
  const valueFilter = innerText;

  dispatch(setFilterRadio({ keyFilter, valueFilter }));
 }

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
  <div className={`bg-background-100 shadow-md pl-4 py-4 pr-3 rounded-md text-gray-700 text-[0.8125rem] font-semibold space-y-3 absolute top-8 -left-5 ${!isSortLargeFilterOpen && 'hidden'}`}>
   {DROPDOWN_ITEMS.sort.map(item => (
    <p key={item.id} onClick={handleSelectFilterSort} className="hover:text-blue-600 duration-75 ease-in-out pr-5">{item.name}</p>
   ))}
  </div>
 )
}
