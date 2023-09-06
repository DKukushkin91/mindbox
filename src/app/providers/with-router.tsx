import {ReactNode, ComponentType, FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

export interface WithRouterPropsInterface {
    children: ReactNode;
}

export const withRouter = <P extends object>(Component: ComponentType<P>): FC<P> => {
    return function withRouterComponent(props: P) {
        return (
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        );
    };
};
