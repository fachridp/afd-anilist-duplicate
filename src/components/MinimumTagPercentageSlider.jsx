import Slider from "rc-slider";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useState } from "react";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

// Import RTK features
import { setFilterSlider } from "../features/selectedFiltersManager";

function MinimumTagPercentageSlider() {
 const dispatch = useDispatch();

 const [minimumTagPercentageSlider, setMinimumTagPercentageSlider] = useState(SLIDERS_VALUES.minimumTagPercentage.defaultValue);

 // RTK store
 const minimumTagPercentageSliderValues = useSelector((state) => state.selectedFiltersManager.sliderFilters.minimumTagPercentage, shallowEqual);

 const handleMinimumTagPercentageSliderChange = (value) => {
  setMinimumTagPercentageSlider(value);
 }

 const handleMinimumTagPercentageSliderAfterChange = useCallback((value) => {
  const keyFilter = 'minimumTagPercentage';
  const valueFilter = value;

  minimumTagPercentageSliderValues !== value && dispatch(setFilterSlider({ keyFilter, valueFilter }));
 }, [dispatch, minimumTagPercentageSliderValues]);

 return (
  <div className="slider-container row-start-2 pl-4">
   <Slider
    min={SLIDERS_VALUES.minimumTagPercentage.min}
    max={SLIDERS_VALUES.minimumTagPercentage.max}
    value={minimumTagPercentageSlider}
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