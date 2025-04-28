import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import _ from "lodash";

// Import RTK features
import { resetAllFilters, setFilterCheckbox, setFilterRadio, setFilterSlider, setSearchAnimeFilter, setSearchingFilter } from "../features/selectedFiltersManager";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

// Import components
import SelectsWrap from "../layouts/SelectsWrap";

function ActiveFiltersAnime() {
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

 const handleClearActiveFilterItem = useCallback((event) => {
  const { value, origin } = event.currentTarget.dataset;

  Object.keys(selectedFiltersManager[origin]).forEach(key => {
   if (key !== "mergedCheckboxFilters" && key !== "mergedRadioFilters") {
    if (selectedFiltersManager[origin][key].length > 0) {
     if (selectedFiltersManager[origin][key].includes(value)) {
      dispatch(origin === "checkboxDropdownFilters" ? setFilterCheckbox({ keyFilter: key, valueFilter: selectedFiltersManager[origin][key].filter(item => item !== value) }) : setFilterRadio({ keyFilter: key, valueFilter: '' }));
     }
    }
   }
  });

  dispatch(setSearchingFilter({ keyFilter: 'searchGenresFilter', valueFilter: '' }));
  dispatch(setSearchingFilter({ keyFilter: 'searchYearFilter', valueFilter: '' }));
 }, [dispatch, selectedFiltersManager])

 const handleClearActiveSliderFilterItem = (event) => {
  const { fromFilter } = event.currentTarget.dataset;

  dispatch(setFilterSlider({ keyFilter: fromFilter, valueFilter: SLIDERS_VALUES[fromFilter].defaultValue }));
  dispatch(setFilterSlider({ keyFilter: `${fromFilter}Change`, valueFilter: SLIDERS_VALUES[fromFilter].defaultValue }));
 }

 const handleClearActiveSearchFilter = () => {
  dispatch(setSearchAnimeFilter(''))
 }

 const handleClearAllActiveFilters = () => {
  dispatch(resetAllFilters());
  dispatch(setSearchAnimeFilter(''));
  dispatch(setSearchingFilter({ keyFilter: 'searchGenresFilter', valueFilter: '' }));
  dispatch(setSearchingFilter({ keyFilter: 'searchYearFilter', valueFilter: '' }));
 }

 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() => {
  activeFilterWrapRef.current && setActiveFilterLength(activeFilterWrapRef.current.children.length);
 });

 return (
  <>
   {(mergedSelectedFilters.length > 0 || sliderFilterHasChanged || selectedFiltersManager.searchAnimeFilter) && (
    <section className="flex items-center font-semibold mb-4 text-white text-xs gap-x-2 mt-8 mx-3 lg:mx-7 z-10">
     <div className="flex flex-1 group/clearAll gap-x-3 flex-wrap gap-y-2">
      <svg className='w-5 fill-gray-500' aria-hidden="true" focusable="false" data-icon="tags" role='img' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 91 73">
       <path fillRule="evenodd" d="M40.3 67.78a1.825 1.825 0 0 1-2.578 0L1.036 31.092a1.71 1.71 0 0 1-.528-1.441L2.625 4.494a1.8 1.8 0 0 1 1.664-1.663L29.446.713c.062 0 .125-.008.186-.008a1.688 1.688 0 0 1 1.255.536l36.688 36.688a1.826 1.826 0 0 1 0 2.579L40.3 67.78Zm49.668-23.287a1.83 1.83 0 0 0 0-2.58L53.282 5.226a1.7 1.7 0 0 0-1.444-.528l-11.162.94 29.6 29.6a5.64 5.64 0 0 1 0 7.971L50.914 62.561l9.2 9.2a1.832 1.832 0 0 0 2.578 0l27.276-27.268ZM11.844 12.048a6.009 6.009 0 1 0 8.5 8.496 6.009 6.009 0 0 0-8.5-8.496Zm5.8 5.8a2.2 2.2 0 1 0-1.553.644 2.2 2.2 0 0 0 1.555-.641l-.002-.003Z" clipRule="evenodd" />
      </svg>

      <div ref={activeFilterWrapRef} className="flex gap-x-3 ml-2 items-center flex-wrap gap-y-2">
       {selectedFiltersManager.searchAnimeFilter && (
        <div data-value={selectedFiltersManager.searchAnimeFilter} data-origin={selectedFiltersManager.searchAnimeFilter} onClick={handleClearActiveSearchFilter} className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group">
         <p>Search: {_.startCase(selectedFiltersManager.searchAnimeFilter)}</p>

         <svg className={`w-2 fill-blue-300 hidden group-hover:block`} aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

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
        <div data-from-filter="year" onClick={handleClearActiveSliderFilterItem} className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/yearSlider">
         <p>Year Range: {sliderFilters.year.join('-')}</p>

         <svg className="w-2 fill-blue-300 hidden group-hover/yearSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

       {JSON.stringify(sliderFilters.episodes) !== JSON.stringify(SLIDERS_VALUES.episodes.defaultValue) && (
        <div data-from-filter="episodes" onClick={handleClearActiveSliderFilterItem} className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/episodesSlider">
         <p>Episodes: {sliderFilters.episodes.join('-')}</p>
         <svg className="w-2 fill-blue-300 hidden group-hover/episodesSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

       {JSON.stringify(sliderFilters.duration) !== JSON.stringify(SLIDERS_VALUES.duration.defaultValue) && (
        <div data-from-filter="duration" onClick={handleClearActiveSliderFilterItem} className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/durationSlider">
         <p>Duration: {sliderFilters.duration.join('-')}</p>
         <svg className="w-2 fill-blue-300 hidden group-hover/durationSlider:block" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
          <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
         </svg>
        </div>
       )}

       {JSON.stringify(sliderFilters.minimumTagPercentage) !== JSON.stringify(SLIDERS_VALUES.minimumTagPercentage.defaultValue) && (
        <div data-from-filter="minimumTagPercentage" onClick={handleClearActiveSliderFilterItem} className="flex bg-blue-600 rounded-md cursor-pointer items-center py-1 px-2 gap-x-2 group/durationSlider">
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

     <SelectsWrap />
    </section>
   )}

   <Outlet />
  </>
 )
}

export default memo(ActiveFiltersAnime)