import React from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
    defaultIndex?: number
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelection?: (selectedIndex: number) => void
}

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, children, style, defaultIndex } = props
    const classes = classNames('migu-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal',
    })
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
}
export default Menu
