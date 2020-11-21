$(document).on("click", ".devourBtn", function () {
    var id = $(this).data("id");
    var newDevour = $(this).data("devour");

    var newDevourState = {
        devoured: newDevour
    }

    $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newDevourState
    }).then(
        function () {
            console.log("changed devoured to", newDevour);
            location.reload();
        }
    )

})

//create an on-click function that does the post-- look at the index.handlebars bc the button has already been created