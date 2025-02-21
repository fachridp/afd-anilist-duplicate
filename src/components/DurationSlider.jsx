import { memo, useCallback } from "react"
import Slider from "rc-slider"
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants"

// Import RTK features
import { setFilterSlider } from "../features/selectedFiltersManager";

function DurationSlider() {
 const dispatch = useDispatch();

 // RTK store
 const durationSliderChange = useSelector((state) => state.selectedFiltersManager.sliderFilters.durationChange, shallowEqual);
 const durationSliderAfterChange = useSelector((state) => state.selectedFiltersManager.sliderFilters.duration, shallowEqual);

 const handleDurationSliderChange = (value) => {
  dispatch(setFilterSlider({ keyFilter: 'durationChange', valueFilter: value }));
 }

 const handleDurationSliderAfterChange = useCallback((value) => {
  const keyFilter = 'duration';
  const valueFilter = value;

  value !== durationSliderAfterChange && dispatch(setFilterSlider({ keyFilter, valueFilter }));
 }, [dispatch, durationSliderAfterChange]);

 const handleResetDurationSlider = () => {
  const valueFilter = SLIDERS_VALUES.duration.defaultValue;

  dispatch(setFilterSlider({ keyFilter: 'duration', valueFilter }));
  dispatch(setFilterSlider({ keyFilter: 'durationChange', valueFilter }));
 }

 const durationSliderHasChanged = JSON.stringify(durationSliderAfterChange) !== JSON.stringify(SLIDERS_VALUES.duration.defaultValue);
 return (
  <div className="hidden lg:block slider-container row-start-2 mt-8">
   <div className="font-semibold flex justify-between items-center">
    <p className="text-gray-900 text-[0.9375rem]">Duration</p>

    {durationSliderHasChanged && (
     <div className="flex items-start gap-x-1 closest-button-filter-large">
      <p className="text-gray-700 text-xs">{durationSliderAfterChange.join('-')}</p>

      <svg onClick={handleResetDurationSlider} className="w-[.6rem] pt-[0.125rem] fill-gray-500 cursor-pointer hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
       <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
       <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
      </svg>
     </div>
    )}
   </div>

   <Slider
    range
    min={SLIDERS_VALUES.duration.min}
    max={SLIDERS_VALUES.duration.max}
    value={durationSliderChange}
    onChange={handleDurationSliderChange}
    onChangeComplete={handleDurationSliderAfterChange}
    styles={{
     rail: {
      backgroundColor: '#edf1f5',
      height: 10,
     },
     track: {
      backgroundColor: '#c9e8ff',
      height: 10,
     },
     handle: {
      width: 20,
      height: 20,
      backgroundColor: '#3db4f2',
     },
    }}
   />
  </div>
 )
}
export default memo(DurationSlider);