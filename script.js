$.getJSON("default.json", function (data) {
  $.each(data, function (key, data) {
    $(".new-table").append(
      `<tr>
        <th>${data.id}</th>
        <th>${data.balance}</th>
        <th>${data.name}</th>
        <th>${data.email}</th>
      </tr>`
    );
  });
});

