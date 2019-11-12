var express = require('express');
var router = express.Router();

router.get('/header', function(req, res, next) {
  let result = {
    "code" : 0,
    "data":	["高考","区块链","三生三世","崔永元","vue","小程序",
        "茶点微小说","萨沙讲史堂","夜幕下的地安门","擦亮你的眼",
        "理财","毕业","手帐","简书交友","spring","古风","故事",
        "暖寄归人","旅行","连载","教育","简书","生活","投稿","历史",
        "PHP","考研","docker","EOS","微信小程序","PPT","职场","大数据",
        "创业","书评","东凤","饱醉豚","雨落荒原","程序员","爬虫",
        "时间管理","kotlin","数据分析","阴阳合同","设计","红楼梦",
        "父亲节","女人和衣服","swift","高考作文"]
    }
  res.send(result);
});
router.get('/home', (req, res, next) => {
    let result = {
        "code" : 0,
        "data": {
            "articleList": [{
                "id": 1,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }, {
                "id": 2,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }, {
                "id": 3,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }, {
                "id": 5,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 6,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 7,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 8,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }],
            "writerList": [
                {
                    "avatar": "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
                    "name" : "董克平日记",
                    "desc" : "写了748.4k字 · 2.2k喜欢"
                },
                {
                    "avatar": "https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "name" : "无限猴子",
                    "desc" : "写了416.9k字 · 2.2k喜欢"
                },
                {
                    "avatar": "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "name" : "简书钻首席小管家",
                    "desc" : "写了197.1k字 · 151.4k喜欢"
                },
                {
                    "avatar": "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "name" : "卢璐说",
                    "desc" : "写了416.9k字 · 2.2k喜欢"
                },
                {
                    "avatar": "https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "name" : "三儿王屿",
                    "desc" : "写了197.1k字 · 151.4k喜欢"
                },
            ]
        
        }
    };
    res.send(result);
})
router.get('/articles', (req, res, next) => {
    let result = {
        "code" : 0,
        "data": {
            "articleList": [{
                "id": 1,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }, {
                "id": 2,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }, {
                "id": 3,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }, {
                "id": 5,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 6,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 7,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            },{
                "id": 8,
                "title": "消除负能量的小句子，幽默风趣，笑一个吧",
                "abstract": "1、如果帅是一种罪，那我已经罪恶滔天；如果酷是一种错，那我已经一错再错；如果聪明也要受刑罚，那我岂不是要遭千刀万剐？ 2、你干过最愚蠢的事情是什...",
                "imgUrl": "https://upload-images.jianshu.io/upload_images/13932887-7e6768bb4aa28638.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            }],
        }
    };
    res.send(result);
})

module.exports = router;
