const PictureWall = () => import("../components/Global/PictureWall")
const SideBar = () => import("../components/Global/SideBar");
const Banner = () => import("../components/Global/Banner");
const Dialog = () => import("../components/Global/Dialog");
const PageHeader = () => import("../components/Global/PageHeader");
let PATH="/Global"
export const _global= [
    {
        path: PATH+'/SideBar',
            name: 'SideBar',
        component: SideBar,
    },
    {
        path: PATH+'/PictureWall',
        name: 'PictureWall',
        component: PictureWall,
    },
    {//规定名称为HelloWorld的组件的component、path
        path: PATH+'/PageHeader',
        name: 'PageHeader',
        component: PageHeader,
    },
    {
        path: PATH+'/Dialog',
        name: 'Dialog',
        component: Dialog,
    },
    {
        path: PATH+'/Banner',
        name: 'Banner',
        component: Banner,
    },
]
