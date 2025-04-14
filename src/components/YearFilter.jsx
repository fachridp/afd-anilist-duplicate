import { memo, useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

// Import RTK features
import { openOverlay, resetOverlay, setMainFilters } from "../features/dropdownFiltersManager";
import { resetFilter, setSearchingFilter } from "../features/selectedFiltersManager";

// Import components
import DropdownYearFilterContainer from "../layouts/DropdownYearFilterContainer";

// Import constant variables
import { SCREEN_SIZES } from "../constants/constants";

function YearFilter() {
 const dispatch = useDispatch();

 const yearFilterRef = useRef(null);

 // RTK store
 const screenSize = useSelector((state) => state.innerWidthManager.width < SCREEN_SIZES.large ? 'medium' : 'large');
 const isDropdownYear = useSelector((state) => state.dropdownFiltersManager.mainFilters.year[screenSize]);
 const selectedYearFilter = useSelector((state) => state.selectedFiltersManager.radioDropdownFilters.year);
 const selectedRadioFilter = useSelector((state) => state.selectedFiltersManager.radioDropdownFilters.mergedRadioFilters);
 const searchedYearFilter = useSelector((state) => state.selectedFiltersManager.searchYearFilter);

 const handleSearchYearFilter = (event) => {
  const keyFilter = 'searchYearFilter';
  const valueFilter = event.target.value;
  dispatch(setSearchingFilter({ keyFilter, valueFilter }));
 }

 const handleOpenDropdownYearFilter = () => {
  const filterName = 'year';
  const valueFilter = true;
  dispatch(setMainFilters({ filterName, screenSize, valueFilter }));
  dispatch(openOverlay({ screenSize: window.innerWidth }));
 }

 const handleClickedOutsideDropdownYear = useCallback((event) => {
  const filterName = 'year';
  const valueFilter = false;
  if (!event.target.closest(`.closest-year-filter`) && isDropdownYear) {
   dispatch(setMainFilters({ filterName, screenSize, valueFilter }));
   dispatch(resetOverlay());
  }
 }, [dispatch, isDropdownYear, screenSize]);

 const handleClearSelectedYearFilter = () => {
  const dropdownType = "radioDropdownFilters";
  const keyFilter = 'year'
  const typeOfDropdown = 'radio'
  const mergedFilterValue = selectedRadioFilter.filter(item => !item.name.includes(item.name))

  dispatch(resetFilter({ dropdownType, keyFilter, typeOfDropdown, mergedDropdownType: dropdownType, mergedFilterKey: "mergedRadioFilters", mergedFilterValue }));

  searchedYearFilter.length > 0 && dispatch(setSearchingFilter({ keyFilter: 'searchYearFilter', valueFilter: '' }));
  yearFilterRef.current.value = "";
 }

 useEffect(() => {
  document.addEventListener('click', handleClickedOutsideDropdownYear);

  return () => {
   document.removeEventListener('click', handleClickedOutsideDropdownYear);
  }
 }, [handleClickedOutsideDropdownYear]);
 return (
  <div>
   <div className="w-[10.625rem] relative max-lg:snap-start" data-filtercamelcase="year">
    <label htmlFor="year">
     <p className="text-gray-900 font-semibold text-[0.9375rem]">Year</p>

     <div className="relative">
      <input
       ref={yearFilterRef}
       data-filtercamelcase="year"
       type="text"
       onClick={handleOpenDropdownYearFilter}
       onChange={handleSearchYearFilter}
       name="year"
       id="year"
       value={searchedYearFilter}
       placeholder={selectedYearFilter.length > 0 ? '' : 'Any'}
       className={`bg-background-100 closest-year-filter shadow-md w-full py-[0.6875rem] pl-4 pr-8 placeholder:font-semibold placeholder:text-gray-600 lg:placeholder:font-bold text-gray-700 focus:outline-none cursor-pointer text-[0.8125rem] font-normal rounded-md lg:cursor-text peer ${selectedYearFilter.length > 0 && 'not-focus:text-white'}`}
       readOnly={screenSize === 'large' ? false : true}
      />

      {selectedYearFilter.length > 0 && (
       <div className="flex gap-x-2 absolute items-center inset-y-0 left-0 pl-3 peer-focus:hidden">
        <p className="bg-background-300 text-gray-800 font-medium text-xs py-[5px] px-[8px] rounded-md cursor-pointer">{selectedYearFilter}</p>
       </div>
      )}
     </div>
    </label>

    <span className="absolute flex items-center inset-y-0 pr-3 top-[1.42rem] right-0 cursor-pointer">
     {selectedYearFilter.length > 0 ? (
      <svg data-filter-name="genres" onClick={handleClearSelectedYearFilter} className="w-3 fill-gray-500 hover:fill-gray-600 ease-in-out duration-75 py-2 lg:w-3.5" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
       <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
       <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
      </svg>
     ) : (
      <svg className="w-3 fill-gray-500 hover:fill-gray-600 ease-in-out duration-75 lg:w-3.5" aria-hidden="true" focusable="false" role="img" data-icon="down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 45"><path d="M7.827.668a7.297 7.297 0 0 0-5.161 12.458L31.95 42.41a7.298 7.298 0 0 0 10.32-10.32L12.988 2.806A7.272 7.272 0 0 0 7.827.668Z" /><path d="M66.485.577a7.27 7.27 0 0 0-5.16 2.138L31.95 32.09a7.297 7.297 0 0 0 0 10.32 7.296 7.296 0 0 0 10.32 0l29.375-29.375a7.295 7.295 0 0 0 0-10.32 7.268 7.268 0 0 0-5.16-2.138Z" /></svg>
     )}
    </span>

    {isDropdownYear && (
     <DropdownYearFilterContainer />
    )}
   </div>
  </div>
 )
}

export default memo(YearFilter);