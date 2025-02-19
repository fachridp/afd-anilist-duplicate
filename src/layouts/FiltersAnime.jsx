import { Outlet } from "react-router";
import { lazy, Suspense } from "react";

// Import components
import SearchFilter from "../components/SearchFilter";
import ExtraFilter from "../components/ExtraFilter";
const ButtonFilter = lazy(() => import("../components/ButtonFilter"));

export default function FiltersAnime() {
 return (
  <>
   <section className="mx-5 lg:mx-4">
    <div className="mt-5">
     <form className="grid grid-cols-10 gap-x-4 max-lg:gap-y-5 lg:flex lg:items-end lg:relative lg:gap-x-6">
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