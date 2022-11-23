import { Table as AntTable } from 'antd';
import { TableProps as AntProps } from 'antd';
import { ColumnsType } from 'antd/es/table';

type ITableProps = {} & AntProps<any>;

type DataType = {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
};

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Table: React.FC<ITableProps> = ({ ...props }) => {
    return <AntTable columns={columns} dataSource={data} {...props} />;
};

export default Table;
