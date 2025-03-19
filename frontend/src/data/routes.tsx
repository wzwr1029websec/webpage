import About from "../pages/About";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
import { 
    HomeOutlined,
    UserOutlined,
    MessageOutlined,
} from '@ant-design/icons';

export const PageRoutes = [
    {
        id: 1,
        path: "/",
        element: <Home />,
        key: 'home',
        name: 'home',
        icon: <HomeOutlined />,
        subMenuKey: '',
        childMenu: [],
        description: 'Home Page',
    },
    {
        id: 2,
        path: "/about",
        element: <About />,
        key: 'about',
        name: 'about',
        icon: <UserOutlined />,
        subMenuKey: '',
        childMenu: [],
        description: 'About'
    },
    {
        id: 3,
        path: "/chat",
        element: <Chat />,
        key: 'chat',
        name: 'chat',
        icon: <MessageOutlined />,
        subMenuKey: '',
        childMenu: [],
        description: 'Chat'
    }
];