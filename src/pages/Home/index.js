import { motion } from 'framer-motion'
import React from 'react'
import { homeMenuItems } from '../../data/home-menu'
import { Header } from '../../components/Header'
import { About } from '../../components/About'
import { Live } from '../../components/Live'
import { EventsList } from '../../components/EventsList'
import { Portfolio } from '../../components/Portfolio'
import { Collaborations } from '../../components/Collaborations'
import { ScrollTop } from '../../components/ScrollTop'
import { Footer } from '../../components/Footer'

export const Home = () => {
    return (
        <React.Fragment>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                : <Header menuItems={homeMenuItems} />
            </motion.div>
            <About />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Live />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <EventsList />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Portfolio />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Collaborations />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Footer />
            </motion.div>
            <ScrollTop scrollTo={'#about'} />
        </React.Fragment>
    )
}
