import { motion } from 'framer-motion'
import { rematesData } from '../../data/remates'
import { Title } from '../Title'
import { Card } from './components/Card'

export const Events = () => {
    return (
        <section id="cartelera" className="events">
            <article className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Title title='Cartelera de eventos' subtitle="Estos son los próximos eventos en los que estaremos trabajado." />
                </motion.div>
                <div className="row">
                    {rematesData.map((el, idx) => (el.publicado)
                        ? <Card key={idx} element={el} />
                        : null)}
                </div>
            </article>
        </section>
    )
}
