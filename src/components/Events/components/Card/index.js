import React, { useState } from "react"
import './styles.scss'

export const Card = ({ element }) => {
    const [openModal, setOpenModal] = useState(false)
    const handleClick = () => {
        setOpenModal(!openModal)
    }
    const getMonth = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('es-UY', { month: 'long' });
    }

    return (
        <React.Fragment>
            <div className="item fadeElement col-lg-2">
                <div className="overflow">
                    <div className="content">
                        <div className="thumb">
                            <div className="hover-content" onClick={handleClick}>
                                <i className="fas fa-search"></i>
                                <h5>{element.titulo}</h5>
                                <p>{`${element.dia} de ${getMonth(element.mes)}, - ${element.horaInicio} hrs.`}</p>
                            </div>
                            <img
                                src={`./assets/cartelera/${element.miniatura}`}
                                alt={element.titulo}
                                className='thumb-img'
                            />
                        </div>
                    </div>
                </div>
            </div>
            {openModal && (
                <div className="thumb-modal">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <img src={`./assets/cartelera/${element.miniatura}`} alt={element.titulo} />
                            </div>
                            <div className="col-lg-7">
                                <h2>{element.titulo}</h2>
                                <div className="separator"></div>
                                <p>{`${element.dia} de ${getMonth(element.mes)}, - ${element.horaInicio} hrs.`}</p>
                                <p>{element.titulo}</p>
                                <p>{element.lugar}</p>
                                <p>{element.organiza}</p>
                                <p>{element.remata}</p>
                            </div>
                        </div>
                        <i className="fas fa-times close-icon" onClick={handleClick}></i>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}