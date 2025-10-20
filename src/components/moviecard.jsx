import { useContext} from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { WatchlistContext } from "../context/watchListContext"

function Moviecard({ movie }) {
    const { watchlist, toggleList } = useContext(WatchlistContext)

    const inWatchList = watchlist.some((m) => (m.id === movie.id))// some checks whether at least one element in the array satisfies a given condition, it returns true or false.

    return (
        <div className="bg-gray-700 p-4 border rounded-lg shadow-md text-white relative">
            <img className="w-full h-80 object-contain p-1" src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title}></img>
            {/* Here the path is took from the image address of the TMDB website and mentioned the pathname */}
            <h1 className="text-lg font-bold mt-4">{movie.title}</h1>
            <p className="text-sm text-gray-300">{movie.release_date}</p>
            <button className="absolute top-2 right-2 text-red-500 text-xl" onClick={() => toggleList(movie)}>{inWatchList ? <FaHeart /> : <FaRegHeart />}</button>

        </div>
    )
}
export default Moviecard