import { rematesData } from '../../data/remates'
import { Title } from '../Title'
import { Card } from './components/Card'
import './styles.scss'

export const Events = () => {
    return (
        <section id="events" className="events">
            <article className="container">
                <Title title='Cartelera de eventos' subtitle="Estos son los próximos eventos en los que estaremos trabajado." />
                <div className="row">
                    {rematesData.map((el, idx) => (el.publicado)
                        ? <Card key={idx} element={el} />
                        : null)}
                </div>
            </article>
        </section>
    )
}
