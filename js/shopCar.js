var shopCar = (function () {
    return {
        init() {
            this.$shopListBox = document.querySelector("#main .main-con .ul_body");
            this.$clearFix = document.querySelector('#main .clearFix');
            this.$allShop = this.$clearFix.children[0].children[2].children[0];
            // console.log(this.$shopListBox)
            this.$alreadySelect = this.$clearFix.children[0].children[2].children[1];
            this.$checkAll = document.querySelector('#main .main-con .top .check_all').children[0];
            this.$priceTotal = document.querySelector("#main .main-con .clearFix .right .priceTotal");

            console.log(this.$priceTotal)
            this.getCarListData();
            this.event();
        },
        event() {
            var _this = this;
            var flag = true;
            this.$shopListBox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                // 点击加号input中的value值里加1
                if (target.className == "countAdd") {
                    target.previousElementSibling.value = parseInt(target.previousElementSibling.value) + 1;
                    target.parentElement.parentElement.children[5].innerHTML = parseInt(target.parentElement.parentElement.children[3].innerHTML) * parseInt(target.previousElementSibling.value) + "元";
                    // 点击减号时数量减少，，并且结算界面的物品总数相应减少
                    var allShop = target.parentElement.parentElement.parentElement.children;
                    _this.getCountTotal(allShop);
                    _this.countTotal(allShop);
                }
                if (target.className == "iconfont icon-plus1") {
                    target.parentElement.previousElementSibling.value = parseInt(target.parentElement.previousElementSibling.value) + 1;
                    target.parentElement.parentElement.parentElement.children[5].innerHTML = parseInt(target.parentElement.parentElement.parentElement.children[3].innerHTML) * parseInt(target.parentElement.previousElementSibling.value) + "元"
                    var allShop = target.parentElement.parentElement.parentElement.parentElement.children;
                    _this.getCountTotal(allShop);
                    _this.countTotal(allShop);

                }

                // 点击减号input中的value值减1
                if (target.className == "countJian") {
                    var num = 0;
                    var allShop = target.parentElement.parentElement.parentElement.children;
                    target.nextElementSibling.value = parseInt(target.nextElementSibling.value) - 1;
                    target.parentElement.parentElement.children[5].innerHTML = parseInt(target.parentElement.parentElement.children[3].innerHTML) * parseInt(target.nextElementSibling.value) + "元"
                    if (target.nextElementSibling.value <= 1) {
                        target.nextElementSibling.value = 1
                        target.parentElement.parentElement.children[5].innerHTML = parseInt(target.parentElement.parentElement.children[3].innerHTML) * parseInt(target.nextElementSibling.value) + "元"
                    }
                    _this.getCountTotal(allShop);
                    _this.countTotal(allShop);

                }
                if (target.className == "iconfont icon-jian") {
                    target.parentElement.nextElementSibling.value = parseInt(target.parentElement.nextElementSibling.value) - 1;
                    target.parentElement.parentElement.parentElement.children[5].innerHTML = parseInt(target.parentElement.parentElement.parentElement.children[3].innerHTML) * parseInt(target.parentElement.nextElementSibling.value) + "元"
                    // console.log(target.parentElement.nextElementSibling.value)
                    if (target.parentElement.nextElementSibling.value <= 1) {
                        target.parentElement.nextElementSibling.value = 1
                        target.parentElement.parentElement.parentElement.children[5].innerHTML = parseInt(target.parentElement.parentElement.parentElement.children[3].innerHTML) * parseInt(target.parentElement.nextElementSibling.value) + "元"
                    }

                    var allShop = target.parentElement.parentElement.parentElement.parentElement.children;
                    _this.getCountTotal(allShop);
                    _this.countTotal(allShop);
                }


                // 点击check_all取消选择和选择
                if (target.id == "check_all_id") {
                    // flag = true;
                    if (flag) {
                        target.className = "iconfont";
                        flag = false;

                    } else {
                        target.className = "iconfont icon-checkbox";
                        flag = true;
                    }
                    var allShop = _this.$shopListBox.children;

                    _this.getCountSelectTotal(allShop)
                    _this.countTotal(allShop);

                }

                // 点击  ×  删除此条数据
                if(target.className == "del"){
                    var allShop = target.parentElement.parentElement.parentElement.children;
                    target.parentElement.parentElement.remove();
                    _this.getCountSelectTotal(allShop)
                    _this.countTotal(allShop);
                }


            }
            this.$checkAll.onclick = function(){
                var allShop = _this.$shopListBox.children
                console.log(allShop)
                if (flag) {
                    _this.$checkAll.className = "iconfont";
                    for(var i = 0; i < allShop.length; i++){
                        allShop[i].children[0].children[0].className = "iconfont"
                    }
                    
                    flag = false;

                } else {
                    this.className = "iconfont icon-checkbox";
                    for(var i = 0; i < allShop.length; i++){
                        allShop[i].children[0].children[0].className = "iconfont icon-checkbox"
                    }
                    flag = true;
                }
                _this.getCountSelectTotal(allShop)
                _this.countTotal(allShop);
            }

        },

        // 获取商品详情页传输过来的数据
        getCarListData() {
            var _this = this;
            var num = 0;
            var carList = JSON.parse(localStorage.shopList);
            for (var i = 0; i < carList.length; i++) {
                num += 1;
            }
            this.$allShop.innerHTML = num;
            this.$alreadySelect.innerHTML = num;
            _this.insertShopList(carList);
            // _this.countTotal(carList);
        },

        // 渲染数据到购物车页面
        insertShopList(data) {
            var arr = [];
            // console.log(data)
            for (var i = 0; i < data.length; i++) {
                arr.push(`
                <ul class="list">
                    <li class="check_all">
                        <i class="iconfont icon-checkbox" id="check_all_id"></i>
                    </li>
                    <li class="img">
                        <img src= "${data[i].Img}" alt="">
                    </li>
                    <li class="name">${data[i].name} 全网通版 ${data[i].edition.split('+')[0]}内存 深空灰 ${data[i].edition.split('+')[1]}</li>
                    <li class="unit_price">${data[i].price}</li>
                    <li class="num">
                        <a class="countJian"><i class="iconfont icon-jian"></i></a>
                        <input type="text" value="1">
                        <a class="countAdd"><i class="iconfont icon-plus1"></i></a>
                    </li>
                    <li class="total">${parseInt(data[i].price)}元</li>
                    <li class="active"><a class="del">×</a></li>
                </ul>
                `)
                // console.log(data[i].edition.split('+')[0])
            }
            this.$shopListBox.innerHTML = arr.join('');
        },

        // 计算购物车物品的总数

        // allShop是渲染数据的集合数组
        getCountTotal(allShop) {
            var num = 0;
            for (var i = 0; i < allShop.length; i++) {
                num = parseInt(num) + parseInt(allShop[i].children[4].children[1].value)
                this.$allShop.innerHTML = num;
            }
        },
        getCountSelectTotal(allShop) {
            var arr = [];
            var num = 0;
            for (var i = 0; i < allShop.length; i++) {
                if (allShop[i].children[0].children[0].className == "iconfont icon-checkbox") {
                    arr.push(allShop[i]);
                }else{
                    this.$alreadySelect.innerHTML = 0;
                }
                this.$allShop.innerHTML = allShop.length;

            }
            for (var j = 0; j < arr.length; j++) {
                num = parseInt(num) + parseInt(arr[j].children[4].children[1].value)
                this.$alreadySelect.innerHTML = num;
            }

        },

        // 计算总价
        countTotal(allShop){
            var count = 0;
            for(var i = 0; i < allShop.length; i++){
                count += parseInt(allShop[i].children[5].innerHTML);
            }
            this.$priceTotal.innerHTML = count;
        }

    }
}())