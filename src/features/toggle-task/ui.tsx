import TaskInterface from '../../entities/task/interfaces/task';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import InputCheckbox from '../../shared/ui/input-checkbox';
import {taskModel} from '../../entities/task';

interface ToggleTaskPropsInterface {
    tasks: {
        [key: string]: TaskInterface
    }
    id: number;
    label: string;
}

export default function ToggleTask({
    id,
    tasks,
    label,
}: ToggleTaskPropsInterface) {
    const dispatch = useAppDispatch();

    const handleToggleTask = (isChecked: boolean) => {
        dispatch(taskModel.toggleTask({id, isCompleted: isChecked}));
    };

    return (
        <InputCheckbox
            label={label}
            isDefaultChecked={tasks[id]?.isCompleted ?? false}
            onChange={handleToggleTask}
        />
    );
}
