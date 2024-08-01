import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";
import { IRickMorty, Result } from "./Interfaces/IRickMorty";
import { LoadingContext , DataContext } from "./context/context";
import Header from "./components/Header/Header";
import Loading from "./pages/Loading/Loading";
import Products from "./pages/Products/Products";
import Detailpage from "./pages/Detailpage/Detailpage";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [rickMortyData, setRickMortyData] = useState<Result[] | null>(null)

    return ( <>
    <LoadingContext.Provider value={{loading,setLoading}}>
    <DataContext.Provider value={{rickMortyData,setRickMortyData}}>
    
        


    {loading?
    (<Loading/>)
    :
    (   <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detailpage />} />


        </Routes>
        </BrowserRouter>
    )}


    </DataContext.Provider>
    </LoadingContext.Provider>
    
    </>
     );
}
 
export default App;