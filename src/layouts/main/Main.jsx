import CardContent from '@/layouts/card-content/Card.jsx'
import {SpaceScale} from '@/components/system-spaces/Space-scale.jsx'

export const Main = () =>{
    return( 
    <main className="p-5">
        <CardContent title='title h2' subtitle='Subtitle h3' content='Content text'>
            <SpaceScale/>
        </CardContent>
    </main> );
};

export default Main;