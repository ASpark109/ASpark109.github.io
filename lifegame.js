let genCount = document.querySelector("#gen");

//The number of cells horizontally
const pixelRov = 170

//The number of cells vertically
const pixelCol = 100

//An array for storing cell objects
let pixel = [pixelRov];

//Array for storing cell states during the update
let newGen = [pixelRov]

function setup() {
    createCanvas(1367, 680);
    frameRate(40);
    let a = 0;
    let b = 0;

    //Initialization of arrays, assignment of coordinates to cells, the state of cells is established false
    for (let i = 0; i < pixelCol; i++) 
    {
        newGen[i] = [];
        pixel[i] = [pixelRov];
        for(let j = 0; j < pixelRov; j++)
        {
            pixel[i][j] = new Cell(10 + a, 10 + b, false);
            newGen[i][j] = false;
            a+=6;
        }
        a = 0;
        b += 6;
    }
    
    //Filling the grid with random values true and false
    init();
}


function draw() {
    //Update the generation counter on the web page
    genCount.innerHTML = "Generation - " + frameCount;
    background(255);
    
    //Display a grid of cells
    for(let i = 0; i < pixelCol; i++)
        for(let j = 0; j < pixelRov; j++)
            pixel[i][j].display();

    //Update the state of cells (generation of a new generation), the data is recorded in the intermediate array (newGen)
    for(let i = 1; i < pixelCol-1; i++)
        for(let j = 1; j < pixelRov-1; j++)
            life(i, j)

    //Transfer data from the intermediate array to the main
    for(let q = 1; q < pixelCol-1; q++)
        for(let y = 1; y < pixelRov-1; y++)
            pixel[q][y].state = newGen[q][y]
}



function life(i, j)
{
    let count = 0;

    //Counting the number of active cells (state == true) around a particular cell
    for(let a = -1; a < 2; a++)
    {
        for(let b = -1; b < 2; b++)
        {
            if(pixel[i+a][j+b].state == true)
            count++;
        }
    }

    if(pixel[i][j].state == true)
    count--;

    /*
    *   Each cell with one or no neighbors dies, as if by solitude.
    *   Each cell with four or more neighbors dies, as if by overpopulation.
    *   Each cell with two or three neighbors survives.
    *   Each cell with three neighbors becomes populated.
    */
    if(pixel[i][j].state == true && (count < 2))
    {
        newGen[i][j] = false;
    }
    else if(pixel[i][j].state == true && (count >= 4))
    {
        newGen[i][j] = false;
    }
    else if(pixel[i][j].state == true && (count == 3 || count == 2))
    {
        newGen[i][j] = true;
    }
    else if(pixel[i][j].state == false && (count == 3))
    {
        newGen[i][j] = true;
    }
}

// Class to describe the cell
class  Cell
{
    constructor(x, y, state)
    {   
        //Coordinates on the X axis
        this.x = x;

        //Coordinates on the Y axis
        this.y = y;

        //The state of the cell
        this.state = state;
    }
    
    //A method for displaying a cell
    display()
    {
        this.state ? fill(60) : fill(228)
        noStroke();
        rect(this.x, this.y, 5, 5)
    }
}

//If the mouse is pressed, a random generation of the playing field is started
function mousePressed() {
    init();
}

//Random generation of the playing field
function init()
{
    for(let i = 1; i < pixelCol-1; i++)
    {
        for(let j = 1; j < pixelRov-1; j++)
        {
            v = Math.trunc(random(0,4))
            pixel[i][j].state = !v;
        }
    }
    frameCount = 0;
}

//If specific keys are pressed, the prepared playing field template is launched
function keyPressed() 
{
    if(key == 'a')
    f1();

    if(key == 's')
    f2();
}