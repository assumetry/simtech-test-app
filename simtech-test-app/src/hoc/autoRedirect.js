import React from 'react'
import { Redirect } from "react-router-dom";

export const withAutoRedirect = (Component) => {

    class Autoredirect extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/'} />

            return <Component {...this.props} />
        }
    }
    
    return Autoredirect;
}
