import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Faq.scss'

const Faq = () => {
    const [clicked, setClicked] = useState(false)


    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };


    const faq = [
        {
            question: '1. Question 1',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto consequatur voluptatem eligendi doloremque fugit eaque quia eveniet! At quo iure commodi natus ullam quisquam architecto unde explicabo perferendis.',
            id: '1'
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
        },
        {
            question: '5. Question 5',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '5'
        },
        {
            question: '6. Question 6',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '6'
        },
        {
            question: '7. Question 7',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '7'
        },
        {
            question: '8. Question 8',
            answer: ' Accusantium? Placeat a illum, laborum delectus totam ex libero, perspiciatis molestias veniam asperiores dolor mollitia.Nam numquam accusamus voluptatibus.Nostrum inventore voluptatum in, odio quaerat architecto voluptas ad neque repellat sequi?',
            id: '8'
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
                        <div className='questionHeader bg-secondary' onClick={() => toggle(i)}>
                            <h3 className='text-light'>{qb.question}</h3>
                            <button className='btn text-light'>{clicked === i ? <IoIosArrowDown /> : <IoIosArrowUp />}   </button>
                        </div>
                        {clicked === i ? <p className='answer p-5'> {qb.answer} </p> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq