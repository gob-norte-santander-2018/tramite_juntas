function FDK_Validate(FormName, stopOnFailure, AutoSubmit, ErrorHeader)
{
 var theFormName = FormName;
 var theElementName = "";
 if (theFormName.indexOf(".")>=0)  
 {
   theElementName = theFormName.substring(theFormName.indexOf(".")+1)
   theFormName = theFormName.substring(0,theFormName.indexOf("."))
 }
 var ValidationCheck = eval("document."+theFormName+".ValidateForm")
 if (ValidationCheck)  
 {
  var theNameArray = eval(theFormName+"NameArray")
  var theValidationArray = eval(theFormName+"ValidationArray")
  var theFocusArray = eval(theFormName+"FocusArray")
  var ErrorMsg = "";
  var FocusSet = false;
  var i
  var msg
    
 
        // Go through the Validate Array that may or may not exist
        // and call the Validate function for all elements that have one.
  if (String(theNameArray)!="undefined")
  {
   for (i = 0; i < theNameArray.length; i ++)
   {
    msg="";
    if (theNameArray[i].name == theElementName || theElementName == "")
    {
      msg = eval(theValidationArray[i]);
    }
    if (msg != "")
    {
     ErrorMsg += "\n"+msg;                   
     if (stopOnFailure == "1") 
     {
       if (theFocusArray[i] && !FocusSet)  
      {
       FocusSet=true;
       theNameArray[i].focus();
      }
      alert(ErrorHeader+ErrorMsg);
      document.MM_returnValue = false; 
      break;
     }
     else  
     {
      if (theFocusArray[i] && !FocusSet)  
      {
       FocusSet=true;
       theNameArray[i].focus();
      }
     }
    }
   }
  }
  if (ErrorMsg!="" && stopOnFailure != "1") 
  {
   alert(ErrorHeader+ErrorMsg);
  }
  document.MM_returnValue = (ErrorMsg==""); 
  if (document.MM_returnValue && AutoSubmit)  
  {
   eval("document."+FormName+".submit()")
  }
 }
}
function FDK_StripChars(theFilter,theString)
{
	var strOut,i,curChar

	strOut = ""
	for (i=0;i < theString.length; i++)
	{		
		curChar = theString.charAt(i)
		if (theFilter.indexOf(curChar) < 0)	// if it's not in the filter, send it thru
			strOut += curChar		
	}	
	return strOut
}

function FDK_AddToValidateArray(FormName,FormElement,Validation,SetFocus)
{
    var TheRoot=eval("document."+FormName);
 
    if (!TheRoot.ValidateForm) 
    {
        TheRoot.ValidateForm = true;
        eval(FormName+"NameArray = new Array()")
        eval(FormName+"ValidationArray = new Array()")
        eval(FormName+"FocusArray = new Array()")
    }
    var ArrayIndex = eval(FormName+"NameArray.length");
    eval(FormName+"NameArray[ArrayIndex] = FormElement");
    eval(FormName+"ValidationArray[ArrayIndex] = Validation");
    eval(FormName+"FocusArray[ArrayIndex] = SetFocus");
 
}

function FDK_ValidateNonBlank(FormElement,ErrorMsg)
{
  var msg = ErrorMsg;
  var val = FormElement.value;  

  if (!(FDK_StripChars(" \n\t\r",val).length == 0))
  {
     msg="";
  }

  return msg;
}

function FDK_AddNonBlankValidation(FormName,FormElementName,SetFocus,ErrorMsg)  {
  var ValString = "FDK_ValidateNonBlank("+FormElementName+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(FormElementName),ValString,SetFocus)
}
function ValidateInteger(FormElement,Required,Minimum,Maximum,ErrorMsg)
{
	var theString = FormElement.value;
	theString = FDK_StripChars(" ",theString);
	var min = Minimum;
	var max = Maximum;
	var pean = ErrorMsg;

	if (theString.length == 0)	
	{
		if (!Required) return ""		
		else return pean;
	}

	// remove leading zeros (zeros are only leading if there is more than one char)
	while (theString.length > 1 && theString.substring(0,1) == "0")
	{
		theString = theString.substring(1, theString.length);
	}

	var val = parseInt(theString);
	if (isNaN(val)) return pean;
	
	// check for non-digits (and minus sign). Do this by converting number
	// back to a string and comparing it to original string.
	if (val.toString() != theString) return pean;
	
	if (min < max)
	{
		if ((val < min) || (val > max))
		{
			return ErrorMsg;
		}
	}
	   
	// reset the entered string after removal of spaces and leading zeros.
	FormElement.value=theString;
	return "";
}

function FDK_AddIntegerValidation(FormName,FormElementName,Required,Minimum,Maximum,SetFocus,ErrorMsg)  {
  var ValString = "ValidateInteger("+FormElementName+","+Required+","+Minimum+","+Maximum+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(FormElementName),ValString,SetFocus)
}
function FDK_AllInRange(x,y,theString)
{
	var i, curChar
	
	for (i=0; i < theString.length; i++)
	{
		curChar = theString.charAt(i)
		if (curChar < x || curChar > y) //the char is not in range
			return false
	}
	return true
}

function FDK_reformat(s)
{
    var arg;
    var sPos = 0;
    var resultString = "";

    for (var i = 1; i < FDK_reformat.arguments.length; i++) {
       arg = FDK_reformat.arguments[i];
       if (i % 2 == 1) 
           resultString += arg;
       else 
       {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}

function FDK_ValidateEmail(FormElement,Required,ErrorMsg)
{
   var msg = "";
   var val = FormElement.value;
   var msgInvalid = ErrorMsg;

   var theLen = FDK_StripChars(" ",val).length
   if (theLen == 0)	     {
     if (!Required) return "";
     else return msgInvalid;
   }

   if (val.indexOf("@",0) < 0 || val.indexOf(".")<0) 
   {
      msg = msgInvalid;
   }
   return msg;
}

function FDK_AddEmailValidation(FormName,FormElementName,Required,SetFocus,ErrorMsg)  {
  var ValString = "FDK_ValidateEmail("+FormElementName+","+Required+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(FormElementName),ValString,SetFocus)
}
function FDK_ValidateDate(FormElement,Required,MinDate,MaxDate,Format,ErrorMsg)
{
	var msg = "";
	var theString = FormElement.value;
	var dateVar = new Date(theString);
	var peavd = ErrorMsg;
	var d = dateVar;

	var fullYear = d.getYear();
	if (fullYear <= 10) fullYear += 2000;
	if (fullYear <= 200) fullYear += 1900;
    d.setYear(fullYear)
    dateVar.setYear(fullYear)


	var theLen = FDK_StripChars(" ",theString).length
	if (theLen == 0)
	{
		if (!Required) return "";
		else return peavd;
	}

	if (isNaN(dateVar.valueOf()) || (dateVar.valueOf() == 0))
		return peavd;

	// Check for correct range.
	if (MinDate != "")
	{
		var Today = new Date(MinDate);
		if (dateVar <= Today)
		  return peavd;
	}
	if (MaxDate != "")
	{
		var Today = new Date(MaxDate);
		if (dateVar >= Today)
		return peavd;
	}

	// We have a valid date. Reformat it and write it back to the control
	var style = Format;

	if (style == "2") {
	  var date_string = (d.getMonth()+1) + "/" + d.getDate() + "/" + fullYear;
	  }
	  else if (style == "3") {
	  var date_string = (d.getMonth()+1) + "-" + d.getDate() + "-" + fullYear;
	  }
	  else if (style == "4") {
	  var date_string = d.getDate() + "/" + (d.getMonth()+1) + "/" + fullYear;
	  }
	  else if (style == "5") {
	  var date_string = getMonthName(d) + " " + d.getDate() + ", " + fullYear;
	  }
	  else if (style == "6") {
	  var date_string = getDayName(d) + " " + getMonthName(d) + " " + d.getDate() + ", " + fullYear;
	  }
	  else if (style == "7") {
	  var date_string = d.toLocaleString();
	  }
	  else if (style == "1") {
	  var date_string = theString;
	  }
	  else {
	  var date_string = d.toGMTString();
  }

	FormElement.value=date_string;

	return msg;
}

function FDK_AddDateValidation(FormName,FormElementName,Required,StartDate,EndDate,Format,SetFocus,ErrorMsg)  {
  var ValString = "FDK_ValidateDate("+FormElementName+","+Required+","+StartDate+","+EndDate+","+Format+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(FormElementName),ValString,SetFocus)
}
function FDK_ValidateMask(FormElement,Required,Mask,ErrorMsg)
{
	var msg = ""
	var i, m, s, firstNonWhite
	var theString = FormElement.value;
	var theMask = Mask;	
	var NumMask = "#";
	var AlphaMask = "A";
	var AlphaNumMask = "?";
 	var msgInvalid = ErrorMsg;
	
	if (FDK_StripChars(" ",theString).length == 0)	{
		if (!Required) 
           return "";		
		else 
           return msgInvalid;
      }

	//Strip spaces off of the sides of the string
 	theString = FDK_Trim(theString);

	if (theString.length != theMask.length)
		return msgInvalid;


	blnOk = true;
	for (i = 0; i < theMask.length; i++)
	{
		m = theMask.charAt(i);
		s = theString.charAt(i);
		if (m == NumMask)
        {
				if (!FDK_AllInRange("0","9",s))	blnOk = false;
        }
        else if (m == AlphaMask)
        {
				if (!FDK_AllInRange("A","Z",s.toUpperCase())) blnOk = false;
        }
		else if (m == AlphaNumMask)
        {
				if (!FDK_AllInRange("0","9",s) && !FDK_AllInRange("A","Z",s.toUpperCase()))	blnOk = false;
        }
		else //It should be literal
				if (m != s)	blnOk = false;		
	
		if (!blnOk) break; // exit for loop because the string is already wrong
	}

	if (!blnOk) return msgInvalid;

	FormElement.value=theString;

	return msg;		
}

function FDK_AddMaskValidation(FormName,FormElementName,Required,SetFocus,theMask,ErrorMsg)  {
  var ValString = "FDK_ValidateMask("+FormElementName+","+Required+","+theMask+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(FormElementName),ValString,SetFocus)
}
function FDK_ValidateTargetEqualsSource(SourceElement,TargetElement,ClearFields,CaseSensitive,ErrorMsg)
{

	var msg = ""
	var sourceText = SourceElement.value;
	var targetText = TargetElement.value;
	var msgInvalid = ErrorMsg;
    
	if (!CaseSensitive)   {
	  sourceText = sourceText.toUpperCase();
	  targetText = targetText.toUpperCase();
	}
	
	if (sourceText != targetText)
	{
	  msg = msgInvalid
      if (ClearFields)     {
	    TargetElement.value = '';
	    SourceElement.value = '';
	  }
	}
	return msg	
}

function FDK_AddTargetEqualsSourceValidation(FormName,SourceElementName,TargetElementName,ClearFields,CaseSensitive,SetFocus,ErrorMsg)  {
  var ValString = "FDK_ValidateTargetEqualsSource("+SourceElementName+","+TargetElementName+","+ClearFields+","+CaseSensitive+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(SourceElementName),ValString,SetFocus)
}
function FDK_ValidateSelectionMade(FormElement,ErrorMsg)
{
  msg = "";
  var iPos = FormElement.selectedIndex;
  if ((iPos<=0 && FormElement.size<=1) || (iPos<0))
  {
    msg = ErrorMsg;
  }
  return msg;
}

function FDK_AddSelectionMadeValidation(FormName,FormElementName,SetFocus,ErrorMsg)  {
  var ValString = "FDK_ValidateSelectionMade("+FormElementName+","+ErrorMsg+")"
  FDK_AddToValidateArray(FormName,eval(FormElementName),ValString,SetFocus)
}