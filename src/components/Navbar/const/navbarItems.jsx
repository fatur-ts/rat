import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
export const mainNavbarItems=[
    {
        id: 0,
        icon: <DashboardIcon />,
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        id: 1,
        icon: <ShoppingCartIcon />,
        label: 'Orders',
        route: 'database',
    },
    {
        id: 2,
        icon: <PeopleIcon />,
        label: 'Customers',
        route: 'storage',
    },
    {
        id: 3,
        icon: <BarChartIcon />,
        label: 'Reports',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Functions',
        route: 'functions',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Machine learning',
        route: 'machine-learning',
    },
];

export const secondNavbarItems=[
    {
        id: 0,
        icon: <AssignmentIcon />,
        label: 'Current month',
        route: 'curmonth',
    },
    {
        id: 1,
        icon: <AssignmentIcon />,
        label: 'Last quarter',
        route: 'lastquarter',
    },
    {
        id: 2,
        icon: <AssignmentIcon />,
        label: 'Year-end sale',
        route: 'yearonsale',
    },
    
];