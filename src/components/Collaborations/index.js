import { collaborationsData } from '../../data/collaborations'
import { Title } from '../Title'
import './styles.scss'

export const Collaborations = () => {

    return (
        <section id="collaborations" className="collaborations">
            <article className="container">
                <Title title='Colaboraciones' subtitle="Estamos orgullosos de haber colaborado con las siguientes empresas e instituciones:" />
                <div className="row">
                    {collaborationsData.map((el, i) => {
                        return (
                            <div className='col-12 col-sm-6 col-lg-3 item' key={i}>
                                <a href={el.link} target='_blank' rel='noreferrer' title={el.title}>
                                    <img src={`./assets/${el.imgSrc}`} alt={el.title} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}
