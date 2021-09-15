import ReactDOM from 'react-dom';

import style from './Modal.module.css'

function Backdrop(props){
    return <div className={style.backdrop} onClick={props.onClose} />;
  };
  
function ModalOpen(props){
    return (
      <div className={style.modal}>
        <div className={style.content}>{props.children}</div>
      </div>
    );
};
  
const portalElement = document.getElementById('overlays');

function Modal(props){
    return (
        <>
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose}  />, portalElement)}
          {ReactDOM.createPortal(
            <ModalOpen>{props.children}</ModalOpen>,
            portalElement
          )}
        </>
      );
}


export default Modal;