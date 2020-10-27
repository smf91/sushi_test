import React from 'react';
import cls from './CardProduct.module.scss';
import ruble from '../../assets/images/ruble.svg'

const CardProduct = ({roll}) => {
    
    return (
        <div className ={cls.cardProductWrapper}>
            <div className={cls.productImg}>
                <img src={roll.img} alt="imgProduct"/>
            </div>
            <div className={cls.productDescriptionBlock}>
                <div className={cls.productDescription}>
                    <div className={cls.productName}>
                        {roll.name}
                        </div>
                    <div className={cls.productComposition}>
                        {roll.composition}
                    </div>
                </div>
                <div className={cls.productPrice}>
                    {roll.price}
                    <img src={ruble} alt="ruble"/>
                    <button>в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;