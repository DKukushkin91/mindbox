import {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../../shared/lib/hooks/useAppDispatch';
import InputText from '../../../shared/ui/input-text';
import {styles} from './styles.components';
import {taskModel} from '../../../entities/task';

export default function AddTask() {
    const dispatch = useAppDispatch();

    const [taskValue, setTaskValue] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleFocusInput = () => {
        if (hasError) {
            setHasError(false);
        }
    };

    const handleChangeInput = (value: string) => {
        setTaskValue(value);
    };

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const id = new Date().getTime();

        if (taskValue.trim().length > 0) {
            dispatch(taskModel.addTaskToList({
                id,
                value: taskValue,
                isCompleted: false,
            }));

            setTaskValue('');
        } else {
            setTaskValue('');
            setHasError(true);
        }
    };

    return (
        <styles.Form onSubmit={handleSubmitForm}>
            <InputText
                defaultValue={taskValue}
                placeholder="Что нужно сделать?"
                hasError={hasError}
                onFocus={handleFocusInput}
                onChange={handleChangeInput}
            />
            <styles.Button $hasError={hasError} />
        </styles.Form>
    );
}
