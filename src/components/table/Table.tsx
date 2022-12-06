import { Table as AntTable } from 'antd';
import { TableProps as AntProps } from 'antd';
import useApi from '../../shared/lib/hooks/useApi';
import { columns } from './columns';

type ITableProps = {} & AntProps<any>;

export type DataType = {
    key: string;
    name: string;
    email: string;
    address: string;
};

const Table: React.FC<ITableProps> = ({ ...props }) => {
    const { data, loading } = useApi('https://jsonplaceholder.typicode.com/users');
    console.log('data from ', data);

    const modifiedData = data?.map((el: any) => {
        return {
            key: el.id.toString(),
            name: el.name,
            email: el.email,
            address: el.address?.street,
        };
    });

    return <AntTable columns={columns} dataSource={modifiedData} {...props} />;
};

export default Table;
