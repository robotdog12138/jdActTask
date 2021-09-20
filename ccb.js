var fs = require("fs");
// var request = require("request");
var superagent = require("superagent");
var scraperjs = require("scraperjs");
//引入http 模块
// var http = require("http");
// const querystring = require("querystring");
// const axios = require("axios").default;
// axios.defaults.withCredentials = true;
// const qs = require("qs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const { resolve } = require("path");
// const iconv = require("iconv-lite");
// 1s 后执行的代码
const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

function scraperjsCreate(url) {
  return new Promise(function (resolve, reject) {
    scraperjs.StaticScraper.create(url)
      .scrape(function ($) {
        return $("#gift_jump")
          .eq(0)
          .map(function () {
            return $(this).attr("href");
          })
          .get();
      })
      .then(function (news, utils) {
        //console.log(news);
        resolve({ news, utils });
      });
  });
}
// request = request.defaults({
//   jar: true,
// });
// var j = request.jar();
// var cookie = request.cookie(
//   ""
// );
// console.log(cookie);
// j.setCookie(cookie, "http://tool1.ccb.com", function (error, cookie) {});

// var prompt1 = inquirer.createPromptModule();
// const promptList1 = [{
//     type: "input",
//     message: "输入获取的url",
//     name: "url",
//     default: "", // 默认值
// }, {
//     type: "input",
//     message: "输入获取的ck",
//     name: "ck",
//     default: "", // 默认值
// }];
// prompt1(promptList1).then((answers) => {

// });
//请在这输入您的基本信息
let _url =
  "https://wq.jd.com/activeapi/obtainjdshopfreecouponv2?sceneval=2&callback=ObtainJdShopFreeCouponCallBackA&scene=2&key=47e8c671b7ad4aa193df8afa5085e42f&roleid=47817622&t=0.1857469199880657";
let _ck =
  '__jdu=161526433713158976966; shshshfpa=29576600-1373-f7cf-c07f-c1c6f22d2bd8-1615264339; shshshfpb=ivFm8L3AqD%20c9XjWatfeJZg%3D%3D; whwswswws=; user-key=91a29502-5f94-40b5-bad8-12254b221b34; cn=5; areaId=7; ipLoc-djd=7-458-464-37578; TrackID=1MEnZPwjwrO97Zu4qIkMox724eziGRi2GOxBhsdtYu6ylFBm-cuxn0mEayJUjqi8ehHdgF4mesXdjG0Aj5KV1DA6Ypopk_htDHsDNhgKDLTk; unick=8804_li1330; ceshi3.com=201; _tp=Nmg5J0%2B%2FRsZEeJhdMlcymdVnJUouzG%2B%2F4%2BFFSkrTBDw%3D; _pst=jd_4a25e687466da; autoOpenApp_downCloseDate_auto=1615873043695_10800000; PCSYCityID=CN_110000_110100_110108; mt_xid=V2_52007VwMVUllbVV8dSx9cB2cHG1pbX1pdGHlOWw1mAhoHDkRXDRdLBVkDb1MOWllQAkYZTEsLUGIKFFoKWFJqHEgaXBlmAQ5SWklSXxRIHVcAYDMSYl1oUF8YSBtaA2UCEmJYW1RZ; unpl=V2_ZzNtbUZSRBdwWxVRfR5bBmJWF10SB0UXcwAWUntJCwduUEcOclRCFnUUR1ZnGVsUZwYZXEVcQBVFCEdkex5fDGQzEl5KVUEdcA1EZEsaXDVmMxJaQlNAEnAKRFJ7G1wBbgsUWkpQRCVFCE5TSxldBGQCElRBU0UddQtOZEseWQJhChtYRmdCJXQ4Bzp9G1wNZU4SWkJTQBJwCkRSextcAW4LFFpKUEQldDhF; __jdv=122270672%7Cc.duomai.com%7Ct_16282_129339443%7Cjingfen%7C54634bb476624d41aa7379a71af38bdb%7C1615874781877; warehistory="10020182579129,100009584131,10023403480808,10023403712654,62624849181,100015758614,685155,4142370,100003744438,100004325476,12656317926,25541814153,10827479620,3742086,10027405654703,"; pin=18790576744; pinId=WUWezK8NyRdIejjTVegY0A; thor=29C1E534D533C461CB3A8C1DB28B8CEF8422BA6F27C103C14F0416E3544BA39F130DF16AD531604B45DC351FEB5D330FDF227836A64904D37A28D57217ECC6AA3F0C2A1409773BBC04B087AE6CBBBF4A06AED3BB554AC96F72F399828E2E907A0F4E5BC898901E376D4D81FBAA0970ACD4BC0BB7ADAA6DC14E900F5C86A5BC73ADBE72CB84A94988A8F190D49D85A971E51D9D065C8634C9C28329A37B6CB68F; __jda=76161171.161526433713158976966.1615264337.1615873042.1615874781.19; __jdc=76161171; wxa_level=1; cid=9; retina=0; jxsid=16158763407009675424; webp=1; visitkey=45718815143131686; mba_muid=161526433713158976966; PPRD_P=UUID.161526433713158976966; jxsid_s_u=https%3A//coupon.m.jd.com/coupons/show.action; sc_width=1920; equipmentId=OYNTVB73KPVCZYFOZEXRXG3X4DYWQ44PFH6DQG3EMDGBXOIOE5GNTSBUK7X4BDLLBUHWHE74TXNCCD7HRV2VW2L2K4; 3AB9D23F7A4B3C9B=OYNTVB73KPVCZYFOZEXRXG3X4DYWQ44PFH6DQG3EMDGBXOIOE5GNTSBUK7X4BDLLBUHWHE74TXNCCD7HRV2VW2L2K4; jcap_dvzw_fp=eMUueMC8ylMpCkZlxnBFW3jZEuNOF6YEwBu2MjNgbYfH7RoNBSXGt4hnjBcmjeq_6KaqZg==; TrackerID=mqwyw8G3a3iufgLryFx8t_duLyuYragCYjiVmYbmYJIZM6gkx29McssOxbUR3aCsZrE_nhGcNWunhl0C53KhYkdOdHR0T_fqYTLfebpR74AX5lBinLS94UrR_Htu3ARw; pt_key=AAJgUFEiADADIEMS6-HAbhMbaQNzeTRv513SXdIxr0n8YM8g0OTOv1-e4hBP6ei-wEbGHWPuhPw; pt_pin=18790576744; pt_token=x8naz0kq; pwdt_id=18790576744; sfstoken=tk01ma2841c01a8sMXgzKzF4MnJvj879901lWq69OdyNvrQTO68rqVAJIcBQvTMeMcugfo4+KSeGfoNB2DEEdujncJEc; wqmnx1=MDEyNjM3MnRvLi9zYWs4YTM1ZmQ2ZTc2MTNNL1BDbzFrT3BLLktsY2JEdTExdUNhLjFpMXQgZWFuMTJmbjRLT1NVJik%3D; __jdb=76161171.22.161526433713158976966|19.1615874781; mba_sid=16158763408546850120071665433.4; __wga=1615876389297.1615876341666.1615876341666.1615876341666.2.1; jxsid_s_t=1615876389443; shshshfp=93c563c07ac3e476271e6be8a5d1b1f4; shshshsID=e7c9141321e2c103f9bab2aabf4c3447_24_1615876390104; fingerprint=14606c73a8dd73ccec5bae0a1077e664; deviceVersion=; deviceOS=ios; deviceName=; deviceOSVersion=14.4; __jd_ref_cls=MProductCoupon_WaitGetCoupon';
// const _phone = "";
// if (_phone.length != 11) {
//     console.log(
//         chalk.bgRed("请先设置手机号" + "\n")
//     );
//     return
// }
// ccb(_url, _ck).then((res) => {
//     console.log(JSON.stringify(res));
// });
superagent
  .get(_url)
// //   .set("Content-Length","548")
// //   .set("Connection","keep-alive")
.set("Referer","https://item.m.jd.com/")
//   .set("Origin","https://h5.bestpay.com.cn")
//   .set("Sec-Fetch-Dest","empty")
//   .set("Sec-Fetch-Mode","cors")
//   .set("Sec-Fetch-Site","same-site")
  .set('Cookie',_ck)
  .set("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")
  .set("Content-Type", "text/html; charset=utf-8")
  // .send({
  //   aesKeySign: "HHxk6aomUsD3gf3bUMqqcabXV5TGmTl2G19YsvWft/ftMaL8XjQZ9g8xpqUtBi1DFjbNslXAo9LQkI4+3lSjs4bWPFgcFnfpm/xVmSIGC/LJHPsYkpYUM+O5xQjumtTmcVChBxsT9tDUz+eHjmpZLzRCZO1G+o3blLCi7VAmTig=",
  //   encData: "f4Z0j89+rjcIH4k7/9qKEnko4u4tiGPYKfwA3+iD0HfmFrg06+646+/DzolRzwfK↵6LMAxJJBd3e8gQFB06dmby/Z++wSdHSF+jra+L6XFhIe0zfg1ak076X6a0RJJnzU↵Nr/v220BhYB0jvn6ve5LShsPzMntUVncGOfm3UUSqHtjjDeism9GDP5vofXiXDXx↵hxKXx5PSSo9wpQ5ppWiMT+lXAexytcSp8kYmrhYhW/rPfQ7S1QHq2/o3mL1P3ohJ↵e2fu8HWYIbcc2T+9KLwim/kl63dmQSZ10WsIT0boU2s=",
  //   openId: "REDBAG-1608342634345-74703"
  // })
  .end(function (err, res) {
    console.log("可能成功了:" + res);
    if (res.statusCode == 200) {
      console.log("可能成功了:" + res.text);
      let txt1json = JSON.parse(res.text.toString().replace(/\s+/g, ""));
      let txt1 = res.text.toString().replace(/\s+/g, "") + " \n ";
    //   fs.appendFile("ccb1.txt", txt1, "utf-8", function (err) {
    //     if (err) {
    //       reject();
    //       console.log(err);
    //       return false;
    //     }
    //   });
         // resolve(cjdata);

    }
  });
function ccb(url, cookie) {
  return new Promise(function (resolve, reject) {
    postCCB(url, cookie, resolve, reject);
  });
}

function postCCB(url, cookie, resolve, reject) {
  scraperjsCreate(url).then((resp) => {

    if (typeof resp.news == "object") {
      let str = resp.news.toString().replace(/\s+/g, "");
      str = str.substr(str.indexOf("encString=") + 10);
      superagent
        .get(
          "http://tool1.ccb.com/webtran/ulty1/realtimelucky.gsp?sid=33001&encString=" +
            str
        ) //随便论坛里的一个地址
        .set("Cookie", cookie)
        .set(
          "User-Agent",
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
        )
        .end(function (err, res) {
          // console.log(res)
          if (err) {
            //reject();
            postCCB(url, cookie, resolve, reject);
            //throw err;
            return;
          }
          //do something
          if (res.statusCode == 200) {
            let cjdata = JSON.parse(res.text.toString().replace(/\s+/g, ""));
            if (
              cjdata.rot == 2 ||
              cjdata.rot == 4 ||
              cjdata.rot == 6 ||
              cjdata.rot == 8
            ) {
              if (1 == cjdata.isLucky) {
                let txt =
                  res.text +
                  ",字符串:" +
                  str +
                  ",网址是:" +
                  resp.news.toString().replace(/\s+/g, "") +
                  " \n ";
                fs.appendFile("ccb.txt", txt, "utf-8", function (err) {
                  if (err) {
                    reject();
                    console.log(err);
                    return false;
                  }
                });
                var prompt = inquirer.createPromptModule();
                const promptList = [
                  {
                    type: "input",
                    message: "设置要领奖的手机:",
                    name: "phone",
                    default: "", // 默认值
                  },
                ];

                prompt(promptList).then((answers) => {
                  console.log(
                    chalk.bgRed("你设置的手机号是:" + answers.phone + "\n")
                  );

                  superagent
                    .post(
                      "http://tool1.ccb.com/webtran/realtimeUltyCsutInfo.gsp"
                    )
                    .set("Cookie", cookie)
                    .set(
                      "Content-Type",
                      "application/x-www-form-urlencoded; charset=utf-8"
                    )
                    .send({
                      luckyId: cjdata.luckyId,
                      baseinfoId: cjdata.baseinfoId,
                      realName: "王欢",
                      mobile: answers.phone,
                      postAddr: "",
                      postCode: "",
                      identityCard: "",
                      custom1: "",
                      custom2: "",
                      custom3: "",
                      prizeType: 1,
                      sid: 33001,
                      encString: str,
                    })
                    .end(function (err, res) {
                      if (res.statusCode == 200) {
                        console.log("可能成功了:" + res.text);
                        let txt1json = JSON.parse(
                          res.text.toString().replace(/\s+/g, "")
                        );
                        let txt1 =
                          res.text.toString().replace(/\s+/g, "") + " \n ";
                        fs.appendFile(
                          "ccb1.txt",
                          txt1,
                          "utf-8",
                          function (err) {
                            if (err) {
                              reject();
                              console.log(err);
                              return false;
                            }
                          }
                        );
                        scraperjs.StaticScraper.create(txt1json.couponUrl)
                          .scrape(function ($) {
                            return $(".ticket_get_c .ticket_get")
                              .eq(0)
                              .map(function () {
                                return $(this).text();
                              })
                              .get();
                          })
                          .then(function (news, utils) {
                            let couponUrl =
                              "手机号：" +
                              answers.phone +
                              "领取的" +
                              news.toString().replace(/\s+/g, "") +
                              "\n";
                            console.log(news.toString().replace(/\s+/g, ""));
                            fs.appendFile(
                              "coupon.txt",
                              couponUrl,
                              "utf-8",
                              function (err) {
                                if (err) {
                                  reject();
                                  console.log(err);
                                  return false;
                                }
                              }
                            );
                            resolve(cjdata);
                          });
                      }
                    });
                });
              }
            } else {
              console.log("没中奖:" + str + "," + res.text);

              sleep(50).then(() => {
                // 这里写你的操作
                postCCB(url, cookie, resolve, reject);
              });
            }
          } else {
            postCCB(url, cookie, resolve, reject);
          }
        });
    }
  });
}
// let data1 = moment().valueOf();
// let postData = querystring.stringify({
//   // "3": data1,
//   "1607408649221":"",
//   "1607408649234":"",
//   sid: 33001,
//   encString: str,
// });
// var options = {
//   hostname: "tool1.ccb.com",
//   path: "/webtran/ulty1/realtimelucky.gsp",
//   method: "GET",
//   headers: {
//     //"X-Requested-With": "XMLHttpRequest",
//     "Connection":"keep-alive",
//     //"Accept": "application/json, text/javascript, */*; q=0.01",
//     //"Accept-Encoding": "gzip, deflate",
//     //"Accept-Language": "zh-CN,zh;q=0.9",
//     "Content-Length": Buffer.byteLength(postData),
//     //"Referer": "http://tool1.ccb.com/webtran/realtimelottery.gsp?sid=33001&encString="+str,
//     //"Proxy-Connection": "keep-alive",
//     //"Host": "tool1.ccb.com",
//     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//     "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
//     "Cookie":"appUniCode=C9E3AC0FCCA476A2DA9A00BAD639671A2A8F00199C5C963817C265027E1BCC5E53FB29E16F8DA87F; cookieidTagFlag=0; cityCodeFlag=1; cityCodeCustId=1094312557; cityName=%E6%96%B0%E4%B9%A1%E5%B8%82; bankCode=410000000; bankName=%E6%B2%B3%E5%8D%97%E7%9C%81%E5%88%86%E8%A1%8C; cityCode=410700; ccbcustomid=b87ea9360939ff07MwBviiPr5VatdK8DBYWV1606956780255BV1klC5nzFeeCpbcd0ira0c6e7a2a9c7141e0f7d7b339f25ae5e; ccbdatard=1; m_user_bitmap=00000000000000000000; dsloginTypeTips=1; tagInfoId=%26_000094%3D1%26_000050%3D12; lastLoginTime=; ticketCmp=; custNameCmp=; userTypeCmp=; lastLoginTimeCmp=; custIdCmp=; ccbsessionid=qdi5JVG7XbK27nV8f1deb3e0138-20201209085626; null=1277362954.20480.0000; JSESSIONID=VWlFMgLNtivub9JmhWZ_AWab1EpuZaal4aMvKWuVkGGSk6Ytk_JL!753460155; ticket=iXJFMjJv1EctaK8F9j9KIcG8fabOTj_Am4LCsZCwT6pB6NyWV2kC!753460155!16074786863191607478721876; cs_cid=1260654034; custName=czz139; halfLoginCustName=1F649EFA235DE249258B2D760A35A5761156BBB5E8776CE8; halfLoginCustId=EDE584AFE2FA2B30B6DFA37C0BD42F92; halfLoginShowName=1F9F17B6821BAFEA; cloudDSInfo=5DB64935EEA2F871E8B1D3DA1B32743A3214E0D9628A664321771E09C3D7BB15011233A76A0B49C79D5E2D9BB8FFCC39; tagInfoCustId=1260654034; lastUpdateTime=2020-12-09%2009%3A52%3A02; userType=1; tranFAVOR=FYxp0ocSGQR40ecWGSRn0OcaGw4Hz18B9PG9h3Ie66R504cSGURv0EcfGIRshOoSh8OCjcoExGFqiRIi5HNUhkICe2R6Za; zg_did=%7B%22did%22%3A%20%221763fe75f88326-0e97680de9c932-3e604809-1fa400-1763fe75f8980a%22%7D; zg_002714230c264ddda7d94375a4d23e40=%7B%22sid%22%3A%201607477882352%2C%22updated%22%3A%201607478761153%2C%22info%22%3A%201607389896592%2C%22superProperty%22%3A%20%22%7B%5C%22app_id%5C%22%3A%20%5C%22lcsc78dgrvpartmi%5C%22%2C%5C%22app_name%5C%22%3A%20%5C%22C_LCS%5C%22%2C%5C%22app_version%5C%22%3A%20%5C%222.0.6%5C%22%2C%5C%22platform_id%5C%22%3A%20%5C%22portal%5C%22%2C%5C%22user_id%5C%22%3A%20%5C%22a717feab4bb33670%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22cloud.life.ccb.com%22%2C%22zs%22%3A%200%2C%22sc%22%3A%200%2C%22firstScreen%22%3A%201607477882352%7D; INFO=8j9f|X9At8",
//   },
// };
// var req = http.request(options, function (res) {
//   console.log(`状态码: ${res.statusCode}`);
//   console.log(`响应头: ${JSON.stringify(res.headers)}`);
//   res.setEncoding("utf8");
//   var result = "";
//   res.on("data", (chunk) => {
//     //let context = iconv.decode(chunk, "gbk");
//     result += chunk;
//     //result = Buffer.concat([result, chunk]);
//     console.log(`响应主体: ${chunk}`);
//   });
//   res.on("end", () => {
//     //向文件追加内容
//     const json = JSON.stringify(result);
//     console.log(result);
//     //let decoded = new Buffer(result, 'json').toString('utf8')
//     //let json = JSON.parse(decoded)
//     let txt =
//     json +
//       ",字符串:" +
//       str +
//       ",网址是:" +
//       resp.news.toString().replace(/\s+/g, "") +
//       " \n ";
//     fs.appendFile("ccb.txt", txt, "utf-8", function (err) {
//       if (err) {
//         console.log(err);
//         return false;
//       }
//       //console.log(str)
//       //console.log('写入成功!!!');
//       console.log("响应中已无数据。");
//     });
//   });
// });
// req.on("error", function (e) {
//   //TODO
//   console.log(e, 1);
// });
// // 写入数据到请求主体
// console.log(postData)
// req.write(postData);
// req.end();
//     axios({
//       method: "get",
//       url: "http://tool1.ccb.com/webtran/ulty1/realtimelucky.gsp",
//       data: qs.stringify({
//         sid: 33001,
//         encString: str,
//       }),
//       headers: {
//         // "X-Requested-With": "XMLHttpRequest",
//         Connection: "keep-alive",
//         // Accept: "application/json, text/javascript, */*; q=0.01",
//         "Accept-Encoding": "gzip, deflate",
//         "Accept-Language": "zh-CN,zh;q=0.9",
//         "Content-Length": qs.stringify({sid: 33001,encString: str}).length,
//         Referer:
//           "http://tool1.ccb.com/webtran/realtimelottery.gsp?sid=33001&encString=" +
//           str,
//         "Proxy-Connection": "keep-alive",
//         "Content-Type": "text/html; charset=UTF-8",
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
//         cookie:
//           "appUniCode=C9E3AC0FCCA476A2DA9A00BAD639671A2A8F00199C5C963817C265027E1BCC5E53FB29E16F8DA87F; cookieidTagFlag=0; cityCodeFlag=1; cityCodeCustId=1094312557; cityName=%E6%96%B0%E4%B9%A1%E5%B8%82; bankCode=410000000; bankName=%E6%B2%B3%E5%8D%97%E7%9C%81%E5%88%86%E8%A1%8C; cityCode=410700; ccbcustomid=b87ea9360939ff07MwBviiPr5VatdK8DBYWV1606956780255BV1klC5nzFeeCpbcd0ira0c6e7a2a9c7141e0f7d7b339f25ae5e; ccbdatard=1; m_user_bitmap=00000000000000000000; dsloginTypeTips=1; lastLoginTime=; ticketCmp=; custNameCmp=; userTypeCmp=; lastLoginTimeCmp=; custIdCmp=; halfLoginCustName=AF77BB12E223B42D258B2D760A35A5761156BBB5E8776CE8; halfLoginCustId=967185D81488900BE0DDC48921322C5B; halfLoginShowName=78E83DB057ECDF37; cloudDSInfo=5DB64935EEA2F871BE5EEA27AFF5D3BBB012495864EF6F1C21771E09C3D7BB1573AE5EDCC889A6EA2ECE23BD375C7C3E; tagInfoId=%26_000094%3D1%26_000050%3D12; tagInfoCustId=1260653143; lastUpdateTime=2020-12-08%2009%3A11%3A29; ccbsessionid=xQ78jKyBBjAaYOL332b942c6efd-20201208091130; tranFAVOR=UCvDl5N53nCjlhNW36Cql4Na30prk1tJug3bT5JVjbCQlONy3bCvlVNY3eCZSqZeWf9ZTKZaeq9rSIpZaQ9fUzZrHlCVDa; null=1042481930.20480.0000; ticket=; cs_cid=; custName=; userType=; JSESSIONID=Y6JBArMgLny1R3FDetPI4oi3RWPIHXzmVd29cP1fmLw1uIFPmwIq!-6144667; zg_did=%7B%22did%22%3A%20%221763fe75f88326-0e97680de9c932-3e604809-1fa400-1763fe75f8980a%22%7D; zg_002714230c264ddda7d94375a4d23e40=%7B%22sid%22%3A%201607408479011%2C%22updated%22%3A%201607408641056%2C%22info%22%3A%201607389896592%2C%22superProperty%22%3A%20%22%7B%5C%22app_id%5C%22%3A%20%5C%22lcsc78dgrvpartmi%5C%22%2C%5C%22app_name%5C%22%3A%20%5C%22C_LCS%5C%22%2C%5C%22app_version%5C%22%3A%20%5C%222.0.6%5C%22%2C%5C%22platform_id%5C%22%3A%20%5C%22portal%5C%22%2C%5C%22user_id%5C%22%3A%20%5C%22a717feab4bb33670%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22cloud.life.ccb.com%22%2C%22zs%22%3A%200%2C%22sc%22%3A%200%2C%22firstScreen%22%3A%201607408479011%7D; INFO=9j9c|X88cD",
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//         let txt =
//           response.data +
//           ",字符串:" +
//           str +
//           ",网址是:" +
//           resp.news.toString().replace(/\s+/g, "") +
//           " \n ";
//         fs.appendFile("ccb.txt", txt, "utf-8", function (err) {
//           if (err) {
//             console.log(err);
//             return false;
//           }
//           //console.log(str)
//           //console.log('写入成功!!!');
//           console.log("响应中已无数据。");
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
