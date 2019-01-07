(function ($) {
    $.fn.CZParallax = function(options) {
        // Default settings
        let settings = $.extend({
        speed: 1,
        bgZoom: 1.05,
        fgZoom: 1,
        lock: '',
        fg: '',
        bgs: []
        }, options );
        
        this.each(() => {
            let _this = $(this);
            let W = _this.width();
            let H = _this.height();
            
            // Checking if parameters provided are numbers
            if(Number(settings.speed) !== settings.speed || Number(settings.bgZoom) !== settings.bgZoom || Number(settings.fgZoom) !== settings.fgZoom) throw 'CZP ERROR: Parameters speed, bgZoom and fgZoom need to be numbers.';

            // If speed parameter provided is 0 or less than 0, set it to 1
            if(settings.speed <= 0) settings.speed = 1;

            // Foreground image has to be provided
            if(settings.fg === '') {
                throw 'CZP ERROR: Foreground image link not supplied.';
            }
            else {
                _this.addClass('cz cz-foreground');
                _this.wrap('<div style="overflow:hidden;width:'+W+'px;height:'+H+'px;""></div>');
                _this.css({'background-image': 'url('+settings.fg+')', 'transform': 'scale('+settings.fgZoom/settings.bgZoom+')'});
                
                let L = settings.bgs.length;
                // At least one background image has to be provided
                if(L < 1) {
                    throw 'CZP ERROR: No background links supplied. Minimum 1 link is required.';
                }
                else {
                    settings.bgs.map((v, i) => {
                        let Z = i === 0 ? settings.bgZoom : 1;
                        _this.wrap('<div class="cz cz-background-'+(i+1)+'" style="background-image:url('+v+');height:'+H+'px;width:'+W+'px;transform:scale('+Z+')"></div>');
                    });

                    _this.mousemove(e => {
                        let X = e.pageX;
                        let Y = e.pageY;
                        let bgX = ((W/2)-X)/40*settings.speed;
                        let bgY = ((H/2)-Y)/40*settings.speed;
                        
                        // Direction locking
                        switch(settings.lock){
                            case 'x':
                            case 'X':
                                bgX = 0;
                                break;
                            case 'y':
                            case 'Y':
                                bgY = 0 
                                break;
                            case '':
                            case 'none':
                                break;
                            default:
                                throw 'CZP ERROR: Parameter lock can only be "x", "X", "y", "Y" or empty (not included).'
                        }
                        
                        // Foreground image movement
                        $(".cz-foreground").css({'background-position': 'calc(50% - '+bgX+'px) calc(50% - '+bgY+'px)', 'background-size': '90% auto'});

                        // Background image movement
                        settings.bgs.map((v, i) => {
                            $('.cz-background-'+(i+1)).css('background-position', 'calc(50% + '+bgX/(L-i)+'px) calc(50% + '+bgY/(L-i)+'px)');
                        });              
                    });
                }
            }
        });
        $('.cz').css({
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover'
        });
        $('.cz-foreground').css('background-size', 90*settings.fgZoom+'% auto');
    };
}( jQuery ));