import { useEffect, useState } from 'react';
import cardsData from 'api/cards.json';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)

    }, [])

    return (
        <div className='container mx-auto mb-6 '>
            <div className="flex flex-col p-5 lg:flex-row justify-between my-5 items-center text-center gap-5">
                {cards.length && cards.map(card => (
                    <div className='flex flex-col bg-gray-200 p-10 rounded-lg items-center w-[600px] group'>
                        <img src={card.image} className="group-hover:scale-110 duration-500 rounded-lg" width={150} alt="" />
                        <h1 className='text-regal-blue font-semibold text-base mt-5'>{card.title}</h1>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Cards
