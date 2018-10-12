var banner = (function(){
    return {
        init(ele){
            this.$nav = document.querySelector('#banner .banner-con .nav');
            this.$navLiAll = document.querySelector('#banner .banner-con .nav').children;
            this.$swiperNavAll = document.querySelectorAll('#banner .banner-con .swiper-nav');
            for(var i = 0; i < this.$navLiAll.length; i++){
                this.$navLiAll[i].index = i;
            }

            this.event();
        },
        event(){
            var _this = this;
            this.$nav.onmouseover = function(ev){
                for(var j = 0; j < _this.$swiperNavAll.length; j ++){
                    _this.$swiperNavAll[j].className = "swiper-nav";
                }
                ev = ev || window.event;
                var target = ev.target || srcElement;
                if(target.nodeName == "LI"){
                    _this.$swiperNavAll[target.index].className = "swiper-nav swiperListHide";
                }
                if(target.nodeName == "SPAN"){
                    _this.$swiperNavAll[target.parentElement.parentElement.index].className = "swiper-nav swiperListHide";
                }
            }
        }
    }
}())