import { shallowEqual, useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { memo, useCallback } from "react";

// Import RTK features
import { setExtraFilterButton } from "../features/dropdownFiltersManager";

function ButtonFilter() {
 const dispatch = useDispatch();

 const isExtraFilter = useSelector((state) => ({
  medium: state.dropdownFiltersManager.extraFilterButtons.medium,
  large: state.dropdownFiltersManager.extraFilterButtons.large,
 }), shallowEqual);

 const handleOpenExtraFilterMedium = useCallback(() => {
  dispatch(setExtraFilterButton({ screenSize: 'medium' }));
 }, [dispatch])

 const handleOpenExtraFilterLarge = useCallback(() => {
  dispatch(setExtraFilterButton({ screenSize: 'large' }));
 }, [dispatch])

 return (
  <>
   <button aria-label="Open the extra filter on mobile screens" type="button" onClick={handleOpenExtraFilterMedium} className="bg-background-100 rounded-md shadow-md py-[0.6875rem] px-4 cursor-pointer w-[2.8125rem] h-[2.625rem] col-end-12 lg:hidden">
    <svg className={`w-4 ${!isExtraFilter.medium ? 'fill-gray-500' : 'fill-blue-500'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44">
     <path d="M2 10h17.34l-.29-.5a5 5 0 0 1 0-5l.29-.5H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM42 4h-7.65L32.9 1.5A3 3 0 0 0 30.31 0h-4.62a3 3 0 0 0-2.6 1.5l-2.3 4a3 3 0 0 0 0 3l2.31 4a3 3 0 0 0 2.59 1.5h4.62a3 3 0 0 0 2.6-1.5l1.44-2.5H42a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM23.34 34H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h21.34l-.29-.5a5 5 0 0 1 0-5l.29-.5ZM42 34h-3.65l-1.45-2.5a3 3 0 0 0-2.59-1.5h-4.62a3 3 0 0 0-2.6 1.5l-2.3 4a3 3 0 0 0 0 3l2.31 4a3 3 0 0 0 2.59 1.5h4.62a3 3 0 0 0 2.6-1.5l1.44-2.5H42a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM2 25h3.65l1.45 2.5A3 3 0 0 0 9.69 29h4.62a3 3 0 0 0 2.6-1.5l2.3-4a3 3 0 0 0 0-3l-2.31-4a3 3 0 0 0-2.59-1.5H9.69a3 3 0 0 0-2.6 1.5L5.65 19H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM42 19H20.66l.29.5a5 5 0 0 1 0 5l-.28.49H42a2 2 0 0 0 2-2V21a2 2 0 0 0-2-2Z" />
    </svg>
   </button>

   <button aria-label="Open the extra filter on large screens" type="button" onClick={handleOpenExtraFilterLarge} className="bg-background-100 rounded-md shadow-md closest-button-filter-large py-[0.6875rem] px-4 cursor-pointer w-[2.8125rem] h-[2.625rem] col-end-12 hidden lg:block">
    <svg className={`w-4 ${!isExtraFilter.large ? 'fill-gray-500' : 'fill-blue-500'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44">
     <path d="M2 10h17.34l-.29-.5a5 5 0 0 1 0-5l.29-.5H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM42 4h-7.65L32.9 1.5A3 3 0 0 0 30.31 0h-4.62a3 3 0 0 0-2.6 1.5l-2.3 4a3 3 0 0 0 0 3l2.31 4a3 3 0 0 0 2.59 1.5h4.62a3 3 0 0 0 2.6-1.5l1.44-2.5H42a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM23.34 34H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h21.34l-.29-.5a5 5 0 0 1 0-5l.29-.5ZM42 34h-3.65l-1.45-2.5a3 3 0 0 0-2.59-1.5h-4.62a3 3 0 0 0-2.6 1.5l-2.3 4a3 3 0 0 0 0 3l2.31 4a3 3 0 0 0 2.59 1.5h4.62a3 3 0 0 0 2.6-1.5l1.44-2.5H42a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM2 25h3.65l1.45 2.5A3 3 0 0 0 9.69 29h4.62a3 3 0 0 0 2.6-1.5l2.3-4a3 3 0 0 0 0-3l-2.31-4a3 3 0 0 0-2.59-1.5H9.69a3 3 0 0 0-2.6 1.5L5.65 19H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2ZM42 19H20.66l.29.5a5 5 0 0 1 0 5l-.28.49H42a2 2 0 0 0 2-2V21a2 2 0 0 0-2-2Z" />
    </svg>
   </button>
  </>
 )
}

ButtonFilter.propTypes = {
 screenSize: PropTypes.string
}

export default memo(ButtonFilter);