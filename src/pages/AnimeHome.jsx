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

// Import components
import TooltipAnime from "../components/TooltipAnime";
import AnimeSkeleton from "../components/reuseable/AnimeSkeleton";

function AnimeHome() {
  const location = useLocation();

  // RTK store
  const width = useSelector((state) => state.innerWidthManager.width < SCREEN_SIZES.large ? 'medium' : 'large');

  // useQuery
  const { data, loading, error } = useQuery(INITIAL_ANIME, {
    variables: {
      nextSeason: "SPRING",
      nextYear: 2025,
      season: "WINTER",
      seasonYear: 2025,
      type: "ANIME"
    }
  });
  return (
    <>
      {!location.search && (
        <section className="mt-10 mx-3 lg:mx-7 space-y-10">
          {/* Trending now */}
          <div>
            <Link to="search/anime/trending" className="flex items-center font-bold text-gray-700 mb-[1rem] tracking-wider">
              <p className="flex-1 hover:text-gray-800 ease-in-out duration-75">TRENDING NOW</p>
              <p className="text-xs text-gray-600 hover:text-gray-800 ease-in-out duration-75">View All</p>
            </Link>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 anime-trending-wrapper">
              {loading
                ? <AnimeSkeleton />
                : data?.trending?.media.map(animeTrending => (
                  <div key={animeTrending.id} className="lg:last:hidden">
                    <Link
                      to={`anime/${animeTrending.id}/${animeTrending.title.userPreferred.replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').replaceAll('---', '--')}/`}
                      data-tooltip-id={animeTrending.title.userPreferred}
                      data-tooltip-place="right"
                      key={animeTrending.id}
                      className="rounded-md min-[1041px]:w-full grid grid-rows-[min-content,_auto] group">

                      <div className="h-[200px] min-[1041px]:h-[270px]">
                        <img width={184} height={270} src={width === 'medium' ? animeTrending.coverImage.large : animeTrending.coverImage.extraLarge} alt={_.lowerCase(animeTrending.title.english)} className="shadow-md h-full overflow-hidden rounded-md cursor-pointer object-cover" />
                      </div>
                    </Link>

                    <Link
                      to={`anime/${animeTrending.title.userPreferred}`} className="pt-3 inline-block text-gray-700 text-xs font-semibold md:text-sm">{_.truncate(animeTrending.title.userPreferred, { length: width === 'large' ? 44 : 36, })}
                    </Link>

                    <Tooltip
                      id={animeTrending.title.userPreferred}
                      content={
                        <TooltipAnime
                          nextAiringEpisode={animeTrending?.nextAiringEpisode?.episode}
                          season={animeTrending.season}
                          seasonYear={animeTrending?.seasonYear}
                          status={animeTrending?.status}
                          timeUntilAiring={animeTrending?.nextAiringEpisode?.timeUntilAiring}
                          averageScore={animeTrending?.averageScore}
                          studios={animeTrending?.studios?.edges[0]?.node?.name}
                          format={animeTrending?.format}
                          episodes={animeTrending?.episodes}
                          genres={animeTrending?.genres}
                        />
                      }
                      className="tooltip-anime-wrapper hidden md:block"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Popular this season */}
          <div>
            <Link to="search/anime/this-season" className="flex items-center font-bold text-gray-700 mb-[1rem] tracking-wider">
              <p className="flex-1 hover:text-gray-800 ease-in-out duration-75">POPULAR THIS SEASON</p>
              <p className="text-xs text-gray-600 hover:text-gray-800 ease-in-out duration-75">View All</p>
            </Link>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 anime-trending-wrapper">
              {loading
                ? <AnimeSkeleton />
                : data?.season?.media.map(animePopular => (
                  <div key={animePopular.id} className="lg:last:hidden">
                    <Link
                      to={`anime/${animePopular.id}/${animePopular.title.userPreferred.replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').replaceAll('---', '--')}/`}
                      data-tooltip-id={animePopular.title.userPreferred}
                      data-tooltip-place="right"
                      key={animePopular.id}
                      className="rounded-md min-[1041px]:w-full grid grid-rows-[min-content,_auto] group">

                      <div className="h-[200px] min-[1041px]:h-[270px]">
                        <img width={184} height={270} src={width === 'medium' ? animePopular.coverImage.large : animePopular.coverImage.extraLarge} alt={_.lowerCase(animePopular.title.english)} className="shadow-md h-full overflow-hidden rounded-md cursor-pointer object-cover" />
                      </div>
                    </Link>

                    <Link
                      to={`anime/${animePopular.title.userPreferred}`} className="pt-3 inline-block text-gray-700 text-xs font-semibold md:text-sm">{_.truncate(animePopular.title.userPreferred, { length: width === 'large' ? 44 : 36, })}
                    </Link>

                    <Tooltip
                      id={animePopular.title.userPreferred}
                      content={
                        <TooltipAnime
                          nextAiringEpisode={animePopular?.nextAiringEpisode?.episode}
                          season={animePopular.season}
                          seasonYear={animePopular?.seasonYear}
                          status={animePopular?.status}
                          timeUntilAiring={animePopular?.nextAiringEpisode?.timeUntilAiring}
                          averageScore={animePopular?.averageScore}
                          studios={animePopular?.studios?.edges[0]?.node?.name}
                          format={animePopular?.format}
                          episodes={animePopular?.episodes}
                          genres={animePopular?.genres}
                        />
                      }
                      className="bg-white tooltip-anime-wrapper hidden md:block z-10"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Upcoming next season */}
          <div>
            <Link to="search/anime/next-season" className="flex items-center font-bold text-gray-700 mb-[1rem] tracking-wider">
              <p className="flex-1 hover:text-gray-800 ease-in-out duration-75">UPCOMING NEXT SEASON</p>
              <p className="text-xs text-gray-600 hover:text-gray-800 ease-in-out duration-75">View All</p>
            </Link>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 anime-trending-wrapper">
              {loading
                ? <AnimeSkeleton />
                : data?.nextSeason?.media.map(animeNextSeason => (
                  <div key={animeNextSeason.id} className="lg:last:hidden">
                    <Link
                      to={`anime/${animeNextSeason.id}/${animeNextSeason.title.userPreferred.replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').replaceAll('---', '--')}/`}
                      data-tooltip-id={animeNextSeason.title.userPreferred}
                      data-tooltip-place="right"
                      key={animeNextSeason.id}
                      className="rounded-md min-[1041px]:w-full grid grid-rows-[min-content,_auto] group">

                      <div className="h-[200px] min-[1041px]:h-[270px]">
                        <img width={184} height={270} src={width === 'medium' ? animeNextSeason.coverImage.large : animeNextSeason.coverImage.extraLarge} alt={_.lowerCase(animeNextSeason.title.english)} className="shadow-md h-full overflow-hidden rounded-md cursor-pointer object-cover" />
                      </div>
                    </Link>

                    <Link
                      to={`anime/${animeNextSeason.title.userPreferred}`} className="pt-3 inline-block text-gray-700 text-xs font-semibold md:text-sm">{_.truncate(animeNextSeason.title.userPreferred, { length: width === 'large' ? 44 : 36, })}
                    </Link>

                    <Tooltip
                      id={animeNextSeason.title.userPreferred}
                      content={
                        <TooltipAnime
                          nextAiringEpisode={animeNextSeason?.nextAiringEpisode?.episode}
                          season={animeNextSeason.season}
                          seasonYear={animeNextSeason?.seasonYear}
                          status={animeNextSeason?.status}
                          timeUntilAiring={animeNextSeason?.nextAiringEpisode?.timeUntilAiring}
                          averageScore={animeNextSeason?.averageScore}
                          studios={animeNextSeason?.studios?.edges[0]?.node?.name}
                          format={animeNextSeason?.format}
                          episodes={animeNextSeason?.episodes}
                          genres={animeNextSeason?.genres}
                        />
                      }
                      className="bg-white tooltip-anime-wrapper hidden md:block z-10"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* All time popular */}
          <div>
            <Link to="search/anime/popular" className="flex items-center font-bold text-gray-700 mb-[1rem] tracking-wider">
              <p className="flex-1 hover:text-gray-800 ease-in-out duration-75">ALL TIME POPULAR</p>
              <p className="text-xs text-gray-600 hover:text-gray-800 ease-in-out duration-75">View All</p>
            </Link>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 anime-trending-wrapper">
              {loading
                ? <AnimeSkeleton />
                : data?.popular?.media.map(animePopular => (
                  <div key={animePopular.id} className="lg:last:hidden">
                    <Link
                      to={`anime/${animePopular.id}/${animePopular.title.userPreferred.replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').replaceAll('---', '--')}/`}
                      data-tooltip-id={animePopular.title.userPreferred}
                      data-tooltip-place="right"
                      key={animePopular.id}
                      className="rounded-md min-[1041px]:w-full grid grid-rows-[min-content,_auto] group">

                      <div className="h-[200px] min-[1041px]:h-[270px]">
                        <img width={184} height={270} src={width === 'medium' ? animePopular.coverImage.large : animePopular.coverImage.extraLarge} alt={_.lowerCase(animePopular.title.english)} className="shadow-md h-full overflow-hidden rounded-md cursor-pointer object-cover" />
                      </div>
                    </Link>

                    <Link
                      to={`anime/${animePopular.title.userPreferred}`} className="pt-3 inline-block text-gray-700 text-xs font-semibold md:text-sm">{_.truncate(animePopular.title.userPreferred, { length: width === 'large' ? 44 : 36, })}
                    </Link>

                    <Tooltip
                      id={animePopular.title.userPreferred}
                      content={
                        <TooltipAnime
                          nextAiringEpisode={animePopular?.nextAiringEpisode?.episode}
                          season={animePopular?.season}
                          seasonYear={animePopular?.seasonYear}
                          status={animePopular?.status}
                          timeUntilAiring={animePopular?.nextAiringEpisode?.timeUntilAiring}
                          averageScore={animePopular?.averageScore}
                          studios={animePopular?.studios?.edges[0]?.node?.name}
                          format={animePopular?.format}
                          episodes={animePopular?.episodes}
                          genres={animePopular?.genres}
                        />
                      }
                      className="bg-white tooltip-anime-wrapper hidden md:block z-10"
                    />
                  </div>
                ))}
            </div>
          </div>
          {error && (<p>{error.message}</p>)}
        </section>
      )}

      <Outlet />
    </>
  )
}

export default memo(AnimeHome);