//| Write a function that converts hours into seconds.
//|------------------------------------------------------------------------
function howManySeconds(hours) {
	return hours * 3600
}


//| Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.
//|------------------------------------------------------------------------
function intOrString(param) {
	if(typeof param === 'string') {
		return 'str'
	} else {
			return 'int'
		}
  }


//| Write a function that converts hours into seconds.
//| https://edabit.com/challenge/PTiLYyb4A69KZtBCg
//|------------------------------------------------------------------------ 
function lessThanOrEqualToZero(num) {
  return num <= 0 ? true : false
}


//| You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.
//| https://edabit.com/challenge/GJn7xcBiCLdCNXFgy
//|------------------------------------------------------------------------ 
  function profit(info) {
  let totalCost = (info.costPrice*info.inventory)
  let totalSales = (info.sellPrice*info.inventory)
  return Math.round(totalSales - totalCost)	
}



//| String with facts about the city. The city facts will need to be extracted from the object's three properties:
//| name
//| population
//| continent
//| The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
//| https://edabit.com/challenge/FzDAgSR84zeyRa278
//|------------------------------------------------------------------------ 
function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}



//| Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.
//| https://edabit.com/challenge/XyPee4TdK64BTgvbD
//|------------------------------------------------------------------------ 
function operation(num1, num2) {
  if (num1 + num2 == 24) {
    return 'added'
  } 
  if ( num1 - num2 == 24) {
    return 'subtracted'
  } 
  if ( num1 / num2 == 24) { 
  return 'divided'
  }
  if (num1 * num2 == 24) {
    return 'multiplied'
  } else {
    return null
  }
}

//| Create a function that takes an object and returns the keys and values as separate arrays.
//| https://edabit.com/challenge/AP4hnF97anRc2mAZ6
//|------------------------------------------------------------------------ 
function keysAndValues(obj) {
  return [Object.keys(obj), Object.values(obj)]
}
  

//| Create a function that takes an array and a string as arguments and return the index of the string.
//| https://edabit.com/challenge/9ApjPggCLGiPt573m
//|------------------------------------------------------------------------ 
function find_index(arr, str) {
  return arr.indexOf(str)
  
}