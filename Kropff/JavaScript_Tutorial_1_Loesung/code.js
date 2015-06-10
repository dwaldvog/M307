
 /**
  * 1. Allgemeine Basisdefintionen
  */  
  
  // Anzahle der Bilder
  pic_num = 16;
  // Breite des Navigationsmen�s  
  pic_width = pic_num * 70;
  // Anzahl von Pixeln, um die die Navigationsbilder verschoben werden
  var tempo = 10;
  // Angabe der Verz�gerung f�r Timeout in Millisekunden
  time = 100;
  // Arrays f�r die gro�en und kleinen Bildern
  high = new Array();
    
 /**
  * 2. Definition der Informationen
  */
  
  // Die Bildpfade in gro�er Aufl�sung
  for (i = 0; i < pic_num; i++)
  {
    high[i]     = new Image();
    high[i].src = 'pics/high/' + i + '.jpg';
  }
  
  // Die entsprechenden Texte
  text = new Array ();
  text[0]  = 'Die ehemalige venezianische Botschaft, bevor Italien ein einheitlicher Staat wurde.';
  text[1]  = 'Dieses vergammelte Gem�uer geh�rt zum Vatikan. So sieht es aus, wenn man sich da mal in die B�sche schl�gt.';
  text[2]  = 'Teil der ehemaligen Stadtmauer aus dem 3. nachchristlichen Jahrhundert. Sieht fast aus wie in K�ln am Clodwigplatz.Ist nur bedeutend �lter.';
  text[3]  = 'Die Basilika St. Paul vor den Mauern. Auch wenn ich es mit Kirchen nicht so habe, aber die ist ein Traum in Gold (im Innern).';
  text[4]  = 'Also das Gem�uer kennt ja wohl jeder!';
  text[5]  = 'Ein Triumphbogen neben besagtem Gem�uer.';
  text[6]  = 'Und noch einer. Sp�testens beim zwanzigsten denkt man nur noch "LANGWEILIG!"';
  text[7]  = 'Zwei Nackedeis. Die so genannten Dioskuren Castor und Pollux. �brigens sind das Imitate, die Originale standen in Pompeji. Aber die R�mer konnten schon damals gut nachmachen.';
  text[8]  = 'Die Engelsburg. Darin haben sich von Zeit zu Zeit die P�pste verkrochen, wenn die R�mer ihnen mal wieder an die Gurgel wollten.';
  text[9]  = 'Dieses ziemlich dreckige W�sserchen ist der ber�hmte Tiber, der quer durch Rom flie�t. Die Wasserqualit�t soll in Etwa dem des Rheins entsprechen.';
  text[10] = 'Die Caracalla-Thermen. Mann, konnten die R�mer Schwimmb�der bauen!';
  text[11] = 'Der Italiener, der Fu�ball und die Religion.';
  text[12] = 'Der Petersplatz vor selbigem Dom. Das w�re mal eine Fanmeile!';
  text[13] = 'Rom von oben. Kirchen noch und n�cher.';
  text[14] = 'Das Pantheon, da haben fr�her die R�mer ihre G�tter verehrt. Und Fu�ball geh�rte nicht dazu!';
  text[15] = 'Das Forum Romanun. So sah es in K�ln nach dem Krieg auch aus.';
  
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
    // So lange aktuelle Position gr��er gleich MMinimalposition
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
    // So lange Links-Position gr��er 0
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
    // Beendet setTimeout �ber Referenzvariable
    clearTimeout(lefti);
  }
  
  function stopRight()
  {
    // Beendet setTimeout �ber Referenzvariable
    clearTimeout(righti);
  }
  
  function showDetails(num)
  {      
    // Tauscht Bild aus
    document.images['bild'].src = high[num].src;
    // Tauscht Text aus
    document.getElementById('description').innerHTML = text[num];
  }
  
  
  