describe('automap', function(){
	
	var e;

	beforeEach(function(){
		e = re.e('automap');
	});

	it('automap', function(){
		
    is(e.automap(0, 0, 10));
    
    eq(e.automap(0, 0), 10)
    
    eq(e.lenX, 1)
    eq(e.lenY, 1)
    
	});
  
  it('within', function(){
    
    not(e.within(-1, 0))
    
    not(e.within(10, 2))
    
    e.automap(10, 2, 0);
    
    ok(e.within(10, 2))
    
  })
  
  it('should copy map by value', function(){
    
    var level = 
    [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1]
    ];
    
    is(e.automap(level))
    eq(e.lenX, level[0].length)
    eq(e.lenY, level.length)
    
    eq(e.automap(0, 0), 1)
    eq(e.automap(0, 1), 6)
  })
  
  
  it('should copy map by ref', function(){
    
    var level = 
    [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1]
    ];
    
    is(e.automap(level, true))
    eq(e.lenX, level[0].length)
    eq(e.lenY, level.length)
    
    eq(e.automap(0, 0), 1)
    eq(e.automap(0, 1), 6)
    
    eq(e.map, level)
  })
  
  it('should contain right length', function(){
    
    var m = [[0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,2,5,0,0,0,0,7,0,0,0,6,2,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
    
    for(var y= 0; y<m.length; y++){
      
      for(var x=0; x<m[0].length; x++){
        var v = m[y][x];
        
        if(v){
          
          e.automap(x, y, 1);
          
        }
        
      }
      
    }
    
    eq(e.lenX, m[0].length)
    eq(e.lenY, m.length)
    eq(e.map.length, m.length)
    eq(e.map[0].length, m[0].length)
    
  });
  
});
