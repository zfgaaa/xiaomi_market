var allGoods = (function () {
    return {
        init() {
            this.$firstNav = document.querySelector('#header-nav .headerNavCon .firstNav');
            this.$allGoods = document.querySelector('#title .title-con .allGoods')
            this.$swiperNavAll = document.querySelectorAll('#title .title-con .swiper-nav');
            this.$allGoodsAll = this.$allGoods.children;
            // console.log(this.$swiperNavAll);
            for (var i = 0; i < this.$allGoodsAll.length; i++) {
                this.$allGoodsAll[i].index = i;
            }
            this.event();
        },
        event() {
            var _this = this;
            this.$firstNav.onmouseover = function () {
                _this.$allGoods.style.display = "block";

            }
            this.$allGoods.onmouseleave = function () {
                _this.$allGoods.style.display = "none";
            }
            this.$allGoods.onmouseover = function (ev) {
                for (var j = 0; j < _this.$swiperNavAll.length; j++) {
                    _this.$swiperNavAll[j].style.display = "none";
                }
                ev = ev || window.event;
                var target = ev.target;
                if (target.nodeName == "LI") {
                    _this.$swiperNavAll[target.index].style.display = "block";
                }
            }
            this.$allGoods.onmouseleave = function () {
                // this.$allGoods.onmouseover = null;
            }
        }
    }
}())

// title

var title = (function () {
    return {
        init() {
            this.$swiper = document.querySelector('#main .main-con .main-left .swiper');
            // console.log(this.$swiper);
            this.$title = document.querySelector('#title');
            this.event();
        },
        event() {
            var _this = this;
            window.onscroll = function () {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                if (t >= 203) {
                    _this.$title.style.position = "fixed";
                    _this.$title.style.top = "0";
                    _this.$swiper.style.position = "fixed";
                } else if(t <= 203) {
                    _this.$title.style.position = "static";
                    _this.$title.style.top = "-63px";
                    _this.$swiper.style.position = "relative";
                }
            }
        }
    }
}())



// prompt


var prompt = (function () {
    return {
        init() {
            this.$prompt = document.querySelector('#prompt');
            this.$close = document.querySelector('#prompt p').children[2];
            // console.log(this.$close)
            this.event();
        },
        event() {
            var _this = this;
            this.$close.onclick = function () {
                _this.$prompt.style.display = "none";
            }
        }
    }
}())


// main


// main-left

// 轮播图

var swiper = (function () {
    var timer = null;
    return {
        init: function (ele) {
            // 判断ele是否为dom对象,还是类名,如果是类名,就转换为dom对象
            if (typeof ele == 'string') {
                ele = document.querySelector(ele);
            }
            this.$ele = ele;
            // 找到小圆圈的盒子
            this.$tipBox = this.$ele.querySelector('.banner-tip');
            // 获取所有小圆圈
            this.$tipLiAll = this.$tipBox.children;
            this.$preBtn = ele.querySelector('.btn-left');
            this.$nextBtn = ele.querySelector('.btn-right');
            // 获取所有的图片li
            this.$bannerBox = ele.querySelector('.swiper-con');
            // console.log(this.$bannerBox);
            this.$bannerLiAll = this.$bannerBox.children;
            // 克隆第一张放到最后面,克隆最后一张放到最前面
            var first = this.$bannerLiAll[0];
            var last = this.$bannerBox.lastElementChild;
            this.$bannerBox.appendChild(first.cloneNode(true));
            this.$bannerBox.insertBefore(last.cloneNode(true), first);
            this.$bannerBox.style.left = '-560px';
            for (var i = 0; i < this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].index = i;
            }
            // 当前展示图片的索引
            this.index = 0;
            this.event();
            this.autoPlay();
        },
        event: function () {
            var _this = this;
            this.$tipBox.onclick = function (e) {
                // 利用事件委托,给.banner-tip下面的所有小圆点添加单击事件
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {

                    _this.showImage(target.index);
                    _this.autoPlay(target.index);
                }
            };
            this.$preBtn.onclick = function () {
                _this.showImage(--_this.index);
                _this.autoPlay(_this.index);
            }
            this.$nextBtn.onclick = function () {
                _this.showImage(++_this.index);
                _this.autoPlay(_this.index);
            }
        },
        showImage: function (index) {
            var maxIndex = this.$tipLiAll.length - 1;
            if (index > maxIndex) {
                index = 0;
                this.$bannerBox.style.left = 0;
            } else if (index < 0) {
                index = maxIndex;
                this.$bannerBox.style.left = -560 * (maxIndex + 2) + 'px';
            }
            // 展示哪一张图片,对应的全局索引就变成对应图片的索引
            this.index = index;
            // 移出所有小圆圈的class

            for (var i = 0; i < this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].removeAttribute('class');
            }
            // 给对应的小圆圈添加class
            this.$tipLiAll[index].className = 'active';
            move(this.$bannerBox, 'left', -560 * (index + 1));
        },
        autoPlay(index) {
            clearInterval(timer);
            index = index || 0;
            timer = setInterval(() => {
                index++;
                if (index > 4) {
                    index = 1;
                }
                this.showImage(index);
            }, 4000)
        }
    }
}())



// 地址


var address = (function () {
    return {
        init() {
            this.$change = document.querySelector('#main .main-right .address p .change');
            // console.log(this.$change)
            this.$addressCon = document.querySelector('#main .main-con .main-right .address p .addressCon');
            // console.log(this.$change,this.$addressCon)
            this.$addressList = document.querySelector('#main .main-right .address form .addressList');
            // console.log(this.$addressList);
            this.$addressInp = document.querySelector('#main .main-right .address form input');
            // console.log(this.$addressInp)
            this.$form = document.querySelector('#main .main-right .address form');
            this.event();
        },
        event() {
            var _this = this;
            this.$change.onclick = function () {
                _this.$form.style.display = "block";
            }
            this.$addressList.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName == "LI") {
                    _this.$addressInp.value = target.children[0].innerHTML;
                    // console.log(111)
                }
                if (target.nodeName == "SPAN") {
                    _this.$addressInp.value = target.parentElement.children[0].innerHTML;
                    _this.$addressList.style.display = 'none';
                }
            }
        }
    }
}())



//选择版本

var edition = (function () {
    return {
        init() {
            this.$edition = document.querySelector('#main .main-right .phoneList');
            // console.log(this.$editionAll)
            this.$editionAll = this.$edition.querySelectorAll('.listCon');
            // console.log(this.$editionAll);
            this.$phonePrice = document.querySelector('#main .main-right .phonePrice');
            this.$selectEdition = this.$phonePrice.children[0].children[0].children[1];
            // console.log(this.$selectEdition)
            this.$selectColor = this.$phonePrice.children[0].children[0].children[1];
            // console.log(this.$selectColor)
            this.$phoneServer = this.$phonePrice.querySelectorAll('#main .main-right .phonePrice .phoneServerAll');
            this.$phonePriceTotal = this.$phonePrice.lastElementChild;
            this.$phoneUnitPrice = this.$phonePrice.children[0].children[1];
            // console.log(this.$phoneUnitPrice)
            this.$server = document.querySelector('#main .main-right .phoneServer');
            this.$serverListAll = this.$server.querySelectorAll('.phoneServerList');
            for(var i = 0; i < this.$serverListAll.length; i++){
                this.$serverListAll[i].index = i;
            }
            // console.log(this.$serverListAll)



            this.$shopCarBtn = document.querySelector('#main .main-right .btn-car .shopCarBtn');
            this.event();
        },
        event() {
            var _this = this;

            // 单击选择版本时获取选项中的信息放入结算中
            this.$edition.onclick = function (ev) {
                for(var i = 0; i < _this.$editionAll.length; i++){
                    _this.$editionAll[i].className = "listCon";
                }
                ev = ev || window.event();
                var target = ev.target || ev.srcElement;
                if (target.className == "listCon") {
                    target.className = "listCon changeEdition";
                    _this.$selectEdition.innerHTML = target.children[0].children[0].innerHTML;
                    _this.$phoneUnitPrice.innerHTML = target.children[1].innerHTML;
                }
                if (target.className == "GB") {
                    target.parentElement.parentElement.className = "listCon changeEdition";
                    _this.$selectEdition.innerHTML = target.parentElement.children[0].innerHTML;
                    _this.$phoneUnitPrice.innerHTML = target.parentElement.nextElementSibling.innerHTML;
                }
                if (target.className == "Note") {
                    target.parentElement.parentElement.className = "listCon changeEdition";
                    _this.$selectEdition.innerHTML = target.parentElement.children[0].innerHTML;
                    _this.$phoneUnitPrice.innerHTML = target.parentElement.nextElementSibling.innerHTML;
                }
                if (target.className == "yuan") {
                    target.parentElement.className = "listCon changeEdition";
                    _this.$selectEdition.innerHTML = target.parentElement.children[0].children[0].innerHTML;
                    _this.$phoneUnitPrice.innerHTML = target.innerHTML;
                }
            }
            this.$server.onclick = function(ev){

                for(var i = 0; i < _this.$serverListAll.length; i++){
                    _this.$serverListAll[i].className = "phoneServerList";
                    _this.$serverListAll[i].children[0].children[0].className = ""
                }
                for(var j = 0; j < _this.$phoneServer.length; j++){
                    _this.$phoneServer[j].style.display = "none";
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.className == "left"){
                    target.parentElement.className = "phoneServerList ServerListHide";
                    target.children[0].className = "hideEm";
                    _this.$phoneServer[target.parentElement.index].style.display = "block";
                    _this.$phonePriceTotal.children[1].innerHTML = + parseInt(target.parentElement.children[2].children[2].children[0].innerHTML) + parseInt(_this.$phoneUnitPrice.innerHTML) + "元"
                }
                if(target.nodeName == "EM"){
                    target.parentElement.parentElement.className = "phoneServerList ServerListHide";
                    target.className = "hideEm";
                    _this.$phoneServer[target.parentElement.parentElement.index].style.display = "block";
                    _this.$phonePriceTotal.children[1].innerHTML = + parseInt(target.parentElement.parentElement.children[2].children[2].children[0].innerHTML) + parseInt(_this.$phoneUnitPrice.innerHTML) + "元"
                }
                if(target.className == "center"){
                    target.parentElement.className = "phoneServerList ServerListHide";
                    target.parentElement.children[0].children[0].className = "hideEm";
                    _this.$phoneServer[target.parentElement.index].style.display = "block";
                    _this.$phonePriceTotal.children[1].innerHTML = + parseInt(target.parentElement.children[2].children[2].children[0].innerHTML) + parseInt(_this.$phoneUnitPrice.innerHTML) + "元"
                }
                if(target.className == "right"){
                    target.parentElement.className = "phoneServerList ServerListHide";
                    target.parentElement.children[0].children[0].className = "hideEm";
                    _this.$phoneServer[target.parentElement.index].style.display = "block";
                    _this.$phonePriceTotal.children[1].innerHTML = + parseInt(target.parentElement.children[2].children[2].children[0].innerHTML) + parseInt(_this.$phoneUnitPrice.innerHTML) + "元"
                }
            }


            // 点击购物车提交数据

            this.$shopCarBtn.onclick = function(){
                var Img = "images/detail-img/phone.jpg",
                    name = _this.$phonePrice.children[0].children[0].children[0].innerHTML;
                    edition = _this.$phonePrice.children[0].children[0].children[1].innerHTML
                    color = _this.$phonePrice.children[0].children[0].children[2].innerHTML;
                    price = _this.$phonePrice.children[0].children[1].innerHTML;
                    // console.log(price)
                    location.href = "http://localhost:8080/xiaomi_market/shopCar";
                _this.addShop(Img, name, edition, color, price);
            }

        },
        addShop(Img, name, edition, color, price, count){
            var shopList = localStorage.shopList || "[]";
            shopList = JSON.parse(shopList);
            shopList.push({Img: Img, name: name, edition: edition,color: color, price: price, count: 1})
            localStorage.shopList = JSON.stringify(shopList);
        }
    }
}())