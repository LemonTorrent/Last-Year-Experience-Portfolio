import React from 'react'

// import component ?
import Drawer from 'react-modern-drawer'

//import styles ?
import 'react-modern-drawer/dist/index.css'

const Navdrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                <div>Hello World</div>
            </Drawer>
        </>
    )
}

export default Navdrawer