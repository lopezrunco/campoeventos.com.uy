import { motion } from 'framer-motion'
import React from 'react'
import { homeMenuItems } from '../../data/home-menu'
import { Top } from '../../components/Top'
import { Header } from '../../components/Header'
import { Intro } from '../../components/Intro'
import { Live } from '../../components/Live'
import { Events } from '../../components/Events'
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
                <Top />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                <Header menuItems={homeMenuItems} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                <Intro />
            </motion.div>
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
                <Events />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Footer />
            </motion.div>
            <ScrollTop scrollTo={'#inicio'} />
        </React.Fragment>
    )
}
