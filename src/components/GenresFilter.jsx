import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import RTK features
import { openOverlay, resetOverlay, setMainFilters } from "../features/dropdownFiltersManager";
import { resetFilter } from "../features/selectedFiltersManager";

// Import constant variables
import { SCREEN_SIZES } from "../constants/constants";

// Import componenets
import DropdownGenresFilterContainer from "../layouts/DropdownGenresFilterContainer";

export default function GenresFilter() {
 const dispatch = useDispatch();

 // RTK store
 const screenSize = useSelector((state) => state.innerWidthManager.width < SCREEN_SIZES.large ? 'medium' : 'large');
 const isDropdownGenres = useSelector((state) => state.dropdownFiltersManager.mainFilters.genres[screenSize]);
 const selectedGenresFilter = useSelector((state) => state.selectedFiltersManager.checkboxDropdownFilters.genres);
 const selectedCheckboxFilter = useSelector((state) => state.selectedFiltersManager.checkboxDropdownFilters.mergedCheckboxFilters);

 const handleOpenDropdownFilter = useCallback(() => {
  dispatch(setMainFilters({ filterName: "genres", screenSize, valueFilter: true }));
  dispatch(openOverlay({ screenSize: window.innerWidth }));
 }, [dispatch, screenSize]);

 const handleClickedOutsideDropdownGenres = useCallback((event) => {
  if (!event.target.closest(`.closest-genres-filter`) && isDropdownGenres) {
   dispatch(setMainFilters({ filterName: "genres", screenSize, valueFilter: false }));
   dispatch(resetOverlay());
  }
 }, [dispatch, isDropdownGenres, screenSize]);

 const handleClearSelectedFilterGenres = () => {
  const dropdownType = "checkboxDropdownFilters";
  const keyFilter = 'genres'
  const typeOfDropdown = 'checkbox'
  const mergedFilterValue = selectedCheckboxFilter.filter(item => !selectedGenresFilter.includes(item.name))

  dispatch(resetFilter({ dropdownType, keyFilter, typeOfDropdown, mergedDropdownType: dropdownType, mergedFilterKey: "mergedCheckboxFilters", mergedFilterValue }));
 }

 useEffect(() => {
  document.addEventListener('click', handleClickedOutsideDropdownGenres);

  return () => {
   document.removeEventListener('click', handleClickedOutsideDropdownGenres);
  }
 }, [handleClickedOutsideDropdownGenres]);

 return (
  <div className="w-[10.625rem] relative max-lg:snap-start" data-filtercamelcase="genres">
   <label htmlFor="genres">
    <p className="text-gray-900 font-semibold text-[0.9375rem]">Genres</p>

    <div className="relative">
     <input
      data-filtercamelcase="genres"
      type="text"
      onClick={handleOpenDropdownFilter}
      name="genres"
      id="genres"
      placeholder={selectedGenresFilter.length > 0 ? '' : 'Any'}
      className={`bg-background-100 closest-genres-filter shadow-md w-full py-[0.6875rem] pl-4 px-4 placeholder:font-semibold placeholder:text-gray-500 text-gray-700 focus:outline-none cursor-pointer text-[0.8125rem] font-normal rounded-md`}
      readOnly
     />

     {selectedGenresFilter.length > 0 && (
      <div className="flex gap-x-2 absolute items-center inset-y-0 left-0 pl-3">
       <p className="bg-background-300 text-gray-800 font-medium text-xs py-[5px] px-[8px] rounded-md cursor-pointer">{selectedGenresFilter[0]}</p>
       {selectedGenresFilter.length > 1 && (
        <p className="bg-background-300 text-gray-800 font-medium text-xs py-[5px] px-[8px] rounded-md cursor-pointer">+{selectedGenresFilter.length - 1}</p>
       )}
      </div>
     )}
    </div>
   </label>

   <span className="absolute flex items-center inset-y-0 pr-3 top-[1.42rem] right-0 cursor-pointer">
    {selectedGenresFilter.length > 0 ? (
     <svg data-filter-name="genres" onClick={handleClearSelectedFilterGenres} className="w-3 fill-gray-400 hover:fill-gray-500 ease-in-out duration-75 py-2" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
      <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
     </svg>
    ) : (
     <svg className="w-3 fill-gray-500 hover:fill-gray-600 ease-in-out duration-75 lg:w-[14px]" aria-hidden="true" focusable="false" role="img" data-icon="down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 45"><path d="M7.827.668a7.297 7.297 0 0 0-5.161 12.458L31.95 42.41a7.298 7.298 0 0 0 10.32-10.32L12.988 2.806A7.272 7.272 0 0 0 7.827.668Z" /><path d="M66.485.577a7.27 7.27 0 0 0-5.16 2.138L31.95 32.09a7.297 7.297 0 0 0 0 10.32 7.296 7.296 0 0 0 10.32 0l29.375-29.375a7.295 7.295 0 0 0 0-10.32 7.268 7.268 0 0 0-5.16-2.138Z" /></svg>
    )}
   </span>

   {isDropdownGenres && (
    <DropdownGenresFilterContainer />
   )}
  </div>
 )
}
