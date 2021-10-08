rect = require("./rectangle");

function solverect(l, b) {
  console.log("Solving with l=" + l + " b=" + b + "\n");
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error : ", err.message);
    } else {
      console.log(
        "Area Results : When l= " +
          l +
          " b=" +
          b +
          " and result=" +
          rectangle.area()
      );
      console.log(
        "Perimeter Results : When l= " +
          l +
          " b=" +
          b +
          " and result=" +
          rectangle.perimeter ()
      );
    }

  });
  console.log("After Rectangle Call");
}

solverect(2, 3);
solverect(0, 3);
