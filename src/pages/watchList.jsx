import { useContext, useState } from "react"
import GenreFilter from "../components/genreFilter"
import { WatchlistContext } from "../context/watchListContext"
import Moviecard from "../components/moviecard"


function WatchList() {

    const { watchlist, genreList } = useContext(WatchlistContext)
    const [search, setSearch] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")

    const filteredMovies = watchlist
        .filter((movieFiltered) =>//By changing it in lowercase it considers as case - insensitive.
            movieFiltered.title.toLowerCase().includes(search.toLowerCase()))// Here if we didn't search, it will pass empty string i.e includes returns true for empty string , 
        //so filteredMovies passes every movies in the watch list. If the searched movie is not in the watchlist, then includes returns false and it wont display anything.
        //If the searched movies is includes in watchlist, then it will display the searched movie.
        //|| movieFiltered.overview.toLowerCase() === search.toLowerCase()
        .filter((movie) => { return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre)) })//! negates the value — so if selectedGenre is empty ("", null, or undefined),this part becomes true.
    // So when no genre is selected, this condition allows all movies to pass through.
    //If no genre is selected (!selectedGenre is true) → keep the movie. Else, if the movie includes the selected genre → keep the movie


    console.log("WatchlIst:", watchlist)
    console.log("FilteredMovies:", filteredMovies)
    console.log("SelectedGenre:", (Number(selectedGenre)))

    return (
        <>
            <input type="text" placeholder="Search for Movies" className="border border-gray-600 bg-gray-900 bg-opacity-50 px-2 py-1 w-3/4 md:w-3/4 backdrop-blur-sm text-gray-300 fixed top-16 left-1/2 transform -translate-x-1/2 z-10" onChange={(e) => setSearch(e.target.value)}></input>
            <div className="mt-28 flex justify-center">
                <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre}></GenreFilter>
            </div>

            <div className="movies-container grid  grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {
                    filteredMovies.map((movie, id) => {
                        return (
                            <Moviecard key={id} movie={movie}></Moviecard>
                        )
                    })
                }

            </div>

        </>
    )
}
export default WatchList