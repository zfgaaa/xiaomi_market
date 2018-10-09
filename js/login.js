var login = (function(){
    return {
        init(ele){
            // 获取form表单
            this.$ele = document.querySelector(ele);
            this.$usernameInp = document.querySelector('.username');
            this.$passwordInp = document.querySelector('.password');
            this.$loginBtn = document.querySelector('.login-btn');
            this.event();
        },
        event(){
            var _this = this;
            // 提交按钮
            this.$loginBtn.onclick = function(){
                // 发送ajax,验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data){
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:8080/xiaomi_market/php/login.php', params);
            }
        },
        loginSuccess(data){
            if(data.code == 200){
                document.cookie = "user-id-" + data.data.id;
                document.cookie = "token=" + data.data.token;
                localStorage.userImg = data.data.ataver;
                location.href = "index.html";
            }
            else{
                alert(data.msg);
            }
        }
    }
}())