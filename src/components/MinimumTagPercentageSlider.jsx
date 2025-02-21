import Slider from "rc-slider";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

// Import RTK features
import { setFilterSlider } from "../features/selectedFiltersManager";

function MinimumTagPercentageSlider() {
 const dispatch = useDispatch();

 // RTK store
 const minimumTagPercentageSliderAfterChange = useSelector((state) => state.selectedFiltersManager.sliderFilters.minimumTagPercentage, shallowEqual);
 const minimumTagPercentageSliderChange = useSelector((state) => state.selectedFiltersManager.sliderFilters.minimumTagPercentageChange, shallowEqual);

 const handleMinimumTagPercentageSliderChange = (value) => {
  dispatch(setFilterSlider({ keyFilter: 'minimumTagPercentageChange', valueFilter: value }));
 }

 const handleMinimumTagPercentageSliderAfterChange = useCallback((value) => {
  const keyFilter = 'minimumTagPercentage';
  const valueFilter = value;

  minimumTagPercentageSliderAfterChange !== value && dispatch(setFilterSlider({ keyFilter, valueFilter }));
 }, [dispatch, minimumTagPercentageSliderAfterChange]);

 return (
  <div className="slider-container row-start-2 pl-4">
   <Slider
    min={SLIDERS_VALUES.minimumTagPercentage.min}
    max={SLIDERS_VALUES.minimumTagPercentage.max}
    value={minimumTagPercentageSliderChange}
    onChange={handleMinimumTagPercentageSliderChange}
    onChangeComplete={handleMinimumTagPercentageSliderAfterChange}
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

export default memo(MinimumTagPercentageSlider);