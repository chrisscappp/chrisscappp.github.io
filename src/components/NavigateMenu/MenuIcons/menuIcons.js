import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const menuIcons = [
    {
        title: "Мои курсы",
        icon: <SchoolIcon />,
        path: "/profile"
    },
    {
        title: "Расписание",
        icon: <MenuBookIcon />,
        path: "/schedule"
    },
    {
        title: "Тесты",
        icon: <QuizIcon />,
        path: "/tests"
    },
    {
        title: "Поддержка",
        icon: <SupportAgentIcon />,
        path: "/support"
    },
]