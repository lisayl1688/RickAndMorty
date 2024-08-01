import { useContext, useEffect, useState } from "react";
import { Result } from "../../Interfaces/IRickMorty";
import { DataContext } from "../../context/context";
import { useParams } from "react-router-dom";

const Detailpage = () => {

    const [filteredPerson, setFilteredPerson] = useState <Result | null>(null);

    const dataAll = useContext(DataContext);
    const { id } = useParams()



    useEffect(()=>{
        if (dataAll?.rickMortyData && id) {
            const found = dataAll.rickMortyData.find((item) =>item.id === Number(id) )

            setFilteredPerson(found === undefined ? null : found)
        }
    },[dataAll?.rickMortyData, id])


    return ( 
        <>
            <section>
            <h1>{filteredPerson?.name} {filteredPerson?.gender} </h1>
            <img src={filteredPerson?.image} alt="" />
            <p>{filteredPerson?.species}</p>
            <p>{filteredPerson?.status}</p>

        </section>
        </>
     );
}
 
export default Detailpage;