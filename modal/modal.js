var modal = document.getElementById('modal');
var selector = document.getElementById('engineSelect');
var keyString = document.querySelector('input[name="keyStr"]').value;
var openBtn = document.getElementsByClassName('openBtn')[0];
var closeBtn = document.getElementsByClassName('modal-close-btn')[0];
var submitBtn = document.getElementsByName('submit')[0];

Element.prototype.Show = function() { 

    this.style.display = 'block';
}
Element.prototype.Hide = function() { 

    this.style.display = 'none';
}

closeBtn.addEventListener('click', function(){
    modal.Hide();
    openBtn.Show();
})

openBtn.addEventListener('click', function(){
    modal.Show();
    openBtn.Hide();
})
  

submitBtn.addEventListener('click', function(){

      window.open(selector.value + keyString)
   
  });

selector.addEventListener('change', function(){

     document.getElementsByName('keyStr')[0].placeholder = "Поиск в " + selector.value + "..";

    })

