  
  // Festlegen von Standard-Werten
  window.onload = function ()
  {
    // Referenz auf das Formular
    form = document.jobangebot; 
    //Formular bei Aktualisierung zurück setzen
    form.reset();
    // Referenz auf die Checkboxen 
    fields = document.getElementsByName('Ausbildung[]');
  }
  
  function checkForm ()
  {    
    // Warnmeldung beginnen
    var message = 'Die folgenden Felder ausfüllen, du Torfnase!' + "\n\n";
    // Fehlervariable
    var send    = true;
    // Alle Formularelemente durchlaufen
    for (i = 0; i < form.elements.length; i++)
    {
      // Wenn Element vom Typ text oder select-one
      if ('text' == form[i].type || 'select-one' == form[i].type)
      {
        // Wenn leer oder mit ??? gefüllt
        if ('' == form[i].value || '???' == form[i].value)
        {
          // Warnmeldung um Elementnamen erweitern
          message += form[i].name + "\n";
          // Elementwert auf ??? setzen
          form[i].value = '???';
          // Fehlervariable setzen
          send = false;
        }
      }
    }
    // Wenn Fehlervariable false ist
    if (false == send)
    {
      // Warnmeldung ausgeben
      alert (message);
      // false zurückgeben und abschicken verhindern
      return false;
    }
    else
    {
      return true;
    }
  }
    
  function clearField(field)
  {
    // ??? bei Klick entfernen
    if ('???' == field.value)
    {
      field.value = '';
    }
  }
  
  
  function setPreferences(pref)
  {
    // Hilfsarray zur Steuerung
    var degree = new Array ();
    degree['Hauptschule']    = new Array ();
    degree['Hauptschule'][0] = 'MATA';
    degree['Hauptschule'][1] = 'MATSE';
    degree['Realschule']     = new Array ();
    degree['Realschule'][0]  = 'MATA';
    degree['Realschule'][1]  = 'MATSE';
    degree['Realschule'][2]  = 'FIAE';
    degree['Realschule'][3]  = 'BA Inf.';
    degree['Gymnasium']      = new Array ();
    degree['Gymnasium'][0]   = 'MATA';
    degree['Gymnasium'][1]   = 'MATSE';
    degree['Gymnasium'][2]   = 'FIAE';
    degree['Gymnasium'][3]   = 'BA Inf.';
    degree['Gymnasium'][4]   = 'MA Inf.';
    degree['Gymnasium'][5]   = 'Dipl. Inf.';
    
    // Alle Checkboxen durchlaufen
    for (var i = 0; i < fields.length; i++)
    {
      // auf Übereinstimmung prüfen
      if (!in_array (fields[i].value, degree[pref]))
      {
        // Checkbox deaktivieren
        fields[i].disabled = true;
        // ggf. Markierung entfernen
        if (true == fields[i].checked)
        {
          fields[i].checked = false;
        }
      }
      else
      {
        fields[i].disabled = false;
      }
    }
  }
  
  function getGradution ()
  {
    // Alle Checkboxen rückwärts durchlaufen
    for (var i = fields.length - 1; i >= 0 ; i--)
    {
      // Wenn Checkbox aktiiviert
      if (true == fields[i].checked)
      {
        // Variable setzen und Schleife beenden
        var graduation = fields[i].value;
        break;
      }
    }
      
    if (graduation)
    {
      // Hilfsarray zur Steuerung
      var salary = new Array();
      salary['MATA']       = new Array (2500, 3000);
      salary['MATSE']      = new Array (2500, 3000);
      salary['FIAE']       = new Array (2500, 3000, 3500, 4000);
      salary['BA Inf.']    = new Array (2500, 3000, 3500, 4000);
      salary['MA Inf.']    = new Array (2500, 3000, 3500, 4000, 4500, 5000);
      salary['Dipl. Inf.'] = new Array (2500, 3000, 3500, 4000, 4500, 5000);
   
      // Ausgewählter Index des select-Feldes
      var chosen = form.Gehaltswunsch.selectedIndex;
      // Wert des ausgewählten Feldes
      var wanted = form.Gehaltswunsch.options[chosen].value;
      // Funktion setSalary aufrufen
      setSalary(wanted, salary[graduation]);
    }
  }
  
  function setSalary(wanted, salary)
  {
    // Wenn ein Gehalt ausgewählt wurde
    if ('' != wanted)
    {
      // Wenn nicht mit Unterarray von salary übereinstimmt
      if (!in_array (wanted, salary))
      {
        alert ('Wohl noch alle Tassen im Schrank?');
        // Auswahl zurücksetzen
        form.Gehaltswunsch.selectedIndex = 0;
      }
    }
    // select-Feld durchlaufen
    for (var i = 0; i < form.Gehaltswunsch.length; i++)
    {        
      // option-Wert mit Array vergleichen
      if (!in_array (form.Gehaltswunsch.options[i].value, salary))
      {
        // option-Feld deaktivieren
        form.Gehaltswunsch.options[i].disabled = true;
      }
      else
      {
        // option-Feld aktivieren
        form.Gehaltswunsch.options[i].disabled = false;
      }
    }
  }
  
  // Hilfsfunktion analog zu PHP
  function in_array (find, arr) 
  {
    for (var i = 0; i < arr.length; i++)
    {
      if (find == arr[i]) 
      {
        return true;
      }
    }
    return false;
  }
