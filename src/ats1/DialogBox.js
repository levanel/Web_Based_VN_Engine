import React, { useCallback, useEffect, useState } from 'react';
import './DialogStyles.css'; 
import Message from './Message';

const DialogBox = ({
    messages,
    characterName,
    onDialogEnded,
    screenWidth,
    screenHeight,
}) => {
    const [currentSprite, setCurrentSprite]= useState(0);
    const [currentMessage, setCurrentMessage] = useState(0);
    const [messageEnded, setMessageEnded] = useState(false);
    const [forceShowFullMessage, setForceShowFullMessage] = useState(false);

    const messageBoxHeight = Math.ceil(screenHeight / 3.5);

    const dialogStyle = {
        top: `${Math.ceil(screenHeight - (messageBoxHeight + (messageBoxHeight * 0.1)))}px`,
        minHeight: `${messageBoxHeight}px`,
    };

    const handleClick = useCallback(() => {
        if (messageEnded) {
            setMessageEnded(false);
            setForceShowFullMessage(false);
            if (currentMessage < messages.length - 1) {
                setCurrentMessage(currentMessage + 1);
            } else {
                setCurrentMessage(0);
                onDialogEnded();
            }
        } else {
            setMessageEnded(true);
            setForceShowFullMessage(true);
        }
    }, [currentMessage, messageEnded, messages.length, onDialogEnded]);

    useEffect(() => {
        const handleKeyPressed = (e) => {
            if (['Enter', 'Space', 'KeyF'].includes(e.code)) {
                handleClick();
            }
        };
        window.addEventListener('keydown', handleKeyPressed);

        return () => window.removeEventListener('keydown', handleKeyPressed);
    }, [handleClick]);

    return (
        <div className="dialog-window" style={dialogStyle}>
            <div className="dialog-title">
                {characterName}
            </div>
            <Message
                action={messages[currentMessage].action}
                message={messages[currentMessage].message}
                key={currentMessage}
                forceShowFullMessage={forceShowFullMessage}
                onMessageEnded={() => {
                    setMessageEnded(true);
                }}
            />
            <div
                onClick={handleClick}
                className="dialog-footer"
            >
                {(currentMessage === messages.length - 1 && messageEnded) ? 'Ok' : 'Next'}
            </div>
        </div>
    );
};

export default DialogBox;
 