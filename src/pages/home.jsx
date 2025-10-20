import { useEffect, useState } from "react"
import Moviecard from "../components/moviecard"


// const movies = [{
//     poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVhs0zWJkL9afwN2gqJJ3vtmX4yJVAeZchddbahTVkHzCi9fyKtXwj0OEcznWUsFRn_VKd",
//     title: "The Gorge",
//     release_date: "2025-02-13"
// }]



function Home() {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")


    useEffect(() => {

        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=a99f40adbcfee1c16ddfbb188b6a51ab`//Take the key access and add at last 

        if (search) {
            url = (`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=a99f40adbcfee1c16ddfbb188b6a51ab`)//Here in URL i have changed a word as "query"
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
                console.log(data.results)//here data.results is given because the data in that is link is stored in such way
            })


    }, [page, search])// this is important to add page and serach in dependancy,else page cannot be moved to next page. This is because it triggers the API.

    return (
        <div className="p-4 pt-16">
            <input type="text" placeholder="Search for Movies" className="border border-gray-600 bg-gray-900 bg-opacity-50 px-2 py-1 w-3/4 md:w-3/4 backdrop-blur-sm text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10" onChange={(e) => { setSearch(e.target.value) }}></input>
            <div className="movies-container grid  grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {
                    movies.map((movie, id) => {
                        return (
                            <Moviecard key={id} movie={movie}></Moviecard>
                        )
                    })

                }

            </div>
            <div className="pagination flex justify-between mt-5 text-white">
                <button disabled={page === 1} className="bg-gray-900 p-2 border rounded-md" onClick={() => { setPage(page - 1) }}>PREV</button>
                <button className="bg-gray-900 p-2 border rounded-md" onClick={() => { setPage(page + 1) }}>NEXT</button>
            </div>
        </div>
    )
    // const url="https://api.themoviedb.org/3/movie/changes?page=1"
}
export default Home 