/**
	Author: Martin Avagyan
*/

var Chess = {
	
	boardPositions: ['A8','B8','C8','D8','E8','F8','G8','H8','A7','B7','C7','D7','E7','F7','G7','H7', 'A6','B6','C6','D6','E6','F6','G6','H6','A5','B5','C5','D5','E5','F5','G5','H5', 'A4','B4','C4','D4','E4','F4','G4','H4','A3','B3','C3','D3','E3','F3','G3','H3', 'A2','B2','C2','D2','E2','F2','G2','H2','A1','B1','C1','D1','E1','F1','G1','H1'],
	// default figure counts for white player
	whitePlayerFigureCount: 16,
	// figure types for white player
	whitePlayerFigures: {'zinvor': 8, 'dzi': 2, 'navak':2, 'pix':2, 'taguhi':1, 'king':1},
	// default figure counts for black player
	blackPlayerFigureCount: 16,
	// figure types for black player
	blackPlayerFigures: {'zinvor': 8, 'dzi': 2, 'navak':2, 'pix':2, 'taguhi':1, 'king':1},
	
	//solderOptions: {'zinvor':{'a2':['A3','A1'])},
	
	// create board
	createBoard: function(){
		var board = document.getElementById('board');
			
		var even = 0;
		for(var i=0; i<64; i++){
			var li = document.createElement('LI');
			
			var rowPosition = Math.floor(i/8);
			if(rowPosition%2 == 0)
				even = 0;
			else
				even = 1;
			
			if((i+even)%2 == 0){
				li.className = 'even';
			}
			li.setAttribute('id', Chess.boardPositions[i]);		
			li.setAttribute('ondrop', "drop(event)");
			li.setAttribute('ondragover',"allowDrop(event)");			
			board.appendChild(li);
			
		}
	},
	
	//new game, generate chess figures
	generateFiguresForNewGame: function(){
		var figurePositions = {'solder': {'black': ["A7","B7","C7","D7","E7","F7","G7","H7"],
										  'white': ["A2","B2","C2","D2","E2","F2","G2","H2"]},	
							   'boat': {'black': ["A8","H8"],
										  'white': ["A1","H1"]},
								'horse': {'black': ["B8","G8"],
										  'white': ["B1","G1"]},	
							   'elephant': {'black': ["C8","F8"],
										  'white': ["C1","F1"]},
								'queen': {'black': ["D8"],
										  'white': ["D1"]},	
							   'king': {'black': ["E8"],
										  'white': ["E1"]}

		};
		var n=0;
		for(key in figurePositions)
		{
			//console.log(figurePositions[key]);
			for(kkey in figurePositions[key])
			{
			
				for(kkkey in figurePositions[key][kkey])
				{
					var figureColor = "B";
					if(kkey == "white")
						figureColor = "W";
					//console.log(figurePositions[key][kkey][kkkey]);
					
					
					var element = document.createElement('img');
					element.setAttribute('src','images/figures/'+figureColor+key+".png");
					element.draggable = true;
					element.setAttribute('ondragstart',"drag(event)");	
					element.setAttribute('id',n+figureColor+key);							
					document.getElementById(figurePositions[key][kkey][kkkey]).appendChild(element);
					n++;
				}
			}
		}
	},
}

function allowDrop(ev)
{
	ev.preventDefault();
}
function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);

}
function drop(ev)
{
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}







function start()
{
	Chess.createBoard();
	Chess.generateFiguresForNewGame();
}
window.onload = start;	








