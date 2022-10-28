import axios from "axios";
import configs from "../config";
export default class Service {
  getCampaignInfo() {
    return axios
      .get(configs.urlApi, {
        params: { site: configs.prefix, action: "general/get-campaign" },
      })
      .then((res) => res.data);
  }
  getContent(code) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: "general/get-content",
          code,
        },
      })
      .then((res) => res.data);
  }
  getProvince() {
    return axios
      .get(configs.urlApi, {
        params: { site: configs.prefix, action: "general/get-provinces" },
      })
      .then((res) => res.data);
  }
  getShopName() {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-shop",
        },
      })
      .then((res) => res.data);
  }
  getShopOther() {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-shop-other",
        },
      })
      .then((res) => res.data);
  }
  getShopBranch(shopName) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-branch",
          shop_name: shopName,
        },
      })
      .then((res) => res.data);
  }
  getCustomerInfo(lineId) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: "general/member-is-register",
          lineid: lineId,
        },
      })
      .then((res) => res.data);
  }
  getCoupon(lineId) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-coupon",
          line_id: lineId,
        },
      })
      .then((res) => res.data);
  }
  isMobileDuplicate(mobileNo) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: "general/member-duplicate-mobile",
          mobileNo,
        },
      })
      .then((res) => res.data);
  }
  submitRegister(formData) {
    formData.append("site", configs.prefix);
    formData.append(
      "action",
      configs.prefix.toLowerCase() + "/submit-register"
    );
    return axios.post(configs.urlApi, formData).then((res) => res.data);
  }
  getCouponActive(lineId) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-coupon-active",
          line_id: lineId,
        },
      })
      .then((res) => res.data);
  }
  getStatus(lineId) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-status",
          line_id: lineId,
        },
      })
      .then((res) => res.data);
  }
  getTopSpender(nId) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-top-spender",
          nId,
        },
      })
      .then((res) => res.data);
  }
  checkWinner(mobile) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/check-winner",
          mobile,
        },
      })
      .then((res) => res.data);
  }
  getCouponUsed(lineId) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-coupon-used",
          line_id: lineId,
        },
      })
      .then((res) => res.data);
  }

  setCouponExpire(lineId, couponSerial) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/set-coupon-expire",
          line_id: lineId,
          coupon_serial: couponSerial,
        },
      })
      .then((res) => res.data);
  }
  setCouponUsed(lineId, couponSerial, shopPin) {
    return axios
      .get(configs.urlApi, {
        params: {
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/set-coupon-used",
          line_id: lineId,
          coupon_serial: couponSerial,
          shop_pin: shopPin,
        },
      })
      .then((res) => res.data);
  }
  submitBill(formData) {
    formData.append("site", configs.prefix);
    formData.append("action", configs.prefix.toLowerCase() + "/submit-bill");

    return axios.post(configs.urlApi, formData).then((res) => res.data);
  }
  uploadPic(formData) {
    formData.append("prefix", configs.prefix.toLowerCase());
    const axiosConfig = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios
      .post("https://lotus-halloween.pro.co.th", formData, axiosConfig)
      .then((res) => res.data);
  }
  uploadBill(formData) {
    formData.append("prefix", configs.prefix.toLowerCase());
    const axiosConfig = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios
      .post(configs.urlUpload, formData, axiosConfig)
      .then((res) => res.data);
  }
  getBillHistory(lineId) {
    return axios
      .get(configs.urlApi, {
        params: {
          line_id: lineId,
          site: configs.prefix,
          action: configs.prefix.toLowerCase() + "/get-history",
        },
      })
      .then((res) => res.data);
  }
}
