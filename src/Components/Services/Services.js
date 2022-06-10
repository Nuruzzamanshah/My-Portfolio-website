import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from './../Card/Card';
import Resume from './Resume .pdf';

const Services = () => {
    return (
        <div className='services'>
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>hjhasldkfdshfadskhfksjdfjkkkkkkkhajkafhdsjfhdssjhfdsjfdh</span>
                <a href={Resume} download><button className='button s-button'>Downlode Resume</button></a>
                <div className='blur s-blur1' style={{background: '#abf1ff94'}}></div>
            </div>
            <div className='cards'>
                <div style={{left: '27rem'}}>
                    <Card
                    emoji= {HeartEmoji}
                    heading = {'Design'}
                    detail= {'Figma, Sketch, Photoshop, photopea'}
                    />
                </div>

                <div style={{ top: '12rem', left: '5rem'}}>
                    <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"Html5, Css3, JavaScript, React js"}
                    />
                </div>
                
                <div style={{ top: '25rem', left: '27rem'}}>
                    <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"Html5, Css3, JavaScript, React js"}
                    />
                </div>
                
            </div>
        </div>
        
    );
};

export default Services;