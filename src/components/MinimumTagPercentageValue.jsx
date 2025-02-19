import { memo } from "react"
import { useSelector } from "react-redux"

function MinimumTagPercentageValue() {
 const minimumTagPercentageSliderValue = useSelector((state) => state.selectedFiltersManager.sliderFilters.minimumTagPercentage);

 return (
  <p className="text-gray-700 text-xs">{minimumTagPercentageSliderValue}</p>
 )
}

export default memo(MinimumTagPercentageValue);