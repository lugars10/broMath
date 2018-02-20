var Frames = /** @class */ (function () {
    function Frames(frames1, frames2) {
        if (frames1 === void 0) { frames1 = null; }
        if (frames2 === void 0) { frames2 = null; }
        this.List_1 = [];
        this.List_2 = [];
        var index = 0;
        if (frames1 != null && frames2 != null) {
            if (frames1.length == frames2.length) {
                for (var _i = 0, frames1_1 = frames1; _i < frames1_1.length; _i++) {
                    var frame1 = frames1_1[_i];
                    for (var _a = 0, frames2_1 = frames2; _a < frames2_1.length; _a++) {
                        var frame2 = frames2_1[_a];
                        this.List_1[index] = frame1;
                        this.List_2[index] = frame2;
                        index++;
                    }
                }
            }
            else {
                throw new Error("Different lenght of arrays ");
            }
        }
    }
    Frames.prototype.Get = function (ind) {
        var Frame = {
            key: this.List_1[ind],
            value: this.List_2[ind]
        };
    };
    return Frames;
}());
var Equation = /** @class */ (function () {
    function Equation(eq) {
        if (eq === void 0) { eq = ""; }
        this.equation = eq;
        this.Operations = ["exp-root", "mul-div", "add-sub"];
    }
    Equation.prototype.Lexer = function () {
        this.equation = this.equation.replace(/ /g, ""); //Removes all white spaces of the equation
        var mathFrames = {}; //The dictionary of math elements
        var elements = new Array(this.equation.split(''));
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            if (parseFloat(element.toString()) >= 0) {
                //???
                var x_1 = new Frames();
            }
        }
    };
    Equation.prototype.Solve = function () {
    };
    Equation.prototype.setOrder = function (order) {
        var occurrencies = []; //List of occuriences for order array, **can be optimized
        if (order.length == 3) {
            var n = 0;
            for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
                var operation = order_1[_i];
                if (occurrencies.indexOf(operation) == -1) {
                    this.Operations[n] = operation;
                    occurrencies[n] = operation;
                    if (n <= order.length) {
                        n++;
                    }
                } //End of occurience verification if 
                else {
                    throw new Error("Operation repeated");
                }
            } //End of for
        } //End of principal if
        else {
            throw new Error("Bad array 'order' lenght, introduce four different operations");
        }
    };
    //List of Operations and their strings   
    Equation.Exp_Root = "exp-root";
    Equation.Mul_Div = "mul-div";
    Equation.Add_Sub = "add-sub";
    return Equation;
}());
var x = new Equation("2+1");
var ar1 = ["Cat", "Dog"];
var ar2 = ["Fish", "Rat"];
var fr = new Frames(ar1, ar2);
console.log(fr.List_1);
console.log(fr.List_2);
//# sourceMappingURL=Equation.js.map