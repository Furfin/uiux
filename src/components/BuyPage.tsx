



import { Text, Box, HStack} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Button from "./Button";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function BuyPage({id}:{id:string}) {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [dogData, setDogData] = useState(null);
    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
        const result = await response.json();
        setData(result);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    fetchData();
    }, []);
    var obj = JSON.parse(JSON.stringify(data, null, 2));
    if(obj == null) {
        obj = {"data":{"id":"","attributes":{"name":"","description":""}}}
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch(`https://random.dog/woof.json?include=jpg`);
            const result = await response.json();
            setDogData(result);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
        }, []);
    var obj2 = JSON.parse(JSON.stringify(dogData, null, 2));
    if(obj2 == null) {
        obj2 = {"url":"https://random.dog/42f0a0a0-5fbc-4f44-abfc-4813a1c84b32.jpg"}
    }
    return (
        <Box>
            <Box padding = {"20px"} margin={"10px"} backgroundColor={"rgba(0, 0, 0, 0.5)"}>
                <div>
                <Text textColor='white'>{obj["data"]["attributes"]["name"]}</Text>
                <Text textColor='white'>{obj["data"]["attributes"]["description"]}</Text>
                <img src = {obj2["url"]}/>
                
                </div>
            </Box>
            <HStack spacing={4} margin={"10px"}>
                <Button
                            label="Buy Now"
                            onClick={() => alert("You have bought a dog! Congrats")}
                            color="#2196F3"
                            size="large"
                            />
                    <Button
                            label="Go back shopping"
                            onClick={() => navigate("/shop/1")}
                            color="#2196F3"
                            size="large"
                        />
            </HStack>

        </Box>
    );
}
export default BuyPage;


