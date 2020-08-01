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
                <MenuItem index={1}>cool link1</MenuItem>
                <MenuItem index={2}>cool link2</MenuItem>
                <MenuItem index={3} disabled>
                    cool link3
                </MenuItem>
            </Menu>
        </div>
    )
}

export default MemuDemo
