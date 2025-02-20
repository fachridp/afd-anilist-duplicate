import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";

// Import RTK features
import { toggleDropdownBrowse } from "../features/dropdownFiltersManager";

// Import components
import BrowseFilter from "../components/BrowseFilter";

// Import constant variables
import { SCREEN_SIZES } from "../constants/constants";

export default function BrowseFilterContainer() {
 const dispatch = useDispatch();

 // RTK store
 const isDropdownBrowse = useSelector((state) => state.dropdownFiltersManager.browse);
 const isOverlay = useSelector((state) => state.dropdownFiltersManager.overlay);
 const width = useSelector((state) => state.innerWidthManager.width);

 const handleToggleDropdownBrowse = useCallback(() => {
  dispatch(toggleDropdownBrowse());
 }, [dispatch]);

 const handleClickedOutsideFilterBrowse = useCallback((event) => {
  if (!event.target.closest('.closest-browse-filter-container') && isDropdownBrowse) { dispatch(toggleDropdownBrowse()) }
 }, [dispatch, isDropdownBrowse]);

 useEffect(() => {
  document.addEventListener('click', handleClickedOutsideFilterBrowse);

  return () => {
   document.removeEventListener('click', handleClickedOutsideFilterBrowse);
  }
 }, [handleClickedOutsideFilterBrowse]);

 return (
  <main className={`max-w-[71.25rem] mx-auto ${width < SCREEN_SIZES.medium && isOverlay && 'overlay'}`}>
   <section className="flex items-center gap-x-5 text-[2rem] text-text font-[900] pt-2 cursor-pointer w-fit pr-4 closest-browse-filter-container lg:hidden mx-4" onClick={handleToggleDropdownBrowse}>

    <BrowseFilter />
   </section>
   <Outlet />
  </main>
 )
}