import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-emerald-300'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-gray-800'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-emerald-300'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 mx-auto w-10/12 my-10'>
            {
                cardData.map(data => <InfoCard
                    key={data.id}
                    data={data}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;