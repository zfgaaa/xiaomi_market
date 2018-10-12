var register = (function () {
    return {
        init(ele) {
            this.$ele = document.querySelector(ele);
            this.$username = document.querySelector('.usernameInp');
            this.$password = document.querySelector('.password');
            this.$formatErr = document.querySelector('.format-error');
            this.$userNull = document.querySelector('.userNull');
            this.$passNosafe = document.querySelector('.pass-nosafe');
            this.$passNull = document.querySelector('.passNull');
            this.$registerBtn = document.querySelector('.register-btn');
            this.check_user();
            this.event();
        },
        event() {
            var _this = this;
            this.$registerBtn.onclick = function(){
                //发送ajax
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$username.value,
                        password: _this.$password.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:8080/xiaomi_market/php/register.php', params);
            }
            this.$username.onchange = function(){
                var params = {
                    data: {
                        username: _this.$username.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
                sendAjax('http://localhost:8080/xiaomi_market/php/check_username.php', params)
            }
        },
        checkName(data){
            if(data.code == 200){
                //用户名称不存在
            }else{
                //用户名称存在
            }
        },

        loginSuccess(data){
            if(data.code == 200){
                location.href = 'login.html';
            } else{
                alert(data.msg);
            }
        },




        // 正则验证
        check_user() {
            var _this = this;
            //验证用户名
            _this.$username.onblur = function () {

                var regUserName = /^[a-zA-Z0-9_]{4,16}$/;
                var fragUsername = regUserName.test(_this.$username.value);
                if (!fragUsername) {
                    //用户名错误
                    if (_this.$username.value == '') {
                        _this.$userNull.style.display = "block";
                        _this.$formatErr.style.display = "none";
                    } else {
                        _this.$userNull.style.display = "none";
                        _this.$formatErr.style.display = "block";
                    }
                } else {
                    //用户名正确
                    _this.$userNull.style.display = "none";
                    _this.$formatErr.style.display = "none";
                }
            }
            //密码验证
            _this.$password.onblur = function () {
                var regPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
                var fragPassword = regPassword.test(_this.$password.value);
                console.log(fragPassword);
                if (!fragPassword) {
                    //用户名错误
                    if (_this.$password.value == '') {
                        _this.$passNull.style.display = "block";
                        _this.$passNosafe.style.display = "none";
                    } else {
                        _this.$passNull.style.display = "none";
                        _this.$passNosafe.style.display = "block";
                    }
                } else {
                    //用户名正确
                    _this.$passNosafe.style.display = "none";
                    _this.$passNull.style.display = "none";
                }
            }
        }
    }
}())