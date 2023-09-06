import {ToDo} from '../../widgets/to-do';
import {styles} from './styles.components';

export default function ToDoPage() {
    return (
        <styles.Wrapper>
            <styles.Title>todos</styles.Title>

            <ToDo />
        </styles.Wrapper>
    );
}
