/**
 * PullKeep
 */
(function(win, $) {

    console.log("workkkkkk");

    var startX, // 起始点X
        startY, // 起始点Y
        pullX,  // 结束点X
        pullY,  // 结束点Y
        moveX,  // X轴拖动距离
        moveY,  // Y轴拖动距离
        rem,    // css单位
        btn,    // 删除按钮宽度
        threshold, // 拖动阈值
        slideX,
        slideY;
    var _this;

    /**
     *
     * @param $Dom
     * @param callback
     * @constructor
     */
    var PullKeep = function ($Dom, callback) {

        console.log(this);
        
        _this = this;
        rem = parseFloat($('html').css('font-size').replace('px', '')),
        btn = 4.3 * rem;
        threshold = btn / 4.3;
        // console.log(threshold);
        if ($Dom instanceof jQuery && $Dom.hasClass('pull_keep')) {
            $Dom.append('<i class="pc_btn"></i>');
            $Dom.append('<i class="pd_btn"></i>');
            _this.addPullListener($Dom, callback);

            console.log("made ii");
        }
    }


    PullKeep.prototype = {
        constructor: PullKeep,
        addPullListener: function($Dom, callback) {
            $Dom.on('touchstart', function (e) {
                startX = e.originalEvent.targetTouches[0].pageX;
                startY = e.originalEvent.targetTouches[0].pageY;
                $(this).removeClass('trans');
                $(this).siblings().addClass('trans').css({transform: 'translateX(0)'}); // 收起其他项
            });
            $Dom.on('touchmove', function (e) {
                pullX = e.originalEvent.targetTouches[0].pageX;
                pullY = e.originalEvent.targetTouches[0].pageY;
                moveX = (startX - pullX) * 1;
                moveY = (startY - pullY) * 1;
                slideX = (pullX - startX) * 1;
                slideY = (pullY - startY) * 1;

                console.log('startX =' + startX, 'pullX =' + pullX, 'moveX =' + moveX, 'slideX =' + slideX, 'btn =' + btn);

                // 阻止纵向推拽
                if (Math.abs(moveY) > Math.abs(moveX)) {
                    return;
                }
                if (moveX <= btn && moveX > 0 ) {
                    $(this).css({transform: 'translateX(-' + moveX + 'px)'});
                    // $(this).css({transform: 'translateX(' + moveX + 'px)'});
                    console.log('moveX <= btn && moveX > 0');
                }
                // if (moveX < 0) {
                //     $(this).css({transform: 'translateX(-' + moveX + 'px)'});
                //     console.log('moveX < 0');
                // }

                if (slideX <= btn && slideX > 0 ) {
                    $(this).css({transform: 'translateX(' + slideX + 'px)'});
                    // $(this).css({transform: 'translateX(' + moveX + 'px)'});
                    console.log('slideX <= btn && slideX > 0');
                }

            });
            $Dom.on('touchend', function (e) {

                var trans = _this.transverseShift($(this)),
                 // 阈值范围内视为有效推拽
                    viewTrans = trans >= threshold && trans < btn ? btn : 0;

                    // 決定左滑還又滑最終停留位移的「方向」
                    if (slideX < 0){
                        viewTrans = viewTrans * -1;
                    } 
                    else if (slideX > 0){
                        viewTrans = viewTrans
                    }

                    console.log('viewTrans = ' + viewTrans);
                    console.log('trans = ' + trans, 'threshold =' + threshold, 'btn =' + btn);  
                    
                $(this).addClass('trans').css({transform: 'translateX(' + viewTrans + 'px)'});
                // $(this).addClass('trans').css({transform: 'translateX(-' + viewTrans + 'px)'});
                
                // 点击删除
                if (e.target.className == 'pc_btn') {
                    viewTrans = 0;
                    // e.stopPropagation();
                    e.preventDefault();
                    // if (callback) {
                    //     callback($Dom);
                    // }
                }
                if (e.target.className == 'pd_btn') {
                    viewTrans = 0;
                    // e.stopPropagation();
                    e.preventDefault();
                    // if (callback) {
                    //     callback($Dom);
                    // }
                }
            });
        },
        transverseShift: function($dom) {
            if (!$dom instanceof jQuery) {
                return;
            }
            var trans = $dom.css('transform');
            if (trans.indexOf('matrix') > -1) {
                return Math.abs(trans.split(',')[4]) || 0;
            } else {
                return Math.abs(trans.replace(/[^\d\.]/g, '')) || 0;
            }
        }
    }

    $.fn.extend({
        pullkeep: function(callback){
            this.each(function(){
                new PullKeep($(this), callback);
            });
            return this;
        }
    });

    win.PullKeep = PullKeep;
})(window, jQuery)
