import {
    ChangeEvent, useEffect, useRef, MutableRefObject
} from 'react';
import {debounce} from '../../lib/helpers';
import {styles} from './styles.components';

const DEBOUNCE_DELAY = 300;

interface InputTextPropsInterface {
    placeholder: string;
    defaultValue: string;
    hasError: boolean;
    onFocus: () => void;
    onChange: (value: string) => void;
}

export default function InputText({
    placeholder,
    defaultValue,
    hasError,
    onFocus,
    onChange,
}: InputTextPropsInterface) {
    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

    const handleChangeInput = debounce((event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }, DEBOUNCE_DELAY);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = defaultValue;
        }
    }, [defaultValue]);

    return (
        <styles.Input
            $hasError={hasError}
            ref={inputRef}
            type="text"
            placeholder={hasError ? 'Пожалуйста, введите задачу' : placeholder}
            defaultValue={defaultValue}
            onFocus={onFocus}
            onChange={handleChangeInput}
        />
    );
}
