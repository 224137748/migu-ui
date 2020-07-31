import React, { useState, createContext, useCallback } from 'react'
import classNames from 'classnames'
import { type } from 'os'

type MenuMode = 'horizontal' | 'vertical'

type SelectCallback = (selectedIndex: number) => void
export interface MenuProps {
    defaultIndex?: number
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelect?: SelectCallback
}
interface IMenuContext {
    index: number
    onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode = 'horizontal',
        children,
        style,
        defaultIndex = 0,
        onSelect,
    } = props
    const [currentActive, setActive] = useState<number>(defaultIndex)
    const classes = classNames('migu-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal',
    })

    const handleClick = useCallback((index: number) => {
        setActive(index)
        onSelect && onSelect(index)
    }, [])

    const passedContext = {
        index: currentActive,
        onSelect: handleClick,
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

export default Menu
