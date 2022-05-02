import pages from "../pages"

const routes = [
    {
        path: "/",
        Element: pages.Home,
        Layout: pages.MainLayout,
        reverse: false
    },
    {
        path: "/login",
        Element: pages.Login,
        Layout: pages.MainLayout,
        reverse: true
    },
    {
        path: "*",
        Element: pages.NotFound,
        Layout: pages.MainLayout
    },
]

export default routes