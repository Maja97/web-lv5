<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update fighter</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />

  </head>
<body>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-7 p-5">
        <h2>CFC 3 - Update fighter</h2>
  <form action='#' class = "form mb-3">
    <div class="form-group">
    <input type="text" id="id" name="id">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="age">Age:</label>
      <input type="text" class="form-control" id="age" name="age" required>
    </div>
    <div class="form-group">
      <label for="catInfo">Cat info:</label>
      <input type="text" class="form-control" id="catInfo" name="catInfo" required>
    </div>
    <div class="form-group">
      <label for="catImage">Cat image: &nbsp;</label>
      <input type="text" id="path" name="path">
      <input type="file" class="form-control-file" name= "file" id="file">
    </div>
    <div class="input-group">
      <label for="wins">Wins: &nbsp;</label>
      <input style="width:50%" type="text" class="form-control" id="wins" name="wins" required>
      <label for="loss">&nbsp; Loss: &nbsp;</label>
      <input style="width:50%" type="text" class="form-control" id="loss" name="loss" required>
    </div>
    <br>
    <button type="submit" class="btn btn-primary" name="submit" >Submit</button>

        </div>
        <div class = "col-md-2 p-5">
        <div class="btn-group-vertical">
        <input button="back" type="button" value="Back" onclick="window.location.replace('./index.php')"; />
        <button type="submit" id="delete" class="mt-5">Delete fighter</button>
        </div>
        </div>
        </form>
    </div>
</div>
<script>
  document.getElementById("name").value = localStorage.getItem("name");
  document.getElementById("age").value = localStorage.getItem("age");
  document.getElementById("catInfo").value = localStorage.getItem("info");
  document.getElementById("path").value = localStorage.getItem("image");
  document.getElementById("wins").value = localStorage.getItem("wins");
  document.getElementById("loss").value = localStorage.getItem("loss");
  document.getElementById("id").value = localStorage.getItem("id");

  if(document.getElementById("file").files.length != 0){
document.getElementById("path").value = document.getElementById("file").value;
  }
</script>
<script src="./edit.js"></script>
</body>
</html>