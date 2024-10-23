const axios = require("axios").default;
const BuySchema = require("../../models/user/buyModel");
const RequestSchema = require("../../models/admin/request/requesModel");
const UserSchema = require("../../models/user/userModel")
const DateSchema = require("../../models/dateModel");
const AdsModel = require("../../models/admin/adsModel")
const blogSchema = require("../../models/admin/blog/blogModel");
const categorySchema = require("../../models/admin/categoryModel")
const ClassModel = require("../../models/admin/course/classModel")
const TestsSchema = require("../../models/admin/test/testMakerModel");
// درخواست پست ایجاد تراکنش

exports.Buy = async (req, res) => {
  const { userId, serviceId, category, paymentId } = req.body
  try {
    var service

    const key = category;
    switch (key) {
      case "test":
        service = await TestsSchema.findById(serviceId)
        break;
      case "class":
        service = await ClassModel.findById(serviceId)
        break;

      default:
        console.log("default");
    }
    if (service) {
      const buy = await BuySchema.create({ userId, category, paymentId, serviceId: service._id })
      res.json({ buy, Message: "ثبت نام با موفقیت امجام شد " })
    } else {

    }





  } catch (error) {
    console.log(error);

  }
}
exports.GetBuyedCheck = async (req, res, next) => {
  const serviceId = req.params.serviceId
  const userId = req.params.userId

  try {
      const service = await BuySchema.findOne({ serviceId: serviceId, userId: userId })
      console.log(service);
      
      res.json(service ? true : false)
  } catch (error) {
      res.json({ error })
  }
}

// درخواست کال بک تراکنش
exports.CallBack = async (req, res) => {
  try {
    console.log(req.query);

    // https://docs.zibal.ir/IPG/API#status-codes {جدول کد وضعیت ها}

    // تراکنش پراخت شده تایید نشده
    if (req.query.success == 1 && req.query.status == 2) {
      // ورودی های تراکنش
      let params = {
        merchant: process.env.MERCHANT,
        trackId: req.query.trackId,
      };

      // درخواست تایید تراکنش
      let requestverify = await axios.post(
        "https://gateway.zibal.ir/v1/verify",
        params
      );

      // لیست اطلاعات تراکنش
      console.log(requestverify.data);

      // تایید تراکنش پرداخت شده
      if (requestverify.data.result == 100) {
        res.status(200).json({
          messge: "پرداخت با موفقیت اتجام شد",
          payment: requestverify.data,
        });

      } else if (requestverify.data.result == 201) {
        // تراکنش از قبل تایید شده پرداخت شده
        res.status(200).json({
          messge: "این تراکنش قبلا تایید شده است",
          peyment: requestverify.data,
        });
      } else if (requestverify.data.result == 202) {
        // تراکنش پرداخت نشده
        res.status(200).json({
          messge: "سفارش پرداخت نشده یا ناموفق بوده است",
          peyment: requestverify.data,
        });
      }
    } else if (req.query.success == 1 && req.query.status == 1) {
      // تراکنش از قبل تایید شده پرداخت شده
      res
        .status(200)
        .json({ messge: "این تراکنش قبلا تایید شده است", peyment: req.query });
    } else if (req.query.success == 0 && req.query.status == 3) {
      // تراکنش لغو شده
      res.status(200).json({ messge: "تراکنش ناموفق", peyment: req.query });
    } else {
      // لیست خطا
      res.send(req.query);
    }
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
}

/*


    let orderId = randomstring.generate({ length: 12, charset: "numeric" });
    const id = req.params.id
  try {
    const test =  await TestSchema.findById({_id: id})
    // ورودی های درخواست ایجاد تراکنش
    let params = {
      merchant: process.env.MERCHANT,
      amount: test.Price,
      callbackUrl: process.env.CALLBACKURL,
      // description: "", // {اختیاری} {string} - توضیحات مربوط به سفارش
      orderId, // {اختیاری} {string} - شناسه سفارش منحصربه‌فرد شما
      mobile: req.body.phone, // {اختیاری} {string} - با فرستادن شماره موبایل کاربران خود، شماره کارت‌های ثبت‌شده مشتریان در درگاه پرداخت جهت انتخاب ظاهر می‌شوند.
      // allowedCards: "", // {اختیاری} {string لیستی از} - چنانچه تمایل دارید کاربر فقط از شماره کارت های مشخصی بتواند پرداخت کند لیست کارت (های) 16 رقمی را ارسال کنید.
      // linkToPay: "", // {اختیاری} {Boolean} - در صورتی که درگاه شما دسترسی ارسال لینک کوتاه پرداخت را داشته باشد، با قراردادن این متغیر برابر با true لینک کوتاه پرداخت برای این تراکنش ساخته می‌شود. لازم به ذکر است در این حالت callbackUrl میتواند ارسال نشود.
      // sms: "", // {اختیاری} {Boolean} - با قراردادن این متغیر برابر با true لینک کوتاه پرداخت به شماره mobile ارسالی در همین بدنه ارسال خواهد شد.
    };

    // درخواست ایجاد تراکنش
    let requestBuy = await axios.post(
      "https://gateway.zibal.ir/v1/request",
      params
    );

    // لاگ اطلاعات تراکنش
    console.log(requestBuy.data);

    // https://docs.zibal.ir/IPG/API#status-codes {result جدول}

    // درخواست تراکنش موفق
    if (requestBuy.data.result == 100) {
      return res.redirect(
        `https://gateway.zibal.ir/start/${requestBuy.data.trackId}`
      );
    } else {
      // دریافت خطا
      res.status(400).json(requestBuy.data);
    }
  } catch (err) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
  }
*/