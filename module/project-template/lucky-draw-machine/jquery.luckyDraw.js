; (function (global, $) {
	'use strict';
	// luckydraw time 
	var drawTime = 4;

	var luckyDraw = function (options) {
		// random generate number for winner prize
		var luckyNum = Math.round(Math.random() * (11) + 0);
		this.timer,
			// default setting for the lucky draw
			this.defaults = {
				id: 'lottery',
				index: -1,			// starting lucky draw position
				count: 0,
				speed: 20,			// spped for the rotation
				times: 0,			// rotation time (default)
				cycle: 60,          // rotation cycle
				prize: luckyNum,    // winner prize position
				beforeSend: $.noop,
				success: $.noop		// after success 
			},
			this.opts = $.extend({}, this.defaults, options),
			this.initialization()
	}

	luckyDraw.prototype = {
		constructor: luckyDraw,
		init: function (id) {
			var $lottery = $("#" + id),
				$units = $lottery.find(".lottery-unit");
			if ($units.length > 0) {
				this.opts.obj = $lottery;
				this.opts.count = $units.length;
				$lottery.find(".lottery-unit-" + this.opts.index).addClass("active");
			}
		},
		_initRoll: function () {
			var count = this.opts.count,
				index = this.opts.index;

			$(".lottery-unit-" + index).removeClass("active");
			index += 1;
			if (index > count - 1) {
				index = 0;
			};
			$(".lottery-unit-" + index).addClass("active");
			this.opts.index = index;
			return false;
		},
		stop: function (index) {
			this.opts.prize = index;
			return false;
		},
		luckyDrawRoll: function () {
			this.opts.times += 1;
			this._initRoll();
			if (this.opts.times > this.opts.cycle + 10 && this.opts.prize == this.opts.index) {
				clearTimeout(this.opts.timer);

				// set to continue click lucky draw 
				global.isClick = false;
				// global.isClick = true;

				// Wining Prize for show dialog
				var winingPrizeImg;

				console.log("this.opts.prize", this.opts.prize);
				switch (this.opts.prize) {
					case 0: winingPrizeImg = "img/reward/bmw-reward.png";
						break;
					case 1: winingPrizeImg = "img/thank.png";
						break;
					case 2: winingPrizeImg = "img/cash.png";
						break;
					case 3: winingPrizeImg = "img/iphone.png";
						break;
					case 4: winingPrizeImg = "img/rolex.png";
						break;
					case 5: winingPrizeImg = "img/thank.png";
						break;
					case 6: winingPrizeImg = "img/tv.png";
						break;
					case 7: winingPrizeImg = "img/thank.png";
						break;
					case 8: winingPrizeImg = "img/ref.png";
						break;
					case 9: winingPrizeImg = "img/cash.png";
						break;
					case 10: winingPrizeImg = "img/iphone.png";
						break;
					case 11: winingPrizeImg = "img/thank.png";
						break;
				}

				this.opts.success(winingPrizeImg, drawTime);

			} else {
				if (this.opts.times < this.opts.cycle) {
					this.opts.speed -= 10;
				} else {
					if (this.opts.times > this.opts.cycle + 10 && ((this.opts.prize == 0 && this.opts.index == 7) || this.opts.prize == this.opts.index + 1)) {
						this.opts.speed += 110;
					} else {
						this.opts.speed += 20;
					}
				}
				if (this.opts.speed < 40) {
					this.opts.speed = 40;
				}
				var self = this;
				this.opts.timer = setTimeout(function () {
					self.luckyDrawRoll();
				}, this.opts.speed);
			}
			return false;
		},
		initialization: function () {
			this.opts.beforeSend();
			this.init(this.opts.id);
			this.luckyDrawRoll();
		}
	}

	global.luckyDraw = luckyDraw;

	$.fn.luckyDraw = function (options) {
		global.isClick = false;

		$("#luckDrawBtn").click(function () {

			drawTime -= 1;
			if (drawTime < 0) {
				global.isClick = true;
			}

			if (isClick) return false;
			global.isClick = true;

			new luckyDraw(options);
		});
		return this;
	}

})(this, jQuery);



