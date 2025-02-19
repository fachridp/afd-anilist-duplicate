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

     <svg className="w-[.6rem] fill-gray-500 cursor-pointer pt-[2px] hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
      <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
     </svg>
    </div>
   </div>

   <MinimumTagPercentageSlider />

   <FilterTagsSearch />
  </div>
 )
}