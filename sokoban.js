         var tileMap01 = 
			{
			   width:  19,
			   height: 16,
			   mapGrid: 
				  [
					[ [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      ["W"],      [" "],      [" "],      [" "],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      ["W"],      ["B"],      [" "],      [" "],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      ["W"],      ["W"],      ["W"],      [" "],      [" "],      ["B"],      ["W"],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      ["W"],      [" "],      [" "],      ["B"],      [" "],      ["B"],      [" "],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ ["W"],      ["W"],      ["W"],      [" "],      ["W"],      [" "],      ["W"],      ["W"],      [" "],      ["W"],      [" "],      [" "],      [" "],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],    ],
					[ ["W"],      [" "],      [" "],      [" "],      ["W"],      [" "],      ["W"],      ["W"],      [" "],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      [" "],      [" "],      ["G"],      ["G"],      ["W"],    ],
					[ ["W"],      [" "],      ["B"],      [" "],      [" "],      ["B"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      ["G"],      ["G"],      ["W"],    ],
					[ ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      [" "],      ["W"],      ["W"],      ["W"],      [" "],      ["W"],      ["P"],      ["W"],      ["W"],      [" "],      [" "],      ["G"],      ["G"],      ["W"],    ],
					[ [" "],      [" "],      [" "],      [" "],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],    ],
					[ [" "],      [" "],      [" "],      [" "],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      ["W"],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
					[ [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],      [" "],    ],
				  ]
                 			   
			};
            
            var containertab=document.getElementById("container");
            var btnStart=document.getElementById("btnStart");
            var row;
            var col;
            var element;
            var playerPos=0;
            var cellNumber=0;
            var playerCurrentCell=0;
            var playerMovedToCell=0;
            var gamePoint = 0;
            var goalAudio = document.getElementById("audioGoal"); 
            var winAudio = document.getElementById("audioWin"); 

            function startAgain()
            {
                containertab.innerHTML="";
                btnStart.setAttribute("class","btnStart");
                btnStart.innerHTML="Start";
                gamePoint = 0;
            }

            function drawMap()
            {
                playerPos=0;
                playerCurrentCell=0;
                playerMovedToCell=0;
                containertab.innerHTML="";
                btnStart.classList.add("btnReset");
                btnStart.innerHTML="Reset";

                document.getElementById("gamePoint").innerHTML=gamePoint;

			    for (i=0; i<tileMap01.height; i++)
                { 
                   row=document.createElement("tr");
                   containertab.appendChild(row);

                   for (j=0; j<tileMap01.width; j++)
                   {
                       col=document.createElement("th");
                       row.appendChild(col);

                       if (tileMap01.mapGrid[i][j]==" ")
                       {
                         cellNumber++;  
                         element = document.createElement("p");
                         element.setAttribute("id",cellNumber);
                         element.classList.add("space");
                         col.appendChild(element);
                      
                       }
                       else if (tileMap01.mapGrid[i][j]=="W")
                       {
                         cellNumber++;    
                         element = document.createElement("p");
                         element.setAttribute("id",cellNumber);
                         element.classList.add("wall");
                         col.appendChild(element);
                       }    
                       else if (tileMap01.mapGrid[i][j]=="B")
                       {
                         cellNumber++;    
                         element = document.createElement("p");
                         element.setAttribute("id",cellNumber);
                         element.classList.add("mvwall");
                         col.appendChild(element);
                       }   
                       else if (tileMap01.mapGrid[i][j]=="G")
                       {
                         cellNumber++;  
                         element = document.createElement("p");
                         element.setAttribute("id",cellNumber);
                         element.classList.add("goal");
                         col.appendChild(element);
                       }  
                       else
                       {
                         cellNumber++;  
                         element = document.createElement("p");
                         element.setAttribute("id",cellNumber);
                         element.classList.add("player");
                         //element.innerText="P";
                         col.appendChild(element);
                         playerPos=cellNumber;
                       }       
					   
					   if(i==0 || i==tileMap01.height-1 || j==0 || j==tileMap01.width-1)
					   {
						   var cell;
						   cell =document.getElementById(cellNumber);
						   cell.setAttribute("class","boundaryWall");				   
					   }
					   
                   }
                  
                }                              
            }

            document.getElementById("gamePoint").innerHTML=gamePoint;
            document.onkeydown = checkKey;

            function checkKey(e) 
            {

                //e = e || window.event;

                if (e.keyCode == '38') 
                {
                    // up arrow
                    moveUp();
                    checkIfGameWon();
                }
                else if (e.keyCode == '40') 
                {
                    // down arrow
                    moveDown();
                    checkIfGameWon();
                }
                else if (e.keyCode == '37') 
                {
                    // left arrow
                    moveLeft();
                    checkIfGameWon();
                }
                else if (e.keyCode == '39') 
                {
                     // right arrow
                     moveRight();
                     checkIfGameWon();
                }
            }
            
            function checkIfGameWon()
            {
                if (gamePoint==6)
                {
                    document.getElementById("gamePoint").innerHTML="You Won!";
                    playWinAudio();
                    startAgain();                    
                }
            }

			function approvedMove(cell)
			{
			   if(cell.className!="wall" &&  cell.className!="boundaryWall")  	
				   return true;
			   else 
				   return false;
			}
 
            function moveUp()
            {
                var playerClassName="";
                var movedClassName="";
				var newPlayerPos;
				var newPlayerCell;                              
                
				playerCurrentCell=document.getElementById(playerPos);       
                playerClassName=playerCurrentCell.className; 
				
				newPlayerPos=playerPos-tileMap01.width;				                
                newPlayerCell=document.getElementById(newPlayerPos);
                movedClassName=newPlayerCell.className; 
                
                if (approvedMove(newPlayerCell))
			    {	
                    var cell3=document.getElementById(newPlayerPos-tileMap01.width); 	
                    var cell3Class=cell3.className;
                    
                    if (movedClassName=="space")
					{
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;
                        movedClassName=newPlayerCell.className;
                   
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;
                    }

				    if (movedClassName=="mvwall" && cell3Class=="space") 
					{ 
                        var newMVWallCell=cell3;
                        movedClassName=cell3Class;
						newMVWallCell.setAttribute("class","mvwall");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;                       
                    }

                    if (movedClassName=="mvwall" && cell3Class=="goal") 
					{ 
                        var goalCell=cell3;
                        goalCell.setAttribute("class","space");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;   
                        playerCurrentCell.setAttribute("class","space");     
                        gamePoint=gamePoint+1;   
                        document.getElementById("gamePoint").innerHTML=gamePoint;    
                        playGoalAudio();     
                    }                   	    
				}

            } 

            function moveDown()
            {
                var playerClassName="";
                var movedClassName="";
				var newPlayerPos;
				var newPlayerCell;  

                playerCurrentCell=document.getElementById(playerPos);       
                playerClassName=playerCurrentCell.className;               
                
                newPlayerPos=playerPos+tileMap01.width;                
                newPlayerCell=document.getElementById(newPlayerPos);
                movedClassName=newPlayerCell.className; 
                
                if (approvedMove(newPlayerCell))
			    {	
                    var cell3=document.getElementById(newPlayerPos+tileMap01.width); 	
                    var cell3Class=cell3.className;
                    
                    if (movedClassName=="space")
					{
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;
                        movedClassName=newPlayerCell.className;
                   
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;
                    }

				    if (movedClassName=="mvwall" && cell3Class=="space") 
					{ 
                        var newMVWallCell=cell3;
                        movedClassName=cell3Class;
						newMVWallCell.setAttribute("class","mvwall");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;                       
                    } 
                     
                    if (movedClassName=="mvwall" && cell3Class=="goal") 
					{ 
                        var goalCell=cell3;
                        goalCell.setAttribute("class","space");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;   
                        playerCurrentCell.setAttribute("class","space");     
                        gamePoint=gamePoint+1;   
                        document.getElementById("gamePoint").innerHTML=gamePoint;    
                        playGoalAudio();     
                    }                   	    
				}
            }
             
              
            /*
            function changePos(newCell)
            {
                var playerClassName="";
                var movedClassName="";
				var newPlayerPos;
				var newPlayerCell;  

                playerCurrentCell=document.getElementById(playerPos);       
                playerClassName=playerCurrentCell.className;  

				playerPos=playerPos-1;					            
			    playerMovedToCell=newCell;
                movedClassName=newCell.className;
                            
				playerMovedToCell.className=playerClassName;
				playerCurrentCell.className=movedClassName;   
            } 

            function moveLeft()
            {
                var cont=true;     
                var cell;
                var cellArray= new Array();
          
                while(cont)
                {
                   cell=nextCell("LEFT");
                   if(approvedMove(cell) && cell.className!="mvwall")
                   {
                       changePos(cell);   
                       cont=false;
                   }  
                   else
                   {
                      playerPos=playerPos-1;
                      cellArray.push(cell);  
                      document.getElementById("gamePoint").innerHTML=cellArray.length;
                      cont=true;
                   } 
                } 
                
                 if(cellArray.length>0)
                 {
					   playerPos=playerPos+cellArray.length;  
                       for (i=0; i<cellArray.length; i++)
                       {
                           playerPos=playerPos-1; 
                           cell=nextCell("LEFT");  
                           changePos(cell);  
                       }
                 }
             }*/ 
                
			function nextCell(currentCellId,movetype)
            {
                var nextCellPos;
                var nextCell;

                if(movetype=="LEFT")
                {
                  //nextCellPos=playerPos-1;                
                  nextCell=document.getElementById(currentCellId-1);
                }
               
                return nextCell;
            }
			
            function moveLeft()
            {
                var playerClassName="";
                var movedClassName="";
				var newPlayerPos;
				var newPlayerCell;  

                playerCurrentCell=document.getElementById(playerPos);       
                playerClassName=playerCurrentCell.className;               
                
                newPlayerPos=playerPos-1;                
                newPlayerCell=document.getElementById(newPlayerPos);
				movedClassName=newPlayerCell.className;              
                
				if (approvedMove(newPlayerCell))
			    {		
                    var cell3=document.getElementById(newPlayerPos-1); 	
                    var cell3Class=cell3.className;
                    
                    if (movedClassName=="space")
					{
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;
                        movedClassName=newPlayerCell.className;
                   
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;
                    }

				    if (movedClassName=="mvwall" && cell3Class=="space") 
					{
                        /*un-comment this if two consecutive mvwall blocks can move*/

                        //var cell=document.getElementById(newPlayerPos-1); 	
						//movedClassName=cell.className;
                        /*if(approvedMove(cell))
                        {
							if(movedClassName=="mvwall")
							{
								var mvwall1=cell;
								var mvwall2=newPlayerCell;
								
								var nextCell2mvwall1=document.getElementById(mvwall1.id-1);
								if(approvedMove(nextCell2mvwall1)) 
							    {
									
									nextCell2mvwall1.className=mvwall1.className;
									mvwall1.className=mvwall2.className;
									mvwall2.className=playerClassName;
									playerPos=newPlayerPos;
									playerCurrentCell.className="space";
								}		
								
							}	
							else
							{
								var newMVWallCell=cell;
								newMVWallCell.setAttribute("class","mvwall");	

								playerPos=newPlayerPos;					            
								playerMovedToCell=newPlayerCell;                            
						
								playerMovedToCell.className=playerClassName;
								playerCurrentCell.className=movedClassName; 
							}  					
                        }*/	

                        var newMVWallCell=cell3;
                        movedClassName=cell3Class;
						newMVWallCell.setAttribute("class","mvwall");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;                       
                    }

                    /*un-comment this if two consecutive mvwall blocks can move*/                                      						
                    /*else                    
					{
                         playerPos=newPlayerPos;					            
                         playerMovedToCell=newPlayerCell;
                         movedClassName=newPlayerCell.className;
					
                         playerMovedToCell.className=playerClassName;
                         playerCurrentCell.className=movedClassName;
                        	
                    }*/	
                    
                    if (movedClassName=="mvwall" && cell3Class=="goal") 
					{ 
                        var goalCell=cell3;
                        goalCell.setAttribute("class","space");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;   
                        playerCurrentCell.setAttribute("class","space");     
                        gamePoint=gamePoint+1;   
                        document.getElementById("gamePoint").innerHTML=gamePoint;
                        playGoalAudio();     
                    } 
				}
            }
            
            function moveRight()
            {
                var playerClassName="";
                var movedClassName="";
				var newPlayerPos;
				var newPlayerCell;  

                playerCurrentCell=document.getElementById(playerPos);       
                playerClassName=playerCurrentCell.className;               
                
                newPlayerPos=playerPos+1;                
                newPlayerCell=document.getElementById(newPlayerPos);
                movedClassName=newPlayerCell.className; 
                
                if (approvedMove(newPlayerCell))
			    {	
                    var cell3=document.getElementById(newPlayerPos+1); 	
                    var cell3Class=cell3.className;
                    
                   
                    if (movedClassName=="space")
					{
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;
                        movedClassName=newPlayerCell.className;
                   
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;
                    }

				    if (movedClassName=="mvwall" && cell3Class=="space") 
					{ 
                        var newMVWallCell=cell3;
                        movedClassName=cell3Class;
						newMVWallCell.setAttribute("class","mvwall");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;
                        playerCurrentCell.className=movedClassName;                       
                    } 
                    
                    if (movedClassName=="mvwall" && cell3Class=="goal") 
					{ 
                        var goalCell=cell3;
                        goalCell.setAttribute("class","space");
                        playerPos=newPlayerPos;					            
                        playerMovedToCell=newPlayerCell;                            
                
                        playerMovedToCell.className=playerClassName;   
                        playerCurrentCell.setAttribute("class","space");     
                        gamePoint=gamePoint+1;   
                        document.getElementById("gamePoint").innerHTML=gamePoint;        
                        playGoalAudio();    
                    } 
				}
            }  
            
            
            function playGoalAudio() 
            { 
                goalAudio.play(); 
            } 

            function playWinAudio() 
            { 
                winAudio.play(); 
            } 