"use strict";

document.getElementById("vcolor").oninput = function () {
  "use strict";

  var vcolor = document.getElementById("vcolor").value;
  var v_box = document.getElementById("box_id");
  var v_p = document.getElementById("p_id");
  v_box.style.borderColor = vcolor;
  v_p.style.color = vcolor;
};
//# sourceMappingURL=script.dev.js.map
