import {useNavigate } from "react-router-dom";
import { HStack , Box} from '@chakra-ui/react'
import "../index.css"
import Button from "./Button";

function Pages({page}:{page:string}) {
    const navigate = useNavigate();
    let p = parseInt(page)
    if(p>1) {
        return (
            <Box margin={"10px"}> 
                <HStack spacing={4}>
                <Button
                        label="Prev"
                        onClick={() => {navigate(`/shop/${p-1}`); window.location.reload();}}
                        color="#2196F3"
                        size="large"
                    />
                    
                    <Button
                        label="Next"
                        onClick={() => {navigate(`/shop/${p+1}`); window.location.reload();}}
                        color="#2196F3"
                        size="large"
                    />
                                    <Button
                        label="Start"
                        onClick={() => {navigate(`/shop/${1}`); window.location.reload();}}
                        color="#2196F3"
                        size="large"
                    />
                </HStack>
            </Box>
        );
    } else {
        return (
            <Box  margin={"10px"}> 
                <HStack spacing={4}>
                <Button
                        label="Next"
                        onClick={() => {navigate(`/shop/${p+1}`); window.location.reload();}}
                        color="#2196F3"
                        size="large"
                    />
                </HStack>
            </Box>
        );
    }   
}
export default Pages;