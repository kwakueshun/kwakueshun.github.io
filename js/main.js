(function () {
	var utils = {
		hasClass: function (element, className) {
			return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
		},
		addClass: function (element, className) {
			if (!utils.hasClass(element, className)) {
				if (element.className === '') {
					element.className += className;
				} else {
					element.className += " " + className;
				}
			}
		},
		removeClass: function (element, className) {
			if (utils.hasClass(element, className)) {
				var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
				element.className = element.className.replace(reg, '');
			}
		},
		toggleClass: function (element, className) {
			if (this.hasClass(element, className)) {
				this.removeClass(element, className);
			} else {
				this.addClass(element, className);
			}
		}
	};

	var root = document.documentElement;
	var body = document.body;
	utils.addClass(root, 'js');

	var state = document.readyState;
	if(state === 'interactive' || state === 'complete') {
		var toggleMenu = document.getElementById('toggle-menu');
		var mainNav = document.getElementsByClassName('main-nav')[0];
		utils.addClass(mainNav, 'js-main-nav');
		toggleMenu.addEventListener('click', function (event) {
			var isActive = this.className == 'open';
			this.className = !isActive ? 'open' : '';
			utils.toggleClass(mainNav, 'open');
			utils.toggleClass(body, 'menu-open');

			event.preventDefault();
		});
	} else {
		setTimeout(arguments.callee, 100);
	}
})();
