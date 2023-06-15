(function () {
    "use strict";

    $(document).on('ready',searchInventory);
    $("#submitBtn").on('click', searchInventory)

    function searchInventory(e) {
        e.preventDefault()
        $.get("/data/blog.json").done(function (data) {
            let html = '';
            data.forEach(function (obj) {
                    html +=
                        '<div class="border border-1 w-100" style="font-size: 4em">' + obj.title + '</div>' +
                        '<div class="border border-1" style="font-size: 2em">' + obj.content + '</div>' +
                        '<div class="border border-1">' + obj.content2 + '</div>';
                }
            )
            $('#posts').html(
                html
            )
        })
    }
})();