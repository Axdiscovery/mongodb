const foodoperation = require("./operation/foodoperation");

let pro = new foodoperation();
let list =[{"title":"峨眉印象成都火锅","jl":"500m","desc":"高新软件园2-3人餐，包间免费","price":31,"dis":"6.7折","pic":"img/n-1.jpg","qal":2},
    {"title":"汉巴味德自助餐厅","jl":"6.7km","desc":"[南大学城]单人全天自助餐","price":20,"dis":"6.7折","pic":"img/n-2.jpg","qal":1},{"title":"玩味音乐海鲜自助火锅","jl":"<500m","desc":"[2店通用]4人铁锅炖休闲餐","dis":"6.7折","price":45,"pic":"img/n-3.jpg","qal":1},{"title":"江城小馆陕南妈妈菜","jl":"500m","desc":"[2店通用]4人铁锅炖休闲餐","dis":"6.7折","price":60,"pic":"img/n-4.jpg","qal":1},{"title":"保尔森国际美食汇","jl":"1.4km","desc":"[科技路西口]精品2-3人餐，包间免费","price":35,"dis":"6.7折","pic":"img/n-5.jpg","qal":1},{"title":"国秀新苑（曲江新区店）","jl":"2.8km","desc":"[徐家庄]自助餐","price":80,"dis":"6.7折","pic":"img/n-6.jpg","qal":1},{"title":"百富烤霸（交大店）","jl":"4.2km","desc":"[劳动南路]雷神3：正在热映","price":100,"dis":"6.7折","pic":"img/n-7.jpg","qal":1},{"title":"享遇自助餐厅","jl":"<500m","desc":"[2店通用]4人铁锅炖休闲餐","price":50,"dis":"6.7折","pic":"img/n-8.jpg","qal":1},{"title":"潮十三潮汕砂锅粥","price":5,"jl":"1.6km","desc":"[科技路西口]纸包鱼2-3人餐","dis":"6.7折","pic":"img/n-9.jpg","qal":1},{"pic":"img/li1.png","title":"秘制重庆纸包鱼","jl":"<500m","desc":"高新软件园2-3人餐，包间免费","price":78,"dis":"6.7折","qal":1},{"pic":"img/li2.png","title":"庆聚自助涮烤","jl":"6.7km","desc":"[南大学城]单人全天自助餐","price":3,"dis":"新客减5","qal":1},{"pic":"img/li3.png","title":"鱼厂","jl":"2.0km","desc":"[科技路西口]100元代金券一张","price":4,"dis":"4.9折","qal":1},{"pic":"img/li4.png","title":"小马哥重庆纸包鱼","jl":"1.4km","desc":"[科技路西口]精品2-3人餐，包间免费","price":6,"dis":"5.3折","qal":1},{"pic":"img/li5.png","title":"串串龙自助火锅","jl":"1.6km","desc":"[枫林绿洲]火锅","price":5,"dis":"5.3折","qal":1},{"pic":"img/li6.png","title":"最美铁锅炖","jl":"<500m","desc":"[2店通用]4人铁锅炖休闲餐","price":8,"dis":"新客减10","qal":1},{"pic":"img/li7.png","title":"杨记川菜鱼","jl":"<500m","desc":"[高新软件园]精品2-3人餐，包间免费","price":5,"dis":"6.9折","qal":1},{"pic":"img/li8.png","title":"高新西尔顿伯爵之家中","jl":"1.1km","desc":"[高新软件园]海鲜10人餐，有赠品","price":7,"dis":"3.9折","qal":1},{"pic":"img/li9.png","title":"纸包鱼","jl":"1.6km","desc":"[科技路西口]纸包鱼2-3人餐","price":9,"dis":"3.9折","qal":1},{"pic":"img/li10.png",
        "title":"卡佩日式烧肉","jl":"2.8km","desc":"[徐家庄]自助餐","price":11,"dis":"3.9折","qal":1},{"pic":"img/li11.png","title":"中影国际影城","jl":"4.2km","desc":"[劳动南路]雷神3：正在热映","price":34,"dis":"3.9折","qal":1},{"pic":"img/li12.png","title":"通吃猫重庆纸包鱼","jl":"<500m","desc":"[高新软件园]4-6人餐，提供免费WiFi","price":22,"dis":"6.9折","qal":1}];

list.forEach((data, inx) => {
    var proObj = {
        title: "",
        price: 0,
        photo: "",
        jl:''
    };
    console.log(inx);
    proObj.title=data.title;
    proObj.price=data.price;
    proObj.photo=data.pic;
    pro.addfood(proObj, (error, result) => {
        console.log(result);
    })
})