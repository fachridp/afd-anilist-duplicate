import { lazy, memo, Suspense } from "react";
import { useSelector } from "react-redux";

// Import components
const MainDataDropdownGenres = lazy(() => import("../components/MainDataDropdownGenres"));
const OptionalDataDropdownGenres = lazy(() => import("../components/OptionalDataDropdownGenres"));

function DropdownGenresFilterContainer() {
  // RTK store
  const isDropdownGenres = useSelector((state) => state.dropdownFiltersManager.mainFilters.genres);

  return (
    <>
      {isDropdownGenres && (
        <div className="max-md:fixed max-md:top-[25vh] max-md:left-[5vw] z-10 md:absolute left-0 md:w-full md:top-[4.6rem]">
          <div className="flex justify-between md:hidden">
            <h2 className="text-white font-bold text-[15px] uppercase">Genres</h2>

            <svg className="w-3 cursor-pointer fill-white" aria-hidden="true" focusable="false" role="img" data-icon="minus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 695 137"><path fillRule="evenodd" d="M68 0h558c38 0 69 31 69 68 0 38-31 69-69 69H68c-37 0-68-31-68-69C0 31 31 0 68 0Z" clipRule="evenodd" /></svg>
          </div>

          <div className="bg-background-100 rounded-md overflow-y-auto overflow-scroll-dropdown-filter shadow-md closest-genres-filter max-h-[60vh] max-md:w-[90vw] pl-2 pr-2">
            <Suspense fallback={<p>Loading...</p>}>
              <h3 className="font-bold text-[13px] text-text uppercase tracking-wider pt-4">Genres</h3>
              <MainDataDropdownGenres isAdvancedFilter="false" htmlfor="genres" />

              <h3 className="font-bold text-[13px] text-text uppercase tracking-wider pt-4">Tags</h3>
              <OptionalDataDropdownGenres isAdvancedFilter="false" htmlfor="tag" />
            </Suspense>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(DropdownGenresFilterContainer);