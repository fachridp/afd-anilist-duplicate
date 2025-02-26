import { useQuery } from "@apollo/client";
import { memo } from "react"
import { Link, Outlet, useLocation } from "react-router";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

// Graphql queries
import { INITIAL_ANIME } from "../graphql/queryInitialAnime";

// Import constant variables
import { SCREEN_SIZES } from "../constants/constants";
import TooltipAnime from "../components/TooltipAnime";

function AnimeHome() {
  const location = useLocation();

  // RTK store
  const width = useSelector((state) => state.innerWidthManager.width < SCREEN_SIZES.large ? 'medium' : 'large');

  // useQuery
  const { data, loading, error } = useQuery(INITIAL_ANIME);
  return (
    <>
      {!location.search && (
        <section className="mt-10 mx-3 lg:mx-7">
          {/* Trending now */}
          <div>
            <Link to="search/anime/trending" className="flex items-center font-bold text-gray-700 mb-[1rem] tracking-wider">
              <p className="flex-1 hover:text-gray-800 ease-in-out duration-75">TRENDING NOW</p>
              <p className="text-xs text-gray-600 hover:text-gray-800 ease-in-out duration-75">View All</p>
            </Link>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 anime-trending-wrapper">
              {data?.trending?.media.map(animeTrending => (
                <div key={animeTrending.id} className="lg:last:hidden">
                  <Link
                    to={`anime/${animeTrending.id}/${animeTrending.title.userPreferred.replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').replaceAll('---', '--')}/`}
                    data-tooltip-id={animeTrending.title.userPreferred}
                    data-tooltip-place="right"
                    key={animeTrending.id}
                    className="rounded-md min-[1041px]:w-full grid grid-rows-[min-content,_auto] group">

                    <div className="h-[200px] min-[1041px]:h-[270px]">
                      <img src={width === 'medium' ? animeTrending.coverImage.large : animeTrending.coverImage.extraLarge} alt={animeTrending.title.romaji} className="shadow-md h-full overflow-hidden rounded-md cursor-pointer object-cover" />
                    </div>
                  </Link>

                  <Link
                    to={`anime/${animeTrending.title.userPreferred}`} className="pt-3 inline-block text-gray-700 text-xs font-semibold md:text-sm">{_.truncate(animeTrending.title.userPreferred, { length: width === 'large' ? 44 : 36, })}
                  </Link>

                  <Tooltip
                    id={animeTrending.title.userPreferred}
                    content={
                      <TooltipAnime
                        nextEpisode={animeTrending.nextAiringEpisode.episode}
                        timeUntilAiring={animeTrending.nextAiringEpisode.timeUntilAiring}
                        averageScore={animeTrending.averageScore}
                        airingSince={animeTrending.seasonYear}
                        studios={animeTrending.studios.edges[0].node.name}
                        format={animeTrending.format}
                        totalEpisodes={animeTrending.episodes}
                        genres={animeTrending.genres}
                      />
                    }
                    className="bg-white tooltip-anime-wrapper hidden md:block z-10"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Popular this season */}


          {loading && (<p>Loading...</p>)}
          {error && (<p>{error.message}</p>)}
        </section>
      )}

      <Outlet />
    </>
  )
}

export default memo(AnimeHome);