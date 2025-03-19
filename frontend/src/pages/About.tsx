import { Avatar } from "antd";
import { Descriptions } from 'antd';
import { DescriptionsData } from "../data/descriptionData";

const About = () => {
    return (
        <div className="w-full h-full flex flex-col items-center pt-10 pb-10">
            <Avatar size={256} src="https://avatars.githubusercontent.com/u/65525835?s=400&u=9a7083d0f14ada543907d475fd882a5c7f5bb415&v=4" />
            <Descriptions title="About Me" bordered items={DescriptionsData} />
        </div>
    )
};

export default About;