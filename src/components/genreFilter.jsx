function GenreFilter({ genreList, setSelectedGenre }) {
    return (

        <select name="genre" id="genre" onChange={(e) => setSelectedGenre(e.target.value)} className=" mb-4 bg-gray-900 opacity-60 p-2 backdrop-blur-md border rounded border-black text-gray-200 fixed z-10">
            <option value="">All Genre</option>
            {genreList.map((genre) => {
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })}
        </select>

    )
}
export default GenreFilter