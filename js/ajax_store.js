(function () {
    "use strict";

    $(document).on('ready',searchInventory);
    $("#submitBtn").on('click', searchInventory)

    function searchInventory(e) {
        e.preventDefault()
        $.get("/data/inventory.json").done(function (data) {
            let html = '';
            data.forEach(function (obj) {
                    html +=
                        '<tr class="border border-2">' +
                        '<td class="border border-1">' + obj.title + '</td>' +
                        '<td class="border border-1">' + obj.quantity + '</td>' +
                        '<td class="border border-1">' + obj.price + '</td>' +
                        '<td class="border-border-1">' + obj.categories + '</td>' +
                        '</tr>'
                }
            )
            $('#insertProducts').html(
                html
            )
        })
    }
})();
