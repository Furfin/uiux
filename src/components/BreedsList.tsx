import { HStack, Box, VStack} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import Breed from "./Breed"


  function Breeds({page}:{page:string}) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://dogapi.dog/api/v2/breeds?page[number]=${page}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    var obj = JSON.parse(JSON.stringify(data, null, 2));
    const arrayOfLists = obj['data']?.map((record: any, idx: number) => idx % 2 == 0 ?
        <Box flexShrink="0" borderRadius="full" bgColor='white' paddingLeft={"20px"}>
            <Box width={'500px'} >
                <Breed name={record['attributes']['name']} id={record['id']}/>
            </Box>
        </Box>
        : null
    )
    const arrayOfLists2 = obj['data']?.map((record: any, idx: number) => idx % 2 == 1 ?
        <Box flexShrink="0" borderRadius="full" bgColor='white' paddingLeft={"20px"}>
            <Box width={'500px'} >
            <Breed name={record['attributes']['name']} id={record['id']}/>
            </Box>
        </Box>
        : null
    )
    return (
    <HStack margin={'100px'} padding={"50px"}>
        <VStack>
            {arrayOfLists}
        </VStack>
        <VStack>
            {arrayOfLists2}
        </VStack>
    </HStack>

    );
}
export default Breeds;