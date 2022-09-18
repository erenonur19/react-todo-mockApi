import React, {useState} from 'react'
import ReactModal from 'react-modal'
import pencilicon from '../img/pencil.png'
import reject from '../img/reject.png'
ReactModal.setAppElement('#root')
const Modal = ({children}) => {
    const [isOpen,setIsOpen]=useState(false);
    const openModal=()=>setIsOpen(true)
    const closeModal=()=>setIsOpen(false)
  return (
    <div >
      <img alt='edit' src={pencilicon} onClick={openModal}></img>
      <ReactModal className='modal' isOpen={isOpen} onRequestClose={closeModal}>
      <img alt='close' src={reject} onClick={closeModal} />
      <div>{children}</div>
        
        
        
      </ReactModal>
    </div>
  )
}

export default Modal