let currentShape = " ";
function Triangle()
{
    currentShape = "Triangle"
    console.log("Triangle is clicked......");  
    
}
function Square()
{
    currentShape = "Square"
    console.log("Sqaure is clicked......");  
}
function Circle()
{
    currentShape = "Circle"
    console.log("Circle is clicked......");  
}
function calculateArea()
{
    let parameter1 = document.getElementsByClassName('text')[0].value;
    let parameter2 = document.getElementsByClassName('text')[1].value;
    if(currentShape === "Triangle")
    {
         let result = 0.5 * parameter1 * parameter2;
        document.getElementsByClassName('text')[2].value = result;
        console.log("Area of triangle "+result);
        
    }
    else if(currentShape === "Square")
    {
        let result = parameter1 * parameter1;
        document.getElementsByClassName('text')[2].value = result;
        console.log("Area of sqaure "+result);

    }
    else if(currentShape === "Circle")
    {
        let result = 3.14 * parameter1 * parameter1;
        document.getElementsByClassName('text')[2].value = result;
        console.log("Area of circle "+result);


    }

}