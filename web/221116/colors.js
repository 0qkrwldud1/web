var Body = {
    setColor: function(color) {
      document.querySelector('body').style.color = color;
   },
    setBackgroundColor: function(color) {
      document.querySelector('body').style.backgroundColor = color;
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
   
   // function BodySetBackgroudSetColor(color) {
   // document.querySelector('body').style.backgroundColor = color;
   // }
   
   // function BodySetColor(color) {
   // document.querySelector('body').style.color = color;
   // }
   
   // function setColor(color) {
   // var alist = document.querySelectorAll('a');
   // var i = 0;
   // while ( i < alist.length) {
   // 		alist[i].style.color = color;
   // 		console.log(alist[i]);
   // 		i = i + 1;
   // 	}
   // }
   
     function nightDayHandler(self) {
           var target = document.querySelector('body');
           if (self.value === 'night') {
               //target.style.backgroundColor = 'black';
               //target.style.color = 'white';
               // BodySetColor('white')
               // BodySetBackgroudSetColor('black')
               // setColor('powderblue')
               Body.setBackgroundColor('black')
               Body.setColor('white')
               self.value = 'day' 
               Links.setColor('powderblue')
               
           } else {
               //target.style.backgroundColor = 'white';
               //target.style.color = 'black';
               // BodySetColor('black')
               // BodySetBackgroudSetColor('white')
               // setColor('blue')
               Body.setBackgroundColor('white')
               Body.setColor('black')
               self.value = 'night'
               Links.setColor('blue')
               }
   }