import '../App.css';
import { Flex } from '@chakra-ui/react';
import EmblaCarousel from '../components/Carousel/CarouselEmbla';
import ItemPage from '../images/pc.png';
import ItemPage_two from '../images/видюха.png';
import ItemPage_three from '../images/видюха.png';
import ItemPage_four from '../images/видюха.png';
import ItemPage_five from '../images/видюха.png';
import Carousel from '../components/Carousel';



const ShopPage = () =>{
  const IMAGES = [ItemPage, ItemPage_two, ItemPage, ItemPage, ItemPage]; // сюда кладешь фотки
  const OPTIONS = {}
  const SLIDES = IMAGES.map((src, index) => (
    <img src={src} alt={`slide ${index}`} key={index} style={{ width: '500px', height: '500px' }} />
  ));
  return (
    <Flex
      width={'100%'}
      flexWrap={'wrap'}
    >
      {/* <NavBar/> */}
      {/* <Flex
          justify={'center'}
          align={'center'}
          flexWrap={'wrap'}
          gap={'35px'}
          mt={'50px'}
      > */}
        <Flex mt='50px' w='100%'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Flex>
      {/* </Flex> */}
        <Flex>
          { <Carousel/> }
        </Flex>
    </Flex>
   
  );
}
export default ShopPage;

