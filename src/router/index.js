import { createRouter,createWebHashHistory} from "vue-router";
const Index = () => import("../components/Page/Index");
const Login = () => import("../components/RegisterPage/Login");
const Register = () => import("../components/RegisterPage/Register");
const HelloWorld = ()=> import("../components/HelloWorld");
let routes = [

	{
		path:'/',
		name:'Index',
		component: Index,
	},
	{
		path: "/Login",
		name: 'Login',
		component: Login,
	},
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

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})
