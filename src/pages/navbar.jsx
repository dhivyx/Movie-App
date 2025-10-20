import { useContext } from "react"
import { Link } from "react-router-dom"
import { WatchlistContext } from "../context/watchListContext"

function Navbar() {

    const { watchlist } = useContext(WatchlistContext)

    return (
        <div className="flex justify-between bg-gray-900 text-white p-2 font-bold text-2xl fixed w-full top-0 z-10">
            <Link to={"/"} >Movie App</Link>
            <Link to={"/watchlist"} >Watchlist ({watchlist.length})</Link>
        </div>
    )
}
export default Navbar