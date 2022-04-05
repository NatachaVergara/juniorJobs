import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Faq.scss'

const Faq = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState('')

    console.log(isOpen)
    const onHandleOpen = (id) => {
        setIsOpen(true)
        setId(id)
    }


    const onHandleClose = (id) => {
        setIsOpen(false)
        setId(id)
    }


    const faq = [
        {
            question: '1. Question 1',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto consequatur voluptatem eligendi doloremque fugit eaque quia eveniet! At quo iure commodi natus ullam quisquam architecto unde explicabo perferendis.',
            id:'1'
        },
        {
            question: '2. Question 2',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '2'
        },
        {
            question: '3. Question 3',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '3'
        },
        {
            question: '4. Question 4',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '4'
        }
    
    ]




    return (
        <div className='FAQ'>

            <div className='title mt-5'>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className='acordeon'>
                {faq.map((qb, i) => (                    
                    <div className="questionBox" id={i} key={i}>
                        <div className='questionHeader bg-success'>
                            <h3>{ qb.question}</h3>
                            {!isOpen ? <button className='btn' onClick={() => onHandleOpen(qb.id)}>
                                <IoIosArrowDown />
                            </button> : <button className='btn' onClick={() => onHandleClose('')} >
                                <IoIosArrowUp />
                            </button>}
                        </div>
                        {id === qb.id ? <p className='answer p-5'> {qb.answer} </p> : null}
                    </div>
                ))}







            </div>


        </div>
    )
}

export default Faq