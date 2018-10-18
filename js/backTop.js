var backTop = (function(){
    return {
        init(){
            this.$backTop = document.querySelector('#main .fixed .backTop');
            this.event();
        },
        event(){
            var _this = this;
            document.onscroll = function(){
                if(this.body.onscrollTop > 2000 || this.documentElement.scrollTop > 2000){
                    _this.$backTop.style.display = "block";
                }
                if(this.body.onscrollTop < 2000 || this.documentElement.scrollTop < 2000){
                    _this.$backTop.style.display = "none";
                }
            }
        }
    }
}())