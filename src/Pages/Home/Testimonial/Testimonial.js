import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='w-10/12 mx-auto my-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl font-bold text-cyan-500'>Testimonial</h1>
                    <h1 class="text-2xl font-semibold text-gray-600 lg:text-3xl py-3">What Our Patients Says</h1>
                </div>
                <div className='flex-none '>
                    <img className='lg:w-48 h-24 w-24 ' src={quote} alt="" srcset="" />
                </div>
           </div>
            <div className="grid grid-cols-1 gap-8 mt-8  lg:grid-cols-3 xl:grid-cols-3">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
           </div>
        </section>
    );
};

export default Testimonial;