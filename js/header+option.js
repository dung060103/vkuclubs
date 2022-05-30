window.addEventListener('load',function()
{
    var list_btncheck = document.querySelectorAll('.btn_check');
    for(var i =0; i<list_btncheck.length ; i++)
    {
        list_btncheck[i].addEventListener('click', load_layout);
    }

})

window.addEventListener('scroll', function () {
    const header = document.querySelector('.Header_nav');
    header.classList.toggle('sticky', window.scrollY > 0);

    var navigation = document.querySelector('.list-menu');
    document.querySelector('.toggle').onclick = function () {
        this.classList.toggle('active');
        navigation.classList.toggle('menu-list__active');
    }

 
})
function Show_Contain_Seatch()
{      
    var contain_search = document.querySelector('.gTkeTQ')
    var btn_search = document.getElementsByClassName('cHkmYJ');                      
    contain_search.classList.add('PSxST');
    contain_search.classList.remove('gTkeTQ');
    btn_search[0].style.display= "none";

}
function turn_off_openDetails()
{
    var Details =document.querySelectorAll('details');
    for(var i=0;i<Details.length;i++)
    {
        Details[i].open=false;
    }
}

function hide_search()
{
    var contain_search = document.querySelector('.PSxST')
    contain_search.classList.remove('PSxST');
    contain_search.classList.add('gTkeTQ');
    var btn_search = document.getElementsByClassName('cHkmYJ');   
    btn_search[0].style.display= "block";
}
function show_drop_menu_OrderInput()
{
    const  OrderInput = document.querySelector('.dropdown')
    OrderInput.classList.toggle('is-active');
}
function show_drop_item_is_active(event)
{
   
    // console.log("122332");
    // console.log(event.target);
    
}
        function myFunction(event) { 
        // var x = event.target;
        // document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
        // console.log(x);
        var item_is_actived = document.querySelector('.dropdown-content .is-active');
        console.log(item_is_actived);
        // item_is_actived.classList.toggle('is-active');
         var item_is_active = event.target;
         item_is_active.classList.toggle('is-active');
}
function load_layout(event)
{
    if(event.target.classList.contains('check-struct'))
    {
        console.log('OKI');
        document.querySelector('.columns.is-desktop').classList.remove('row');
    }
    else if (event.target.classList.contains('check-struct1'))
    {
        document.querySelector('.columns.is-desktop').classList.add('row');
        console.log('OKI2');
    }
}
