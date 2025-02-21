import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

// Import RTK features
import { setFilterSlider } from "../features/selectedFiltersManager";

function MinimumTagPercentageValue() {
 const dispatch = useDispatch();

 // RTK store
 const minimumTagPercentageSliderValue = useSelector((state) => state.selectedFiltersManager.sliderFilters.minimumTagPercentage);

 const handleResetMinimumTagPercentageSlider = () => {
  const valueFilter = SLIDERS_VALUES.minimumTagPercentage.defaultValue;

  dispatch(setFilterSlider({ keyFilter: 'minimumTagPercentage', valueFilter }));
  dispatch(setFilterSlider({ keyFilter: 'minimumTagPercentageChange', valueFilter }));
 }

 return (
  <>
   <p className="text-gray-700 text-xs">{minimumTagPercentageSliderValue}</p>
   <svg onClick={handleResetMinimumTagPercentageSlider} className="w-[.6rem] fill-gray-500 cursor-pointer pt-[2px] hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
    <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
   </svg>
  </>
 )
}

export default memo(MinimumTagPercentageValue);