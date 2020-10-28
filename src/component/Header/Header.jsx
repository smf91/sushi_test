import React from 'react';
import cls from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'
import egg from '../../assets/images/egg.svg'
import ru from '../../assets/images/ru.svg'

const Header = (props) => {
    return (
        <header className={cls.header}>
            <div className={cls.leftBlock}>
                <div className={cls.logo}>
                    <img src={logo} alt="imglogo"/>
                </div>
                <div className={cls.city}>
                    <img src={ru} alt="imgru"/>
                    <span>Волгоград</span>
                </div>
                <div className={cls.phone}>
                    8-800-550-30-30
                </div>
            </div>
            <div></div>
            <div className={cls.rightBlock}>
                <div className ={cls.aboutBlock}>
                    <div>О компании</div>
                    <div>Условия доставки</div>
                    <div>Пользовательское соглашение</div>
                </div>
                <div className= {cls.cashback}>
                    <button>
                        <span>Икринки</span>
                        <img src={egg} alt=""/>
                    </button>
                </div>
                <div className={cls.cart}>
                    <img src={cart} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;