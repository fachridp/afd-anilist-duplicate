import { memo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";

// Import RTK features
import { setSearchAnimeFilter } from "../features/selectedFiltersManager";
import { SCREEN_SIZES } from "../constants/constants";

function SearchFilter() {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const searchAnimeFilterInputRef = useRef(null);

 // RTK store
 const screenSize = useSelector((state) => state.innerWidthManager.width > SCREEN_SIZES.large && 'large')
 const searchAnimeFilterValue = useSelector((state) => state.selectedFiltersManager.searchAnimeFilter);

 const handleSearchAnimeFilter = (event) => {
  const { value } = event.target

  dispatch(setSearchAnimeFilter(value))
  navigate(value.length > 0 ? `search/anime/${value}` : `search/anime`)
 }

 const handleClearSearchAnimeFilter = () => {
  dispatch(setSearchAnimeFilter(''))
  searchAnimeFilterInputRef.current.value = '';

  navigate('search/anime')
 }
 return (
  <div className="lg:shrink-0 col-end-11 col-start-1 lg:w-[10.625rem]">
   <label htmlFor="search">
    <p className="max-lg:hidden text-gray-900 font-semibold text-[0.9375rem]">Search</p>

    <div className="relative">
     <input
      ref={searchAnimeFilterInputRef}
      type="text"
      name="search"
      id="search"
      placeholder={screenSize === 'large' ? '' : 'Search'}
      onChange={handleSearchAnimeFilter}
      className="bg-background-100 shadow-md w-full py-[0.6875rem] px-9 placeholder:text-gray-600 text-gray-700 focus:outline-none text-[0.8125rem] font-normal rounded-md"
     />

     <span className="absolute flex items-center inset-y-0 pl-3">
      <svg className="w-3 fill-gray-400 lg:fill-gray-500" aria-hidden="true" focusable="false" role="img" data-icon="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 51 60">
       <path d="M25 48a23.85 23.85 0 0 0 9.93-2.16l8.8 12.47a4.001 4.001 0 0 0 6.54-4.61l-8.71-12.35A24 24 0 1 0 25 48Zm0-40a16 16 0 1 1 0 32 16 16 0 0 1 0-32Z" />
      </svg>
     </span>


     {searchAnimeFilterValue.length > 0 && (
      <span onClick={handleClearSearchAnimeFilter} className="absolute flex items-center inset-y-0 pr-3 right-0 cursor-pointer">
       <svg className="w-3 fill-gray-400 hover:fill-gray-500 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
        <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
       </svg>
      </span>
     )}
    </div>
   </label>
  </div>
 )
}

export default memo(SearchFilter)