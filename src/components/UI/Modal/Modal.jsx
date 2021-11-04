import React from 'react';
import cn from 'classnames'
import cl from './Modal.module.css'

const Modal = ({children, visible, handleSetVisible}) => {

const classNames = cn(cl.dialog, visible && cl.active)

    return (
        <div className={classNames} onClick={()=>handleSetVisible(false)}>
            <div className={cl.dialogContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;