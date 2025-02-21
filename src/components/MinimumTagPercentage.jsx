// Import components
import MinimumTagPercentageValue from "./MinimumTagPercentageValue";
import MinimumTagPercentageSlider from "./MinimumTagPercentageSlider";
import FilterTagsSearch from "./FilterTagsSearch";

export default function MinimumTagPercentage() {
 return (
  <div className="w-fit grid grid-cols-2 items-center">
   <div className="font-semibold row-start-1 flex gap-x-8 items-center mb-2">
    <p className="text-gray-900 text-[0.9375rem]">Minimum Tag Percentage</p>

    <div className="flex items-start gap-x-2">
     <MinimumTagPercentageValue />
    </div>
   </div>

   <MinimumTagPercentageSlider />

   <FilterTagsSearch />
  </div>
 )
}