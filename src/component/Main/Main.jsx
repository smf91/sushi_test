import React from 'react';
import cls from './Main.module.scss';
import {Link} from 'react-router-dom'

import setsDesktop from '../../assets/images/setsDesktop.png'
import rollsDesktop from '../../assets/images/rollsDesktop.png'
import sushiDesktop from '../../assets/images/sushiDesktop.png'
import bakedRollsDesktop from '../../assets/images/bakedRollsDesktop.png'
import friedRollsDesktop from '../../assets/images/friedRollsDesktop.png'
import wokDesktop from '../../assets/images/wokDesktop.png'
import soupDesktop from '../../assets/images/soupDesktop.png'
import tempuraDesktop from '../../assets/images/tempuraDesktop.png'
import beveragesTablet from '../../assets/images/beveragesTablet.png'

const Main = (props) => {
    return <body className={cls.main}>
        <div className={cls.setsBlock}>
        <Link to ='/catalog/set'>
            <div className={cls.setsImg}>
                <img src={setsDesktop} alt="" />
            </div>
            <div className={cls.setsText}>сеты</div>
        </Link>
        </div> 
        <div className={cls.sushiAndRollsBlock}>
        <Link to ='/catalog/roll'>
            <div className={`${cls.rollsBlock}  ${cls.everyBlock}`}>
                <div className={cls.rollsImg}>
                    <img src={rollsDesktop} alt="" />
                </div>
                <div className={cls.rollsText}>роллы</div>
            </div>
        </Link>
        <Link to ='/catalog/sushi'>
            <div className={`${cls.sushiBlock}  ${cls.everyBlock}`}>
                <div className={cls.sushiText}>суши</div>
                <div className={cls.sushiImg}>
                    <img src={sushiDesktop} alt="" />
                </div>
            </div>
            </Link>
            <Link to ='/catalog/friedroll'>
            <div className={`${cls.friedRollsBlock}  ${cls.everyBlock}`}>
                <div className={cls.friedRollsImg}>
                    <img src={friedRollsDesktop} alt="" />
                </div>
                <div className={cls.friedRollsText}>жареные роллы</div>
            </div>
            </Link>
            <Link to ='/catalog/bakedrolls'>
            <div className={`${cls.bakedRollsBlock}  ${cls.everyBlock}`}>
                <div className={cls.bakedRollsText}>запеченные роллы</div>
                <div className={cls.bakedRollsImg}>
                    <img src={bakedRollsDesktop} alt="" />
                </div>
            </div>
            </Link>
        </div>
        <div className={cls.wokBlock}>
        <Link to ='/catalog/wok'>
            <div className={cls.wokTitle}>
                вок
                <br />
                конструк
                <br />
                тор
                <span>собери свой</span>
            </div>
            <img src={wokDesktop} alt="imgWok" />
        </Link>
        </div>
        <div className={cls.fourthBlock}>
            <div className={cls.soupBlock} >
        <Link to ='/catalog/soup'>
                <div className={cls.soupImg}>
                    <img src={soupDesktop} alt="imgSoup" />
                </div>
                <div className={cls.soupTitle}>супы</div>
            </Link>
            </div>
            <div className={cls.lastBlock}>
            <Link to ='/catalog/tempua'>
                <div className={cls.tempuaBlock}>
                    <div className={cls.tempuaImg}>
                        <img src={tempuraDesktop} alt="" />
                    </div>
                    <div className={cls.tempuaTitle}>
                        темпуа
                    </div>
                </div>
                </Link>
                <Link to ='/catalog/shake'>
                <div className={cls.shakeBlock}>
                    <div className={cls.shakeTitle}>
                        напитки
                    </div>
                    <div className={cls.shakeImg}>
                        <img src={beveragesTablet} alt="" />
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </body>
}

export default Main;