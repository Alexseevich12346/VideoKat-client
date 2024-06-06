import '../App.css';
import { Flex,Text,Box} from '@chakra-ui/react';
import EmblaCarousel from '../components/Carousel/CarouselEmbla';
import ItemPage from '../images/pc.png';
import ItemPage_two from '../images/видюха.png';
import ItemPage_three from '../images/видюха.png';
import ItemPage_four from '../images/видюха.png';
import ItemPage_five from '../images/видюха.png';
import Carousel from '../components/Carousel';
import CardItem from '../components/cardItem';
import Shop from '../components/items/carditemOne';




const ShopPage = () =>{
  // const IMAGES = [ItemPage, ItemPage_two, ItemPage, ItemPage, ItemPage]; // сюда кладешь фотки
  // const OPTIONS = {}
  // const SLIDES = IMAGES.map((src, index) => (
  //   <div className="k">
  //     <img src={src} alt={`slide ${index}`} key={index} style={{ width: '500px', height: '500px' }} />
  //     <div class="product-info">
  //                               <h1>EDELWEISS WILD</h1>
  //                               <p class="price">344 540 <span>₽</span></p>
  //                               <button class="buy-button">Купить</button>
  //                               <p class="description">
  //                                   EDELWEISS WILD - современная рабочая и игровая станция. Не важно чем вы занимаетесь, играете, обрабатываете фото, рендерите видео в разрешении 4К, в любом случае этот мощный ПК справится с этими задачами на 5+. Преторианцы императорская гвардия в мире ПК.
  //                               </p>
  //                               <ul class="specifications">
  //                                   <li><span class="icon">&#128421;</span> GEFORCE RTX 4080 GAMING 16 ГБ</li>
  //                                   <li><span class="icon">&#128104;</span> AMD Ryzen 9 7900X 4700/5600 MHz</li>
  //                                   <li><span class="icon">&#128736;</span> ID-COOLING AURAFLOW 240</li>
  //                                   <li><span class="icon">&#128421;</span> 32 ГБ G.Skill RIPJAWS S5 5600MHz</li>
  //                                   <li><span class="icon">&#128736;</span> ASUS TUF GAMING B650M</li>
  //                                   <li><span class="icon">&#128190;</span> 4 ТБ Seagate</li>
  //                                   <li><span class="icon">&#128190;</span> 1000 ГБ Hewlett-Packard (HP) M.2 SSD</li>
  //                                   <li><span class="icon">&#9889;</span> 850W DEEPCOOL</li>
  //                                   <li><span class="icon">&#128421;</span> Jonsbo TR03 Black</li>
  //                                   <li><span class="icon">&#128187;</span> Windows 10</li>
  //                               </ul>
  //                           </div>
  //   </div>
    
  // ));
  return (
    <Flex
      width={'100%'}
      flexWrap={'wrap'}
    >
       <Flex
          justify={'center'}
          align={'center'}
          flexWrap={'wrap'}
          gap={'35px'}
          mt={'50px'}
      >
         <Flex mt='50px' w='100%'>
          {/* <EmblaCarousel slides={SLIDES} options={OPTIONS}/> */}
        </Flex>
      </Flex> 
        <Flex>
          {<Shop/>}
          {/* { <CardItem/> }
          {<CardItemOne/>} */}
        </Flex>
    </Flex>
   
  );
}
export default ShopPage;

