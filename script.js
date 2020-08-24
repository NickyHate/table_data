$(function(){
$.getJSON("default.json", function (data) {
  $.each(data, function (key, data) {
      if(data.parentId === 0){
      $(".new-table").append(
        `<tr id="${data.id}" class="${data.isActive ? "active" : "unactive"}">
        <td>${data.name}</td>
        <td>${data.balance}</td>       
        <td>${data.email}</td>
      </tr>`
      );
      } else {
          console.log(data.parentId)
      }
  });

  $('.sort-active').click(function(){
     $('.unactive').each(function(){
         $(this).hide();
     })
     $('.active').each(function(){
        $(this).show();
    })
  })
  $('.sort-unactive').click(function(){
    $('.active').each(function(){
        $(this).hide();
    })
    $('.unactive').each(function(){
        $(this).show();
    })
 })
 $('.unsort').click(function(){
    $('.active').each(function(){
        $(this).show();
    })
    $('.unactive').each(function(){
        $(this).show();
    })
 })
});
});