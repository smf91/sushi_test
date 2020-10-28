import React from 'react';
import cls from './CardProduct.module.scss';
import ruble from '../../assets/images/ruble.svg'

const CardProduct = ({food}) => {
    
    return (
        <div className ={cls.cardProductWrapper}>
            <div className={cls.productImg}>
                <img src={food.img} alt="imgProduct"/>
            </div>
            <div className={cls.productDescriptionBlock}>
                <div className={cls.productDescription}>
                    <div className={cls.productName}>
                        {food.name}
                        </div>
                    <div className={cls.productComposition}>
                        {food.composition}
                    </div>
                </div>
                <div className={cls.productPrice}>
                    {food.price}
                    <img src={ruble} alt="ruble"/>
                    <button>в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;