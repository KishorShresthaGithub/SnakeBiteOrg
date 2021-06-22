import React from 'react'
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function ImageGallery({img,title}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
    <>
        <div className="card bg-white cursor-pointer" onClick={()=>{setIsOpen(true)}}>
            <img src={img} alt="" />
            <div className="mt-4 p-4">
                <p className="font-semibold">{title}</p>
            </div>
        </div>

        <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        >
            <button onClick={()=>{setIsOpen(false)}}><GrClose className="text-xl font-bold" /></button>
            <img src={img} alt="" />
        </Modal>
    </>
    )
}

export default ImageGallery
