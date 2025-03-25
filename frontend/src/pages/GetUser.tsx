import { useEffect, useState } from "react"
import { user } from "../api/user";
import { Table, TableProps, message } from "antd";
import { UserProps } from "../interfaces/UserProps";

const columns: TableProps<UserProps>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }
]

const ViewUser = () => {
    const [users, setUsers] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Successfully fetch users',
        });
      };
    
      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'There might be error on backend :( Please contact me!',
        });
      };
    

    useEffect(() => {
        const fetchData = async () => {
            const {status, data} = await user.getAll();
            if (status !== 200){
                error();
            } else {
                success();
                setUsers(data);
            }
        }

        fetchData();
    }, [])

    return (
        <>
        {contextHolder}
        <div className="w-full h-full flex flex-col justify-between">
            <Table<UserProps> columns={columns} dataSource={users} />
        </div>
        </>
    )
}

export default ViewUser