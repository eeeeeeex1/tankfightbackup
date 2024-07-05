import { _decorator, Component, director, EditBox, Button } from 'cc';
const { ccclass, property } = _decorator;

interface User {
    username: string;
    password: string;
}

@ccclass('LoginScene')
export class LoginScene extends Component {
    @property(EditBox)
    editboxUsername: EditBox = null!;

    @property(EditBox)
    editboxPassword: EditBox = null!;

    @property(Button)
    loginButton: Button = null!;

    start() {
        // 尝试自动填充上次登录的用户名
        let savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            let user: User = JSON.parse(savedUser);
            console.log("自动登录用户：" + user.username);
            this.editboxUsername.string = user.username;
        }

        // 监听登录按钮点击事件
        this.loginButton.node.on('click', this.onLoginButtonClicked, this); 
    }

    onLoginButtonClicked() {
        let username = this.editboxUsername.string.trim();
        let password = this.editboxPassword.string;
        console.log("用户点击登录按钮");

        // 从本地存储获取保存的用户信息
        let savedUser = localStorage.getItem(username);
        if (savedUser) {
            let user: User = JSON.parse(savedUser);

            // 验证用户名和密码是否匹配
            if (user.password === password) {
                console.log("登录成功：" + user.username);
                // 在这里可以实现登录成功后的逻辑，比如切换场景
                director.loadScene('select'); // 跳转到 select 场景
                this.onLoginSuccess();
            } else {
                console.log("用户名或密码错误，登录失败");
                // 在这里可以提供一些用户反馈，比如弹出提示框
                alert("用户名或密码错误，请重试！");
            }
        } else {
            // 第一次登录，保存用户信息到本地存储
            let user: User = {
                username: username,
                password: password
            };
            localStorage.setItem(username, JSON.stringify(user));
            console.log("第一次登录成功，用户：" + username);
            // 在这里可以实现第一次登录成功后的逻辑，比如显示欢迎信息
            this.onLoginSuccess();
        }
    }

    onLoginSuccess() {
        // 登录成功的逻辑，例如切换场景或者显示欢迎信息
        // 这里简单输出一条日志作为示例
        console.log("登录成功，执行进一步操作...");
    }

    logout() {
        // 用户登出时，清除本地存储的当前用户信息
        localStorage.removeItem('currentUser');
        console.log("用户已登出");
    }
}