import { rematesData } from "../../data/remates"

export const Live = () => {
    let currentDate = new Date()
    const currentTimeStamp = currentDate.getTime()

    return (
        <div id="live" className="live">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>EN VIVO</h2>
                    </div>
                    <div className="col">
                        {rematesData.map((el, idx) => {
                            let beginDate = Date.parse(`2023-${el.mes}-${el.dia}T${el.horaInicio}`)
                            let finishDate = Date.parse(`2023-${el.mes}-${el.dia}T${el.horaCierre}`)

                            return ((
                                (beginDate < currentTimeStamp) && (finishDate > currentTimeStamp)
                                    ? <div key={idx}>
                                        <h4>{el.titulo}</h4>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${el.enlace}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                        </iframe>
                                        <p>{`${el.dia} de ${el.mes} de 2023 a las ${el.horaInicio} hs.`}</p>
                                        <p>{Date.parse(`2023-${el.mes}-${el.dia}T${el.horaInicio}:50.417-07:00`)}</p>
                                    </div>
                                    : null
                            ))
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
