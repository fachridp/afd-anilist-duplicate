import { memo } from "react"

function FilterTagsSearch() {
 return (
  <div className="row-span-2 pl-9">
   <label htmlFor="filter-tags">

    <div className="relative w-fit">
     <input type="text" name="filter-tags" id="filter-tags" placeholder="Filter Tags" className="bg-background-200 placeholder:text-gray-700 placeholder:text-[0.8125rem] text-[0.8125rem] rounded-md py-2 px-8 focus:outline-none text-gray-700" />

     <span className="absolute flex items-center inset-y-0 pl-3">
      <svg className="w-3 fill-gray-500" aria-hidden="true" focusable="false" role="img" data-icon="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 51 60">
       <path d="M25 48a23.85 23.85 0 0 0 9.93-2.16l8.8 12.47a4.001 4.001 0 0 0 6.54-4.61l-8.71-12.35A24 24 0 1 0 25 48Zm0-40a16 16 0 1 1 0 32 16 16 0 0 1 0-32Z" />
      </svg>
     </span>

     <span className="absolute flex items-center inset-y-0 pr-3 right-0 cursor-pointer">
      <svg className="w-3 fill-gray-500" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
       <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
       <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
      </svg>
     </span>
    </div>
   </label>
  </div>
 )
}

export default memo(FilterTagsSearch);