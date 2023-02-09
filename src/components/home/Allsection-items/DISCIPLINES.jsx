import React from 'react'
import { Data } from "./Data"
export default function ItTexnology() {
    return (
        <>
            {
                Data.map((item, index) => {
                    return (
                        <div className="skill" key={index}>
                            <div className="skill-top">
                                <img src={item.jobs_img} alt="3d-photo" className='job-img' />
                                <img src={item.avatar} alt="avatar1" className='avatar' />
                            </div>

                            <div className="skill-bottom">
                                <div className="title-bottom-skill">
                                    <p>
                                        {item.title}
                                    </p>
                                    <h3>
                                        {item.job}
                                    </h3>
                                    <div className="bottom-information-skill">
                                        <span><i class='bx bxs-user' ></i> {item.follovers}</span>
                                        <span> <i class='bx bxs-star star' ></i> {item.rating} </span>
                                        <span className='pur'> <i class='bx bx-purchase-tag-alt purchase_rotate'></i> от <o>{item.one_lesson}{item.price_type}</o> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
