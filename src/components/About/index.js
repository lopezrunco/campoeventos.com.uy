import { motion } from 'framer-motion'
import { aboutData } from '../../data/about'
import './styles.scss'

export const About = () => {
    return (
        <section className="about" id='about'>
            <article className="container">
                <div className="row">
                    <div className="col-lg-9 about-info">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .1, duration: .5 }}
                            viewport={{ once: true }}
                        >
                            <h3>{aboutData.name}</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .2, duration: .5 }}
                            viewport={{ once: true }}
                        >
                            {aboutData.title.map((el, idx) => <h6 className='profile-title' key={idx}>{el}</h6>)}
                            <div className='separator'></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .3, duration: .5 }}
                            viewport={{ once: true }}
                        >
                            {aboutData.resume.map((el, idx) => <p key={idx}>{el}</p>)}
                        </motion.div>
                    </div>

                    <div className="d-none d-lg-block col-lg-3 profile-img">
                        <h2>About img</h2>
                    </div>
                </div>
            </article>
        </section>
    )
}