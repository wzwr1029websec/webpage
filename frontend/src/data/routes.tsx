import About from "../pages/About";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
import { 
    HomeOutlined,
    UserOutlined,
    MessageOutlined,
    UserAddOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';
import ViewUser from "../pages/ViewUser";
import CreateUser from "../pages/CreateUser";

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
    },
    {
        id: 4,
        path: "/user",
        element: <ViewUser />,
        key: 'user',
        name: 'user',
        icon: <DatabaseOutlined />,
        subMenuKey: '',
        childMenu: [],
        description: 'User'
    },
    {
        id: 5,
        path: "/user/create",
        element: <CreateUser />,
        key: 'create',
        name: 'create',
        icon: <UserAddOutlined />,
        subMenuKey: '',
        childMenu: [],
        description: 'Create User'
    }
];