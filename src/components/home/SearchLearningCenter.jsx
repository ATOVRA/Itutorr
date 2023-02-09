import React from 'react'

export default function SearchLearningCenter() {
    return (
        <div className='search-learnign-center'>
            <div className="search-item">

                {/* leaft-section-search  */}
                <div className="left-section-search">
                    <div className="title-search-section">
                        <div className="title-all">
                            <h3>
                                Поиск репетиторов,<br /> учителей и учебных центров
                            </h3>
                            <span className='subtitle-search-section'>
                                Выберите удобный для себя формат обучения: на <br /> территории учителя, у вас дома или online!
                            </span>
                        </div>
                        <div className="search-input">
                            <input type="text" placeholder='Введите название предмета или ключевое слово' />
                            <i class='bx bx-search'></i>
                        </div>
                        <div className="in-zoom-learning">
                            <span>Система проведения онлайн обучения</span> <img src="./images/homeimages/zoom.png" alt="" />
                        </div>
                    </div>
                </div>



                {/* right-section-search  */}
                <div className="right-section-search">
                    <div className="item-right-section">



                        <div className="right-model">
                            <div className="user-and-contact">
                                <i class='bx bxs-user' ></i>
                                <span> <img src="./images/homeimages/phone.png" alt="" /></span>
                            </div>
                            <div className="girl-img-and-skill">
                                <img src="./images/homeimages/main.png" alt="" />

                                <div className="programmer-skill">
                                    <div className="skill-title">
                                        <h4>Программист</h4><i class='bx bxs-check-circle' ></i>
                                    </div>
                                    <div className="all-skill">
                                        <div className="top-skill">
                                            <span>html</span>
                                            <span>css</span>
                                        </div>
                                        <div className="bottom-skill">
                                            <span>javascript</span>
                                            <span>bootstrap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <img className='pole' src="./images/homeimages/pole.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
