import React from 'react'

export default function FooterSearch() {
    return (
        <div className='footersearch'>
            <div className="item-footersearch">
                <div className="title-footersearch">
                    <h2>
                        Подпишитесь на нашу новостную рассылку!
                    </h2>
                    <span>
                        Подпишитесь и вы будете в курсе все наших акций, скидок, появление <br /> Новых предметов, дисциплин и учебных центров.
                    </span>
                </div>
                <div className="footersearch-input">
                    <div className="inp-and-icone">
                        <input type="text" placeholder='Введите ваш действующий Email' /> <i class='bx bx-search'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
