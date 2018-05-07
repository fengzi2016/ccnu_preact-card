import request from './server';
const moneyService = {
    getMoney(option){
        return request({
            method:"GET",
            url:"http://console.ccnu.edu.cn/ecard/getTrans?userId="+option.userId+"&days=1&startNum=0&num=200"
        })
    }
}
export default moneyService;