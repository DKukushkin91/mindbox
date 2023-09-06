import {taskModel, TaskRow} from '../../../entities/task';
import {useAppSelector} from '../../../shared/lib/hooks/useAppSelector';
import {ToggleTask} from '../../../features/toggle-task';
import {AddTask} from '../../../features/add-task';
import {styles} from './styles.components';

export default function ToDo() {
    const tasks = useAppSelector(taskModel.getSortedTasks);

    return (
        <styles.ToDo>
            <AddTask />

            {Object.keys(tasks).map((key, index) => (
                <TaskRow
                    key={tasks[key].id}
                    index={index}
                >
                    <ToggleTask
                        id={tasks[key].id}
                        tasks={tasks}
                        label={tasks[key].value}
                    />
                </TaskRow>
            ))}
        </styles.ToDo>
    );
}
