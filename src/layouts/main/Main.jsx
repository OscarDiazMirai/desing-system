import { useContext } from 'react';
import DataStylesContext from '@/context/contex.js'
import Accordion from '@/layouts/accordion/Accordion.jsx'
import { SpaceScale } from '@/components/system-spaces/Space-scale.jsx'
import Section from '@/layouts/section/Section.jsx';
import useGetVariables from '@/hooks/useGetVariables.js';
import Button from '@/components/buttons/button.jsx';
import {splitVariableCss} from '@/utils/splitVariable.js'

const Main = () => {
    // Use data from service worker context
    const context = useContext(DataStylesContext);
    const { elementorKit, elementorKitId, engineCSS, styleCSS } = context;

    // Get filtered list of variables from elementor kit styles
    const colours = useGetVariables(`elementor-kit-${elementorKitId}`, elementorKit);
    const {coloursVariables} = colours;

    // Split colours variables in property and value
    coloursVariables.map(item=>{
        const splitData = splitVariableCss(item)
        console.log('splitData', splitData)
    })
    
    
    return (
        <main className="p-5">
            <Section sectionType='elementor_kit'>
                <Accordion title='Sistema de color' subtitle='Paleta'>
                    {/* Loop through the colours variables array */}
                    {coloursVariables.map((item, index)=>(
                    
                        <Button key={index} color={item}/>
                    ))}
                </Accordion>
            </Section>

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