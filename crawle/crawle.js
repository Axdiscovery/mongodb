const superagent = require("superagent");
const cheerio = require("cheerio");
const phoneoperation = require("./operation/foodoperation");



    for(let i=1;i<20;i++) {
        superagent
    .get(`https://list.jd.com/list.html?cat=9987,653,655&page=1&delivery_glb=2&sort=sort_rank_asc&trans=1&debug=cluster&JL=6_0_0#J_main`)
        // .get('https://search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&enc=utf-8&suggest=1.def.0.V04&wq=shou&pvid=db498fdc95ad4e5c8833b799fbacdd0d')

            .end(function (err, res) {
                var $ = cheerio.load(res.text);   //cheerio.load相当于加载所有的html代码
               // console.log($);
                var liArrs = $(".gl-warp").children("li");
                // console.log(liArrs)
                liArrs.each((inx, data) => {
                    var phone = {
                        title: '',
                        price: 0,
                        photo: ''
                    }
                    phone.title = $(data).find(".p-name a em").text();
                    phone.price = $(data).find(".p-price .J_price").text();
                    let imgUrl = $(data).find(".p-img img").attr("src");
                    if (imgUrl == null) {
                        imgUrl = $(data).find(".p-img img").attr("data-lazy-img");
                    }
                    phone.photo = imgUrl;
                    console.log(phone);
                    let pro = new phoneoperation();
                    pro.addphone(phone, (error, result) => {
                        console.log(result);
                    })
                })


            });
    }
