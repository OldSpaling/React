import React, { Component } from 'react';
import { Button, Input, Menu } from 'element-react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        };
    }

    handleSelect = (index) => {
        console.log(index);
    }

    handleIconClick = () => {
        console.log('handleIconClick', this.state.searchInput);
    }

    render() {
        return (
            <header className="main-header visible" >
                <div className="container">
                    <a href="/" className="logo">
                        <img src="http://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" className="logo-img" />
                    </a>
                    <div className="nav-menu">
                        <Menu defaultActive="1" mode="horizontal" onSelect={this.handleSelect}>
                            <Menu.Item index="1">
                                首页
                            </Menu.Item>
                            <Menu.Item index="2">
                                专栏
                            </Menu.Item>
                            <Menu.Item index="3">
                                收藏夹
                            </Menu.Item>
                            <Menu.Item index="4">
                                发现
                            </Menu.Item>
                            <Menu.Item index="5">
                                标签
                            </Menu.Item>
                            <Menu.Item index="6">
                                <Input size="small" icon="search" placeholder="搜索掘金" onIconClick={this.handleIconClick} 
                                onChange={(value)=>this.setState({searchInput:value})}></Input>
                            </Menu.Item>
                            <Menu.Item index="7">
                                <Button type="text" icon="edit" className="contribute">投稿</Button>
                            </Menu.Item>
                            <Menu.Item index="8">
                                <Button type="text" className="login-btn" 
                                onClick={()=>console.log("注册")}>注册</Button>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </header>
        )
    }
}