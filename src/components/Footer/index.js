import { aboutData } from "../../data/about.js"
import { footerLinks } from '../../data/footer-links'

export const Footer = () => {
    return (
        <article className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="social-icons">
                            {aboutData.contactInfo.map((el, idx) => {
                                return (
                                    <div className="item" key={idx}>
                                        <a href={el.link} title={el.info} target="_blank" rel="noreferrer">
                                            <i className={el.iconClassname}></i>
                                        </a>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="footer-menu">
                            {footerLinks.map((linkEl, linkIdx) =>
                                <small key={linkIdx}><a href={linkEl.link} target={linkEl.newTab
                                    ? '_blank'
                                    : '_self'} rel='noreferrer'>{linkEl.title}</a></small>)}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
