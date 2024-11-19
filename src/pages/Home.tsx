import { Box, Text } from '@chakra-ui/react';
import Header from "../components/Header";
import Demo from "../components/Scrollable"
import SmallWithSocial from "../components/Footer"
import "../index.css"
import imageToAdd from "./dog1.png"

function Home() {
    return (
        <Box bg="brand.50">
            <Header/>
            <div className = "img-container">
                <div className = "head-image">
                    <img src = {imageToAdd} alt = "dog1" className="image"/>
                </div>
                <div className="textBox">
                    <Text fontSize="xl" color="brand.800">«Если в раю нет собак, то я хочу после смерти отправиться туда, куда ушли они»
                    <br/>– Уилл Роджерс</Text>
                </div>
            </div>
            <div className='quoteBox'>
                <Text fontSize="xl" color="brand.800" align={'left'}>«Я люблю свиней. Собаки смотрят на нас снизу вверх. Кошки смотрят на нас сверху вниз. Свиньи смотрят на нас как на равных»
                <br/>– Уинстон Черчилль</Text>
            </div>
            <div className='reviews'>
                <Demo
                datas={[
                    { name: 'this is sample data',
                        review: 'gjbkfjhgbskjfhgblkajbglwksjebfgjdfhbglskf',
                        avatar: 'https://bit.ly/sage-adebayo'
                    },
                    { name: 'this is sample data',
                        review: 'gjbkfjhgbskjfhgblkajbglwksjebfgjdfhbglskf',
                        avatar: 'https://bit.ly/sage-adebayo'
                    },
                    { name: 'this is sample data',
                        review: 'gjbkfjhgbskjfhgblkajbglwksjebfgjdfhbglskf',
                        avatar: 'https://bit.ly/sage-adebayo'
                    },
                    { name: 'this is sample data',
                        review: 'gjbkfjhgbskjfhgblkajbglwksjebfgjdfhbglskf',
                        avatar: 'https://bit.ly/sage-adebayo'
                    },
                    { name: 'this is sample data',
                        review: 'gjbkfjhgbskjfhgblkajbglwksjebfgjdfhbglskf',
                        avatar: 'https://bit.ly/sage-adebayo'
                    },
                ]}
                ></Demo>
            </div>
            <div className='footerBox'>
                <SmallWithSocial/>
            </div>
            
        </Box>
    );
}
export default Home;