import { rematesData } from "../../data/remates"
import './styles.scss'

export const EventsList = () => {
  const getMonth = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('es-UY', { month: 'long' });
  }

  return (
    <section id="cartelera" className="events-list">
      <article className="container">
        <div className="row">
          <div className="col">
            <h2>Cartelera de remates</h2>
          </div>
        </div>
        <div className="row">
          {rematesData.map((el, idx) => {
            return (
              <div className="event" key={idx}>
                <p>{`${el.dia} de ${getMonth(el.mes)}, - ${el.horaInicio} hrs.`}</p>
                <p>{el.titulo}</p>
                <p>{el.lugar}</p>
                <p>{el.organiza}</p>
                <p>{el.remata}</p>
                <img
                  src="https://drive.google.com/uc?export=view&id=1JVafd5uonQBrO8JohS67G1TXuJ662NUH"
                  alt={el.titulo}
                />
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}
