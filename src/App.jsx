import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Navbar from "./pages/navbar"
import Home from "./pages/home"
import WatchList from "./pages/watchList"
import { WatchListProvider } from "./context/watchListContext"


function App() {

  return (
    <>
      <WatchListProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/watchlist" element={<WatchList></WatchList>}></Route>
          </Routes>
        </BrowserRouter>
      </WatchListProvider>
    </>
  )
}
export default App