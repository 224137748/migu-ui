import React from 'react'
import Button, { ButtonType } from '../button'
const ButtonDemo = () => {
    const handleClick = () => {
        console.log(132)
    }
    return (
        <div>
            <Button
                className='test'
                onClick={handleClick}
                btnType={ButtonType.Primary}
            >
                Hello
            </Button>
            <Button
                btnType={ButtonType.Link}
                href='http://www.baidu.com'
                autoFocus
            >
                百度
            </Button>
            <Button autoFocus>百度</Button>
            <Button href='http://www.baidu.com' disabled>
                百度
            </Button>
        </div>
    )
}

export default ButtonDemo
