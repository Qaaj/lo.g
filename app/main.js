module.exports = function() {

        var enabled = true;
        var verbose = true;

        var tracesEnabled = ["VIDEO", "SCENE", "APPLICATION", "BACKGROUND","ERROR","USER","CONTENT","MENU"];
        // tracesEnabled = ["APPLICATION"];
        var colors = {};

        colors["APPLICATION"] = "color:yellow; background:#888888;";
        colors["VIDEO"] = "color:purple; background:#dddddd;";
        colors["SCENE"] = "color:green; background:#dddddd;";
        colors["BACKGROUND"] = "color:blue; background:#dddddd;";
        colors["CLICKZONE"] = "color:tomato; background:#dddddd;";
        colors["ERROR"] = "color:red; background:#dddddd;";
        colors["USER"] = "color:magenta; background:#dddddd;";
        colors["CONTENT"] = "color:navy; background:#dddddd;";
        colors["MENU"] = "color:seagreen; background:#dddddd;";



        var constructor = function Log() {};

        var first = true;

        constructor.prototype.g= function(o) {

            if(enabled && first){
                console.log("* LOG COLOR CODES *");
                  for (var type in colors) {
                     if (tracesEnabled.indexOf(type) != -1) {
                        var clr = colors[type];
                        console.log("%c >> " + type + ": " + clr.split(";")[0].split(":")[1], clr);
                    }
                  }
                    console.log("");
            }

            first = false;

            if (enabled && arguments.length == 1) {
                console.log(o);
            } else if (enabled && arguments.length == 2) {
                var type = arguments[0];
                if (tracesEnabled.indexOf(type) != -1) {
                    var isString = false;
                    if (typeof arguments[1] == 'string' || typeof arguments[1] == 'boolean' || typeof arguments[1] == 'number') isString = true;

                    if (isString) {

                        console.log("%c ++ " + arguments[1] + " ++ ", colors[type]);

                    } else {
                        if(verbose) return;
                        console.log("%c ++ "+ typeof arguments[1] +" ", colors[type]);
                        console.log(arguments[1]);
                        console.log("%c" + " ++ ", colors[type]);
                    }
                }
            } else if (enabled && arguments.length > 2) {
                var type = arguments[0];
                if (tracesEnabled.indexOf(type) != -1) {

                    for (var i = 1, j = arguments.length; i < j; i++) {

                        var isString = false;
                        if (typeof arguments[i] == 'string' || typeof arguments[i] == 'boolean' || typeof arguments[i] == 'number') isString = true;

                        if (isString) {
                            if (i == 1) {
                                if(verbose){
                                     console.log("%c ++ " + arguments[i] + " ++ ", colors[type]);
                                }else{
                                    console.log("%c ++ " + arguments[i], colors[type]); 
                                }
                               
                            } else {
                                console.log("%c" + arguments[i], colors[type]);
                            }
                        } else {
                            if(verbose) return;
                            if (i == 1) {
                                console.log("%c ++ OBJECT: ", colors[type]);
                            } else {
                                console.log(arguments[i]);
                            }
                        }

                    }
                    console.log("%c" + " ++ ", colors[type]);

                }
            }

        }

        return constructor;

 }