import React from 'react'
import CardProduct from './CardProduct'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import cls from './CardProduct.module.scss';


const CatalogContainer = ({food, match})=> {
    let foodType = match.params.foodType
    let newarr = food.filter(foods => foods.type === foodType)
        return <>
        <div className={cls.catalogBlock}>
            {newarr.map(food=>{
                return <CardProduct food={food} key={food.id}/>
            })}
        </div>
        </>
    }

    const mapStateToProps = (state) => {
        return {
            food: state.catalogPage.food
        }
    }
    
    export default compose(
        connect(mapStateToProps, {
        }),
        withRouter
    )(CatalogContainer)