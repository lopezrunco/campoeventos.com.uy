import { portfolioData } from '../../data/portfolio'
import { Title } from '../Title'
import { Card } from './components/Card'

export const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <article className="container">
                <Title title='Portfolio' subtitle="Estos son los principales proyectos en los que hemos trabajado." />

                <div className="row">
                    <div className="col">

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">Todo</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-mograph-tab" data-bs-toggle="pill" data-bs-target="#pills-mograph" type="button" role="tab" aria-controls="pills-mograph" aria-selected="true">Transmisiones</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-js-tab" data-bs-toggle="pill" data-bs-target="#pills-js" type="button" role="tab" aria-controls="pills-js" aria-selected="false">Institucionales</button>
                            </li>
                        </ul>

                        <div className="tab-content" id="pills-tabContent">

                            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                                <div className="row">
                                    {portfolioData.map(el => (el.published)
                                        ? <Card key={el.id} element={el} />
                                        : null)}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-mograph" role="tabpanel" aria-labelledby="pills-mograph-tab">
                                <div className="row">
                                    {portfolioData.map(el => (el.category === 'motion-design' && el.published)
                                        ? <Card key={el.id} element={el} />
                                        : null)}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-graph-design" role="tabpanel" aria-labelledby="pills-graph-design-tab">
                                <div className="row">
                                    {portfolioData.map(el => (el.category === 'graphic-design' && el.published)
                                        ? <Card key={el.id} element={el} />
                                        : null)}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-js" role="tabpanel" aria-labelledby="pills-js-tab">
                                <div className="row">
                                    {portfolioData.map(el => (el.category === 'javascript' && el.published)
                                        ? <Card key={el.id} element={el} />
                                        : null)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
