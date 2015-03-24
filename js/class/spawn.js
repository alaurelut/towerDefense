var Spawn = function(){
	this.canSpawn = false;
	this.NumVague = 0;
	this.nbUnitParVague = 0;
    this.nbVagueTotal;
	this.spawner = function()
	{
		for (var i = 0; i < level.length; i++)
    	{
    	    for (var j = 0; j < level[i].length; j++)
    	    {
    	        if (level[i][j] == 3 && this.canSpawn == true)
    	        {
    	        	if(world==1)
    	        	{
    	        		if(lvl==1)
    	        		{
                            this.nbVagueTotal = 5;
    	        			if(this.NumVague==1){
    	        				this.nbUnitParVague = 4;
    	            			spawn.ennemiSpawn(j*30+15,i*30,100,1,"sol",'./images/eclaireur.png',"peon",2,800);
    	            			setTimeout('spawn.ennemiSpawn(' +(j*30+15)+ ',' +(i*30+15)+ ',' +100+ ',' +1+ ',"sol","./images/ecuyer.png","peon",' +2+ ',' +800+ ')', 1800);
    	            		}
    	            		if(this.NumVague==2){
    	            			this.nbUnitParVague = 5;
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/eclaireur.png',"peon",5,800);
    	            		}
    	            		if(this.NumVague==3){
    	            			this.nbUnitParVague = 5;
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol","./images/soldat.png","soldat",5,800);
    	            		}
    	            		if(this.NumVague==4){
    	            			this.nbUnitParVague = 5;
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/knight.png',"chevalier",5,800);
    	            		}
    	            		if(this.NumVague==5){
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"air",'./images/flybig.png',"chevalier",5,800);
    	            		}
    	            	}                       
    	            	if(lvl==2){
                            this.nbVagueTotal = 5;
    	        			if(this.NumVague==1){
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/eclaireur.png',"peon",5,800);
    	            		}
    	            		if(this.NumVague==2){
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/soldat.png',"soldat",5,800);
    	            		}
    	            		if(this.NumVague==3){
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/knight.png',"peon",6,800);
    	            		}
    	            		if(this.NumVague==4){
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"air",'./images/flybig.png',"chevalier",3,800);
    	            		}
    	            		if(this.NumVague==5){
    	            			spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"air",'./images/flybig.png',"chevalier",6,800);
    	            		}
    	            	}
                        if(lvl==3){
                            this.nbVagueTotal = 5;
                            if(this.NumVague==1){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/eclaireur.png',"peon",5,800);
                            }
                            if(this.NumVague==2){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"air",'./images/eclaireur.png',"peon",5,800);
                            }
                            if(this.NumVague==3){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/ecuyer.png',"peon",5,800);
                            }
                            if(this.NumVague==4){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/ecuyer.png',"peon",5,800);
                            }
                            if(this.NumVague==5){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/ecuyer.png',"peon",5,800);
                            }
                        }
                        if(lvl==4){
                            this.nbVagueTotal = 5;
                            if(this.NumVague==1){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/eclaireur.png',"peon",5,800);
                            }
                            if(this.NumVague==2){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"air",'./images/eclaireur.png',"peon",5,800);
                            }
                            if(this.NumVague==3){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/ecuyer.png',"peon",5,800);
                            }
                            if(this.NumVague==4){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/ecuyer.png',"peon",5,800);
                            }
                            if(this.NumVague==5){
                                spawn.ennemiSpawn(j*30+15,i*30+15,100,1,"sol",'./images/ecuyer.png',"peon",5,800);
                            }
                        }
    	            }
    	        }
    	    }
    	}
    }
	this.ennemiSpawn = function(x, y, pv, speed, type, sprite, genre,nbUnitParVague,intervalEntreEnnemi)
	{
	    generateur = setInterval(function(){
	        wave.push(new Enemy(x, y, pv, speed, type, sprite, genre));
	        nbUnit++;
	        if (nbUnit >= nbUnitParVague)
	        {
	            clearInterval(generateur);
	            nbUnit = 0;
	        }
	    },intervalEntreEnnemi); //ecart entre les ennemis
	};
}
