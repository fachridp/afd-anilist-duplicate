import Slider from "rc-slider"
import { memo, useCallback, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

// Import RTK features
import { setFilterSlider } from "../features/selectedFiltersManager";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants"

function YearSlider() {
 const dispatch = useDispatch();

 const [yearSlider, setYearSlider] = useState(SLIDERS_VALUES.year.defaultValue);

 // RTK store
 const yearSliderValues = useSelector((state) => state.selectedFiltersManager.sliderFilters.year, shallowEqual);

 const handleYearSliderChange = (value) => {
  setYearSlider(value);
 };

 const handleYearSliderAfterChange = useCallback((value) => {
  const keyFilter = 'year';
  const valueFilter = value;

  yearSliderValues !== value && dispatch(setFilterSlider({ keyFilter, valueFilter }));
 }, [dispatch, yearSliderValues]);

 const handleResetYearSlider = () => {
  const keyFilter = 'year';
  const valueFilter = SLIDERS_VALUES.year.defaultValue;

  dispatch(setFilterSlider({ keyFilter, valueFilter }));
  setYearSlider(SLIDERS_VALUES.year.defaultValue);
 }

 return (
  <div className="hidden lg:block slider-container mt-8 row-start-2">
   <div className="font-semibold flex justify-between items-center">
    <p className="text-gray-900 text-[0.9375rem]">Year Range</p>

    <div className="flex items-start gap-x-1">
     <p className="text-gray-700 text-xs">{yearSliderValues.join('- ')}</p>

     <svg onClick={handleResetYearSlider} className="w-[.6rem] pt-[0.125rem] fill-gray-500 cursor-pointer hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
      <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
     </svg>
    </div>
   </div>

   <Slider
    range
    min={SLIDERS_VALUES.year.min}
    max={SLIDERS_VALUES.year.max}
    value={yearSlider}
    onChange={handleYearSliderChange}
    onChangeComplete={handleYearSliderAfterChange}
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

   <label htmlFor="doujin-large-filter" className="py-[0.6rem] items-center gap-x-2 cursor-pointer hidden lg:flex mt-6">
    <input type="checkbox" className="cursor-pointer" name="doujin-large-filter" id="doujin-large-filter" />
    <p className="text-gray-900 font-semibold text-[0.9375rem]">Doujin</p>
   </label>
  </div >
 )
}

export default memo(YearSlider);