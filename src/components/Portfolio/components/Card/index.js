import React, { useState } from "react"
import './styles.scss'

export const Card = ({ element }) => {
    const [openModal, setOpenModal] = useState(false)
    const handleClick = () => {
        setOpenModal(!openModal)
    }

    return (
        <React.Fragment>
            <div className="work-item fadeElement col-md-4">
                <div className="overflow">
                    <div className="content">
                        <div className="thumb">
                            <div className="hover-content" onClick={handleClick}>
                                <i className="fas fa-search"></i>
                                <h5>{element.title}</h5>
                            </div>
                            <img
                                src={`./assets/${element.src}`}
                                alt={element.title}
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
                                <img src={`./assets/${element.src}`} alt={element.title} />
                                {element.projectLink && (
                                    <a
                                        className="button link-button mt-2"
                                        href={element.projectLink}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <i className={element.projectIcon}></i>
                                        <small className='ms-2'>{element.projectLinkText}</small>
                                    </a>
                                )}
                                {element.projectLinksList && (
                                    element.projectLinksList.map((projectLinkElement, projectLinkElementIndex) =>
                                        <a
                                            key={projectLinkElementIndex}
                                            className="button link-button mt-2"
                                            href={projectLinkElement.projectLink}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <i className={projectLinkElement.projectIcon}></i>
                                            <small className='ms-2'>{projectLinkElement.projectLinkText}</small>
                                        </a>
                                    )
                                )}
                            </div>
                            <div className="col-lg-7">
                                <h2>{element.title}</h2>
                                <div className="separator"></div>
                                {element.description.map((el, idx) => <p key={idx}>{el}</p>)}
                                {element.items && (
                                    <React.Fragment>
                                        <h6 className="mb-3 mt-4">Piezas:</h6>
                                        <div className="tools">
                                            {element.items.map((el, idx) => <span key={idx}>{el}</span>)}
                                        </div>
                                    </React.Fragment>
                                )}
                                <h6 className="mb-3 mt-4">Tecnologías:</h6>
                                <div className="tools">
                                    {element.tools.map((el, idx) => <span>{el}</span>)}
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-times close-icon" onClick={handleClick}></i>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
