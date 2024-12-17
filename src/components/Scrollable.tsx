import { HStack, Text, Box, VStack,Avatar} from '@chakra-ui/react'
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'


type Props = {
  datas: PropsData[]
}

type PropsData = {
    name: string
    review: string
    avatar: string
    stars: number
}


export function Demo({ datas }: Props) {
    return (
      <VStack>
        <HStack spacing={4} overflowX="auto" width={'99%'}>
          {datas.map((data, index) => (
            <Box flexShrink="0" key={index} borderRadius="full" bgColor='white'>
                <Box width={'500px'} >
                    <HStack>
                    <Avatar borderRadius={'50px'} paddingLeft={'10px'} width={'50px'} height={'50px'} name={data.name} src={data.avatar} />
                    <Text textColor='black'>{data.name}</Text>
                    </HStack>
                    <HStack paddingLeft={'50px'}>
                    <div>
                        <Text textColor='black'>{data.review}</Text>
                    </div> 
                    </HStack>
                    <div>
                        <ReactStars
                        value={data.stars}  
                        isEdit={false}  
                        activeColors={[ "red", "orange", "#FFCE00", "#F9DA20","#8568FC",]}
                        size={'30px'} 
                        />
                    </div> 
                </Box>
                
            </Box>
          ))}
        </HStack>
      </VStack>
    );
  }
export default Demo;