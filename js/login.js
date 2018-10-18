var login = (function(){
    return {
        init(ele){
            // 获取form表单
            this.$ele = document.querySelector(ele);
            this.$usernameInp = document.querySelector('.username');
            this.$passwordInp = document.querySelector('.password');
            this.$loginBtn = document.querySelector('.login-btn');
            this.$idLogin = document.querySelector('#banner .banner-con .idLogin');
            this.$ewmLogin = document.querySelector('#banner .banner-con .ewmLogin');
            this.$idCon = document.querySelector("#banner .banner-con .loginUserName");
            this.$ewmCon = document.querySelector('#banner .banner-con .loginEwm');
            this.event();
        },
        event(){
            var _this = this;
            this.$idLogin.onclick = function(){
                _this.$idCon.style.display = "block";
                _this.$ewmCon.style.display = "none";
                _this.$idLogin.style.color = "#ff6700";
                _this.$ewmLogin.style.color = "#666666";
            }
            this.$ewmLogin.onclick = function(){
                _this.$ewmCon.style.display = "block";
                _this.$idCon.style.display = "none";
                _this.$idLogin.style.color = "#666666";
                _this.$ewmLogin.style.color = "#ff6700";
            }
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