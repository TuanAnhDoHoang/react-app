import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo } from 'src/redux/actions';
import { useSelector } from 'react-redux';
import { checkedTodoSelector } from 'src/redux/selector';
const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ index, name, prioriry, checked }) {
    // const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const toggleCheckbox = () => {
        // setChecked(!checked);

        const checkInfo = {
            index,
            selectState: !checked,
        };
        dispatch(checkTodo(checkInfo));
    };
    // console.log(Checked);
    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                {prioriry}
            </Tag>
        </Row>
    );
}
