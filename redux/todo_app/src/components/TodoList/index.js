import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList } from 'src/redux/actions';
import { useRef, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { todoListSelector } from 'src/redux/selector';

export default function TodoList() {
    const ref = useRef();
    const [nameAdd, setNameAdd] = useState('');
    const [piorityAdd, setPiorityAdd] = useState('Medium');
    const dispatch = useDispatch();
    const todoList = useSelector(todoListSelector);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };
    const handleInput = (e) => {
        setNameAdd(e.target.value);
    };
    const handlePiorityInput = (value) => {
        setPiorityAdd(value);
    };
    const handleAdd = () => {
        if (nameAdd !== '') {
            const newTodo = {
                id: uuidV4(),
                name: nameAdd,
                piority: piorityAdd,
                selected: false,
            };
            dispatch(addTodoList(newTodo));
            setNameAdd('');
            ref.current.focus();
        }
    };
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo, index) => (
                    <Todo
                        key={todo.id}
                        index={index}
                        name={todo.name}
                        prioriry={todo.piority}
                        checked={todo.selected}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }} compact="true">
                    <Input
                        ref={ref}
                        value={nameAdd}
                        onKeyDown={(e) => handleKeyDown(e)}
                        onChange={(e) => handleInput(e)}
                    />
                    <Select
                        defaultValue="Medium"
                        value={piorityAdd}
                        onKeyDown={(e) => handleKeyDown(e, 0)}
                        onChange={(value) => handlePiorityInput(value)}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}
