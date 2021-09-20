var count = 37000;
const MAX = 40000;
var fs = require("fs");
var moment = require("moment");
var request = require("request");
// const axios = require("axios").default;

//原始活动地址:https://wqsou.jd.com/coprsearch/prsearch?ptag=37287.6.6&rebate_id=21700&sceneval=2
//https://search.jd.com/Search?coupon_batch=771905286&psort=2&psort=2&click=1
function queryJdActivityById() {
  request(
    {
      method: "POST",
      timeout: 10000,
      url:
        "https://wq.jd.com/bases/manfan/QueryActivityById?activityId=" +
        count +
        "&systemCode=weixin&callback=manfanActCbA",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
      },
      //jar:j
    },
    function (error, response, body) {
      //console.log(error)
      let jsonpData = body;
      //console.log(error,body,1)
      if (error) {
        if (error.code == "ESOCKETTIMEDOUT") {
          console.log("超时了，跳过");
          count++;
          setTimeout(
            function () {
              queryJdActivityById();
            },
            count % 10 === 0 ? 1000 : 10
          );
          return;
        }
        //reject(error);
      } else {
        try {
          json = JSON.parse(jsonpData);
        } catch (e) {
          var startPos = jsonpData.indexOf("({");
          var endPos = jsonpData.indexOf("})");
          var jsonString = jsonpData.substring(startPos + 1, endPos + 1);
          json = JSON.parse(jsonString);
        }

        if (json.errcode == 0) {
          txtWTFromJson(json); //写入文件
          count++;
          if (count >= MAX) {
            return Promise.resolve("爬取完毕");
          } else {
            setTimeout(
              function () {
                queryJdActivityById();
              },
              count % 10 === 0 ? 1000 : 10
            );
          }
        }
      }
    }
  );
}
async function init() {
  try {
    let res = await queryJdActivityById();
    console.log(res);
  } catch (error) {
    console.log(error)
  }
}
init();
// var scraperjs = require("scraperjs");
//接口获取
function txtWTFromJson(res) {
  let data;
  if (typeof res == "object") {
    data = res.data;
    if (data && data.success) {
      let activityInfo = data.activityVo;
      let activityUrl = activityInfo.activityUrl;
      let displayTitle = activityInfo.displayTitle;
      let promotionMessage = activityInfo.promotionMessage;
      let prodSkuList = activityInfo.prodSkuList;
      console.log(prodSkuList)
      console.log(
        "活动内容:" +
          displayTitle +
          ",活动介绍:" +
          promotionMessage +
          "网址是:http:" +
          activityUrl +
          " \n "
      );
      if (
        displayTitle.indexOf("Store") > -1 ||
        displayTitle.indexOf("store") > -1 ||
        displayTitle.indexOf("充值卡") > -1 ||
        displayTitle.indexOf("话费") > -1
      ) {
        //let str = '重要:'+activityInfo.activeName+',介绍:'+promotionMessage+',商品id：'+prodSkuList+',链接:http:'+activityUrl+'[时间:'+moment(activityInfo.startTime).format('YYYY-MM-DD HH:mm:ss')+'-'+ moment(activityInfo.endTime).format('YYYY-MM-DD HH:mm:ss')+']' +" \n ";
        let str =
          "编号" +
          count +
          "活动名称:" +
          activityInfo.activeName +
          "，详细说明：" +
          activityInfo.promotionMessage +
          //",商品id：" +
          //prodSkuList +
          ",[时间:" +
          moment(activityInfo.startTime).format("YYYY-MM-DD HH:mm:ss") +
          "-" +
          moment(activityInfo.endTime).format("YYYY-MM-DD HH:mm:ss") +
          "]" +
          " \n ";
        fs.appendFile("appstore.txt", str, "utf-8", function (err) {
          if (err) {
            console.log(err);
            return false;
          }
          //console.log(str)
          //console.log('写入成功!!!');
        });
      }
    }
  }
}
