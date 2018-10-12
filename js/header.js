var headerJs = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);  
            this.$shopCarBtn = document.querySelector('#header .header-con .shopCar');
            this.$shopCarHide = document.querySelector('.shopCarHide');
            this.event();
        },
        event(){
            var _this = this;
            // 鼠标移入显示
            this.$shopCarBtn.onmouseenter = function(){
                _this.$shopCarHide.style.display = "block";
                _this.$shopCarBtn.style.backgroundColor = "#fff";
                _this.$shopCarBtn.style.color = "#ff6700";
            }
            // 鼠标移出隐藏
            this.$shopCarHide.onmouseleave = function(){
                _this.$shopCarHide.style.display = "none";
                _this.$shopCarBtn.style.backgroundColor = "#424242";
                _this.$shopCarBtn.style.color = "#b0b0b0";
            }
        }
    }
}())