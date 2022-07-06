// let allP = document.querySelectorAll('p')
// allP.forEach(p => p.addEventListener('click', () => {
//             p.classList.toggle('red')
//                   }

// ))

// $('p').forEach(p => p.addEventListener('click', () => {
//                   p.classList.toggle('red')
//                         }))
$('p').on('click', function (e) {
      $(e.currentTarget).toggleClass('red')
})

$('input[value="Hide"]').dblclick(() => $('p').addClass('red'))
$('input[value="show"]').dblclick(() => $('p').removeClass('red'))

// $('p').hover(() => $('p').css('color', 'purple'),() => $('p').css('color', 'black'))

$('p').on('mouseenter mouseleave', hoverfoo)

function hoverfoo(act) {
      if(act.type === 'mouseenter') {
      $(act.currentTarget)
      .css('color', 'yellow')
      .css('backgroundColor', 'red')
      .html('AAAAA')
}
      else {$(act.currentTarget)
            .css('color', 'black')
            .css('backgroundColor', 'white')
            .html('Lorem ipsum dolor')}
      
}
$('div').append('<p>I2m</p>');

$('input:last').dblclick(()=>{
      $('p').off()
})
$('p:nth-child(3)').replaceWith('<h1>1</h1>')