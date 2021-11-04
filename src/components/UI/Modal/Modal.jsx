import React from 'react';
import cn from 'classnames'
import cl from './Modal.module.css'

const Modal = ({children, visible, handleSetVisible}) => {

    return (
        <div
            className={cn(cl.dialog, visible && cl.active)}
            onClick={()=>handleSetVisible(false)}>
            <div className={cl.dialogContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;