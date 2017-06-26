window.onload = function(){

var Effect = (function() {
    
    var Slider = function(o) {
        this.setting      = typeof o === 'object' ? o : {};
        this.target       = this.setting.target || 'shuff';
        this.showMarkers  = this.setting.showMarkers || false;
        this.showControls = this.setting.showControls || false;
        this.timer        = null;
        this.currentTime  = null;
        this.ms           = 35;
        this.autoMs       = 3000;
        this.iTarget      = 0;
        this.nextTarget   = 0;
        this.speed        = 0;
        
        this.init();
        this.handleEvent();
    };
    
    Slider.prototype = {
        init: function() {
            this.obj      = document.getElementById(this.target);
            
            this.oUl      = this.obj.getElementsByTagName('ul')[0];
            this.aUlLis   = this.oUl.getElementsByTagName('li');
            this.width    = this.aUlLis[0].offsetWidth;
            this.number   = this.aUlLis.length;
            
            this.oUl.style.width = this.width * this.number + 'px';
            
            if(this.showMarkers) {
                var oDiv = document.createElement('div');
                var aLis = [];
                for(var i = 0; i < this.number; i++) {
                    aLis.push('<li>'+ (i+1) +'<\/li>');
                };
                oDiv.innerHTML = '<ol>'+ aLis.join('') +'<\/ol>';
                this.obj.appendChild(oDiv.firstChild);
                this.aLis = this.obj.getElementsByTagName('ol')[0].getElementsByTagName('li');
                this.aLis[0].className = 'active';
                 this.aLis[0].getElementsByTagName("a")[0].className = 'dot';
                oDiv = null;
            };
            
            if(this.showControls) {
                this.oNext = document.createElement('p');
                this.oNext.className = 'arrow';
                this.obj.appendChild(this.oNext);
                
            };
            
        },
        
        handleEvent: function() {
            var that = this;
            
            this.currentTime = setInterval(function() {
                that.autoPlay();
            }, this.autoMs);
            
            this.addEvent(this.obj, 'mouseover', function() {
                clearInterval(that.currentTime);
            });//鼠标悬浮的时候停止运动
            
            this.addEvent(this.obj, 'mouseout', function() {
                that.currentTime = setInterval(function() {
                    that.autoPlay();
                }, that.autoMs);
            });//鼠标离开后自动轮播
            
            if(this.showMarkers) {
                for(var i = 0; i < this.number; i++) {
                    var el = this.aLis[i];
                    (function(index) {
                        that.addEvent(el, 'click', function() {
                            that.goTime(index);
                            console.log(that);
                        });
                    })(i);
                };
            };//点击OL里的里，图片跳转
            
            if(this.showControls) {
                this.addEvent(this.oNext, 'click', function() {
                    that.autoPlay();
                });
            };
            
        },
        
        addEvent: function(el, type, fn) {
            if(window.addEventListener) {
                el.addEventListener(type, fn, false);
            }
            else if(window.attachEvent) {
                el.attachEvent('on' + type, fn);
            };
        },
        
        autoPlay: function() {
            this.nextTarget++;
            if(this.nextTarget >= this.number) {
                this.nextTarget = 0;
            };
            this.goTime(this.nextTarget);
        },
        
        goTime: function(index) {
            var that = this;
            
            if(this.showMarkers) {
                for(var i = 0; i < this.number; i++) {
                    i == index ? this.aLis[i].className = 'active' : this.aLis[i].className = '';
                   i == index ?this.aLis[i].getElementsByTagName("a")[0].className = "dot" : this.aLis[i].getElementsByTagName("a")[0].className = "";
                };
            };
            
            this.iTarget = -index * this.width;
            if(this.timer) {
                clearInterval(this.timer);
            };
            this.timer = setInterval(function() {
                that.doMove(that.iTarget);
            }, this.ms);
        },
        
        doMove: function(target) {
            this.oUl.style.left = this.speed + 'px';
            this.speed += (target - this.oUl.offsetLeft) / 3;
            if(Math.abs(target - this.oUl.offsetLeft) === 0) {
                this.oUl.style.left = target + 'px';
                clearInterval(this.timer);
                this.timer = null;
            };
        }

    };
    
    return {
        
        shuff: function(o) {
            var tt = new Slider(o);
        }
    };
})();

// 调用语句
Effect.shuff({
    'targetElement': 'shuff',
    'showMarkers': true,
    'showControls': true
});

}