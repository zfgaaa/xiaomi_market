// 倒计时
var mi_shop = (function () {
    var timer = '';
    return {
        init(ele) {
            this.$hours = document.querySelector('#mi-shop .mi-shop-con .buttom .hou');
            this.$minutes = document.querySelector('#mi-shop .mi-shop-con .buttom .min');
            this.$secounds = document.querySelector('#mi-shop .mi-shop-con .buttom .sec');
            this.$time = document.querySelector('#mi-shop .mi-shop-con .buttom .timeAll');
            this.$btn_left = document.querySelector("#mi-shop .mi-shop-con .top .btn-left");
            this.$btn_rigth = document.querySelector("#mi-shop .mi-shop-con .top .btn-right");
            this.$swiper = document.querySelector("#mi-shop .mi-shop-con .buttom .right-con");
            this.$swiper_wraper = this.$swiper.children;
            // for(var i = 0; i < this.$swiper_wraper.length; i++){
            //     this.$swiper_wraper[i].index = i;
            // }
            this.index = 0;
           
            this.countDown();
            this.event();
        },
        event() {
            var _this = this;
            // this.index = index;
            //单击左按钮
            // // 单击右按钮
            this.$btn_rigth.onclick = function () {
                _this.index += 4;
                if(_this.index >= 6){
                    _this.index = 6;
                }
                _this.$swiper.style.left = _this.index * (-247) + "px";
                if(_this.index < 6 && _this.index > 0){
                    _this.$btn_rigth.style.color = "#333";
                    _this.$btn_left.style.color = "#333";
                }
                if(_this.index >= 6){
                    _this.$btn_rigth.style.color = "#ccc";
                    _this.$btn_left.style.color = "#333";
                }
                if(_this.index <= 0){
                    _this.$btn_rigth.style.color = "#333";
                    _this.$btn_left.style.color = "#ccc";
                }
            }
            this.$btn_left.onclick = function () {
                _this.index -= 4;
                if(_this.index <= 0){
                    _this.index = 0;
                }
                _this.$swiper.style.left = _this.index * (-247) + "px";
                // _this.$btn_left.style.color = "#ccc";
                if(_this.index < 6 && _this.index > 0){
                    _this.$btn_rigth.style.color = "#333";
                    _this.$btn_left.style.color = "#333";
                }
                if(_this.index >= 6){
                    _this.$btn_rigth.style.color = "#ccc";
                    _this.$btn_left.style.color = "#333";
                }
                if(_this.index <= 0){
                    _this.$btn_rigth.style.color = "#333";
                    _this.$btn_left.style.color = "#ccc";
                }
            }
            
        },
        countDown() {

        },
    }
}())

