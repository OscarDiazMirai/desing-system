import { useContext } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DataStylesContext from '@/context/contex.js'
import { SpaceScale } from '@/components/system-spaces/Space-scale.jsx'
import Button from '@/components/buttons/button.jsx';
import Section from '@/layouts/section/Section.jsx';
import Card from '@/components/card/Card.jsx'
import useGetVariables from '@/hooks/useGetVariables.js';
import { splitVariableCss } from '@/utils/splitVariable.js'

const Main = () => {
    // Use data from service worker context
    const context = useContext(DataStylesContext);
    const { elementorKit, elementorKitId, engineCSS, styleCSS } = context;

    // Get filtered list of variables from elementor kit styles
    const colours = useGetVariables(`elementor-kit-${elementorKitId}`, elementorKit);
    const { coloursVariables } = colours;

    return (
        <main className="p-5">
            <Section sectionType='elementor_kit_css'>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`elementor_kit_${elementorKitId}`}
                        id={`elementor_kit_${elementorKitId}`}
                    >
                        <Typography component="span">Sistema de color</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
                        {/* Loop through the colours variables array */}
                        {coloursVariables.map((item) => {
                            // Split colours variables in property and value
                            const { propertyName, value } = splitVariableCss(item);

                            // Return each component with property and value
                            return (
                                <Card key={`${propertyName}_${value}`} dataId={`${propertyName}_${value}`} classname={`card elementor_kit_${elementorKitId} p-[16px] border border-[color:var(--primary)] rounded-[8px] content-center`} item={item} elementorKitId={elementorKitId} />
                            )

                        })}
                    </AccordionDetails>
                </Accordion>
            </Section>
        </main>);
};

export default Main;