import { aboutData } from "../../data/about"
import './styles.scss'

export const Top = () => {
    return (
        <div className="top">
            <div className="container">
                <div className="row">
                    <div className="content-wrapper">
                        <div className="contact-info">
                            {aboutData.contactInfo.map((contactInfoEl, contactInfoIdx) =>
                                <div className="item" key={contactInfoIdx}>
                                    <a href={contactInfoEl.link} title={contactInfoEl.info} target="_blank" rel="noreferrer">
                                        <i className={contactInfoEl.iconClassname}></i>
                                        <small>{contactInfoEl.info}</small>
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="social">
                            {aboutData.social.map((socialEl, socialIdx) =>
                                <div className="item" key={socialIdx}>
                                    <a href={socialEl.link} title={socialEl.info} target="_blank" rel="noreferrer">
                                        <i className={socialEl.iconClassname}></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
