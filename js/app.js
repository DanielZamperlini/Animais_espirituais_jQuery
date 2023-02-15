$("[data-group]").each(function () {
  const $allTarget = $(this).find("[data-target]"),
    $allClick = $(this).find("[data-click]"),
    classActive = "active";

  $allClick.first().addClass(classActive);
  $allTarget.first().addClass(classActive);

  $allClick.click(function (e) {
    e.preventDefault();

    const id = $(this).data("click"),
      $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(classActive);
    $allTarget.removeClass(classActive);

    $target.addClass(classActive);
    $(this).addClass(classActive);
  });
});
