import React from 'react'
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from './components/Alert/alter'

function App() {
    const handleClick = () => {
        console.log(132)
    }
    return (
        <div className='App'>
            <Alert
                description='哈哈哈'
                message='这是测试demo'
                onClose={() => {
                    alert(2)
                }}
            ></Alert>
            <Alert
                description='成功'
                type={'success'}
                onClose={() => {
                    alert(2)
                }}
            ></Alert>
            <Alert
                type={'warning'}
                description='警告'
                onClose={() => {
                    alert(2)
                }}
            ></Alert>
            <Alert
                type={'danger'}
                description='严重错误'
                onClose={() => {
                    alert(2)
                }}
            ></Alert>

            {/* <Button
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
            </Button> */}
        </div>
    )
}

export default App
