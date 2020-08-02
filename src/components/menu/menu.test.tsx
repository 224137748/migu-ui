import React from 'react'

import { render, RenderResult, fireEvent } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test',
}

const testVerticalProps: MenuProps = {
    mode: 'vertical',
    defaultIndex: 0,
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>active</MenuItem>
            <MenuItem index={1} disabled>
                disabled
            </MenuItem>
            <MenuItem index={2}>xyz</MenuItem>
        </Menu>
    )
}

let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })

    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('migu-menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-diabled')
    })

    it('click items should change active and call the right callback', () => {
        // const thirdItem = wrapper.getByText('xyz')
        // fireEvent.click(thirdItem)
        // expect(thirdItem).toHaveClass('is-active')
        // expect(activeElement).not.toHaveClass('is-active')
        // expect(testProps.onSelect).toHaveBeenLastCalledWith(2)
    })

    it('should render vertical mode when  mode is set to vertival', () => {})
})
