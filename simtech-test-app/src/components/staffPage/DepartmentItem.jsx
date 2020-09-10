import React from 'react';
import StaffItemCard from '../StaffItemCard/StaffItemCard';
import { NavLink, Route } from 'react-router-dom';
import style from './DepartmentItem.module.css'

const DepartmentItem = (props) => {
   
    let newArr = props.memberList.map((i) => {
        if (i.userDepartment === props.department) {
            return <div>
                <NavLink activeClassName={style.active} to={'/staff/' + i.userID}>{i.userName}</NavLink>
                <Route path={'/staff/' + i.userID} render={() => {
                    return <StaffItemCard
                        isAuth={props.isAuth}
                        userPhoto={i.userPhoto}
                        userName={i.userName}
                        userLastname={i.userLastname}
                        userDepartment={i.userDepartment}
                        userEmail={i.userEmail}
                        userPhoneNumber={i.userPhoneNumber}
                    />
                }}>
                </Route>
            </div>
        }
    })
    return (
        <>
            <div className={style.departmentName}>{props.department}</div>
            <div>{newArr}</div>
        </>)
}

export default DepartmentItem
