import { Avatar, Button, Input, Space, message } from 'antd'
import { useState } from 'react'
import { 
    SendOutlined
} from '@ant-design/icons';
import { user } from '../api/user';

const CreateUser = () => {
    const [input, setInput] = useState('')
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Successfully create user!',
        });
    };
    
    const error = (message: string) => {
        messageApi.open({
            type: 'error',
            content: message,
        });
    };

    const handleInput = (e: any) => {
        if(e.target.value.length > 50){
            return;
        } else {
            setInput(e.target.value);
        }
    }

    const handleCreateUser = async () => {
        if(input.trim() === '') {
            error("Username cannot be empty!");
            return;
        }

        const {status, data} = await user.createUser(input.trim());
        if (status !== 201) {
            if (status !== 500){
                error(data);
            } else {
                error("There might be error on backend :( Please contact me!");
            }
        } else {
            success();
            setInput('');
        }
    }

    return (
        <>
        {contextHolder}
        <div className="w-full h-full flex flex-col items-center pt-10 pb-10 gap-18">
            <Avatar size={256} src="https://avatars.githubusercontent.com/u/65525835?s=400&u=9a7083d0f14ada543907d475fd882a5c7f5bb415&v=4" />
            <Space.Compact className='w-full'>
                <Input     
                    value={input}
                    onChange={handleInput}
                    placeholder='Enter username here'
                    count={{
                        show:true,
                        max: 50,
                    }}
                />
                <Button type="primary" icon={<SendOutlined />} onClick={handleCreateUser}></Button>
            </Space.Compact>
        </div>
        </>
    )
}

export default CreateUser