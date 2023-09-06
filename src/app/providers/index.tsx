import {ComponentType, FC} from 'react';
import {withRouter} from './with-router';
import {withStore} from './with-store';

const providers = [withRouter, withStore];

export const withProviders = <P extends object>(Component: ComponentType<P>): FC<P> => {
    const WrappedComponent = providers.reduce((Wrapped, provider) => {
        return provider(Wrapped);
    }, Component);

    return function withProviderComponent(props: P) {
        return (
            <WrappedComponent {...props} />
        );
    };
};
