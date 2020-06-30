import React from 'react'

import { render } from '@testing-library/react'

import Button from './button'

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button>nice</Button>)
        const ele = wrapper.getByText('nice')
        expect(ele).toBeInTheDocument()
        expect(ele.tagName).toEqual('BUTTON')
        expect(ele).toHaveClass('btn btn-default')
    })

    it('should render the corrent component based on different props', () => {})

    it('should render a link when btnType equals link and href is provided', () => {})
})
