import {useNavigate } from "react-router-dom";
import { HStack, Box } from '@chakra-ui/react'
import FactButton from "../components/RandomFactButton"
import "../index.css"
import Button from "./Button";


function Header() {
    const navigate = useNavigate();
    return (
        <header> 
            <HStack spacing={1000}>
            <HStack spacing={4}>
                <Button
                    label="Home"
                    onClick={() => navigate('/')}
                    color="#2196F3"
                    size="large"
                />
                
                <Button
                    label="Shop"
                    onClick={() => navigate('/shop/1')}
                    color="#2196F3"
                    size="large"
                />
            </HStack>
            <FactButton
                    label="Get a fact"
                    color="#2196F3"
                    size="large"
                />
            </HStack>
        </header>
    );
}
export default Header;