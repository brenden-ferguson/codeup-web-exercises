(function () {
    "use strict";

    // TODO: Create an AJAX GET request for the file under data/inventory.json
    $(document).on('ready',searchInventory);
    $("#submitBtn").on('click', searchInventory)

    function searchInventory(e) {
        e.preventDefault()
        $.get("/data/inventory.json").done(function (data) {
            let html = '';
            data.forEach(function (obj) {
                    html +=
                        '<tr>' +
                        '<td>' + obj.title + '</td>' +
                        '<td>' + obj.quantity + '</td>' +
                        '<td>' + obj.price + '</td>' +
                        '<td>' + obj.categories + '</td>' +
                        '</tr>'
                }
            )
            $('#insertProducts').html(
                html
            )
        })
        // TODO: Take the data from inventory.json and append it to the products table
        //       HINT: Your data should come back as a JSON object; use console.log() to inspect
        //             its contents and fields
        //       HINT: You will want to target #insertProducts for your new HTML elements
    }
})();
