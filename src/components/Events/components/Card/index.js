import { motion } from 'framer-motion'
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
            <div className="item col-lg-4" onClick={handleClick}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="content">
                        <div className="thumb">
                            <img
                                src={`./assets/cartelera/${element.miniatura}`}
                                alt={element.titulo}
                            />
                        </div>
                        <div className="description">
                            <h3>{element.titulo}</h3>
                            <small>Lugar: {element.lugar} | Organiza: {element.organiza} | Remata: {element.remata}</small>
                            <p className="date">{`${element.dia} de ${getMonth(element.mes)} a las ${element.horaInicio} hrs.`}</p>
                            <button className="button button-dark-outline">Ver más</button>
                        </div>
                    </div>
                </motion.div>
            </div>
            {openModal && (
                <div className="thumb-modal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-4 mb-lg-0 event-image">
                                <img src={`./assets/cartelera/${element.miniatura}`} alt={element.titulo} />
                            </div>
                            <div className="col-lg-7 event-description">
                                <h2>{element.titulo}</h2>
                                <span className="event-date"><i class="fas fa-calendar-alt"></i> {`${element.dia} de ${getMonth(element.mes)} a las ${element.horaInicio} hs.`}</span>
                                <span><b>Lugar: </b>{element.lugar}</span>
                                <span><b>Remata: </b>{element.remata}</span>
                                <span><b>Medios: </b>{element.medios}</span>
                                <span><b>Organiza: </b>{element.organiza}</span>
                            </div>
                        </div>
                        <i className="fas fa-times close-icon" onClick={handleClick}></i>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
