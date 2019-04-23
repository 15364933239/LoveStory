/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(together){
	var time = new Date();
	var date = new Date(together);
	var year = time.getFullYear() - date.getFullYear();
	var month = time.getMonth()+1 - date.getMonth();
	if(month < 0) month = 12 - month;
	
	var day = time.getDate() - date.getDate();
	console.log(time.getDate() + "---"+ date.getDate())
	if(day < 0) day = 31 - day;
	console.log(day)
	
	var hour = time.getHours() - date.getHours();
	if(hour <= 0) hour = 24 - hour;
	console.log(hour)
	
	var minute = time.getMinutes() - date.getMinutes();
	if(minute <= 0) minute = 60 - minute;
	console.log(minute)
	
	var second = time.getSeconds() - date.getSeconds();
	if(second <= 0) second = 60 - second;
	console.log(second)
	
	day = year*365 +  month*31 + day;
	var result = "第 <span class=\"digit\">" + day + "</span> 天 <span class=\"digit\">" + hour + "</span> 小时 <span class=\"digit\">" + minute + "</span> 分钟 <span class=\"digit\">" + second + "</span> 秒"; 
	$("#clock").html(result);
}
