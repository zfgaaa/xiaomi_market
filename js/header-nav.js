var header_nav = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$searchInp = document.querySelector('#header-nav form input');
            this.$MI8 = document.querySelector("#header-nav form .MI8");
            this.$MIX = document.querySelector("#header-nav form .MIX");
            this.$searchBtn = document.querySelector("#header-nav form button");
            this.$searchSelect = document.querySelector('#header-nav .headerNavCon .searchSelect');
            this.$name = document.querySelector('#header-nav form .searchList .name');
            this.$bigNav = document.querySelector('#header-nav .header_bigNav');
            this.$bigNavAll = this.$bigNav.children;
            this.$header_nav = document.querySelector('#header-nav');
            for(var i = 0; i < this.$bigNavAll.length; i++){
                this.$bigNavAll[i].index = i;
            }
            this.$headerShop = document.querySelector('#header-nav .headerShopList');
            this.$headerShopListAll = this.$headerShop.children;
            this.event();
        },
        event(){
            var _this = this;
            // 搜索框获得焦点时MI8，MIX隐藏,下拉框显示
            this.$searchInp.onfocus = function(){
                _this.$MI8.style.opacity = "0";
                _this.$MIX.style.opacity = "0";
                _this.$searchInp.style.borderColor = "#ff6700";
                _this.$searchBtn.style.borderColor = "#ff6700";
                _this.$searchSelect.style.display = "block";
            }
            // 搜索框失去焦点时MI8，MIX显示，下拉框隐藏
            this.$searchInp.onblur = function(){
                _this.$MI8.style.opacity = "1";
                _this.$MIX.style.opacity = "1";
                _this.$searchInp.style.borderColor = "#e0e0e0";
                _this.$searchBtn.style.borderColor = "#e0e0e0";
            }
            
            this.$searchSelect.onclick = function(ev){
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$searchInp.value == '';
                    _this.$searchInp.value = target.firstChild.innerHTML;
                    _this.$searchSelect.style.display = "none";
                } else if(target.className == "name"){
                    _this.$searchInp.value == '';
                    _this.$searchInp.value = target.innerHTML;
                    _this.$searchSelect.style.display = "none";
                }else{
                    _this.$searchInp.value == '';
                    _this.$searchInp.value = target.previousElementSibling.innerHTML;
                    _this.$searchSelect.style.display = "none";
                }
            }

            // 导航栏下拉框的隐藏和显示
            this.$bigNav.onmouseover = function(ev){
                for(var i = 0; i < _this.$headerShopListAll.length; i++){
                     _this.$headerShopListAll[i].className = "headerShopList-con";
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$headerShop.style.height = "225px";
                    _this.$headerShop.style.boxShadow = "0px 5px 5px rgb(58, 54, 54)";
                    _this.$headerShopListAll[target.index].className = "headerShopList-con shopDisplay";
                }
                if(target.nodeName == "A"){
                    _this.$headerShopListAll[target.parentElement.index].className = "headerShopList-con shopDisplay";
                }
                if(target.index == 8 || target.index == 9){
                    _this.$headerShop.style.height = "0";
                    _this.$headerShop.style.boxShadow = "";
                }
            }   
            this.$bigNav.onmouseleave = function(ev){
                _this.$headerShop.style.height = "0";
                _this.$headerShop.style.boxShadow = "";
            
            }  
        },
    }
}())