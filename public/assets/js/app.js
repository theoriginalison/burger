$(document).on("click", ".devourBtn", function () {
    var id = $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newDevourState = {
        devoured: newDevour
    }

    $.ajax("/api/burgers")

})

//next step: select the dataID so you know which burger to update in the API call-- make sure it is coming through for that element and has the correct id, then select it w jquery, then make your ajax call