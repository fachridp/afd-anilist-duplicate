import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

// Import components
import ActiveFilterDropdown from "../components/ActiveFilterDropdown";

// Import RTK features
import { setSortLargeFilter } from "../features/dropdownFiltersManager";

function SelectsWrap() {
 const dispatch = useDispatch();

 // RTK Store
 const selectedSortFilter = useSelector((state) => state.selectedFiltersManager.radioDropdownFilters.sort);
 console.log(selectedSortFilter)

 const handleOpenDropdownSortLarge = () => {
  dispatch(setSortLargeFilter());
 }

 return (
  <div className="flex gap-x-4 items-center relative">
   {/* Sort */}
   <div onClick={handleOpenDropdownSortLarge} className="items-center gap-x-2 cursor-pointer group/popularity hidden closest-sort-large-filter sm:flex">
    <svg className='w-2 duration-75 ease-in-out fill-gray-500 group-hover/popularity:fill-gray-700' aria-hidden="true" focusable="false" role='img' data-icon="sort" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 84"><path d="M22.309.5.661 38h43.301L22.309.5ZM22.309 83.5 43.961 46H.66l21.649 37.5Z" />
    </svg>

    <p className="text-gray-600 text-[0.8125rem] group-hover/popularity:text-gray-700 duration-75 ease-in-out">Popularity</p>

    <ActiveFilterDropdown />
   </div>

   {/* Grid icons */}
   <div className="flex items-center gap-x-2">
    <svg className='w-[1rem] duration-75 ease-in-out cursor-pointer fill-gray-600 hover:fill-gray-700' aria-hidden="true" focusable="false" role='img' data-icon="grid-3-cols" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80">
     <path d="M51.85 0h-23.7v23.7h23.7V0ZM80 28.15H56.3v23.7H80v-23.7ZM80 0H56.3v23.7H80V0ZM51.85 28.15h-23.7v23.7h23.7v-23.7ZM23.7 28.15H0v23.7h23.7v-23.7ZM23.7 0H0v23.7h23.7V0ZM51.85 56.3h-23.7V80h23.7V56.3ZM80 56.3H56.3V80H80V56.3ZM23.7 56.3H0V80h23.7V56.3Z" />
    </svg>

    <svg className='w-[1rem] duration-75 ease-in-out cursor-pointer fill-gray-500 hover:fill-gray-700' aria-hidden="true" focusable="false" role='img' data-icon="grid-2-cols" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
     <path d="M64 33H33v31h31V33ZM64 0H33v31h31V0ZM31 0H0v31h31V0ZM31 33H0v31h31V33Z" />
    </svg>

    <svg className='w-[1rem] duration-75 ease-in-out cursor-pointer fill-gray-500 hover:fill-gray-700 hidden md:block' aria-hidden="true" focusable="false" role='img' data-icon="grid-2-cols-random" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
     <path d="M12.409.5H.481v11.928h11.928V.5ZM12.409 14.036H.481v11.928h11.928V14.036ZM12.409 27.572H.481V39.5h11.928V27.572ZM39.518.5H14.073v11.928h25.445V.5ZM39.518 14.036H14.073v11.928h25.445V14.036ZM39.518 27.572H14.073V39.5h25.445V27.572Z" />
    </svg>
   </div>
  </div>
 )
}

export default memo(SelectsWrap);