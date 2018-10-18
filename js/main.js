// 家电
var main_ele = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$eleNav = this.$ele.querySelector('.ele-nav');
            this.$eleNavAll = this.$eleNav.children;
            this.$eleRightAll = this.$ele.querySelectorAll('.buttom .right')
            for(var i = 0; i < this.$eleNavAll.length; i++){
                this.$eleNavAll[i].index = i;
            }
            
            this.event();
        },
        event(){
            var _this = this;
            this.$eleNav.onmouseover = function(ev){
                for(var j = 0; j < _this.$eleNavAll.length; j++){
                    _this.$eleRightAll[j].className = "right";
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$eleRightAll[target.index].className = "right eleHideRight";
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right eleHideRight";
                }
            }
        }
    }
}())

// 智能
var main_robot = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$eleNav = this.$ele.querySelector('.robot-nav');
            this.$eleNavAll = this.$eleNav.children;
            this.$eleRightAll = this.$ele.querySelectorAll('.buttom .right')
            // console.log(this.$eleRightAll);
            for(var i = 0; i < this.$eleNavAll.length; i++){
                this.$eleNavAll[i].index = i;
            }
            this.event();
        },
        event(){
            var _this = this;
            this.$eleNav.onmouseover = function(ev){
                for(var j = 0; j < _this.$eleNavAll.length; j++){
                    _this.$eleRightAll[j].className = "right";
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$eleRightAll[target.index].className = "right robotHideRight";
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right robotHideRight";
                }
            }
        }
    }
}())

// 搭配
var main_fix = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$eleNav = this.$ele.querySelector('.fix-nav');
            this.$eleNavAll = this.$eleNav.children;
            this.$eleRightAll = this.$ele.querySelectorAll('.buttom .right')
            // console.log(this.$eleRightAll);
            for(var i = 0; i < this.$eleNavAll.length; i++){
                this.$eleNavAll[i].index = i;
            }
            this.event();
        },
        event(){
            var _this = this;
            this.$eleNav.onmouseover = function(ev){
                for(var j = 0; j < _this.$eleNavAll.length; j++){
                    _this.$eleRightAll[j].className = "right";
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$eleRightAll[target.index].className = "right fixHideRight";
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right fixHideRight";
                }
            }
        }
    }
}())

// 配件
var main_parts = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$eleNav = this.$ele.querySelector('.parts-nav');
            this.$eleNavAll = this.$eleNav.children;
            this.$eleRightAll = this.$ele.querySelectorAll('.buttom .right')
            // console.log(this.$eleRightAll);
            for(var i = 0; i < this.$eleNavAll.length; i++){
                this.$eleNavAll[i].index = i;
            }
            this.event();
        },
        event(){
            var _this = this;
            this.$eleNav.onmouseover = function(ev){
                for(var j = 0; j < _this.$eleNavAll.length; j++){
                    _this.$eleRightAll[j].className = "right";
                  
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$eleRightAll[target.index].className = "right partsHideRight";
              
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right partsHideRight";
                }
            }
        }
    }
}())

// 生活周边
var main_around = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$eleNav = this.$ele.querySelector('.around-nav');
            this.$eleNavAll = this.$eleNav.children;
            this.$eleRightAll = this.$ele.querySelectorAll('.buttom .right')
            // console.log(this.$eleRightAll);
            for(var i = 0; i < this.$eleNavAll.length; i++){
                this.$eleNavAll[i].index = i;
            }
            this.event();
        },
        event(){
            var _this = this;
            this.$eleNav.onmouseover = function(ev){
                for(var j = 0; j < _this.$eleNavAll.length; j++){
                    _this.$eleRightAll[j].className = "right";
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$eleRightAll[target.index].className = "right aroundHideRight";
              
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right aroundHideRight";
                   
                }
            }
        }
    }
}())


// 为你推荐


var recommend = (function(){
    return {
        init(){
            this.$btnLeft = document.querySelector('#main .recommend .top .btn .btn-left');
            this.$btnRight = document.querySelector('#main .recommend .top .btn .btn-right');
            this.$buttom = document.querySelector('#main .recommend .buttom .buttom-con');
            this.$recommendAll = this.$buttom.children;
            // for(var i = 0; i < this.$recommendAll.length; i++){
            //     this.$recommendAll[i].index = i;
            // }
            this.index = 0
            this.event();
        },
        event(){    
            var _this = this;
            
            this.$btnRight.onclick = function(){
                _this.index += 5;
                if(_this.index >= 15){
                    _this.index = 15
                }
                _this.$buttom.style.left = _this.index * (-247) + "px";
                if(_this.index < 15 && _this.index > 0){
                    _this.$btnRight.style.color = "#333";
                    _this.$btnLeft.style.color = "#333";
                }
                if(_this.index >= 15){
                    _this.$btnRight.style.color = "#ccc";
                    _this.$btnLeft.style.color = "#333";
                }
                if(_this.index <= 0){
                    _this.$btnRight.style.color = "#333";
                    _this.$btnLeft.style.color = "#ccc";
                }
            }
            this.$btnLeft.onclick = function(){
                _this.index -= 5;
                if(_this.index <= 0){
                    _this.index = 0
                }
                _this.$buttom.style.left = _this.index * (-247) + "px";
                if(_this.index < 15 && _this.index > 0){
                    _this.$btnRight.style.color = "#333";
                    _this.$btnLeft.style.color = "#333";
                }
                if(_this.index >= 15){
                    _this.$btnRight.style.color = "#ccc";
                    _this.$btnLeft.style.color = "#333";
                }
                if(_this.index <= 0){
                    _this.$btnRight.style.color = "#333";
                    _this.$btnLeft.style.color = "#ccc";
                }
            }
        }
    }
}())



// 内容


var swiperContent = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$swiperLi = this.$ele.children[1];
            this.$btnLeft = this.$ele.children[3];
            this.$btnRight = this.$ele.children[4];
            this.$tipLiAll = this.$ele.children[2].children;
            this.$tipLi = this.$ele.children;
            for(var i = 0 ; i < this.$tipLiAll.length; i ++){
                this.$tipLiAll[i].index = i;
            }
            this.index = 0;
            this.event();
        },
        event(){
            var _this = this;
            this.$tipLi.onclick = function(ev){
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.showImages(target.index);
                }
            }
            this.$btnLeft.onclick = function(){
                _this.showImages(--_this.index);
            }
            this.$btnRight.onclick = function(){
                _this.showImages(++_this.index);
            }
        },
        showImages(index){
            var maxIndex = this.$tipLiAll.length - 1;
            if(index > maxIndex){
                index = 0;
                this.$swiperLi.style.left = 0;
            }else if(index < 0){
                index = maxIndex;
                this.$swiperLi.style.left = -296 * (maxIndex + 2) + "px";
            }
            var _this = this;
            _this.index = index;
            for(var j = 0; j < this.$tipLiAll.length; j++){
                _this.$tipLiAll[j].removeAttribute('class')
            }
            _this.$tipLiAll[this.index].className = "bot";
            _this.$swiperLi.style.left = this.index * (-296) + "px";
        }
    }
}())


