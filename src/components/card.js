import {h, render, Component } from 'preact'
import style from './card.scss'
import moment from "moment"
import MoneyService from '../services/money';
let imageSrc = "https://wx3.sinaimg.cn/large/006P0MECly1fpflxjkgfdj30fa0jjjr9.jpg"
let date =  moment(new Date()).format("YYYY年MM月DD日"); 
export default class Card extends Component {
    constructor(props){
        super();
        this.state = {
            money : '0.00',
            time: date
        }
    }
    componentWillMount() {
        let option = {};
        // option.userId = Cookie.getCookie("userId");
        option.userId = 2016214322;
        MoneyService.getMoney(option)
        .then((res)=>{
        let money = res[0].outMoney;
            this.setState({money});
          })
    }
    render({},{}){
        return (
            <div className = 'App'> 
               
               <img className = 'centerPicture' src = {imageSrc} />
                
                <div className = 'center'>
                        <div className = 'warnWord'>您的校园卡余额是为</div>
                        <div className = 'Money'>{this.state.money}元</div>
                        <div className = 'Date'>截止至{this.state.time}</div>
                </div>   
            </div>
        )
    }
}