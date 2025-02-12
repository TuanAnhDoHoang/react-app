import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { searchPattern, checkCompleted } from 'src/redux/actions';
const { Search } = Input;

export default function Filters() {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const newPattern = {
            pattern: e.target.value,
        };
        dispatch(searchPattern(newPattern));
    };
    const handleCompleted = (value) => {
        const newStatus = {
            status: value,
        };
        dispatch(checkCompleted(newStatus));
    };
    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder="input search text"
                    // value={store.getState().Filter.search}
                    onChange={(e) => handleSearch(e)}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group onChange={(e) => handleCompleted(e.target.value)}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter By Priority
                </Typography.Paragraph>
                <Select mode="multiple" allowClear placeholder="Please select" style={{ width: '100%' }}>
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
            </Col>
        </Row>
    );
}
