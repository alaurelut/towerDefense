//pour le clic du player ! 
canvas.onclick= function(ev)
{
  var x = Math.floor(ev.offsetX / 30);
  var y = Math.floor(ev.offsetY / 30);
console.log(level[y][x]);
  if(level[y][x] == 2)
  {
    if(player.selectedtower==1 && player.or >= 50)
    {
      level[y][x] = 5;
      player.or-=50;
      towers.push(new Tower("sol", 200, x, y,25,1));
    }
    if(player.selectedtower==2 && player.or >= 50)
    {
      level[y][x] =5;
      player.or-=50;
      towers.push(new Tower("air", 200, x, y,50,1));
    }
    if(player.selectedtower==3 && player.or >= 50)
    {
      level[y][x]=5;
      player.or-=50;
      towers.push(new Tower("freeze", 200, x, y,0.6,1));
    }
  }
  if(player.up == true || player.destroy == true)
  {
    for (var i = 0; i < towers.length; i++)
    {
      towers[i].upgrady(x,y);
      towers[i].destroyy(x,y,i);
    }
  }
}