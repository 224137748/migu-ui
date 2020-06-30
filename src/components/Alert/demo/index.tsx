import React from 'react'
import Alert from '../alter'
const AlertDemo = () => {
    return (
        <div>
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
        </div>
    )
}

export default AlertDemo
