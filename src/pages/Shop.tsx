import Header from "../components/Header";
import "../index.css"
import Breeds from "../components/BreedsList"
import SmallWithSocial from "../components/Footer"
import Pages from "../components/Pagination"
import { useParams } from "react-router"


function Shop() {
    let params = useParams()
    let pagenum = `${params.page}`
    return (
        <div>
            <Header/>
                <Breeds page={pagenum}/>
                <Pages page={pagenum}/>
            <div className='footerBox'>
                <SmallWithSocial/>
            </div>
        </div>
    );
}
export default Shop;