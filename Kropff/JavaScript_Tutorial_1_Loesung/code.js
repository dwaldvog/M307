
 /**
  * 1. Allgemeine Basisdefintionen
  */  
  
  // Anzahle der Bilder
  pic_num = 16;
  // Breite des Navigationsmenüs  
  pic_width = pic_num * 70;
  // Anzahl von Pixeln, um die die Navigationsbilder verschoben werden
  var tempo = 10;
  // Angabe der Verzögerung für Timeout in Millisekunden
  time = 100;
  // Arrays für die großen und kleinen Bildern
  high = new Array();
    
 /**
  * 2. Definition der Informationen
  */
  
  // Die Bildpfade in großer Auflösung
  for (i = 0; i < pic_num; i++)
  {
    high[i]     = new Image();
    high[i].src = 'pics/high/' + i + '.jpg';
  }
  
  // Die entsprechenden Texte
  text = new Array ();
  text[0]  = 'Die ehemalige venezianische Botschaft, bevor Italien ein einheitlicher Staat wurde.';
  text[1]  = 'Dieses vergammelte Gemäuer gehört zum Vatikan. So sieht es aus, wenn man sich da mal in die Büsche schlägt.';
  text[2]  = 'Teil der ehemaligen Stadtmauer aus dem 3. nachchristlichen Jahrhundert. Sieht fast aus wie in Köln am Clodwigplatz.Ist nur bedeutend älter.';
  text[3]  = 'Die Basilika St. Paul vor den Mauern. Auch wenn ich es mit Kirchen nicht so habe, aber die ist ein Traum in Gold (im Innern).';
  text[4]  = 'Also das Gemäuer kennt ja wohl jeder!';
  text[5]  = 'Ein Triumphbogen neben besagtem Gemäuer.';
  text[6]  = 'Und noch einer. Spätestens beim zwanzigsten denkt man nur noch "LANGWEILIG!"';
  text[7]  = 'Zwei Nackedeis. Die so genannten Dioskuren Castor und Pollux. Übrigens sind das Imitate, die Originale standen in Pompeji. Aber die Römer konnten schon damals gut nachmachen.';
  text[8]  = 'Die Engelsburg. Darin haben sich von Zeit zu Zeit die Päpste verkrochen, wenn die Römer ihnen mal wieder an die Gurgel wollten.';
  text[9]  = 'Dieses ziemlich dreckige Wässerchen ist der berühmte Tiber, der quer durch Rom fließt. Die Wasserqualität soll in Etwa dem des Rheins entsprechen.';
  text[10] = 'Die Caracalla-Thermen. Mann, konnten die Römer Schwimmbäder bauen!';
  text[11] = 'Der Italiener, der Fußball und die Religion.';
  text[12] = 'Der Petersplatz vor selbigem Dom. Das wäre mal eine Fanmeile!';
  text[13] = 'Rom von oben. Kirchen noch und nöcher.';
  text[14] = 'Das Pantheon, da haben früher die Römer ihre Götter verehrt. Und Fußball gehörte nicht dazu!';
  text[15] = 'Das Forum Romanun. So sah es in Köln nach dem Krieg auch aus.';
  
 /**
  * 3. Die Funktionen
  */
  
  // Bilder nach links scrollen
  function moveLeft()
  {
    // jeweils aktuelle Links-Position
    var leftpos = parseInt(scroll_ele.style.left);
    // Minimaler Links-Wert (da irgendwann negativ)
    var minpos = (pic_width - 440) * - 1;    
    // So lange aktuelle Position größer gleich MMinimalposition
    if (leftpos >= minpos)
    {
      // Um x Pixel nach links verschieben 
      scroll_ele.style.left = leftpos - tempo + 'px';
      // Funktion ruft sich immer wieder selber auf
      lefti = setTimeout ('moveLeft()', time);
    }    
  }
  
  function moveRight()
  {
    // jeweils aktuelle Links-Position
    var leftpos = parseInt(scroll_ele.style.left);
    // So lange Links-Position größer 0
    if (leftpos < 0)
    {
      // Um x Pixel nach rechts verschieben
      scroll_ele.style.left = leftpos + tempo + 'px';
      // Funktion ruft sich immer wieder selber auf
      righti = setTimeout ('moveRight()', time);
    }    
  }
  
  function stopLeft()
  {
    // Beendet setTimeout über Referenzvariable
    clearTimeout(lefti);
  }
  
  function stopRight()
  {
    // Beendet setTimeout über Referenzvariable
    clearTimeout(righti);
  }
  
  function showDetails(num)
  {      
    // Tauscht Bild aus
    document.images['bild'].src = high[num].src;
    // Tauscht Text aus
    document.getElementById('description').innerHTML = text[num];
  }
  
  
  