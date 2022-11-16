var Body = {
    setColor: function(color) {
      $('body').css('color', color);
   },
    setBackgroundColor: function(color) {
      $('body').css('backgroundColor', color);
   }
  }

var Links = {
    setColor: function(color) {
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
    }
  }
  
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue') ;
    self.value = 'day' 
    } 
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue') ;
    self.value = 'night'
    }
  }