import Header from "../components/Header";
import "../index.css"
import FactButton from "../components/RandomFactButton"
import Breeds from "../components/BreedsList"
import SmallWithSocial from "../components/Footer"
import BuyPage from "../components/BuyPage"
import { useParams } from "react-router"
import { Box } from '@chakra-ui/react';


function Buys() {
    let params = useParams()
    let id = `${params.id}`
    return (
        <Box bg="brand.50">
            <Header/>
            <BuyPage id={id} />
            <div className='footerBox'>
                <SmallWithSocial/>
            </div>
        </Box>
    );
}
export default Buys;