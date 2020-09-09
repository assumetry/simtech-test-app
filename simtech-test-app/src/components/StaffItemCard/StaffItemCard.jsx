import React from 'react';

const StaffItemCard = (props) => {
    console.log(props)
    debugger
    return (<>
        <div>{props.userPhoto}</div>
        <div>{props.userName}</div>
        <div>{props.userLastname}</div>
        <div>{props.userDepartment}</div>
        <div>{props.userEmail}</div>
        <div>{props.userPhoneNumber}</div>
    </>
    )
}
export default StaffItemCard
