import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Nuruzzaman</span>
                    <span>Front-end web development </span>
                </div>
                <button className='button i-button'>Hire Me</button>
                <div className='i-icons'>
                    <a href='https://github.com/Nuruzzamanshah'><img src={Github} alt=''/></a>
                    <a href='https://www.linkedin.com/in/md-nuruzzaman-4ab88b205/'><img src={LinkedIn} alt=''/></a>
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt=''/>
                <img src={Vector2} alt=''/>
                <img src={Boy} alt=''/>
                <img src={Glassesimoji} alt=''/>
                <div style={{top: '-4%', left: '65%'}}>
                    <FloatingDiv image={Crown} text1='Front-end' text2='Developer'></FloatingDiv>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={Thumbup} text1='Best Design' text2='Nuruzzzaman'></FloatingDiv>
                </div>

                <div className='blue' style={{background: 'rgb(238 210 255)'}}></div>
                <div className='blue' style={{
                    background: '#c1f5ff',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem',
                    }}></div>
            </div>
        </div>
    );
};

export default Intro;