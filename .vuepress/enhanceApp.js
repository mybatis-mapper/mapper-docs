export default ({ router }) => {
    /**
     * 路由切换事件处理
     *
     * 参考: https://www.sofineday.com/vuepress-baidu-analytics.html#%E6%B7%BB%E5%8A%A0%E7%99%BE%E5%BA%A6%E7%BB%9F%E8%AE%A1
     */
    router.beforeEach((to, from, next) => {
        console.log("切换路由", to.fullPath, from.fullPath);

        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
                console.log("上报百度统计", to.fullPath);
            }
        }

        // continue
        next();
    });
};