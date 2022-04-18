import { createRouter,createWebHashHistory} from "vue-router";
//const Index = () => import("../components/Page/Index");
const Login = () => import("../components/RegisterPage/Login");
const Register = () => import("../components/RegisterPage/Register");
const HelloWorld = ()=> import("../components/HelloWorld");
const Test = () => import("../components/Test");
let routes = [
	{
		path:'/Test',
		name:'Test',
		component: Test,
	},
	{
		path:'/',
		name:'Login',
		component: Login,
	},
	/*
	{
		path: "/Login",
		name: 'Login',
		component: Login,
	},
	*/
	{
		name: "Register",
		path: '/Register',
		component:Register,
	},
	{//规定名称为HelloWorld的组件的component、path
		path: '/HelloWorld',
		name: 'HelloWorld',
		component: HelloWorld,
	},
]
import {_global} from "./Global";
routes=routes.concat(_global);
import {_carousels} from "./Carousels";
routes=routes.concat(_carousels);
import {_homePage} from "./HomePage/HomePage";
routes=routes.concat(_homePage);
import {__systemSetting} from "@/router/BackOrganization/SystemSetting";
routes=routes.concat(__systemSetting);
import {__backOrganization} from "@/router/BackOrganization/BackOrganization";
routes=routes.concat(__backOrganization);
import {__global} from "@/router/BackOrganization/Global";
routes = routes.concat(__global);
import {__websiteManagement} from "@/router/BackOrganization/WebsiteManagement";
routes = routes.concat(__websiteManagement);
import {__AccountManagement} from "@/router/BackOrganization/AccountManagement";
routes = routes.concat(__AccountManagement);
export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})
