
import { Card, CardBody, Image, Text, Heading, Box, Button } from '@chakra-ui/react';
import TheHost_IP from '../images/видюха.png'

const CardItem = () =>{
    return(
        <Card 
            height={'35%'}
            background={'transparent'}
            textAlign={'center'}
            gap={'15px'}
        >
            <CardBody
                display={'flex'}
                flexDirection={'column'}
                aling Items={'center'}
                textAlign={'center'}
                justifyContent={'space-evenly'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    wight={'100%'}  
                >
                    <div class="product-card">
                            <div class="product-image">
                            <Image                    
                                textAlign={'center'}
                                src={TheHost_IP}
                                width={'300px'}
                                alt='TheHost_IP-KVM'
                            />
                            </div>
                            <div class="product-info">
                                <h1>EDELWEISS WILD</h1>
                                <p class="price">344 540 <span>₽</span></p>
                                <button class="buy-button">Купить</button>
                                <p class="description">
                                    EDELWEISS WILD - современная рабочая и игровая станция. Не важно чем вы занимаетесь, играете, обрабатываете фото, рендерите видео в разрешении 4К, в любом случае этот мощный ПК справится с этими задачами на 5+. Преторианцы императорская гвардия в мире ПК.
                                </p>
                                <ul class="specifications">
                                    <li><span class="icon">&#128421;</span> GEFORCE RTX 4080 GAMING 16 ГБ</li>
                                    <li><span class="icon">&#128104;</span> AMD Ryzen 9 7900X 4700/5600 MHz</li>
                                    <li><span class="icon">&#128736;</span> ID-COOLING AURAFLOW 240</li>
                                    <li><span class="icon">&#128421;</span> 32 ГБ G.Skill RIPJAWS S5 5600MHz</li>
                                    <li><span class="icon">&#128736;</span> ASUS TUF GAMING B650M</li>
                                    <li><span class="icon">&#128190;</span> 4 ТБ Seagate</li>
                                    <li><span class="icon">&#128190;</span> 1000 ГБ Hewlett-Packard (HP) M.2 SSD</li>
                                    <li><span class="icon">&#9889;</span> 850W DEEPCOOL</li>
                                    <li><span class="icon">&#128421;</span> Jonsbo TR03 Black</li>
                                    <li><span class="icon">&#128187;</span> Windows 10</li>
                                </ul>
                            </div>
                    </div>
                </Box>
            </CardBody>
       
        
        </Card>
    )
}
export default CardItem;

