//写组件名称，剩余的路由会自动生成,前提是都在SystemSetting且没有创建文件夹
//此处为路由生成的样式，用于跳转时粘贴
// /BackOrganization/WebsiteManagement/你的组件名称
// /BackOrganization/WebsiteManagement/SmallComponents/你的组件名称


//你的组件数组以及路径
const ComponentAttribute = [
    "ApplicationGuideManagement",
    "TrainingDocumentaryManagement",
    "NoticeAndAnnouncementManagement",
    "DataDownloadManagement",
]
const SmallComponent = [
    "ApplicationGuideTableAdd",
    "FamousTeacherStyleTableAdd",
    "TrainingDocumentaryTableAdd",
    "NoticeAndAnnouncementTableAdd",
    "DataDownloadTableAdd",
]
const RouterPath = "/BackOrganization/WebsiteManagement/"
const SmallRouterPath = "/BackOrganization/WebsiteManagement/SmallComponents/";

export const __websiteManagement = [];//用于暴露组件
for (const i of ComponentAttribute)//遍历上面的组件数组，用于生成暴露组件所需要的属性
    __websiteManagement.push({
        path: RouterPath + i,
        name: i,
        //import函数在webPack中无法只使用变量，只能字面量与常量结合使用或是只是用字面量,似乎插值语法也用不了.const是常变量
        component: () => import("../../components/BackOrganization/WebsiteManagement/"+i)
    });
for (const i of SmallComponent)//遍历上面的组件数组，用于生成暴露组件所需要的属性
    __websiteManagement.push({
        path: SmallRouterPath + i,
        name: i,
        //import函数在webPack中无法只使用变量，只能字面量与常量结合使用或是只是用字面量,似乎插值语法也用不了.const是常变量
        component: () => import("../../components/BackOrganization/WebsiteManagement/SmallComponents/"+i)
    });


