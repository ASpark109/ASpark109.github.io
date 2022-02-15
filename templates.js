//The first template of the playing field
function f1()
{
    for(let i = 1; i < pixelCol-1; i++)
    {
        for(let j = 1; j < pixelRov-1; j++)
        {
            pixel[i][j].state = false;
            newGen[i][j] = false
        }
    }
    frameCount = 0;

    let step = 0

    for(let i = 0; i < 8; i++)
    {
        pixel[12 + step][12 + step].state = true;
        pixel[12 + step][13 + step].state = true;
        pixel[12 + step][14 + step].state = true;
        pixel[11 + step][13 + step].state = true;

        pixel[12 + step][18 + step].state = true;
        pixel[12 + step][19 + step].state = true;
        pixel[12 + step][20 + step].state = true;
        pixel[11 + step][19 + step].state = true;

        step += 11;
    }
}

//The second template of the playing field
function f2()
{
    for(let i = 1; i < pixelCol-1; i++)
    {
        for(let j = 1; j < pixelRov-1; j++)
        {
            pixel[i][j].state = false;
            newGen[i][j] = false
        }
    }
    frameCount = 0;

    let step = 0

    let a = 95;
    let b = 96;
    let c = 97;

    for(let i = 0; i < 8; i++)
    {
        pixel[12 + step][12 + step].state = true;
        pixel[12 + step][13 + step].state = true;
        pixel[12 + step][14 + step].state = true;
        pixel[11 + step][14 + step].state = true;
        pixel[10 + step][13 + step].state = true;

        step += 9;
    }

    step -= 9;
    for(let i = 0; i < 8; i++)
    {
        pixel[12 + step][a - step].state = true;
        pixel[12 + step][b - step].state = true;
        pixel[12 + step][c - step].state = true;
        pixel[11 + step][a - step].state = true;
        pixel[10 + step][b - step].state = true;

        step -= 9;
    }
}
