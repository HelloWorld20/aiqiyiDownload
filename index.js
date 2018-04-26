const fs = require('fs');
const download = require('download');
const config = require('./config')
// download('http://24haowan.oss-cn-shenzhen.aliyuncs.com/video/20180424/27638BAAAF020-C16F-4A34-85FC-0976981C6F1C.jpeg').then(data => {
//     fs.writeFileSync('dist/foo.jpg', data);
// });

Promise.all(config.data.map(x => {
    download(x.activity_img).then(data => {
        fs.writeFileSync(`dist/${x.name}.${getSuffix(x.activity_img)}`, data)
    })
}))

function getSuffix(name) {
    let arr = name.split('.');
    return arr.pop()
}
