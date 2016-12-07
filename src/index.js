/**
 * 功能：
 * 日期：2016-12-5
 * 作者：liuxin
 */

import React from 'react'
import { render } from 'react-dom'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Row , Col} from 'antd'
const SubMenu = Menu.SubMenu

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, location ,Redirect, IndexLink} from 'react-router'

// 引入Ant-Design样式 & Animate.CSS样式
// import 'animate.css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
// import './css/main.css'

// 引入单个页面（包括嵌套的子页面）
import homePage from './component/hello.jsx'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        };
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    };

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: '陌小佐'
        })
    };

    render() {
        let pathname = this.props.location.pathname;
        return (
            <div>

            </div>
        )
    }
}

// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Navigation}>
            <IndexRoute path="main" component={homePage} />
            <Route path="main" component={homePage} />
        </Route>
    </Router>
), document.getElementById('myIndex'));