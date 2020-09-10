import React from 'react';
import blank_img from '../../assets/img/blank_img.jpg'
import style from './StaffItemCard.module.css'
import { withAutoRedirect } from '../../hoc/autoRedirect'

const StaffItemCard = (props) => {

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

export default withAutoRedirect(StaffItemCard)
