$.getJSON("default.json", function (data) {
  $.each(data, function (key, data) {
    if (data.parentId === 0) {
      $(".new-table").append(
        `<tr id="${data.id}" class="100">
        <th>${data.name}</th>
        <th>${data.balance}</th>       
        <th>${data.email}</th>
      </tr>`
      );
    }
  });
  $('.100').click( function() {
    $(this).hide()
});
});
