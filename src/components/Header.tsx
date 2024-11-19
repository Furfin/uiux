import {useNavigate } from "react-router-dom";
import { HStack } from '@chakra-ui/react'
import "../index.css"
import Button from "./Button";


function Header() {
    const navigate = useNavigate();
    return (
        <header> 
            <HStack spacing={4}>
                <Button
                    label="Home"
                    onClick={() => navigate('/')}
                    color="#2196F3"
                    size="large"
                />
                
                <Button
                    label="About"
                    onClick={() => navigate('/about')}
                    color="#2196F3"
                    size="large"
                />
            </HStack>
        </header>
    );
}
export default Header;