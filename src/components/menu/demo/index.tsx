import React from 'react'
import MenuItem from '../menuItem'
import Menu from '../menu'
const MemuDemo = () => {
    return (
        <div>
            <Menu
                defaultIndex={1}
                mode='vertical'
                onSelect={(index: number) => {
                    alert(index)
                }}
            >
                <MenuItem>cool link1</MenuItem>
                <MenuItem>cool link2</MenuItem>
                <MenuItem disabled>cool link3</MenuItem>
            </Menu>
        </div>
    )
}

export default MemuDemo
