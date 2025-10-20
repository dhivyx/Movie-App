import { createContext, useState, useEffect } from "react"
import { data } from "autoprefixer"

export const WatchlistContext = createContext()

//WatchListProvider is a component, wraps around child components and provides the watchlist data to them through the context.
//{ children } refers to the nested components that will receive the context values.
export const WatchListProvider = ({ children }) => {

    const [watchlist, setWatchList] = useState([])
    const [genreList, setGenreList] = useState([])

    useEffect(() => {

        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=a99f40adbcfee1c16ddfbb188b6a51ab`//we have updated the URL according to genre

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGenreList(data.genres || [])//here we changed to data.genre
                console.log("Genres:",data.genres)
            })

    }, [])


    const toggleList = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);//.findIndex() looks through the watchlist array and checks if any movie (m) has the same ID as the movie you clicked, in every movie list there will be an ID
        //-1 if no such movie exists.
        if (index === -1) {
            setWatchList([...watchlist, movie])
        }
        else {
            setWatchList([...watchlist.slice(0, index), ...watchlist.slice(index + 1),])
            //.slice(0, index) takes all movies before that index.
            //.slice(index + 1) takes all movies after that index and goes till the end
            //Together, they skip the movie at that position.
        }
    }
    console.log("Watchlist", watchlist);




    return (
        <WatchlistContext.Provider value={{ watchlist, toggleList, genreList }}>
            {children}
        </WatchlistContext.Provider>
    )


}