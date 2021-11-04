import cl from './Modal.module.css'
import React from 'react';

const Modal = ({children, visible, setVisible}) => {

    const rootClasess = [cl.dialog]

    if(visible){
        rootClasess.push(cl.active)
    }

    return (
        <div className={rootClasess.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.dialogContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;