import { ArrowDownOnSquareStackIcon, ArrowRightOnRectangleIcon, BellAlertIcon, BookmarkIcon, ChartBarSquareIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon, PhoneIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/outline"

const sidebardata = [
    {
        title:"Home",
        path: "/Home",
        icon: <HomeIcon className="h-2 w-2"/>
    },
    {
        title:"User",
        path: "/User",
        icon: <UserIcon className="h-2 w-2"/>
    },
    {
        title:"Notifications",
        path: "/notification",
        icon: <BellAlertIcon className="h-2 w-2"/>
    },
    {
        title:"Data",
        path: "/data",
        icon: <TableCellsIcon className="h-2 w-2"/>,
        iconOpened: <ChevronRightIcon className="h-2 w-2" />,
        iconClosed: <ChevronLeftIcon className="h-2 w-2" />,

        subNav: [
            {
                title: "Data Overview",
                path: "/data/overview",
                icon: <TableCellsIcon className="h-2 w-2"/>
            },
            {
                title: "Data Collection",
                path: "/data/collection",
                icon: <ArrowDownOnSquareStackIcon className="h-2 w-2"/>,
            },
            {
                title: "Drafts",
                path: "/data/drafts",
                icon: <BookmarkIcon className="h-2 w-2"/>,
            }
        ]
    },
    {
        title:"Projects",
        path: "/projects",
        icon: <ChartBarSquareIcon className="h-2 w-2"/>,
    },
    {
        title:"Contact us",
        path: "/contact-us",
        icon: <PhoneIcon className="h-2 w-2"/>,
    },
    {
        title:"Logout",
        path: "/logout",
        icon: <ArrowRightOnRectangleIcon className="h-2 w-2"/>,
    }
]
export default sidebardata
