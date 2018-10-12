var main_ele = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$eleNav = this.$ele.querySelector('.ele-nav');
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
                    _this.$eleRightAll[target.index].className = "right eleHideRight";
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right eleHideRight";
                }
            }
        }
    }
}())


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
                console.log(this.$eleRightAll)
            }
            this.event();
        },
        event(){
            var _this = this;
            this.$eleNav.onmouseover = function(ev){
                for(var j = 0; j < _this.$eleNavAll.length; j++){
                    _this.$eleRightAll[j].className = "right";
                    console.log( _this.$eleNavAll)
                }
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == "LI"){
                    _this.$eleRightAll[target.index].className = "right partsHideRight";
                    console.log(target.index)
                }
                if(target.nodeName == "A"){
                    _this.$eleRightAll[target.parentElement.index].className = "right partsHideRight";
                }
            }
        }
    }
}())



