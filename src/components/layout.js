import React from "react"
import Header from "./header"
import "../styles/layout.scss"

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Layout