import React from 'react'
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr'

// const customStyles = {
//   content: {
//     top: '30%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

function Peoples_thoughts({name,content}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <>
        <div className="flex mb-4 card p-4 cursor-pointer" onClick={()=>{setIsOpen(true)}}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
             alt=""
             className="w-1/4 h-1/4 md:w-20 md:h-20 object-cover rounded-full shadow-lg border-2 border-black" />
            
            <div className="ml-4">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="leading-5 mt-2 text-sm">{content}</p>
            </div>

            

        </div>
        <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        className="m-4 md:mt-24 md:mx-40 p-4 md:p-8 bg-white shadow-xl border-2 border-gray-200 rounded-lg">
        <button onClick={()=>{setIsOpen(false)}}><GrClose className="text-xl font-bold" /></button>
        <div className="mt-3 md:mt-8 grid md:grid-cols-2">
            <div>
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="mt-4 leading-6">{content}</p>
            </div>
            <div>
                <img src=" https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                className="w-80 md:ml-20 border-2 border-black" alt="" />
            </div>
        </div>
    </Modal>
    </>
    )
}

export default Peoples_thoughts
