import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import "./style/global.css"
import 'rc-slider/assets/index.css';
import 'react-loading-skeleton/dist/skeleton.css';

// Import RTK store
import store from './store/store.js'

import Header from './layouts/Header.jsx'
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const BrowseFilterContainer = lazy(() => import('./layouts/BrowseFilterContainer.jsx'));
const FiltersAnime = lazy(() => import("./layouts/FiltersAnime.jsx"));
const ActiveFiltersAnime = lazy(() => import('./components/ActiveFiltersAnime.jsx'));

// Anime
const AnimeHome = lazy(() => import("./pages/AnimeHome.jsx"));
const SearchedAnimeHome = lazy(() => import("./pages/SearchedAnimeHome.jsx"));
const Top100Anime = lazy(() => import("./pages/Top100Anime.jsx"));
const TrendingAnime = lazy(() => import("./pages/TrendingAnime.jsx"));
const TopMovies = lazy(() => import("./pages/TopMovies.jsx"));

// Manga
const FiltersManga = lazy(() => import('./layouts/FiltersManga.jsx'));
const SearchMangaHome = lazy(() => import('./pages/SearchMangaHome.jsx'))
const Top100Manga = lazy(() => import('./pages/Top100Manga.jsx'))
const TrendingManga = lazy(() => import('./pages/TrendingManga.jsx'))
const TopManhwa = lazy(() => import('./pages/TopManhwa.jsx'))

// Characters
const SearchCharactersHome = lazy(() => import('./pages/SearchCharactersHome.jsx'));

// Staff
const SearchStaffHome = lazy(() => import('./pages/SearchStaffHome.jsx'))

// Studios
const SearchStudiosHome = lazy(() => import('./pages/SearchStudiosHome.jsx'))

// Users
const SearchUsersHome = lazy(() => import('./pages/SearchUsersHome.jsx'))

const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Forgot = lazy(() => import("./pages/Forgot.jsx"));
const Reverify = lazy(() => import("./pages/Reverify.jsx"));

const client = new ApolloClient({
  uri: import.meta.env.PROD ? "https://graphql.anilist.co" : "/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Page: {
            keyArgs: ["search"],
            merge(existing = {}, incoming) {
              return {
                ...incoming,
                media: [...(existing.media || []), ...(incoming.media || [])]
              }
            }
          }
        }
      }
    }
  }),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route element={<BrowseFilterContainer />}>
                <Route element={<FiltersAnime />}>
                  <Route element={<ActiveFiltersAnime />}>
                    <Route path='/' element={<AnimeHome />} />
                    <Route path='search/anime' element={<AnimeHome />}>
                      <Route path=':querySearch?' element={<SearchedAnimeHome />} />
                    </Route>


                    <Route path='search/anime/top-100' element={<Top100Anime />} />
                    <Route path='search/anime/trending' element={<TrendingAnime />} />
                    <Route path='search/anime/top-movies' element={<TopMovies />} />
                  </Route>
                </Route>

                <Route element={<FiltersManga />}>
                  <Route path='search/manga' element={<SearchMangaHome />} />
                  <Route path='search/manga/top-100' element={<Top100Manga />} />
                  <Route path='search/manga/trending' element={<TrendingManga />} />
                </Route>


                <Route path='search/manga/top-manhwa' element={<TopManhwa />} />

                <Route path='search/characters' element={<SearchCharactersHome />} />

                <Route path='search/staff' element={<SearchStaffHome />} />

                <Route path='search/studios' element={<SearchStudiosHome />} />

                <Route path='search/users' element={<SearchUsersHome />} />
              </Route>

              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='forgot' element={<Forgot />} />
              <Route path='reverify' element={<Reverify />} />

              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </StrictMode>,
)
