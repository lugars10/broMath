class Frames
{
    List_1:Array<any> = [];
    List_2:Array<any> = [] ;
    constructor(frames1:Array<any> = null, frames2:Array<any> = null)
    {
        let index = 0;
        if(frames1 != null && frames2 != null)
        {
            if(frames1.length == frames2.length)
            {
                for(let frame1 of frames1)  //frame1: single element
                {
                    for(let frame2 of frames2)  //frame2: single element
                    {
                        this.List_1[index] = frame1;
                        this.List_2[index] = frame2;
                        index++;
                    }
                }
                
            }
            else    //Throw an error due to difference of space in arrays
            {
                throw new Error("Different lenght of arrays ");
            }
        }
    }

    public Get(ind:number)//Returns the requested element by its index
    {
        let Frame =
        {
            key:this.List_1[ind],
            value:this.List_2[ind]
        }
        
        
    }
}
class Equation {

    public equation: string; //The equation string
    private Operations: Array<string>;

    //List of Operations and their strings   
    static readonly Exp_Root = "exp-root";
    static readonly Mul_Div = "mul-div";
    static readonly Add_Sub = "add-sub";

    constructor(eq = "") {  //Class constructor
        this.equation = eq;
        this.Operations = ["exp-root", "mul-div", "add-sub"];
    }

    private Lexer() //Lexer for the elements of the equation
    {
        this.equation = this.equation.replace(/ /g, ""); //Removes all white spaces of the equation
        let mathFrames = {}; //The dictionary of math elements
        let elements = new Array(this.equation.split(''));
        for (let element of elements) {
            if (parseFloat(element.toString()) >= 0) //if 'element' is a number
            {
                //???
                let x = new Frames()
            }
        }

    }
    public Solve()  //Solve Method for strings operations !!!!PUBLIC METHOD!!!!
    {

    }
    public setOrder(order: Array<string>) //Method to modificate order of operations
    {
        let occurrencies = [];  //List of occuriences for order array, **can be optimized
        if (order.length == 3) {
            let n = 0;
            for (let operation of order) {
                if (occurrencies.indexOf(operation) == -1) {
                    this.Operations[n] = operation;
                    occurrencies[n] = operation;
                    if (n <= order.length) {
                        n++;
                    }
                }//End of occurience verification if 
                else { throw new Error("Operation repeated"); }
            } //End of for
        }//End of principal if
        else {
            throw new Error("Bad array 'order' lenght, introduce four different operations");
        }

    }

}
let x = new Equation("2+1");
let ar1 = ["Cat", "Dog"];
let ar2 = ["Fish", "Rat"];
let fr = new Frames(ar1, ar2);
console.log(fr.List_1);
console.log(fr.List_2);
