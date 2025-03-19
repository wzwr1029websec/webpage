import { Button } from "antd";
import { useState } from "react";

const Home = () => {

    const [count, setCount] = useState(0);

    const onClickBtn = () => setCount((count) => count + 1);

    return (
        <div>
            <p className="text-lg">參觀人數: {count}</p>
            <Button onClick={onClickBtn}>Visit!</Button>
        </div>
    )
};

export default Home;