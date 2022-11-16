var Body = {
    setColor: function(color) {
        $('body').css('color', color);
//    document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
//    document.querySelector('body').style.backgroundColor = color;
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
            Links.setColor('powderblue');
            self.value = 'day'
            // BodySetColor('white');
            // BodySetBackgroudSetColor('black')
            // LinkssetColor('powderblue');
            
        } 
        else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            Links.setColor('blue');
            self.value = 'night'
            // BodySetColor('black');
            // BodySetBackgroudSetColor('white')
            // LinkssetColor('blue');
            
            }
    }   

    
    // function LinkssetColor(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while ( i < alist.length) {
	// 	alist[i].style.color = color;
	// 	console.log(alist[i]);
	// 	i = i + 1;
	//     }
    // }
    // function BodySetColor(color) {
    // document.querySelector('body').style.color = color;
    // }
    // function BodySetBackgroudSetColor(color) {
    // document.querySelector('body').style.backgroundColor = color;
    // }
