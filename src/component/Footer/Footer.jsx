import React from 'react';
import cls from './Footer.module.scss';
import vk from '../../assets/images/vk.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import visa from '../../assets/images/visa.svg'
import mastercard from '../../assets/images/mastercard.svg'
import googlePlay from '../../assets/images/googlePlay.png'
import appStore from '../../assets/images/appStore.png'

const Footer = (props) => {
    return <footer className={cls.footer}>
        <div className={cls.leftBlock}>
            <div className={cls.facebook}>
                <img src={facebook} alt="" />
            </div>
            <div className={cls.vk}>
                <img src={vk} alt="" />
            </div>
            <div className={cls.instagram}>
                <img src={instagram} alt="" />
            </div>
        </div>
        <div className={cls.centerBlock}>
            <ul>
                <li>Условия доставки</li>
                <li>Акции</li>
                <li>Новости</li>
                <li>Франшиза</li>
                <li>Вакансии</li>
                <li>Отзывы</li>
                <li>Персональные данные</li>
            </ul>
        </div>
        <div className={cls.rightBlock}>
            <div className={cls.mastercard}>
                <img src={mastercard} alt="" />
            </div>
            <div className={cls.visa}>
                <img src={visa} alt="" />
            </div>
            <div className={cls.googlePlay}>
                <img src={googlePlay} alt="" />
            </div>
            <div className={cls.appStore}>
                <img src={appStore} alt="" />
            </div>
        </div>
    </footer>
}

export default Footer;