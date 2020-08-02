import React, { useState, createContext, useCallback } from 'react'
import { MenuItemProps } from './menuItem'
import classNames from 'classnames'

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

    const handleClick = useCallback(
        (index: number) => {
            setActive(index)
            onSelect && onSelect(index)
        },
        [onSelect]
    )

    const passedContext = {
        index: currentActive,
        onSelect: handleClick,
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<
                MenuItemProps
            >
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index,
                })
            } else {
                console.warn(
                    'Warning: Menu has a child which is not a MenuItem child.'
                )
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

export default Menu
