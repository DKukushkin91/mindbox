import {Fragment} from 'react';
import {GlobalStyles} from './styles/global-styles';
import {Routing} from '../pages';
import {withProviders} from './providers';

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />
            <Routing />
        </Fragment>
    );
};

export default withProviders(App);
