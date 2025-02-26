import { useQuery } from "@apollo/client"
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";

// Graphql queries
import { SEARCH_RESULT } from "../graphql/querySearchResult"

// Import constant variables
import { SCREEN_SIZES } from "../constants/constants";

export default function SearchedAnimeHome() {
 const [page, setPage] = useState(1);
 const perPage = 20;

 // RTK store
 const width = useSelector((state) => state.innerWidthManager.width);
 const searchAnimeValue = useSelector((state) => state.selectedFiltersManager.searchAnimeFilter);
 const selectedBrowse = useSelector((state) => _.upperCase(state.selectedFiltersManager.browse));

 // Query
 // const { data, loading, error, fetchMore } = useQuery(SEARCH_RESULT, {
 //  variables:
 //  {
 //   search: searchAnimeValue,
 //   page,
 //   perPage,
 //   type: selectedBrowse
 //  },
 //  skip: !searchAnimeValue,
 //  notifyOnNetworkStatusChange: true,
 // });

 // const loadMore = useCallback(() => {
 //  if (data?.Page?.pageInfo?.hasNextPage && !loading) {
 //   fetchMore({
 //    variables: {
 //     search: searchAnimeValue,
 //     page,
 //     type: selectedBrowse
 //    },
 //    updateQuery: (prevResult, { fetchMoreResult }) => {
 //     if (!fetchMoreResult || !fetchMoreResult.Page) return prevResult;

 //     return {
 //      Page: {
 //       ...fetchMoreResult.Page,
 //       media: [...prevResult.Page.media, ...fetchMoreResult.Page.media], // Tambahkan data baru tanpa menghapus lama
 //       pageInfo: fetchMoreResult.Page.pageInfo, // Perbarui informasi halaman
 //      },
 //     };
 //    },
 //   }).then(() => setPage((prev) => prev + 1));
 //  }
 // }, [data?.Page?.pageInfo?.hasNextPage, fetchMore, loading, page, searchAnimeValue, selectedBrowse]);

 // useEffect(() => {
 //  const handleScroll = () => {
 //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5 && !loading && data?.Page?.pageInfo.hasNextPage) {
 //    loadMore();
 //   }
 //  }

 //  window.addEventListener('scroll', handleScroll);
 //  return () => window.removeEventListener('scroll', handleScroll)
 // }, [data?.Page?.pageInfo.hasNextPage, loadMore, loading]);

 // if (loading && page === 1) return <p className="mx-3 mt-4">Loading...</p>
 // if (error) return <p>Error : {error.message}</p>
 return (
  <section className="mx-3 lg:mx-7 mt-10">
   <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10">
    {/* {data?.Page?.media.map((anime) => (
     <div key={anime.id} className="text-gray-700 text-xs font-semibold rounded-md md:text-sm min-[1041px]:w-full grid grid-rows-[min-content,_auto]">
      <div className="h-[200px] min-[1041px]:h-[270px]">
       <img src={width < SCREEN_SIZES.large ? anime.coverImage.large : anime.coverImage.extraLarge} alt={anime.title.romaji} className="shadow-md h-full overflow-hidden rounded-md cursor-pointer object-cover" />
      </div>
      <h3 className="pt-3">{_.truncate(anime.title.romaji, { length: width > SCREEN_SIZES.large ? 55 : 36, })}</h3>
     </div>
    ))} */}
   </div>

   {/* {data && data.Page.media.length === 0 && (
    <p className="text-text font-bold text-[20px] text-center">No Results</p>
   )} */}
  </section>
 )
}
