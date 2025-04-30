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

// Import utils
import { formatMinutesToDuration } from "../utils/timeFormat";

function AnimeHome() {
  const location = useLocation();

  let emoteFaces;

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

  if (data) {
    data.top.media.map(top100Anime => {
      if (top100Anime.averageScore > 69) {
        emoteFaces = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 28 28"><path fill="#8BF08B" d="M14 0a14 14 0 1 0 14 14A14.015 14.015 0 0 0 14 0Zm0 26a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Z" /><path fill="#8BF08B" d="M21.431 17.134a1 1 0 0 0-1.367.366 7 7 0 0 1-12.128 0 1 1 0 1 0-1.731 1 9 9 0 0 0 15.59 0 1 1 0 0 0-.364-1.366ZM10 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM18 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z" /></svg>
      } else if (top100Anime.averageScore < 70) {
        emoteFaces = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 30 30"><path fill="#FF9646" fillRule="evenodd" d="M15 0C6.721 0 0 6.721 0 15s6.721 15 15 15 15-6.721 15-15S23.279 0 15 0Zm0 2c7.175 0 13 5.825 13 13s-5.825 13-13 13S2 22.175 2 15 7.825 2 15 2Zm-5 20h10a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2ZM7 12h5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm11 0h5a1 1 0 0 0 0-2h-5a1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
      } else if (top100Anime.averageScore < 50) {
        emoteFaces = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 28 28"><path fill="red" d="M14 0a14 14 0 1 0 14 14A14.015 14.015 0 0 0 14 0Zm0 26a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Z" /><path fill="red" d="M14 16a8.96 8.96 0 0 0-7.025 3.375 1 1 0 1 0 1.56 1.25 7.002 7.002 0 0 1 10.93 0 1 1 0 1 0 1.56-1.25A8.958 8.958 0 0 0 14 16ZM10 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM18 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z" /></svg>
      }
    })
  }
  return (
    <>
      {!location.search && (
        <section className="mt-10 mx-3 lg:mx-7 space-y-10 anime-home-wrapper">
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

          {/* Top 100 anime */}
          <div>
            <Link to="search/anime/top-100" className="flex items-center font-bold text-gray-700 mb-[1rem] tracking-wider">
              <p className="flex-1 hover:text-gray-800 ease-in-out duration-75">TOP 100 ANIME</p>
              <p className="text-xs text-gray-600 hover:text-gray-800 ease-in-out duration-75">View All</p>
            </Link>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 lg:flex lg:flex-col lg:justify-center lg:items-start lg:mb-10 lg:ml-5">
              {loading
                ? <AnimeSkeleton />
                : data?.top?.media.map((top100Anime, index) => (
                  <div key={top100Anime.id} className="relative lg:flex lg:items-center lg:gap-x-8 lg:w-full">
                    <div
                      key={top100Anime.id}
                      className="min-[1041px]:w-full lg:bg-white grid grid-rows-[min-content,_auto] group lg:order-2 lg:flex lg:items-center lg:gap-x-4 lg:w-full lg:p-2 lg:shadow-md lg:rounded-md">

                      <Link
                        className="h-[200px] lg:w-[45px] lg:h-auto"
                        to={`anime/${top100Anime.id}/${top100Anime.title.userPreferred.replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').replaceAll('---', '--')}/`}
                      >
                        <img width={184} height={270} src={width === 'medium' ? top100Anime.coverImage.large : top100Anime.coverImage.extraLarge} alt={_.lowerCase(top100Anime.title.english)} className="shadow-md h-full overflow-hidden rounded-sm cursor-pointer object-cover" />
                      </Link>

                      <div className="basis-[34rem]">
                        <Link
                          to={`anime/${top100Anime.title.userPreferred}`} className="pt-3 inline-block text-gray-700 text-xs font-semibold md:text-sm lg:py-0 lg:hover:text-red-500 duration-75 ease-in-out">{_.truncate(top100Anime.title.userPreferred, { length: width === 'large' ? 44 : 36, })}
                        </Link>

                        <div className="hidden lg:flex lg:gap-x-2">
                          {top100Anime.genres.map((genre, index) => (
                            index !== 5 && (
                              <Link
                                to={`search/anime/${genre}`}
                                className="py-[1px] px-[10px] rounded-full mt-1 lowercase lg:text-[0.6875rem] lg:font-bold"
                                key={index}
                                style={{
                                  backgroundColor: top100Anime.coverImage.color,
                                  color: '#fff'
                                }}
                              >{genre}</Link>
                            )
                          ))}
                        </div>
                      </div>

                      <div className="hidden lg:grid lg:gap-x-6 lg:grid-cols-3 lg:auto-cols-auto">
                        {/* Rating */}
                        <div className="flex items-start gap-x-3 w-32">
                          {emoteFaces}

                          <div className="text-sm font-semibold">
                            <p className="text-gray-900">{top100Anime.averageScore}%</p>
                            <p className="text-gray-600 text-xs">{top100Anime.popularity} users</p>
                          </div>
                        </div>

                        {/* Format */}
                        <div className="text-sm font-semibold">
                          <p className="text-gray-900">{top100Anime.format === 'TV' ? 'TV Show' : _.startCase(_.lowerCase(top100Anime.format))}</p>
                          <p className="text-gray-600 text-xs">{top100Anime.format === 'MOVIE' ? formatMinutesToDuration(top100Anime.duration) : `${top100Anime.episodes} episodes`}</p>
                        </div>

                        {/* Season */}
                        <div className="text-sm font-semibold">
                          <p className="text-gray-900">{_.startCase(_.lowerCase(top100Anime.season))} {top100Anime.seasonYear}</p>
                          <p className="text-gray-600 text-xs">{_.lowerCase(top100Anime.status)}</p>
                        </div>
                      </div>
                    </div>

                    <p
                      className="absolute -top-2 -left-1 rounded-full size-8 text-center content-center text-[0.875rem] font-bold lg:hidden"
                      style={{
                        backgroundColor: top100Anime.coverImage.color,
                        color: '#fff',
                      }}
                    >#{index + 1}</p>

                    <p
                      className="absolute -top-2 -left-1 rounded-full size-8 text-center content-center text-[0.875rem] font-bold lg:static lg:order-1 lg:text-2xl lg:text-gray-600"
                    >
                      #{index + 1}
                    </p>
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