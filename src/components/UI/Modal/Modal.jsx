import React from 'react';
import cl from './Modal.module.css'

const Modal = ({children, visible, handleSetVisible}) => {

    const rootClasess = [cl.dialog]

    if(visible){
        rootClasess.push(cl.active)
    }

    return (
        <div className={rootClasess.join(' ')} onClick={()=>handleSetVisible(false)}>
            <div className={cl.dialogContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;