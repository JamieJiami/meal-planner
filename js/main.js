var Gender = {
    MALE: 'm',
    FEMALE: 'f'
};
var ActivityLevel = {
    LIGHT: "light",
    MODERATE: "moderate",
    HIGH: "high"
};
var EnergyUnit = {
    KJ: 0,
    KCAL: 1
};


function customRoundUp(num) {
    // Round up to at most 3 decimal places
    return Math.round(num * 1000) / 1000;
}

(function () {
    var _breakfast = new Meal("b");
    var _lunch = new Meal("l");
    var _dinner = new Meal("d");
    var _other = new Meal("o");

    this.Breakfast = {
        add: function (quantity, food) {
            return _breakfast.add(quantity, food);
        },
        update: function (id, quantity) {
            _breakfast.update(id, quantity);
        },
        remove: function (id) {
            _breakfast.remove(id);
        },
        totalEnergy: function () {
            return _breakfast.totalEnergy();
        },
        totalCarbo: function () {
            return _breakfast.totalCarbo();
        },
        totalProtein: function () {
            return _breakfast.totalProtein();
        },
        totalFat: function () {
            return _breakfast.totalFat();
        },
        totalVeg: function () {
            return _breakfast.totalVeg();
        },
        totalFruit: function () {
            return _breakfast.totalFruit();
        }
    };

    this.Lunch = {
        add: function (quantity, food) {
            return _lunch.add(quantity, food);
        },
        update: function (id, quantity) {
            _lunch.update(id, quantity);
        },
        remove: function (id) {
            _lunch.remove(id);
        },
        totalEnergy: function () {
            return _lunch.totalEnergy();
        },
        totalCarbo: function () {
            return _lunch.totalCarbo();
        },
        totalProtein: function () {
            return _lunch.totalProtein();
        },
        totalFat: function () {
            return _lunch.totalFat();
        },
        totalVeg: function () {
            return _lunch.totalVeg();
        },
        totalFruit: function () {
            return _lunch.totalFruit();
        }
    };

    this.Dinner = {
        add: function (quantity, food) {
            return _dinner.add(quantity, food);
        },
        update: function (id, quantity) {
            _dinner.update(id, quantity);
        },
        remove: function (id) {
            _dinner.remove(id);
        },
        totalEnergy: function () {
            return _dinner.totalEnergy();
        },
        totalCarbo: function () {
            return _dinner.totalCarbo();
        },
        totalProtein: function () {
            return _dinner.totalProtein();
        },
        totalFat: function () {
            return _dinner.totalFat();
        },
        totalVeg: function () {
            return _dinner.totalVeg();
        },
        totalFruit: function () {
            return _dinner.totalFruit();
        }
    };

    this.Other = {
        add: function (quantity, food) {
            return _other.add(quantity, food);
        },
        update: function (id, quantity) {
            _other.update(id, quantity);
        },
        remove: function (id) {
            _other.remove(id);
        },
        totalEnergy: function () {
            return _other.totalEnergy();
        },
        totalCarbo: function () {
            return _other.totalCarbo();
        },
        totalProtein: function () {
            return _other.totalProtein();
        },
        totalFat: function () {
            return _other.totalFat();
        },
        totalVeg: function () {
            return _other.totalVeg();
        },
        totalFruit: function () {
            return _other.totalFruit();
        }
    };

    // Return the daily energy needed based on different age, gender and activity level
    /**
     * Reference link:
     * https://www.change4health.gov.hk/en/healthy_diet/facts/calories_nutrients/calories_energy/index.html 
     */
    this.CalculateEnergyNeeded = function (gender, age, activityLevel) {
        if (age >= 80) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1900;
                        case ActivityLevel.MODERATE:
                            return 2200;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1500;
                        case ActivityLevel.MODERATE:
                            return 1750;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 65) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 2050;
                        case ActivityLevel.MODERATE:
                            return 2350;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1700;
                        case ActivityLevel.MODERATE:
                            return 1950;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 50) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 2100;
                        case ActivityLevel.MODERATE:
                            return 2450;
                        case ActivityLevel.HIGH:
                            return 2800;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1750;
                        case ActivityLevel.MODERATE:
                            return 2050;
                        case ActivityLevel.HIGH:
                            return 2350;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 18) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 2250;
                        case ActivityLevel.MODERATE:
                            return 2600;
                        case ActivityLevel.HIGH:
                            return 3000;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1800;
                        case ActivityLevel.MODERATE:
                            return 2100;
                        case ActivityLevel.HIGH:
                            return 2400;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 14) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 2500;
                        case ActivityLevel.MODERATE:
                            return 2850;
                        case ActivityLevel.HIGH:
                            return 3200;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 2000;
                        case ActivityLevel.MODERATE:
                            return 2300;
                        case ActivityLevel.HIGH:
                            return 2550;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 11) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 2050;
                        case ActivityLevel.MODERATE:
                            return 2350;
                        case ActivityLevel.HIGH:
                            return 2600;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1800;
                        case ActivityLevel.MODERATE:
                            return 2050;
                        case ActivityLevel.HIGH:
                            return 2300;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 10) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1800;
                        case ActivityLevel.MODERATE:
                            return 2050;
                        case ActivityLevel.HIGH:
                            return 2300;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1650;
                        case ActivityLevel.MODERATE:
                            return 1900;
                        case ActivityLevel.HIGH:
                            return 2150;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 9) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1750;
                        case ActivityLevel.MODERATE:
                            return 2000;
                        case ActivityLevel.HIGH:
                            return 2250;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1550;
                        case ActivityLevel.MODERATE:
                            return 1800;
                        case ActivityLevel.HIGH:
                            return 2000;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 8) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1650;
                        case ActivityLevel.MODERATE:
                            return 1850;
                        case ActivityLevel.HIGH:
                            return 2100;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1450;
                        case ActivityLevel.MODERATE:
                            return 1700;
                        case ActivityLevel.HIGH:
                            return 1900;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 7) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1500;
                        case ActivityLevel.MODERATE:
                            return 1700;
                        case ActivityLevel.HIGH:
                            return 1900;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1350;
                        case ActivityLevel.MODERATE:
                            return 1550;
                        case ActivityLevel.HIGH:
                            return 1750;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 6) {
            switch (gender) {
                case Gender.MALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1400;
                        case ActivityLevel.MODERATE:
                            return 1600;
                        case ActivityLevel.HIGH:
                            return 1800;
                        default:
                            return undefined;
                    }
                case Gender.FEMALE:
                    switch (activityLevel) {
                        case ActivityLevel.LIGHT:
                            return 1250;
                        case ActivityLevel.MODERATE:
                            return 1450;
                        case ActivityLevel.HIGH:
                            return 1650;
                        default:
                            return undefined;
                    }
                default:
                    return undefined;
            }
        }
        else if (age >= 5) {
            switch (gender) {
                case Gender.MALE:
                    return 1400;
                case Gender.FEMALE:
                    return 1300;
                default:
                    return undefined;
            }
        }
        else if (age >= 4) {
            switch (gender) {
                case Gender.MALE:
                    return 1300;
                case Gender.FEMALE:
                    return 1250;
                default:
                    return undefined;
            }
        }
        else if (age >= 3) {
            switch (gender) {
                case Gender.MALE:
                    return 1250;
                case Gender.FEMALE:
                    return 1200;
                default:
                    return undefined;
            }
        }
        else if (age >= 2) {
            switch (gender) {
                case Gender.MALE:
                    return 1100;
                case Gender.FEMALE:
                    return 1000;
                default:
                    return undefined;
            }
        }
        else if (age >= 1) {
            switch (gender) {
                case Gender.MALE:
                    return 900;
                case Gender.FEMALE:
                    return 800;
                default:
                    return undefined;
            }
        }
        else {
            return undefined;
        }
    };

    // Return the daily fat needed based on age
    /**
     * Age	Suggested Fat Intake Limit
     * 2 - 3	30% to 40% of Total Calories
     * 4 - 18	25% to 35% of Total Calories
     * 19+	20% to 35% of Total Calories
     *
     **/
    // 1g fat = 39kJ
    this.CalculateFatNeeded = function (energy, age) {
        age = Math.round(age);

        if (age >= 2) {
            if (age <= 3) {
                return { lowerBound: energy * 0.20, upperBound: energy * 0.40 };
            }
            else {
                if (age <= 18) {
                    return { lowerBound: energy * 0.25, upperBound: energy * 0.35 };
                } else {
                    return { lowerBound: energy * 0.2, upperBound: energy * 0.35 };
                }
            }
        }
        else {
            return { lowerBound: undefined, upperBound: undefined };
        }
    };

    // Return the daily carbohydrate intake of all meals
    this.DailyCarbIntake = function () {
        return _breakfast.totalCarbo() + _lunch.totalCarbo() + _dinner.totalCarbo() + _other.totalCarbo();

        /*// TODO: Sum up the carbohydrate intake of different meals
        // You may refer to function "this.DailyEnergyIntake"
        // Below components may help you to complete the calculation:
        //      _breakfast.totalCarbo()  -->  return the carbohydrate intake in breakfast
        //      _lunch.totalCarbo()      -->  return the carbohydrate intake in lunch
        //      _dinner.totalCarbo()     -->  return the carbohydrate intake in dinner
        //      _other.totalCarbo()      -->  return the carbohydrate intake in other meal
        // You may write your code here:
        return 0;*/
    };
    // Return the daily protein intake of all meals
    this.DailyProteinIntake = function () {
        return _breakfast.totalProtein() + _lunch.totalProtein() + _dinner.totalProtein() + _other.totalProtein();

        /*// TODO: Sum up the protein intake of different meals
        // You may refer to function "this.DailyEnergyIntake"
        // Below components may help you to complete the calculation:
        //      _breakfast.totalProtein()  -->  return the protein intake in breakfast
        //      _lunch.totalProtein()      -->  return the protein intake in lunch
        //      _dinner.totalProtein()     -->  return the protein intake in dinner
        //      _other.totalProtein()      -->  return the protein intake in other meal
        // You may write your code here:
        return 0;*/
    };
    // Return the daily fat intake of all meals
    this.DailyFatIntake = function () {
        return _breakfast.totalFat() + _lunch.totalFat() + _dinner.totalFat() + _other.totalFat();

        /*// TODO: Sum up the fat intake of different meals
        // You may refer to function "this.DailyEnergyIntake"
        // Below components may help you to complete the calculation:
        //      _breakfast.totalFat()  -->  return the fat intake in breakfast
        //      _lunch.totalFat()      -->  return the fat intake in lunch
        //      _dinner.totalFat()     -->  return the fat intake in dinner
        //      _other.totalFat()      -->  return the fat intake in other meal
        // You may write your code here:
        return 0;*/
    };
    // Return the daily energy intake of all meals
    this.DailyEnergyIntake = function () {
        return _breakfast.totalEnergy() + _lunch.totalEnergy() + _dinner.totalEnergy() + _other.totalEnergy();
    };

    // Return the daily veg intake of all meals
    this.DailyVegIntake = function () {
        return _breakfast.totalVeg() + _lunch.totalVeg() + _dinner.totalVeg() + _other.totalVeg();
    };

    // Return the daily fruit intake of all meals
    this.DailyFruitIntake = function () {
        return _breakfast.totalFruit() + _lunch.totalFruit() + _dinner.totalFruit() + _other.totalFruit();
    };

})();

// Construct a Meal object
function Meal(id_prefix) {
    this.count = 0;
    this.prefix = id_prefix;
    this.items = {};
}
// Add a food item in a meal
Meal.prototype.add = function (quantity, food) {
    var _found = false;
    var _matchedItem;

    var _itemKeys = Object.keys(this.items);

    for (var i = 0; i < _itemKeys.length; i++) {
        if (this.items[_itemKeys[i]].foodID == food) {
            _found = true;
            _matchedItem = this.items[_itemKeys[i]];
            break;
        }
    }
    
    if (_found) {
        this.update(_matchedItem.id, _matchedItem.qty + quantity);
        return _matchedItem;
    }
    else {
        var _id = this.prefix + this.count++;
        this.items[_id] = {
            id: _id,
            qty: quantity,
            foodID: food
        };
        return this.items[_id];
    }
};
// Update the quantity of the food item in a meal
Meal.prototype.update = function (id, quantity) {
    this.items[id].qty = quantity;
};
// Remove the food item in a meal
Meal.prototype.remove = function (id) {
    delete (this.items[id]);
};

// Calculate the daily energy intake of a meal
Meal.prototype.totalEnergy = function () {
    /*var total = 0;
    var key, item;
    for (key in this.items) {
        item = this.items[key];
        total += FoodData[item.foodID].num.energy * item.qty * FoodData[item.foodID].num.serving;
    }
    return total;*/

    /*var e = this.totalCarbo() * 17 + this.totalFat() * 39 + this.totalProtein() * 18;
    return e;*/

    return this.totalCarbo() * 17 + this.totalFat() * 39 + this.totalProtein() * 18;

    /*// TODO: Calculate energy using formula: Energy Intake = Carbohydrate * 17 + Fat * 39 + Protein * 18
    // Below components may help you to complete the calculation:
    //      this.totalCarbo()    -->  return daily carbohydrate intake of a meal
    //      this.totalFat()      -->  return daily fat intake of a meal
    //      this.totalProtein()  -->  return daily protein intake of a meal
    // You may write your code here:
    return 0;*/
};
// Calculate the daily carbohydrate intake of a meal
Meal.prototype.totalCarbo = function () {
    var total = 0;
    var key, item;
    // Sum up the carbohydrate of all the food in a meal
    for (key in this.items) {
        item = this.items[key];
        total += FoodData[item.foodID].num.carbo * item.qty * FoodData[item.foodID].num.serving;
    }
    return total;
};
// Calculate the daily protein intake of a meal
Meal.prototype.totalProtein = function () {
    var total = 0;
    var key, item;
    // Sum up the protein of all the food in a meal
    for (key in this.items) {
        item = this.items[key];
        total += FoodData[item.foodID].num.protein * item.qty * FoodData[item.foodID].num.serving;
    }
    return total;

    /*// TODO: Sum up the protein of all the food in a meal
    // You may refer to function "Meal.prototype.totalCarbo"
    // Below components may help you to complete the calculation:
    //      FoodData[item.foodID].num.protein   -   return the protein (per 100g) of a food item
    //      item.qty                            -   return quantity of food (by unit)
    //      FoodData[item.foodID].num.serving   -   return the gram of food per unit
    // You may write your code here:
    return 0;*/
};
// Calculate the daily fat intake of a meal
Meal.prototype.totalFat = function () {
    var total = 0;
    var key, item;
    // Sum up the fat of all the food in a meal
    for (key in this.items) {
        item = this.items[key];
        total += FoodData[item.foodID].num.fat * item.qty * FoodData[item.foodID].num.serving;
    }
    return total;

    /*// TODO: Sum up the fat of all the food in a meal
    // You may refer to function "Meal.prototype.totalCarbo"
    // Below components may help you to complete the calculation:
    //      FoodData[item.foodID].num.fat       -   return the fat (per 100g) of a food item
    //      item.qty                            -   return quantity of food (by unit)
    //      FoodData[item.foodID].num.serving   -   return the gram of food per unit
    // You may write your code here:
    return 0;*/
};
// Calculate the vegetable intake of a meal (in g)
Meal.prototype.totalVeg = function () {
    var total = 0;
    var key, item;
    // Sum up the fat of all the food in a meal
    for (key in this.items) {
        item = this.items[key];
        if (FoodMenu.checkIsVegetable(item.foodID)) {
            total += item.qty * FoodData[item.foodID].num.serving * 100;
        }
    }
    return total;   
};
// Calculate the fruit intake of a meal (in g)
Meal.prototype.totalFruit = function () {
    var total = 0;
    var key, item;
    // Sum up the fat of all the food in a meal
    for (key in this.items) {
        item = this.items[key];
        if (FoodMenu.checkIsFruit(item.foodID)) {
            total += item.qty * FoodData[item.foodID].num.serving * 100;
        }
    }
    return total;
};
