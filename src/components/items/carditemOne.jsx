import React from 'react';
import './style_card.css'  

const Shop = () => {
  const htmlString = `
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="styles.css">
      <title>Product Card</title>
      <link rel="stylesheet" href="./style_card.css">
  </head>
  <body>
        
      <ul class="catalog__list ">    <li class="catalog__li product__" data-id="834" id="bx_3966226736_834_7e1b8e3524755c391129a9d7e6f2d206" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box" style="padding: 0px 32.5px;">
      <div class="catalog__li-content">
                                  <img class="one" style="border:"none">
                                  
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/pc-amd/edelweiss-wild/" class="catalog__li-name"><span itemprop="name">EDELWEISS WILD</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/pc-amd/edelweiss-wild/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
  
                      
                      344&nbsp;570  <img  class="catalog__li-price-r">
                  </div>
              </div>
              </
          <p class="catalog__li-desc" itemprop="description">EDELWEISS WILD - современная рабочая и игровая станция. Не важно чем вы занимаетесь, играете, обрабатываете фото, рендерите видео в разрешении 4К, в любом случае это мощный ПК справится с этими задачами на 5+. Преторианцы императорская гвардия в мире ПК.</p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GEFORCE RTX 4080 GAMING 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">AMD Ryzen 9 7900X 4700/5600 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">ID-COOLING AURAFLOW 240</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32 Гб G.Skill  RIPJAWS S5 5600МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">ASUS TUF GAMING B650M</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">4 Тб Seagate</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">1000 Гб Hewlett-Packard (HP)  M.2 x2</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W DEEPCOOL</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">Jonsbo TR03 Black</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10</p>
                          </dd>
                      </dl>
                              </div>
              
  </div>    </li>
          <li class="catalog__li product__" data-id="789" id="bx_3966226736_789_362ce596257894d11ab5c1d73d13c755" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box" style="padding: 32.5px;">
      <div class="catalog__li-content">
                                    <img class="two" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/powerfull-pc/edelweiss-cougar/" class="catalog__li-name"><span itemprop="name">EDELWEISS COUGAR</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/powerfull-pc/edelweiss-cougar/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="345270">
                      
                      345&nbsp;270                     <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
                      
  
                  </div>
              </div>
           </
          <p class="catalog__li-desc" itemprop="description">Изысканный дизайн, высочайшая производительность видеокарты GEFORCE RTX 4080 16 ГБ, ставят EDELWEISS COUGAR в разряд самых желанных приобретений для преданных фанатов игрового мира и профессиональных геймеров.</p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GEFORCE RTX 4080 GAMING 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">Intel Core i9-13900F 3000 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">ID-COOLING AURAFLOW X 360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32 Гб G.Skill  RIPJAWS S5 5600МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">Gigabyte B760 DS3H D5</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">4 Тб Seagate</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">1000 Гб Samsung 970 EVO Plus M.2</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W Be Quiet Straight Power </p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">Cougar Conquer</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10</p>
                          </dd>
                      </dl>
                              </div>
                          </div>        
  </div>    </li>
          <li class="catalog__li product__" data-id="770" id="bx_3966226736_770_c80764dfaf26ca80162484593ec7c29b" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box"style="padding: 32.5px 32.5px;">
      <div class="catalog__li-content">
      
                            <img class="three" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/power-pc/edelweiss-corsair/" class="catalog__li-name"><span itemprop="name">EDELWEISS CORSAIR</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/power-pc/edelweiss-corsair/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="351960">
                      
                      351&nbsp;960                     <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
  
                                          
  
                  </div>
              </div>
                      </di
          <p class="catalog__li-desc" itemprop="description">EDELWEISS CORSAIR - это просто идеальная игровая машина для любых задач. Стриминг, монтаж видеороликов, обработка фото, рендер, гейминк в 4К и 60 FPS, ничего из перечисленного не станет проблемой для мощного ПК CORSAIR. </p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GEFORCE RTX 4080 GAMING 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">Intel Core i9-13900F 3000 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">ID-COOLING AURAFLOW X 360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32Гб DDR5 VULCAN 5600 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">Gigabyte Z790 UD D5</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">4 Тб Seagate</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">500Gb Samsung 980 Pro</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W Be Quiet Straight Power </p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">GIGABYTE AORUS C500G</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10</p>
                          </dd>
                      </dl>
                              </div>
              
  </div>    </li>
          <li class="catalog__li product__" data-id="805" id="bx_3966226736_805_d0fb066f64e2309c4b241a491f76c62e" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box"style="padding: 8.5px 32.5px;">
      <div class="catalog__li-content">
                                <img class="four" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/power-pc/edelweiss-plazma/" class="catalog__li-name"><span itemprop="name">EDELWEISS PLAZMA</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/power-pc/edelweiss-plazma/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="352900">
                      
                      352&nbsp;900                     <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
                      
  
                  </div>
              </div>
                      </
          <p class="catalog__li-desc" itemprop="description">Современный мощный игровой пк EDELWEISS PLAZMA суровый помощник геймера. Прекрасно справится с&nbsp;&nbsp;разрешением экрана 4K. В руках умелого игрока затащит любое сражение без лагов и зависаний. Предаст уверенности танководу или снайперу.</p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GIGABYTE GEFORCE RTX 4080 SUPER GAMING 16 Гб </p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">Intel Core i7-13700KF 3200 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">ID-COOLING AURAFLOW X 360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32Гб Kingston HyperX Fury RGB 3600МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">Gigabyte Z690 Gaming X D4</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">2 Тб Toshiba</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">1000 Гб Samsung 970 EVO Plus M.2</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W Gigabyte UD850</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">1STPLAYER STEAM PUNK</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10 Pro</p>
                          </dd>
                      </dl>
                              </div>
              
  </div>    </li>
          <li class="catalog__li product__" data-id="822" id="bx_3966226736_822_8e8f6cea7f5e44ced2966cbefca3ecfa" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box"style="padding: 8.5px 32.5px;">
      <div class="catalog__li-content">
                                <img class="five" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/power-pc/edelweiss-ranger/" class="catalog__li-name"><span itemprop="name">EDELWEISS RANGER</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/power-pc/edelweiss-ranger/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="356250">
                      
                      356&nbsp;250                     <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
                      
  
                  </div>
              </div>
                      </
          <p class="catalog__li-desc" itemprop="description">Если вы хотите купить супер мощный компьютер, в стильном корпусе и настраиваемой RGB подсветкой, топовым FPS, к тому же с очень низким уровнем шума, тогда EDELWEISS RANGER, именно эта модель подойдет под данные запросы идеально.</p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GEFORCE RTX 4080 GAMING 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">AMD Ryzen 9 7900X 4700/5600 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">MSI MAG CORELIQUID C360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">64Гб DDR5 VULCAN 6000 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">ASUS PRIME X670-P</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">4 Тб Seagate</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">500Gb Samsung 980 Pro</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">700W DEEPCOOL</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">Phanteks  MagniumGear NEO Qube 2, White RGB</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10 Pro</p>
                          </dd>
                      </dl>
                              </div>
              
  </div>    </li>
          <li class="catalog__li product__" data-id="794" id="bx_3966226736_794_0f73996d13437b0b91038138616a89fe" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box" style="padding:10.5px 32.5px;">
      <div class="catalog__li-content">
                                    <img class="six" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/powerfull-pc/edelweiss-lucifer/" class="catalog__li-name"><span itemprop="name">EDELWEISS LUCIFER</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/powerfull-pc/edelweiss-lucifer/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="356450">
                      
                      356&nbsp;450                     <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
  
                  </div>
              
                          </div></
          <p class="catalog__li-desc" itemprop="description">Высокопроизводительный компьютер EDELWEISS LUCIFER в максимальной комплектации. Топовые комплектующие, новейшая графическая система 4080 16 GB 6 GDDR, водяное охлаждение. Решение удовлетворит предпочтения самых требовательных клиентов и геймеров.&nbsp;&nbsp; </p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GEFORCE RTX 4080 GAMING 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">Intel Core i9-13900KF 3200 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">ID-COOLING AURAFLOW X 360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32Гб Kingston HyperX Fury RGB 3600МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">ASUS PRIME H770-PLUS D4</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">6 Тб Seagate</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">1000 Гб SSD Samsung 980 Pro M.2</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W DEEPCOOL</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">Jonsbo TR03 Black</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10</p>
                          </dd>
                      </dl>
                              </div>
                          </div>       
  </div>    </li>
          <li class="catalog__li product__" data-id="767" id="bx_3966226736_767_ec5d0e2cff91ab20debac17d8febe5be" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
          <div class="catalog__li-box" style="padding:10.5px 32.5px;">
      <div class="catalog__li-content">
                                    <img class="seven" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/power-pc/edelweiss-helios/" class="catalog__li-name"><span itemprop="name">EDELWEISS HELIOS</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/power-pc/edelweiss-helios/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="371400">
                      
                      371&nbsp;400                     <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
                      
  
                  </div>
              </div>
                      </
          <p class="catalog__li-desc" itemprop="description">EDELWEISS HELIOS хорошее решение для профессиональных киберспортсменов и прогеймеров. Мощная начинка, кастомное водяное охлаждение делают его холодным как космос, быстрым как луч света и надежным как АКМ. </p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">GEFORCE RTX 4080 GAMING 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">Intel Core i7-13700KF 3200 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">DeepCool LT720 360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32Гб Kingston HyperX Fury RGB 3600МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">ASUS TUF GAMING Z790-PLUS WIFI D5</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">4 Тб Seagate</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">500Gb Samsung 980 Pro</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W DEEPCOOL</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">Jonsbo MOD5 Gray GAMING</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10</p>
                          </dd>
                      </dl>
                              </div>
              
  </div>    </li>
          <li class="catalog__li product__" style="padding: 15px 30px;" data-id="1130" id="bx_3966226736_1130_e7e5a53fd4b76e4dce4f311b34c340d4" data-entity="item" itemscope="" itemtype="https://schema.org/Product">
      <div class="catalog__li-box" style="padding: 1px 32.5px;">
          <div class="catalog__li-content"> 
                                    <img class="eight" style="border:"none">
          <div class="catalog__li-wrapper">
              <div class="catalog__li-wrapper-start">
                  <meta itemprop="brand" content="Edelweiss">
                  <a href="/powerfull-pc/edelweiss_saturn/" class="catalog__li-name"><span itemprop="name">EDELWEISS SATURN</span></a>
                  <div class="catalog__li-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <meta itemprop="priceCurrency" content="RUB">
                      <link itemprop="availability" href="https://schema.org/InStock">
                      <link itemprop="url" href="htpps://edelws.ru/powerfull-pc/edelweiss_saturn/">
                      <link itemprop="priceValidUntil" content="2025-05-27T15:22:44+03:00">
                      <meta itemprop="price" content="379970">
                      
                      379&nbsp;970  <img src="./png/ruble.png" alt="Национальная валюта рубли" class="catalog__li-price-r">
                      
  
                  </div>
              
                      </div>
                      </
          <p class="catalog__li-desc" itemprop="description">EDELWEISS SATURN - компьютер вне категорий создан для 4К гейминга на базе лучших компонентов от самых известных производителей. Система водяного охлаждения справится на ура с топовым AMD Ryzen Threadripper. Нереально тихий и надежный.</p>    </div>
                  <div class="catalog__structure">
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_vga">
                                  <img src="./png/vga.png" alt="значёк видеокарты ( gpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Видео-карта</p>
                              <p class="catalog__structure-name">PALIT  RTX 4080 GAMING PRO 16 Гб</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_cpu">
                                  <img src="./png/cpu.png" alt="значёк центрального процессора ( cpu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Процессор</p>
                              <p class="catalog__structure-name">AMD Ryzen 9 7900X 4700/5600 МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_fan">
                                  <img src="./png/fan.png" alt="значёк система охлаждения (cooler )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Охлаждение</p>
                              <p class="catalog__structure-name">Gigabyte Aorus Liquid Cooler 360</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ram">
                                  <img src="./png/ram.png" alt="значёк оперативной памяти ( ram )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Оперативная память</p>
                              <p class="catalog__structure-name">32 Гб Kingston Hyperx Fury  6000МГц</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_motherboard">
                                  <img src="./png/motherboard.png" alt="значёк материнской платы ( mb ) ">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Материнская плата</p>
                              <p class="catalog__structure-name">Gigabyte X670 Gaming X</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_hard">
                                  <img src="./png/hard.png" alt="значёк жесткого диска ( hdd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Жёсткий диск</p>
                              <p class="catalog__structure-name">6 Тб WesternDigital Purple</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_ssd">
                                  <img src="./png/ssd.png" alt="значёк твердотельного диска ( ssd )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Диск SSD</p>
                              <p class="catalog__structure-name">1000 Гб SSD Samsung 980 Pro M.2</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_power">
                                  <img src="./png/power.png" alt="	значёк блока питания ( psu )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Блок питания</p>
                              <p class="catalog__structure-name">850W DEEPCOOL</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_box">
                                  <img src="./png/box.png" alt="иконка системного блока ( case )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Корпус</p>
                              <p class="catalog__structure-name">Phanteks  MagniumGear NEO Qube 2, White RGB</p>
                          </dd>
                      </dl>
                                      <dl class="catalog__structure-dl">
                          <dt class="catalog__structure-dt">
                              <div class="catalog__structure-img_os">
                                  <img width="36" height="36"src="./png/os.png" alt="значёк операционной системы ( os )">
                              </div>
                          </dt>
                          <dd class="catalog__structure-dd">
                              <p class="catalog__structure-title">Система</p>
                              <p class="catalog__structure-name">Windows 10 Pro</p>
                          </dd>
                      </dl>
                              </div>
              
                          </div>        
                      </div>    
                  </li>
      </ul>
  </body>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};

export default Shop;