import { aboutData } from "../../data/about.js"
import './styles.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mb-3 mb-lg-0">
                        <small>Copyright 2023 Campo Eventos. Todos los derechos reservados</small>
                    </div>
                    <div className="col-lg-2">
                        <div className="social">
                            {aboutData.contactInfo.map((el, i) =>
                                <a
                                    key={i}
                                    href={el.link}
                                    title={el.info}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="item"
                                >
                                    <i className={el.iconClassname}></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
