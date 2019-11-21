
//| Welcome!
//| https://www.codewars.com/kata/577ff15ad648a14b780000e7
//|------------------------------------------------------------------------
//| Resources:
//| 
//|------------------------------------------------------------------------


//| My solution
//|------------------------------------------------------------------------
let language_list = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
  
function greet(language) {
return language_list[language] ? `${language_list[language]}` : 'Welcome'
  
}


//| Start of best practices / clever
//|------------------------------------------------------------------------

