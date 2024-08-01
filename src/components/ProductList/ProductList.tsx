import { useContext, useState } from "react";
import { DataContext } from "../../context/context";
import SingleRickMorty from "../SingleRickMorty/SingleRickMorty";

const ProductList = () => {
    const [showDatas, setShowDatas] = useState(10)

    const dataAll = useContext(DataContext);

    console.log("blabla:" ,dataAll);

    if (dataAll === null || dataAll.rickMortyData === null) {
        return <p>Loading...</p>
    }

    

    return ( 
        <section>

            {dataAll?.rickMortyData.slice(0, showDatas).map((einzelnesObjekt, index) => (
                <SingleRickMorty key={index} person={einzelnesObjekt} />
            ))}

            <button onClick={() => setShowDatas(showDatas + 10)}>Show More</button>
        </section>

     );
}
 
export default ProductList;