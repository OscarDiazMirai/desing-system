import { useContext } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DataStylesContext from '@/context/contex.js'
import { SpaceScale } from '@/components/system-spaces/Space-scale.jsx'
import Section from '@/layouts/section/Section.jsx';
import useGetVariables from '@/hooks/useGetVariables.js';
import Button from '@/components/buttons/button.jsx';
import { splitVariableCss } from '@/utils/splitVariable.js'
import Card from '@/components/card/Card.jsx'

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
                    <AccordionDetails className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
                        {/* Loop through the colours variables array */}
                        {coloursVariables.map((item) => {
                            // Split colours variables in property and value
                            const { propertyName, value } = splitVariableCss(item);
                            // Return each component with property and value
                            return (
                                <Card classname={`card elementor_kit_${elementorKitId} p-[16px] border border-[color:var(--primary)] rounded-[8px]`}>
                                    <div className="wrapper_button flex items-center justify-between gap-[16px]">
                                        <Button key={propertyName} style={propertyName ? { backgroundColor: `var(${propertyName})` } : {}} className="button button_color w-[40px] h-[40px] rounded-[50px]">
                                        </Button>
                                        <div className="inner_content text-[14px] w-[100px]">
                                            <span>{propertyName}</span>
                                        </div>
                                        <Button key={propertyName} className="button button_value text-[16px] w-[auto]">
                                            <strong>{value}</strong>
                                        </Button>
                                    </div>
                                </Card>
                            )

                        })}
                    </AccordionDetails>
                </Accordion>
            </Section>
        </main>);
};

export default Main;