import ListIcon from '@mui/icons-material/List';

export function Menus() {
    let userRole = localStorage.getItem("userRole")
    let menuArr = [
        {
            label: 'Dashboard',
            url: 'dashboard',
            isAuthenticated: true,
            icon: <ListIcon />
        },
        {
            label: 'Admin List',
            url: 'admin',
            isAuthenticated: userRole === "admin",
            icon: <ListIcon />
        },
        {
            label: 'User List',
            url: 'user-list',
            isAuthenticated: userRole === "admin" || userRole === "user",
            icon: <ListIcon />
        },
        {
            label: 'Organization List',
            url: 'organization-list',
            isAuthenticated: userRole === "admin" || userRole === "organization",
            icon: <ListIcon />
        },
        {
            label: 'User Detail',
            url: 'user-detail',
            isAuthenticated: userRole === "admin" || userRole === "user",
            icon: <ListIcon />
        },
        {
            label:  'Organization Detail', 
            url: 'organization-detail',
            isAuthenticated: userRole === "admin" || userRole === "organization",
            icon: <ListIcon />
        }
    ]
    return menuArr
}