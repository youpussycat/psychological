//写组件名称，剩余的路由会自动生成,前提是都在SystemSetting且没有创建文件夹
//此处为路由生成的样式，用于跳转时粘贴
// /BackOrganization/你的组件名称

const ComponentAttribute = [
	"BackLogin"
]
const RouterPath = "/BackOrganization/"

export const __backOrganization = [];//用于暴露组件
for (const i of ComponentAttribute)//遍历上面的组件数组，用于生成暴露组件所需要的属性
	__backOrganization.push({
		path: RouterPath + i,
		name: i,
		//import函数在webPack中无法只使用变量，只能字面量与常量结合使用或是只是用字面量,似乎插值语法也用不了.const是常变量
		component: () => import("../../components/BackOrganization/"+i)
	});