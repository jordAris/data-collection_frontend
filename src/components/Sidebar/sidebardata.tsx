import { ArrowDownOnSquareStackIcon, ArrowRightOnRectangleIcon, BellAlertIcon, BookmarkIcon, ChartBarSquareIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon, PhoneIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/outline"

const sidebardata = [
    {
        title:"Home",
        path: "/",
        icon: <HomeIcon className="h-5 w-5"/>
    },
    {
        title:"User",
        path: "/User",
        icon: <UserIcon className="h-5 w-5"/>
    },
    {
        title:"Notifications",
        path: "/notification",
        icon: <BellAlertIcon className="h-5 w-5"/>
    },
    {
        title:"Data",
        path: "/data",
        icon: <TableCellsIcon className="h-5 w-5"/>,
        iconOpened: <ChevronRightIcon className="h-5 w-5" />,
        iconClosed: <ChevronLeftIcon className="h-5 w-5" />,

        subNav: [
            {
                title: "Data Overview",
                path: "/data/overview",
                icon: <TableCellsIcon className="h-5 w-5"/>
            },
            {
                title: "Data Collection",
                path: "/data/collection",
                icon: <ArrowDownOnSquareStackIcon className="h-5 w-5"/>,
            },
            {
                title: "Drafts",
                path: "/data/drafts",
                icon: <BookmarkIcon className="h-5 w-5"/>,
            }
        ]
    },
    {
        title:"Projects",
        path: "/projects",
        icon: <ChartBarSquareIcon className="h-5 w-5"/>,
    },
    {
        title:"Contact us",
        path: "/contact-us",
        icon: <PhoneIcon className="h-5 w-5"/>,
    },
    {
        title:"Logout",
        path: "/logout",
        icon: <ArrowRightOnRectangleIcon className="h-5 w-5"/>,
    }
]
export default sidebardata
