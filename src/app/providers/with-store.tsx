import {ComponentType, FC} from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';

export const withStore = <P extends object>(Component: ComponentType<P>): FC<P> => {
    return function withStoreComponent(props: P) {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        );
    };
};
