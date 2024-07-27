new DataTable('#example');

$(document).ready(function () {
    $('#example').DataTable();

    $(".editBtn").click(function () {
        var id = $(this).data("id");
        var rolename = $(this).data("rolename");
        var description = $(this).data("description");

        $("#roleNameInput").val(rolename);
        $("#roleDescriptionTextarea").val(description);
        $("#modifyRole").modal("show");
    });
    $(".addRoleBtn").click(function () {
        var rolename = $(this).data("rolename");
        var description = $(this).data("description");

        $("#roleNameInput").val(rolename);
        $("#roleDescriptionTextarea").val(description);
        $("#addRoleaccount").modal("show");
    });

    $(".deleteBtn").click(function () {
        var id = $(this).data("id");
        $("#deleteRole").modal("show");
    });
});

function checkAll(myCheckbox) {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
   if(myCheckbox.checked == true){
    checkboxes.forEach(function(checkbox){
        checkbox.checked = true;
    });
   }
   else{
    checkboxes.forEach(function(checkbox){
        checkbox.checked = false;
    });
   }
}
        