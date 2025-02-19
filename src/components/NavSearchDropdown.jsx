import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Import reuseable components
import HeaderDropdownSearchSecondary from "./reuseable/HeaderDropdownSearchSecondary";
import HeaderDropdownSearchTitle from "./reuseable/HeaderDropdownSearchTitle";

// Import RTK features
import { setFilterBrowse } from "../features/selectedFiltersManager";

// Import constant variables
import { BROWSE_ITEMS } from "../constants/constants";
import { useCallback } from "react";

export default function NavSearchDropdown() {
 const dispatch = useDispatch();

 // RTK store
 const selectedFilterBrowse = useSelector((state) => state.selectedFiltersManager.browse);

 const handleChooseBrowseFilter = useCallback((event) => {
  const { value } = event.currentTarget.dataset;

  const positionBrowseItem = BROWSE_ITEMS.findIndex(item => item.name.includes(value));
  const deleteCount = 1;
  const id = BROWSE_ITEMS[positionBrowseItem].id;
  const name = selectedFilterBrowse;
  const newElement = { id, name };

  BROWSE_ITEMS.splice(positionBrowseItem, deleteCount, newElement)
  dispatch(setFilterBrowse(value));
 }, [dispatch, selectedFilterBrowse])

 return (
  <div className="absolute left-[29rem] -bottom-[10.4rem] group-hover/search:block w-[17.5rem] shadow-md z-10 hidden">
   <div className="bg-background-100 rounded-tl-md rounded-tr-md py-4 px-6">
    <div className="text-gray-800 font-bold text-[0.9375rem] space-y-3">
     <div className="group flex items-start gap-x-4">
      <Link to="search/anime" data-value="Anime" onClick={handleChooseBrowseFilter}>
       <svg className="w-4 fill-gray-600 group-hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="play" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 70">
        <path d="M58.627 32.203 4.873 1.167c-1.082-.625-2.227-.625-3.311 0C.478 1.793 0 2.948 0 4.199V66.27c0 1.25.478 2.406 1.561 3.031.542.313 1.051.469 1.656.469.604 0 1.161-.156 1.703-.469l53.731-31.035a3.489 3.489 0 0 0 1.738-3.031 3.513 3.513 0 0 0-1.762-3.032Z" />
       </svg>
      </Link>

      <div>
       <HeaderDropdownSearchTitle
        linkTo="search/anime"
        groupHoverName="searchAnime"
        innerText="Anime"
        handleChooseBrowseFilter={handleChooseBrowseFilter}
       />
       <HeaderDropdownSearchSecondary linkTo="search/anime/top-100" innerText="Top-100" />
       <HeaderDropdownSearchSecondary linkTo="search/anime/trending" innerText="Trending" />
       <HeaderDropdownSearchSecondary linkTo="search/anime/top-movies" innerText="Top Movies" />
      </div>
     </div>

     <div className="group flex items-start gap-x-4">
      <Link to="search/manga" data-value="Manga" onClick={handleChooseBrowseFilter}>
       <svg className="w-4 fill-gray-600 group-hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="open-book" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 65"><path d="M34.5 10.352V64a.791.791 0 0 0 1.211.66 51.536 51.536 0 0 1 27.051-7.941.758.758 0 0 0 .77-.77V.86a.796.796 0 0 0-.793-.789 46.508 46.508 0 0 0-27.93 9.649.799.799 0 0 0-.309.633ZM29.5 10.352c0-.25-.113-.48-.309-.633A46.504 46.504 0 0 0 1.261.071a.792.792 0 0 0-.793.8v55.86h.383c5.031 0 10.04.742 14.86 2.199a50.93 50.93 0 0 1 12.577 5.742A.792.792 0 0 0 29.5 64l.001-53.648Z" /></svg>
      </Link>

      <div>
       <HeaderDropdownSearchTitle
        linkTo="search/manga"
        groupHoverName="searchManga"
        innerText="Manga"
        handleChooseBrowseFilter={handleChooseBrowseFilter}
       />
       <HeaderDropdownSearchSecondary
        linkTo="search/manga/top-100"
        innerText="Top-100"
       />
       <HeaderDropdownSearchSecondary
        linkTo="search/manga/trending"
        innerText="Trending"
       />
       <HeaderDropdownSearchSecondary
        linkTo="search/manga/top-manhwa"
        innerText="Top Manhwa"
       />
      </div>
     </div>
    </div>
   </div>

   <div className="bg-background-200 rounded-br-md rounded-bl-md py-3 px-6">
    <div className="grid grid-cols-2 gap-y-2">
     <Link to="search/staff" data-value="Staff" onClick={handleChooseBrowseFilter} className="group flex items-center gap-x-2 cursor-pointer">
      <svg className="fill-gray-700 w-3 group-hover:fill-gray-900" aria-hidden="true" focusable="false" role="img" data-icon="user-tie" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 72 90">
       <path d="M19.2 17.4C20-.1 34.6.1 36.1.1 37.5 0 52.2-.1 53 17.4c0 0 2.8 26.2-16.8 26.4H36c-19.7-.2-16.8-26.4-16.8-26.4Zm52.7 57.3v-.4 15.6H.2V74.3v.4-4c.2-5.6 1.2-9.6 7-13.2 7.7-4.8 16.2-9 16.2-9L30.2 70l4-11.3c-7-9.7.5-10.2 1.8-10.2s8.8.5 1.8 10.2l4 11.3 6.8-21.5s8.5 4.1 16.2 9c5.8 3.6 6.8 7.5 7 13.2v.5c.1 1.2.1 2.3.1 3.5Zm-71.7-4c0-.1 0-.1 0 0Zm71.6 0c0-.1 0-.1 0 0Z" />
      </svg>

      <p className="text-gray-700 text-[0.6875rem] font-semibold group-hover:text-gray-900 w-full ease-in-out duration-75">Staff</p>
     </Link>

     <Link to="search/characters" data-value="Characters" onClick={handleChooseBrowseFilter} className="group flex items-center gap-x-2 cursor-pointer">
      <svg className="fill-gray-700 w-3 group-hover:fill-gray-900" aria-hidden="true" focusable="false" role="img" data-icon="user-astronaut" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 96">
       <path d="m50.457 57.57.406 4.258c.61-1.281 1.047-2.668 1.188-4.102l-1.59-.156h-.004ZM17.801 15.289c.703-.813 1.465-1.637 2.356-2.434a.624.624 0 0 1 .89.047.618.618 0 0 1-.047.875 27.228 27.228 0 0 0-2.308 2.371c-.297.579-2.293 4.82-2.075 10.344 1.203-2.636 2.934-5.101 5.07-7.082a.638.638 0 0 1 .891.032c.235.25.22.64-.03.875a19.802 19.802 0 0 0-2.013 2.183c-.218.313-1.964 3.043-.484 7.332 1.156-2.09 3.918-6.351 8.426-9.457a.629.629 0 0 1 .875.157.643.643 0 0 1-.156.875c-.641.437-1.22.89-1.778 1.359-.047.078-1.047 1.621-1.156 5.445 2.074-1.062 7.41-4.539 10.125-12.996a.62.62 0 0 1 .781-.406.614.614 0 0 1 .407.781 29.073 29.073 0 0 1-1.684 4.149c.031 3.98 2.402 5.757 3.793 6.445-.953-5.633.172-9.113.469-9.86-.235-1.218-.313-2.496-.235-3.824.032-.344.328-.625.672-.578.344.031.61.328.578.672-.265 3.965 1.063 7.504 3.856 10.344-.063-2.965.578-4.852.828-5.492-.36-.953-.688-1.95-.938-3.012a.642.642 0 0 1 .485-.765.634.634 0 0 1 .75.484c1.777 7.77 7.363 12.324 9.594 13.887-.11-3.184-.844-4.727-1.079-5.148a17.622 17.622 0 0 0-1.84-1.481.643.643 0 0 1-.155-.875.629.629 0 0 1 .875-.156c.468.328.906.672 1.328 1.015.172.157 1.218 1.157 1.418 1.356 2.496 2.605 3.87 5.539 4.523 7.363 1.418-4.105.734-7.176.578-7.723a18.423 18.423 0 0 0-1.918-2.074.618.618 0 0 1-.031-.875c.25-.25.64-.265.89-.031.797.734 1.481 1.496 2.09 2.246 0 .016.016.031.032.047a22.933 22.933 0 0 1 2.949 4.79c.218-5.524-1.778-9.767-2.075-10.345a27.242 27.242 0 0 0-2.308-2.371.618.618 0 0 1-.047-.875.623.623 0 0 1 .89-.047c.891.797 1.653 1.621 2.372 2.434.062.062.125.125.172.203a33.6 33.6 0 0 1 3.386 4.804c-.28-3.933-1.824-11.483-9.176-16.397C51.844-.655 46.264-.25 42.47 1.185c1.329.765 2.075 1.433 2.09 1.449a.61.61 0 0 1 .032.89.618.618 0 0 1-.875.032c-.125-.11-1.125-1-2.84-1.84a.751.751 0 0 1-.25-.125C37.176-.015 31.075-1.265 23.415 3.9c-7.363 4.93-8.91 12.465-9.176 16.398.75-1.313 1.887-3.012 3.371-4.774a.76.76 0 0 1 .203-.234l-.012-.001ZM61.426 44.902c.203.031.39.078.61.078 2.855 0 5.07-3.433 5.07-6.383 0-3.105-2.262-4.57-4.633-4.726v2.105c1.715.047 2.746 1.047 2.746 2.684 0 1.824-1.266 3.965-2.887 3.965-.078 0-.156-.016-.234-.016a19.296 19.296 0 0 1-.672 2.293ZM45.477 71.27c.031 1.063 2.668 3.356 5.21 4.477 1.345.578 2.075.562 2.247.406 1.434-1.266 4.758-5.211 4.555-14.605-.047-2.387-1.371-3.59-4.164-3.746-.485 5.039-4.18 9.176-6.415 11.688-.64.719-1.355 1.511-1.433 1.777v.003Z" />
       <path d="M63.969 38.66c0-.344-.016-1.371-1.496-1.434v1.793c0 .797-.078 1.575-.188 2.356h.047c.766 0 1.637-1.45 1.637-2.715ZM16.004 38.598c0 2.95 2.215 6.383 5.07 6.383.156 0 .297-.047.438-.063a14.805 14.805 0 0 1-.672-2.293h-.063c-1.62 0-2.886-2.136-2.886-3.965 0-1.59.953-2.558 2.558-2.667v-2.106c-2.293.219-4.445 1.7-4.445 4.711ZM45.977 68.664c1.11-1.25 2.59-2.902 3.824-4.867l-.765-7.88a17.186 17.186 0 0 1-3.95.47h-7.253c-1.684 0-3.325-.25-4.852-.703l-.781 8.113c1.234 1.965 2.714 3.62 3.824 4.867.937 1.047 1.465 1.637 1.652 2.121 1.59.86 3.137.953 3.324.969.188-.016 1.73-.11 3.325-.969.187-.484.718-1.078 1.652-2.121ZM61.223 32.324c-.125.156-.297.266-.5.266h-.063a.632.632 0 0 1-.546-.485c-.016-.047-.844-3.558-3.434-6.972a20.44 20.44 0 0 1 .313 4.058c0 .219-.11.422-.313.531a.563.563 0 0 1-.313.094.701.701 0 0 1-.296-.078c-.297-.172-6.118-3.496-9.457-10.484-.266 1.14-.5 2.871-.282 5.133a.61.61 0 0 1-.328.625.634.634 0 0 1-.297.062.6.6 0 0 1-.39-.14c-2.121-1.778-3.621-3.887-4.508-6.211-.297 1.762-.484 4.617.297 8.332a.6.6 0 0 1-.172.578.6.6 0 0 1-.438.172c-.046 0-.093 0-.156-.016-.047-.015-4.555-1.203-5.539-6.148-3.824 6.226-8.707 8.05-8.973 8.144a.916.916 0 0 1-.203.032.743.743 0 0 1-.36-.11.63.63 0 0 1-.265-.515c-.031-1.95.157-3.434.407-4.54-1.669 1.746-2.903 3.528-3.715 4.836v9.535c0 8.88 7.238 16.117 16.133 16.117h7.254c8.894 0 16.133-7.238 16.133-16.117v-6.695l.011-.004Zm-19.879 8.738c.766-.078 1.188-.312 1.297-.687.187-.735-.703-2.012-1.125-2.309a.624.624 0 0 1-.156-.875.626.626 0 0 1 .875-.14c.593.406 1.98 2.152 1.605 3.636-.156.64-.703 1.434-2.355 1.621h-.078a.638.638 0 0 1-.625-.547.655.655 0 0 1 .562-.703v.004Zm-7.785-4.574c-1.07 0-1.945-1.05-1.945-2.352 0-1.285.875-2.335 1.945-2.335s1.945 1.05 1.945 2.335c0 1.305-.875 2.352-1.945 2.352Zm2.73-5.613a.711.711 0 0 1-.312.078.635.635 0 0 1-.547-.313c-.016-.03-.516-.828-1.793-.828-1.313 0-1.762.766-1.777.813a.637.637 0 0 1-.844.25.625.625 0 0 1-.266-.844c.032-.047.782-1.465 2.887-1.465 2.027 0 2.855 1.387 2.887 1.45a.636.636 0 0 1-.235.859Zm10.36 16.289c-.048.094-1.31 1.965-4.915 1.965-3.449 0-4.836-1.856-4.883-1.934a.637.637 0 0 1 .125-.875c.282-.203.688-.14.875.14.047.047 1.11 1.422 3.887 1.422 2.871 0 3.84-1.343 3.871-1.402a.644.644 0 0 1 .875-.172c.281.203.36.578.172.86l-.008-.004Zm3.277-10.676c-1.09 0-1.946-1.051-1.946-2.352 0-1.285.856-2.336 1.946-2.336 1.07 0 1.945 1.051 1.945 2.336 0 1.305-.875 2.352-1.945 2.352Zm2.714-5.613a.711.711 0 0 1-.312.078.61.61 0 0 1-.531-.313c-.016-.031-.516-.828-1.793-.828-1.328 0-1.778.766-1.793.813a.637.637 0 0 1-.844.25.639.639 0 0 1-.266-.844c.032-.047.782-1.465 2.903-1.465 2.027 0 2.84 1.387 2.87 1.45a.622.622 0 0 1-.234.859Z" />
       <path d="M50 33.484c0-.172.063-.328.188-.453a.513.513 0 0 0-.266-.063c-.547 0-.969.532-.969 1.172 0 .657.422 1.172.969 1.172.531 0 .969-.515.969-1.172v-.047a.57.57 0 0 1-.235.047.66.66 0 0 1-.656-.656ZM33.637 33.484c0-.172.063-.328.188-.453a.513.513 0 0 0-.266-.063c-.547 0-.969.532-.969 1.172 0 .657.422 1.172.969 1.172.531 0 .969-.515.969-1.172v-.047a.57.57 0 0 1-.235.047.66.66 0 0 1-.656-.656ZM65.277 80.133a.625.625 0 0 1 .766.453c1.62 6.352 1.98 13.31 2.058 15.227h13.09c-.406-3.09-2.183-15.805-5.273-22.469-3.7-7.973-8.442-11.516-17.273-12.824.062.344.093.672.093 1.016.204 9.55-3.027 13.84-4.976 15.555-.297.265-.719.406-1.234.406-.625 0-1.403-.203-2.34-.61-2.106-.921-4.946-2.949-5.727-4.773-1.125.516-2.168.75-2.808.828l-.016 22.875h25.199c-.063-1.918-.422-8.707-2.012-14.918a.612.612 0 0 1 .453-.766ZM37.535 72.113c-.781 1.824-3.621 3.856-5.727 4.773-.937.407-1.714.61-2.34.61-.515 0-.937-.14-1.234-.406-1.949-1.715-5.18-6.008-4.976-15.556 0-.343.03-.671.093-1.015C14.52 61.83 9.777 65.37 6.078 73.343 2.988 80.007 1.211 92.722.805 95.812h13.09c.078-1.918.437-8.879 2.059-15.227a.637.637 0 0 1 .765-.453.612.612 0 0 1 .453.765c-1.59 6.211-1.949 12.996-2.011 14.918H40.36l-.016-22.875c-.64-.078-1.684-.311-2.809-.827ZM31.141 61.828l.406-4.258-1.59.157c.141 1.433.579 2.808 1.188 4.101h-.004ZM19.141 38.66c0 1.188.766 2.512 1.48 2.684-.093-.766-.171-1.543-.171-2.325v-1.777c-1.297.14-1.313 1.078-1.313 1.418h.004Z" />
       <path d="M24.508 61.551c-.203 9.394 3.121 13.34 4.555 14.605.172.156.922.172 2.246-.406 2.543-1.125 5.18-3.418 5.21-4.555-.077-.188-.796-.984-1.433-1.7-2.23-2.51-5.93-6.648-6.414-11.687-2.793.156-4.117 1.36-4.164 3.746v-.003Z" />
      </svg>

      <p className="text-gray-700 text-[0.6875rem] font-semibold group-hover:text-gray-900 w-full ease-in-out duration-75">Characters</p>
     </Link>

     <div className="group flex items-center gap-x-2">
      <svg className="fill-gray-700 w-[.9rem] group-hover:fill-gray-900" aria-hidden="true" focusable="false" role="img" data-icon="star" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 86"><path fillRule="evenodd" d="m50.219 3.938 9.86 22.18 24.187 2.527c4.965.52 6.899 6.61 3.23 9.906L69.416 54.819l5.07 23.785c1.031 4.847-4.148 8.597-8.433 6.117L45 72.552 23.95 84.724c-4.286 2.476-9.465-1.274-8.434-6.118l5.07-23.784L2.504 38.555c-3.668-3.296-1.734-9.39 3.23-9.906l24.189-2.527 9.855-22.164c2.18-4.766 8.453-4.43 10.414-.094l.027.074Z" clipRule="evenodd" /></svg>

      <HeaderDropdownSearchSecondary linkTo="reviews" typeDropdownSearch="footer" innerText="Reviews" />
     </div>

     <div className="group flex items-center gap-x-2">
      <svg className="fill-gray-700 w-[.9rem] group-hover:fill-gray-900" aria-hidden="true" focusable="false" role="img" data-icon="thumbs-up" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 84">
       <path d="M50.102 83.453H84.2c3.602 0 6.5-2.898 6.5-6.5 0-3-2.102-5.5-4.898-6.3-.102 0-.102-.2 0-.2 3.601 0 6.5-2.898 6.5-6.5 0-3-2.102-5.5-4.899-6.3-.101 0-.101-.2 0-.2 3.602 0 6.5-2.899 6.5-6.5 0-3-2.101-5.5-4.898-6.3-.102 0-.102-.2 0-.2 3.601 0 6.5-2.899 6.5-6.5 0-3.602-2.899-6.5-6.5-6.5-3.602 0-8.801 0-13.2.102-2.698.101-8.1.101-11.8 0-2 0-3.399-2-2.801-3.801 1.898-5.7 5.297-16.2 5.898-19.5 1.5-8-10.898-10.398-13.398-4.2-2.3 5.899-11.5 23.7-22.3 30.399-1.301.8-2.102 2.199-2.102 3.699l-.102 36.5c.102 2.5 8.7 8.801 20.902 8.801ZM24 38.648v36.801c0 2.602-2.102 4.8-4.8 4.8H5.3c-2.601 0-4.8-2.1-4.8-4.8V38.648c0-2.602 2.101-4.8 4.8-4.8H19.2c2.602.003 4.801 2.1 4.801 4.8Z" />
      </svg>

      <HeaderDropdownSearchSecondary linkTo="recommendations" typeDropdownSearch="footer" innerText="Recommendations" />
     </div>
    </div>
   </div>
  </div>
 )
}