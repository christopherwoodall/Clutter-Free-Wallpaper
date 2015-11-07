var Canvas = ( function( ) {
  /**
   *
   */
  var element = document.getElementById( 'canvas' );
       
  return {
    element: element,
    dimensions: {
      set: function( arrSize ) {
        var canvas = element,
            context = canvas.getContext( '2d' );
        context.canvas.width  = arrSize[ 1 ];
        context.canvas.height = arrSize[ 0 ];
        return true;
      }
    },
    background: {
      set: function( strData ) {
        // canvas animation setup
        var image      = new Image( ),
            canvas     = document.getElementById( 'canvas' ),
            context    = canvas.getContext( '2d' ),
            background = new Image( );
        background.src    = strData;
        background.onload = function( ) {
          context.drawImage( background, 0, 0,
                             canvas.width, canvas.height
                           );
          ClutterFree.drawLines( )
        };
        return;
      }
    }
  };
} )( );
// canvas.toDataURL();


var Screen = {
  orientation: function( ) {
    return Math.abs( window.orientation ) - 90 ==
           0 ? "landscape" : "portrait";
  },
  width: function( ) {
    return this.orientation( ) ==
           "landscape" ? screen.availHeight : screen.availWidth;
  },
  height: function( ) {
    return this.orientation( ) ==
           "landscape" ? screen.availWidth : screen.availHeight;
  },
 resolution: function( ) {
   /**
    * Returns screen height and width.
    */
   // return [ this.height, this.width( ) ];
   return [ window.screen.height, window.screen.width ];
 }
};

var ClutterFree = {
  padding: 50,
  drawLines: function( ) {
    var canvas   = Canvas.element,
        context  = canvas.getContext( '2d' ),
        width    = canvas.width,
        height   = canvas.height,
        lines    = ( width / 4 ),
        linew    = 5;
    console.log( width / 4 );
    console.log( height );

//context.fillStyle = "red";
//context.fillRect( lines, 0, linew, height );

while( lines < width ) {
  context.fillRect( lines, 0, linew, height );
  lines += ( width / 4 );
}

    return true;
  }
};


var canvas = Canvas.element,
    dimensions = Screen.resolution( );

Canvas.dimensions.set( dimensions )

Canvas.background.set( 'wolf.jpg' )

console.log(  );
