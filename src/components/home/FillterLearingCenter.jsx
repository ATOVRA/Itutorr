import React from 'react'
import ItTexnology from './Allsection-items/DISCIPLINES'
import FooterSearch from './FooterSearch'
import Students from './Students'
import Footer from "./Footer"
import FillterSAidbar from './FillterSAidbar'

export default function FillterLearingCenter() {
    return (
        <>
            <div className='fillter'>
                <div className="item-fillter">
                    <div className="title-fillter">
                        <h3>
                            Поиск преподавателей и учебных центров
                        </h3>
                    </div>

                    <div className="main-fillter">

                        {/* fillter saidbar  */}
                        <div className="fillter-saidbar">
                            <FillterSAidbar />
                        </div>

                        {/* main fillter all sections  */}
                        <div className="main-fillter-all-sections">
                            <div className="map">
                                <img src="./images/map.png" alt="" />
                            </div>


                            <div className="search-in-fillter">
                                <span>Сортировка результатов поиска:</span>
                                <div className="fillter-in-size-and-rating">

                                </div>
                            </div>


                            <div className="ittesxnology">
                                <ItTexnology />
                                <ItTexnology />
                                <ItTexnology />
                            </div>

                            <div className="pagination-buttons">
                                <button>1</button><button>2</button><button>3</button> <span>...</span><button>81</button>
                            </div>
                        </div>
                    </div>

                    <Students />
                    <FooterSearch />
                </div>
            </div>
            <Footer />
        </>
    )
}
