import { Avatar, Badge, Card, Typography } from "antd";
import { ChatProps } from "../interfaces/ChatProps";

const ChatCard = ({avatarSrc, name, isOnline, message} : ChatProps) => {
    return (
        <Card className="w-full h-fit flex flex-col">
            <div className="h-full flex flex-row items-center gap-5 pb-5">
                <Avatar size="large" src={avatarSrc} />
                <div className="flex flex-row items-center gap-2">
                    <Badge status={isOnline ? 'success' : 'error'} />
                    <p className="opacity-75">{name}</p>
                </div>
            </div>
            <Typography className="opacity-90">
                {message}
            </Typography>
        </Card>
    )
}

export default ChatCard;