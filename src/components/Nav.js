import React from 'react'
import NavLink from './NavLink'

// Redux
import { useSelector ,useDispatch } from 'react-redux'
import { switchColor } from '../modeSlice'

function Nav() {
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.mode.currentMode)

    return (
        <div className="Nav" style={{ 'backgroundColor': currentMode.color1 }}>
            <NavLink content="Blog" />
            <NavLink content="About " />
            <NavLink content="Projects" />
            <NavLink content="Other" />

            <div style={{ background: currentMode.color2 }}>
                <label htmlFor="checkbox"> Color Mode </label>
                <input type="checkbox" id='checkbox'
                    onClick={() => dispatch(switchColor())}
                />
            </div>
        </div>
    )
}

export default Nav
