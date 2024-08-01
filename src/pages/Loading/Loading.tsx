// import { useContext, useEffect } from "react";
// import { DataContext, LoadingContext } from "../../context/context";
// import "./Loading.css"

// const Loading = () => {
//     const loader = useContext(LoadingContext);
//     const dataAll = useContext(DataContext);
    

//     //loader
//     useEffect(() => {
//         setTimeout(() => {
//             loader?.setLoading(false)
//         }, 3000)

//     }, [])


//     //fetchen
//     useEffect(()=>{
//         fetch("https://rickandmortyapi.com/api/character")
//         .then(res => res.json())
//         .then(data => dataAll?.setRickMortyData(data))
//         .catch(err => console.error("Fehler beim fehtchen", err))
//     },[])

//     console.log("gefetchte daten? :",dataAll);

//     return ( 
//         <section>
//         <h1>I'm loading...</h1>
//         <div className="loader"></div>    
//         </section>
        
//      );
// }
 
// export default Loading;


import { useContext, useEffect, useState } from "react";
import { DataContext, LoadingContext } from "../../context/context";
import "./Loading.css"
import { Result } from "../../Interfaces/IRickMorty";

const Loading = () => {
    const loader = useContext(LoadingContext);
    const dataAll = useContext(DataContext);
    const [page,setPage] = useState< number >(1)
    const [allCharacters,setAllCharacters] = useState<Result[]>([])

    //loader
    useEffect(() => {
        setTimeout(() => {
            loader?.setLoading(false);
        }, 3000);
    }, [loader]);

    //fetchen

    useEffect(() => {

        if(page <= 42) {

            fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                .then(res => res.json())
                .then(data => {
                    console.log("test",allCharacters);
                    setAllCharacters(prevAllCharacters => [
                        ...prevAllCharacters,
                        ...data.results
                    ]);
                    setPage(prevPage => prevPage + 1);
                    dataAll?.setRickMortyData(allCharacters);
                })
                .catch(err => console.error("Error fetching data", err));
        }

    }, [page]);

    



    

    console.log("gefetchte daten? :", dataAll);

    return (
        <section>
            <h1>I'm loading...</h1>
            <div className="loader"></div>
        </section>
    );
};

export default Loading;
