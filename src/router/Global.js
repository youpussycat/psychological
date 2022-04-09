
const SideBar = () => import("../components/Global/SideBar");
const Banner = () => import("../components/Global/Banner");
const Dialog = () => import("../components/Global/Dialog");
const TopLogo = () => import("../components/Global/TopLogo");
export const _global= [
    {
        path: '/Global/SideBar',
            name: 'SideBar',
        component: SideBar,
    },
    {//规定名称为HelloWorld的组件的component、path
        path: '/Global/TopLogo',
        name: 'TopLogo',
        component: TopLogo,
    },
    {
        path: '/Global/Dialog',
        name: 'Dialog',
        component: Dialog,
    },
    {
        path: '/Global/Banner',
        name: 'Banner',
        component: Banner,
    },
]
