import { VStack, Text, Box} from '@chakra-ui/react'
import {useNavigate } from "react-router-dom";
import Button from "./Button";

  function Breed({name, id}:{name?:string; id?:string}) {
    const navigate = useNavigate();
    return (
        <Box margin={"10px"}>
            <div>
            <Text textColor='black'>{name}</Text>
                <Button
                        label="Learn More"
                        onClick={() => {navigate(`/buy/${id}`)}}
                        color="#2196F3"
                        size="large"
                    />
            </div>
        </Box>
    );
}
export default Breed;