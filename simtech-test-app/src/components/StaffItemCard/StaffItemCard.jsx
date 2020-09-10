import React from 'react';
import blank_img from '../../assets/img/blank_img.jpg'
import style from './StaffItemCard.module.css'

const StaffItemCard = (props) => {
    console.log(props)
    // debugger
    return (<>
        <div className={style.item}>
            <div>
                {
                    props.userPhoto === null || 'null' ?
                        <img src={blank_img} /> :
                        <img src={props.userPhoto} />
                }
                <span> {props.userName}</span>
                <span> {props.userLastname}</span>
            </div>
            <div>
                <div>
                    <span> Отдел: {props.userDepartment}</span>
                </div>
                <div>
                    <span> Email: {props.userEmail}</span>
                </div>
                <div>
                    <span> Телефон: {props.userPhoneNumber}</span>
                </div>


            </div>
        </div>
    </>
    )
}

export default StaffItemCard
