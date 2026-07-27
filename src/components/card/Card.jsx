import Button from '@/components/buttons/Button.jsx'
import useCopyClipboard from '@/hooks/useCopyClipboard.js';
import { splitVariableCss } from '@/utils/splitVariable.js'

const Card = ({ ...props }) => {

    // Split colours variables in property and value
    const { propertyName, value } = splitVariableCss(props.item);
    // Hook copy to clipboard
    const { displayText, copy } = useCopyClipboard();

    return (
        <div className={props.classname} data-id={props.dataId}>
            <div className="wrapper_button flex items-center justify-between gap-[16px]">
                <Button style={propertyName ? { backgroundColor: `var(${propertyName})` } : {}} className="button button_color w-[40px] h-[40px] rounded-[50px] cursor-pointer to_copy shadow-[0_0_8px_0_var(--corporative-color)]">
                </Button>
                <div className="inner_content text-[14px] w-[100px]">
                    <span>{propertyName}</span>
                </div>
                <Button onClick={(e) => copy(e)} data-id={`${propertyName}_${value}`} className="button button_value text-[16px] w-[auto] border border-[color:var(--secondary)] cursor-pointer font-bold p-[8px] rounded-[4px]">{displayText ?? value}</Button>
            </div>

        </div>
    );
};
export default Card;