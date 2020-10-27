import React from 'react'
import CardProduct from './CardProduct'
import { compose } from 'redux'
import { connect } from 'react-redux'
import cls from './CardProduct.module.scss';


const CatalogContainer = ({rolls})=> {
        return <>
        <div className={cls.catalogBlock}>
            {rolls.map(roll=>{
                return <CardProduct roll={roll} key={roll.id}/>
            })}
        </div>
        </>
    }


    const mapStateToProps = (state) => {
        return {
            rolls: state.catalogPage.rolls
        }
    }
    
    export default compose(
        connect(mapStateToProps, {
            
        }),
        // withRouter
    )(CatalogContainer)