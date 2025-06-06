import { memo, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

// Import constant variables
import { DROPDOWN_ITEMS } from '../constants/constants';

// Import components
import GenreSearchResults from "./GenreSearchResults";

// Import RTK features
import { setFilterCheckbox, setSearchingFilter } from "../features/selectedFiltersManager";

function MainDataDropdownGenres({ isAdvancedFilter, htmlfor }) {
  const dispatch = useDispatch();

  // RTK store
  const checkboxFilterValues = useSelector((state) => state.selectedFiltersManager.checkboxDropdownFilters.genres);
  const searchKeyword = useSelector((state) => state.selectedFiltersManager.searchGenresFilter); // Users are typing their search queries.

  const filteredGenres = useMemo(() => {
    return DROPDOWN_ITEMS.genres.filter(genre => genre.name.toLowerCase().includes(searchKeyword.toLowerCase()))
  }, [searchKeyword])


  const handleSelectFilterCheckbox = useCallback((event) => {
    let { value, checked } = event.target;
    const keyFilter = 'genres';

    dispatch(setFilterCheckbox({ keyFilter, valueFilter: checked ? value = [...checkboxFilterValues, value] : checkboxFilterValues.filter(item => item !== value) }));

    dispatch(setSearchingFilter({ keyFilter: 'searchGenresFilter', valueFilter: '' }));
  }, [checkboxFilterValues, dispatch]);

  return (
    <>
      {filteredGenres.map(data => (
        <label key={data.id} data-isadvancedfilter={isAdvancedFilter} htmlFor={`${htmlfor}-${data.name}`} className="flex justify-between items-center cursor-pointer data-[isadvancedfilter=false]:hover:bg-background-200 duration-75 ease-in-out rounded-md data-[isadvancedfilter=false]:p-2 mt-1 group relative data-[isadvancedfilter=false]:flex-row-reverse">
          <input type="checkbox" value={data.name} checked={checkboxFilterValues.includes(data.name)} onChange={handleSelectFilterCheckbox} className="peer appearance-none" name={`${htmlfor}-${data.name}`} id={`${htmlfor}-${data.name}`} />
          <p data-isadvancedfilter={isAdvancedFilter} className="text-gray-700 font-semibold group-hover:text-blue-600 duration-75 ease-in-out md:text-sm data-[isadvancedfilter=true]:peer-checked:bg-green-400 data-[isadvancedfilter=true]:bg-blue-600 data-[isadvancedfilter=true]:text-white data-[isadvancedfilter=true]:rounded-md data-[isadvancedfilter=true]:py-[5px] data-[isadvancedfilter=true]:px-[8px] data-[isadvancedfilter=true]:text-xs data-[isadvancedfilter=true]:hover:bg-green-400">{data.name}</p>

          {isAdvancedFilter === "false" && (
            <svg className='w-5 lg:w-4 fill-blue hidden peer-checked:block absolute right-0 top-1/2 -translate-y-1/2' aria-hidden="true" focusable="false" role='img' data-icon="checklist" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path d="M42 .332C19.023.332.332 19.023.332 42 .332 64.973 19.023 83.668 42 83.668c22.973 0 41.668-18.691 41.668-41.668S64.973.332 42 .332Zm19.613 32.113-25 25a4.156 4.156 0 0 1-5.89 0l-8.333-8.332a4.161 4.161 0 0 1 0-5.89 4.161 4.161 0 0 1 5.891 0l5.387 5.386 22.055-22.055a4.161 4.161 0 0 1 5.89 0 4.169 4.169 0 0 1 0 5.891Z" /></svg>
          )}
        </label>
      ))}
    </>
  )
}

MainDataDropdownGenres.propTypes = {
  isAdvancedFilter: PropTypes.string,
  htmlfor: PropTypes.string,
}

export default memo(MainDataDropdownGenres);