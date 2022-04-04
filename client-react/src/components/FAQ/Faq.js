import React, {  useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Faq.scss'

const Faq = () => {
    const [isOpen, setIsOpen] = useState(true)

    console.log(isOpen)
    const onHandleOpen = () => {
        setIsOpen(false)
    }


    const onHandleClose = () => {
        setIsOpen(true)
    }

    return (
        <div className='FAQ'>

            <div className='title'>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className='acordeon'>
                <div className="questionBox" id='question1'>
                    <div className='questionHeader'>
                        <h3>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        {isOpen ? <button className='btn' onClick={onHandleOpen}>
                            <IoIosArrowDown />
                        </button> : <button className='btn' onClick={onHandleClose} >
                            <IoIosArrowUp />
                        </button>}
                    </div>
                    {isOpen ? null : <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, autem voluptatum? Laborum vel quasi est excepturi nostrum nam consequatur quos aperiam quidem quas distinctio, sunt sapiente alias nesciunt repellendus molestiae?</p>}


                </div>
                <div className="questionBox" id='question2'>
                    <div className='questionHeader'>
                        <h3>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        {isOpen ? <button className='btn' onClick={onHandleOpen}>
                            <IoIosArrowDown />
                        </button> : <button className='btn' onClick={onHandleClose} >
                            <IoIosArrowUp />
                        </button>}
                    </div>
                    {isOpen ? null : <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, autem voluptatum? Laborum vel quasi est excepturi nostrum nam consequatur quos aperiam quidem quas distinctio, sunt sapiente alias nesciunt repellendus molestiae?</p>}
                </div>





            </div>


        </div>
    )
}

export default Faq