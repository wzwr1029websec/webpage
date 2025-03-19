import { Button, Input, Space } from "antd";
import ChatCard from "../components/ChatCard";
import { useState } from "react";
import { 
    SendOutlined
} from '@ant-design/icons';
import { ChatProps } from "../interfaces/ChatProps";


const fakeData : ChatProps[] = [
    {
        avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg",
        name: "wzwr",
        isOnline: true,
        message: "hello",
    },
]

const Chat = () => {

    const [input, setInput] = useState('');

    const handleInput = (e: any) => {
        if(e.target.value.length > 50){
            return;
        } else {
            setInput(e.target.value);
        }
    }

    const handleCreateMessage = () => {
        if(input === '') return;
        fakeData.push({
            avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
            name: "anonymous",
            isOnline: true,
            message: input,
        })
        setInput('');
    }

    return (
        <div className="w-full h-full flex flex-col justify-between gap-10">
            <div className="flex flex-col items-center gap-4">
                {fakeData.map((data, index) => {
                    return <ChatCard key={index} {...data} />
                })}
            </div>
            <Space.Compact>
                <Input 
                    value={input}
                    onChange={handleInput}
                    placeholder="type your message here"
                    count={{
                        show: true,
                        max: 50,
                    }}
                />
                <Button type="primary" icon={<SendOutlined />} onClick={handleCreateMessage}></Button>
            </Space.Compact>
        </div>
    )
};

export default Chat;