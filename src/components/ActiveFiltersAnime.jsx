import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react";

// Import RTK features
import { resetAllFilters, setFilterCheckbox, setFilterRadio } from "../features/selectedFiltersManager";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

export default function ActiveFiltersAnime() {
 const dispatch = useDispatch();

 const [activeFilterLength, setActiveFilterLength] = useState(0);

 // RTK store
 const selectedFiltersManager = useSelector((state) => state.selectedFiltersManager);
 const selectedCheckboxFilter = useSelector((state) => state.selectedFiltersManager.checkboxDropdownFilters.mergedCheckboxFilters);
 const selectedRadioFilter = useSelector((state) => state.selectedFiltersManager.radioDropdownFilters.mergedRadioFilters);
 const sliderFilters = useSelector((state) => state.selectedFiltersManager.sliderFilters);

 const activeFilterWrapRef = useRef(null);

 const mergedSelectedFilters = [...selectedCheckboxFilter, ...selectedRadioFilter].map((item, index) => ({ id: index + 1, name: item.name, origin: item.origin }));

 const sliderFilterHasChanged = Object.keys(sliderFilters).some(key => {
  return (key !== 'yearChange' && key !== 'episodesChange' && key !== 'durationChange' && key !== 'minimumTagPercentageChange') && JSON.stringify(sliderFilters[key]) !== JSON.stringify(SLIDERS_VALUES[key].defaultValue);
 });

 const handleClearActiveFilterItem = (event) => {
  const { value, origin } = event.currentTarget.dataset;

  Object.keys(selectedFiltersManager[origin]).forEach(key => {
   if (key !== "mergedCheckboxFilters" && key !== "mergedRadioFilters") {
    if (selectedFiltersManager[origin][key].length > 0) {
     if (selectedFiltersManager[origin][key].includes(value)) {
      dispatch(origin === "checkboxDropdownFilters" ? setFilterCheckbox({ keyFilter: key, valueFilter: selectedFiltersManager[origin][key].filter(item => item !== value) }) : setFilterRadio({ keyFilter: key, valueFilter: !selectedFiltersManager[origin][key].includes(value) }));
     }
    }
   }
  });
 }

 const handleClearAllActiveFilters = () => {
  dispatch(resetAllFilters());
 }

 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() => {
  activeFilterWrapRef.current && setActiveFilterLength(activeFilterWrapRef.current.children.length);
 });

 return (
  <>
   {(mergedSelectedFilters.length > 0 || sliderFilterHasChanged) && (
    <div className="flex items-center font-semibold mb-4 text-white text-xs gap-x-2">
     <div className="flex flex-1 group/clearAll gap-x-3">
      <svg className='w-5 fill-gray-500' aria-hidden="true" focusable="false" data-icon="tags" role='img' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 91 73">
       <path fillRule="evenodd" d="M40.3 67.78a1.825 1.825 0 0 1-2.578 0L1.036 31.092a1.71 1.71 0 0 1-.528-1.441L2.625 4.494a1.8 1.8 0 0 1 1.664-1.663L29.446.713c.062 0 .125-.008.186-.008a1.688 1.688 0 0 1 1.255.536l36.688 36.688a1.826 1.826 0 0 1 0 2.579L40.3 67.78Zm49.668-23.287a1.83 1.83 0 0 0 0-2.58L53.282 5.226a1.7 1.7 0 0 0-1.444-.528l-11.162.94 29.6 29.6a5.64 5.64 0 0 1 0 7.971L50.914 62.561l9.2 9.2a1.832 1.832 0 0 0 2.578 0l27.276-27.268ZM11.844 12.048a6.009 6.009 0 1 0 8.5 8.496 6.009 6.009 0 0 0-8.5-8.496Zm5.8 5.8a2.2 2.2 0 1 0-1.553.644 2.2 2.2 0 0 0 1.555-.641l-.002-.003Z" clipRule="evenodd" />
      </svg>

      <div ref={activeFilterWrapRef} className="flex gap-x-3 ml-2 items-center flex-wrap gap-y-2">
       {mergedSelectedFilters.map(item => (
        <div key={item.id} data-value={item.name} data-origin={item.origin} onClick={handleClearActiveFilterItem} className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group">
         <p>{item.name}</p>

         <svg className={`w-2 fill-blue-300 hidden group-hover:block`} aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       ))}

       {JSON.stringify(sliderFilters.year) !== JSON.stringify(SLIDERS_VALUES.year.defaultValue) && (
        <div className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/yearSlider">
         <p>Year Range: {sliderFilters.year.join('-')}</p>

         <svg className="w-2 fill-blue-300 hidden group-hover/yearSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

       {JSON.stringify(sliderFilters.episodes) !== JSON.stringify(SLIDERS_VALUES.episodes.defaultValue) && (
        <div className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/episodesSlider">
         <p>Episodes: {sliderFilters.episodes.join('-')}</p>
         <svg className="w-2 fill-blue-300 hidden group-hover/episodesSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

       {JSON.stringify(sliderFilters.duration) !== JSON.stringify(SLIDERS_VALUES.duration.defaultValue) && (
        <div className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/durationSlider">
         <p>Duration: {sliderFilters.duration.join('-')}</p>
         <svg className="w-2 fill-blue-300 hidden group-hover/durationSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

       {JSON.stringify(sliderFilters.minimumTagPercentage) !== JSON.stringify(SLIDERS_VALUES.minimumTagPercentage.defaultValue) && (
        <div className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/durationSlider">
         <p>Tags above: {sliderFilters.minimumTagPercentage}%</p>
         <svg className="w-2 fill-blue-300 hidden group-hover/durationSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}
      </div>

      {activeFilterLength > 1 && (
       <div className="bg-background-500 py-1 px-2 rounded-md cursor-pointer flex items-center gap-x-2 md:hidden md:group-hover/clearAll:flex">
        <p onClick={handleClearAllActiveFilters}>Clear All</p>
        <svg className="w-2 fill-gray-200" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
         <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
         <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
        </svg>
       </div>
      )}
     </div>

     <div className="flex gap-x-4 items-center">
      {/* Sort */}
      <div className="items-center gap-x-2 cursor-pointer group/popularity hidden sm:flex">
       <svg className='w-2 duration-75 ease-in-out fill-gray-500 group-hover/popularity:fill-gray-700' aria-hidden="true" focusable="false" role='img' data-icon="sort" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 84"><path d="M22.309.5.661 38h43.301L22.309.5ZM22.309 83.5 43.961 46H.66l21.649 37.5Z" />
       </svg>

       <p className="text-gray-600 text-[0.8125rem] group-hover/popularity:text-gray-700 duration-75 ease-in-out">Popularity</p>

       {/* Dropdown sort */}
       <div className="hidden">
        <label htmlFor="sort-title-large">

         <div>
          <input type="radio" name="sort-title-large" id="sort-title-large" />
         </div>
        </label>
       </div>
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
    </div>
   )}
  </>
 )
}
