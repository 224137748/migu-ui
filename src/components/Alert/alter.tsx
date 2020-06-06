import React, { useMemo, useState } from 'react'
import classNames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface BaseAlertProps {
    className?: string
    type?: AlertType
    message?: string | React.ReactNode
    description?: string | React.ReactNode
    closeText?: string | boolean | React.ReactNode
    onClose?: () => void
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const { type, message, description, closeText, onClose, className } = props
    const [isClose, setIsClose] = useState(false)
    const [showFlag, setShowFlag] = useState(true)
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
        [`alert-close`]: isClose,
    })
    const showCloseBtn = useMemo(() => {
        if (typeof closeText === 'string') {
            return closeText !== ''
        } else {
            return closeText
        }
    }, [closeText])
    const handleCloseClick = () => {
        setIsClose(true)
        setTimeout(() => {
            setShowFlag(false)
            onClose && onClose()
        }, 500)
    }
    if (showFlag) {
        return (
            <div className={classes}>
                {message && <div className='migu-alert-message'>{message}</div>}

                {description && (
                    <div className='migu-alert-description'>{description}</div>
                )}

                {showCloseBtn && (
                    <button
                        className='migu-alert-close-icon'
                        onClick={handleCloseClick}
                    >
                        {closeText}
                    </button>
                )}
            </div>
        )
    } else {
        return null
    }
}

Alert.defaultProps = {
    type: 'default',
    message: '',
    description: '',
    closeText: '关闭',
}

export default Alert
