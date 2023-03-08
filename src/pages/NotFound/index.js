import { motion } from 'framer-motion'
import React from 'react'
import { NotFoundMessage } from '../../components/NotFoundMessage'

export const NotFound = () => {
    return (
        <React.Fragment>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <section>
                    <NotFoundMessage />
                </section>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
            </motion.div>
        </React.Fragment>
    )
}
