const  jsonServer  =  require ( 'json-server' ) ;
 servidor  const =  jsonServer . criar ( ) ;
 roteador  const =  jsonServer . roteador ( 'db.json' ) ;
 middlewares  const =  jsonServer . padrões ( ) ;
 porta  const =  processo . env . PORTO  ||  3200 ;

servidor . uso ( middlewares ) ;
servidor . uso ( roteador ) ;

servidor . escuta ( porta ) ;