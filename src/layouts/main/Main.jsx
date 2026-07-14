import { useContext } from 'react';
import CardContent from '@/layouts/card-content/Card.jsx'
import { SpaceScale } from '@/components/system-spaces/Space-scale.jsx'
// import DataStylesContext from '@/context/contex.js'

const Main = () => {
    // const context = useContext(DataStylesContext);
    // console.log('context from Main',context)
    return (
        <main className="p-5">
            <CardContent title='title h2' subtitle='Subtitle h3' content='Content text'>
                <SpaceScale />
            </CardContent>
            <div className="content_test flex justify-around">
                <section className="content_elementor_kit">
                    <div className="content">
                    <h1 class="heading text-3xl font-medium self-end">Elementor kit</h1>
                    <button class="elementor-button">Elementor kit</button>
                    <a class="elementor-button">Elementor kit</a>
                    </div>
                </section>
                <section className="content_style_css">
                    <div className="content">
                    <h1 class="heading text-3xl font-medium self-end">Style css</h1>
                    <button class="elementor-button">Style css</button>
                    </div>
                </section>
                <section className="content_engine_css">
                    <div className="content">
                    <h1 class="heading text-3xl font-medium self-end">Engine css</h1>
                    <button class="elementor-button">Engine css</button>                        
                    </div>
                </section>
            </div>
        </main>);
};

export default Main;