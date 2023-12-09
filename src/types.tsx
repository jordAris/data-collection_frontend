export type SideNavItem ={
    title: string,
    path: string,
    icon: JSX.Element,
    iconOpened?: JSX.Element,
    iconClosed?: JSX.Element,
    subNav?: SideNavItem[]
}