class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}



//kursor

// class ArrowPointer {
// 	constructor() {
// 	  this.root = document.body
// 	  this.cursor = document.querySelector(".curzr")
  
// 	  this.position = {
// 		distanceX: 0, 
// 		distanceY: 0,
// 		distance: 0,
// 		pointerX: 0,
// 		pointerY: 0,
// 	  },
// 	  this.previousPointerX = 0
// 	  this.previousPointerY = 0
// 	  this.angle = 0
// 	  this.previousAngle = 0
// 	  this.angleDisplace = 0
// 	  this.degrees = 57.296
// 	  this.cursorSize = 20
  
// 	  this.cursorStyle = {
// 		boxSizing: 'border-box',
// 		position: 'fixed',
// 		top: '0px',
// 		left: `${ -this.cursorSize / 2 }px`,
// 		zIndex: '2147483647',
// 		width: `${ this.cursorSize }px`,
// 		height: `${ this.cursorSize }px`,
// 		transition: '250ms, transform 100ms',
// 		userSelect: 'none',
// 		pointerEvents: 'none'
// 	  }
  
// 	  this.init(this.cursor, this.cursorStyle)
// 	}
  
// 	init(el, style) {
// 	  Object.assign(el.style, style)
// 	  this.cursor.removeAttribute("hidden")
	  
// 	}
  
// 	move(event) {
// 	  this.previousPointerX = this.position.pointerX
// 	  this.previousPointerY = this.position.pointerY
// 	  this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x
// 	  this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y
// 	  this.position.distanceX = this.previousPointerX - this.position.pointerX
// 	  this.position.distanceY = this.previousPointerY - this.position.pointerY
// 	  this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2)
	
// 	  this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`
  
// 	  if (this.distance > 1) {
// 		this.rotate(this.position)
// 	  } else {
// 		this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`
// 	  }
// 	}
  
// 	rotate(position) {
// 	  let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees
// 	  let modAngle
// 	  const style = this.cursor.style
// 	  this.previousAngle = this.angle
  
// 	  if (position.distanceX <= 0 && position.distanceY >= 0) {
// 		this.angle = 90 - unsortedAngle + 0
// 	  } else if (position.distanceX < 0 && position.distanceY < 0) {
// 		this.angle = unsortedAngle + 90
// 	  } else if (position.distanceX >= 0 && position.distanceY <= 0) {
// 		this.angle = 90 - unsortedAngle + 180
// 	  } else if (position.distanceX > 0 && position.distanceY > 0) {
// 		this.angle = unsortedAngle + 270
// 	  }
  
// 	  if (isNaN(this.angle)) {
// 		this.angle = this.previousAngle
// 	  } else {
// 		if (this.angle - this.previousAngle <= -270) {
// 		  this.angleDisplace += 360 + this.angle - this.previousAngle
// 		} else if (this.angle - this.previousAngle >= 270) {
// 		  this.angleDisplace += this.angle - this.previousAngle - 360
// 		} else {
// 		  this.angleDisplace += this.angle - this.previousAngle
// 		}
// 	  }
// 	  style.transform += ` rotate(${this.angleDisplace}deg)`
  
// 	  setTimeout(() => {
// 		modAngle = this.angleDisplace >= 0 ? this.angleDisplace % 360 : 360 + this.angleDisplace % 360
// 		if (modAngle >= 45 && modAngle < 135) {
// 		  style.left = `${ -this.cursorSize }px`
// 		  style.top = `${ -this.cursorSize / 2 }px`
// 		} else if (modAngle >= 135 && modAngle < 225) {
// 		  style.left = `${ -this.cursorSize / 2 }px`
// 		  style.top = `${ -this.cursorSize }px`
// 		} else if (modAngle >= 225 && modAngle < 315) {
// 		  style.left = '0px'
// 		  style.top = `${ -this.cursorSize / 2 }px`
// 		} else {
// 		  style.left = `${ -this.cursorSize / 2 }px`
// 		  style.top = '0px'
// 		}
// 	  }, 0)
// 	}
  
// 	remove() {
// 	  this.cursor.remove()
// 	}
//   }
  
//   (() => {
// 	const cursor = new ArrowPointer()
// 	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {    
// 	  document.onmousemove = function (event) {
// 		cursor.move(event)
// 	  }
// 	} else {
// 	  cursor.remove()
// 	}
//   })()
  