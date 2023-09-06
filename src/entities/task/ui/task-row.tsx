import {ReactNode} from 'react';
import {styles} from './styles.components';

interface TaskRowPropsInterface {
    index: number;
    children: ReactNode;
}

export default function TaskRow({children, index}: TaskRowPropsInterface) {
    return (
        <styles.Wrapper $hasBorderTop={index === 0}>
            {children}
        </styles.Wrapper>
    );
}
