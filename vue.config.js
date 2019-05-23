module.exports = {
    //修改src目录为examples目录
    pages: {
        index: {
            entry: 'examples/main.js',//page的入口
            template: 'public/index.html',//模板来源
            filename: 'index.html'//输出文件名
        }
    },
    //强制内联CSS
    css: { extract: false }
}