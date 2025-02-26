import { Outlet } from "react-router";
import { lazy, Suspense } from "react";

// Import components
import SearchFilter from "../components/SearchFilter";
import ExtraFilter from "../components/ExtraFilter";
const ButtonFilter = lazy(() => import("../components/ButtonFilter"));

export default function FiltersAnime() {
 return (
  <>
   <section className="mx-3 lg:mx-7">
    <div className="mt-5">
     <form className="grid grid-cols-10 gap-x-4 max-lg:gap-y-5 lg:flex lg:items-end lg:relative min-[1100px]:gap-x-7">
      <SearchFilter />

      <ExtraFilter />

      <Suspense fallback={null}>
       <ButtonFilter />
      </Suspense>
     </form>
    </div>
   </section>

   <Outlet />
  </>
 )
}