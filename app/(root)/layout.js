import { Divide } from 'lucide-react'
import React from 'react'

const Layout = ({ children }) => {
    return (

        <main className='root'>
            <div className='root-container'>
                <div className='wrapper'> {children}</div>
            </div>
        </main>
    )
}

export default Layout