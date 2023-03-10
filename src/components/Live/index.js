import { rematesData } from "../../data/remates"
import './styles.scss'

export const Live = () => {
    let currentDate = new Date()
    const currentTimeStamp = currentDate.getTime()

    const getMonth = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('es-UY', { month: 'long' });
      }

    return (
        <div id="live" className="live">
            {rematesData.map((el, idx) => {
                let beginDate = Date.parse(`2023-${el.mes}-${el.dia}T${el.horaInicio}`)
                let finishDate = Date.parse(`2023-${el.mes}-${el.dia}T${el.horaCierre}`)

                return ((
                    (beginDate < currentTimeStamp) && (finishDate > currentTimeStamp)
                        ? <section key={idx} className='item'>
                            <article className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${el.enlace}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                        </iframe>

                                    </div>
                                    <div className="col-lg-5">
                                        <h6><i class="fas fa-signal"></i> En vivo</h6>
                                        <h2>{el.titulo}</h2>
                                        <div className="event-description">
                                            <span className="event-date"><i class="fas fa-calendar-alt"></i> {`${el.dia} de ${getMonth(el.mes)} a las ${el.horaInicio} hs.`}</span>
                                            <span><b>Lugar: </b>{el.lugar}</span>
                                            <span><b>Remata: </b>{el.remata}</span>
                                            <span><b>Medios: </b>{el.medios}</span>
                                            <span><b>Organiza: </b>{el.organiza}</span>
                                        </div>
                                        <a
                                            className="button button-dark"
                                            href={`https://www.youtube.com/embed/${el.enlace}`}
                                            target='_blank'
                                            rel="noreferrer"
                                        ><i class="fas fa-play"></i> Ver en vivo
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </section>
                        : null
                ))
            })}
        </div>
    )
}
