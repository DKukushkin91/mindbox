import {useState, ChangeEvent} from 'react';
import {styles} from './styles.components';

interface InputCheckboxPropsInterface {
    label: string;
    isDefaultChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

export default function InputCheckbox({
    label,
    isDefaultChecked,
    onChange,
}: InputCheckboxPropsInterface) {
    const [isChecked, setIsChecked] = useState(isDefaultChecked);

    const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        onChange(event.target.checked);
    };

    return (
        <styles.Label>
            <styles.Input
                type="checkbox"
                defaultChecked={isChecked}
                onChange={handleChangeCheckbox}
            />
            <styles.TextWrapper>
                <styles.Text>
                    {label}
                    <styles.TextDecoration $isChecked={isChecked} />
                </styles.Text>
            </styles.TextWrapper>
        </styles.Label>
    );
}
