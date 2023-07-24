import React from 'react'
import './cards.css'
import tv1 from '../images/tv-1.jpg';
import tv2 from '../images/Samsung 65″ Neo QLED 8K Smart TV 65QN800A.png';
import tv3 from '../images/Sony Bravia XR 65″ XR-65X90J.png';
import tv4 from '../images/Sony 32″ HD Smart LED KLV-32W6100.jpg';
import tv5 from '../images/LG 50″ 4K Smart UHD LED 50UM7700PTA.jpg';
import tv6 from '../images/Samsung 43″ FHD Smart LED 43T5500.png';

import mob1 from '../images/mob1.png';
import mob2 from '../images/vivo-v12.jpg';
import mob3 from '../images/redmi-note-10s.png';
import mob4 from '../images/redmi-9a.jpg';
import mob5 from '../images/samsung-glaxy-m12.png';
import mob6 from '../images/samsung-galxy-f62.png';

import wash1 from '../images/Samsung 6.5kg Front Load Washing Machine WW65R20EKSS.jpg';
import wash2 from '../images/Whirlpool 7.5 Kg Stain Wash Ultra Grey Top.png';
import wash3 from '../images/LG 6.5kg Front Load Washing Machine FHT1265ZNL.png';

import { TvBuy } from '../TvBuy/TvBuy'

export const CardsC = (attributes) => {

  return (
    <div>
        <div className='main'>
            <div className='catergory-heading-tv'>TELEVISION & AUDIO</div>

            <div style={{marginLeft:"42px"}}>
                <span className='tv-cards'>
                    <a href='#/tvbuy'><img src={tv1} className='card-img-tv'/></a>
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>LG 32" HD LED 32LK526BPTA</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/tvbuy'><img src={tv2} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Samsung 65″ Neo QLED 8K Smart TV</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹2,74,900</s>
                            <span className='card-tv-price-text'> ₹2,29,990</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/tvbuy'><img src={tv3} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Sony Bravia XR 65″ XR-65X90J</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹1,79,900</s>
                            <span className='card-tv-price-text'> ₹1,28,490</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/tvbuy'><img src={tv4} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Sony 32″ HD Smart LED KLV-32W6100</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/tvbuy'><img src={tv5} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>LG 50″ 4K Smart UHD LED 50UM7700PTA</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/tvbuy'><img src={tv6} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Samsung 43″ FHD Smart LED 43T5500</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>

        
        <div className='main'>
            <div className='catergory-heading-tv'>MOBILE</div>

            <div style={{marginLeft:"42px"}}>
                <span className='tv-cards'>
                    <a href='#/mblbuy'><img src={mob1} className='card-img-tv'/></a>
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Samsung Galaxy A12</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹14,999</s>
                            <span className='card-tv-price-text'> ₹12,999</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/mblbuy'><img src={mob2} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Vivo Y12S</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹13,999</s>
                            <span className='card-tv-price-text'> ₹9,999</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/mblbuy'><img src={mob3} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Redmi Note 10S</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹18,999</s>
                            <span className='card-tv-price-text'> ₹16,999</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <img src={mob4} className='card-img-tv'/>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Redmi 9A</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹8,999</s>
                            <span className='card-tv-price-text'> ₹6,999</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <img src={mob5} className='card-img-tv'/>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Samsung Galaxy M12</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹13,999</s>
                            <span className='card-tv-price-text'> ₹10,999</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <img src={mob6} className='card-img-tv'/>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Samsung Galaxy F62</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹29,999</s>
                            <span className='card-tv-price-text'> ₹23,999</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>


       
        
        <div className='main'>
            <div className='catergory-heading-tv'>Washing Machine</div>

            <div style={{marginLeft:"42px"}}>
                <span className='tv-cards'>
                    <a href='#/washbuy'><img src={wash1} className='card-img-tv'/></a>
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Samsung 6.5kg Front Load Washing Machine </div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/washbuy'><img src={wash2} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>Whirlpool 7.5 Kg Stain Wash Ultra Grey Top</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <a href='#/washbuy'><img src={wash3} className='card-img-tv'/></a>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>LG 6.5kg Front Load Washing Machine </div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <img src={mob4} className='card-img-tv'/>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>redmi-9a</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <img src={mob5} className='card-img-tv'/>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>samsung-glaxy-m12</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>

                <span className='tv-cards'>
                <img src={mob6} className='card-img-tv'/>
                    
                    <div className='card-img-tv-footer'>
                        <div className='card-tv-model-text'>samsung-galxy-f62</div>
                        <div style={{marginTop : "15px"}}>
                            <s>₹16,400</s>
                            <span className='card-tv-price-text'> ₹14,400</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
        


        </div>
  )
}
