import {elementorKit} from '@/core/core.js'

const CardContent = ({title, subtitle, content}) => {
    console.log('[REACT]', elementorKit())

    return (
        <details>
            <summary>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </summary>
            <div className="card_content">
                <p>{content}</p>
            </div>
        </details>
    )
};

export default CardContent;