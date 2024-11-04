$(function () {
    $("#gender_m").val(Gender.MALE);
    $("#gender_f").val(Gender.FEMALE);

    $("#needs_age").val(13);

    $("#needs_activity").append("<option value='" + ActivityLevel.LIGHT + "' selected></option>");
    $("#needs_activity").append("<option value='" + ActivityLevel.MODERATE + "'></option>");
    $("#needs_activity").append("<option value='" + ActivityLevel.HIGH + "'></option>");

    var temp = {
        gender: Gender.MALE,
        age: 13,
        activityLevel: ActivityLevel.LIGHT,
        dailyEnergyNeeded: {},
        dailyfatNeeded: {},
        dailyVegNeeded: 3,
        dailyFruitNeeded: 2,
        energyIntake: undefined,
        fatIntake: undefined,
        vegIntake: undefined,
        fruitIntake: undefined
    }

    createFoodMenuDOM(FoodMenu.startingMenu);

    $("#food_menu_nav").on("click", ".breadcrumb-item>a", function (e) {
        var menuID = $(this).data("menu");
        var selectedCrumb = $(this).parent();
        $(selectedCrumb).prev().nextAll().remove();

        switch (menuID) {
            case "foodMenuRoot":
                createFoodMenuDOM(FoodMenu.startingMenu);
                break;
            default:
                updateFoodMenuModal(menuID);
                break;
        }
    });

    $("#add_form").submit(function (e) {
        e.preventDefault();

        var added_item;
        /*var _q = this["add_qty"].valueAsNumber;*/
        var _q = Number(this["add_qty"].value);
        var _f = this["add_food"].value;
        if (_q < 0) return;

        switch (this["add_to"].value) {
            case "b":
                added_item = Breakfast.add(_q, _f);
                if (added_item != undefined) {
                    var _found = false;
                    $("#breakfast_cart>div.selected-food").each(function () {
                        if ($(this).data().itemId == added_item.id) {
                            _found = true;

                            // update cart
                            $(this).find("input.quantity").val(added_item.qty);
                            

                            return;
                        }
                    })

                    if (!_found) {
                        $("#breakfast_cart").append(createCartObject(added_item));
                    }
                }
                break;
            case "l":
                added_item = Lunch.add(_q, _f);
                if (added_item != undefined) {
                    $("#lunch_cart").append(createCartObject(added_item));
                }
                break;
            case "d":
                added_item = Dinner.add(_q, _f);
                if (added_item != undefined) {
                    $("#dinner_cart").append(createCartObject(added_item));
                }
                break;
            case "o":
                added_item = Other.add(_q, _f);
                if (added_item != undefined) {
                    $("#other_cart").append(createCartObject(added_item));
                }
                break;
            default:
                return;
        }

        updateMealSummary(this["add_to"].value);

        resetAddPanel();
    });

    $("#needs_form").submit(function (e) {
        e.preventDefault();

        temp.gender = this["needs_gender"].value;
        temp.age = Number(this["needs_age"].value);
        temp.activityLevel = this["needs_activity"].value;

        //var energy = CalculateEnergyNeeded(this["needs_gender"].value, this["needs_age"].valueAsNumber, this["needs_occupation"].value);
        var energyInKcal = CalculateEnergyNeeded(temp.gender, temp.age, temp.activityLevel);
        // https://www.change4health.gov.hk/en/healthy_diet/facts/calories_nutrients/calories_energy/index.html
        // data in reference is rounded to the nearest 50 kcal
        temp.dailyEnergyNeeded.lowerBound = Math.round((energyInKcal - 25) * 4.2);
        temp.dailyEnergyNeeded.upperBound = Math.round((energyInKcal + 24) * 4.2);

        $("#needs_energy").text(temp.dailyEnergyNeeded.lowerBound + " kJ - " + temp.dailyEnergyNeeded.upperBound + " kJ");

        var fatInKcal = CalculateFatNeeded(energyInKcal, temp.age); // change the parameter to accept energy and age
        // returned value format { lowerBound: x, upperBound: y }
        // Each g of fat provides 9 kcal
        temp.dailyfatNeeded.lowerBound = customRoundUp(fatInKcal.lowerBound / 9);
        temp.dailyfatNeeded.upperBound = customRoundUp(fatInKcal.upperBound / 9);
        $("#needs_fat").text(temp.dailyfatNeeded.lowerBound + " g - " + temp.dailyfatNeeded.upperBound + " g");

        $("#needs_veg").html(" >= " + temp.dailyVegNeeded.toString() + " <span class='en'>portion(s)</span><span class='tc'>份</span>");
        $("#needs_fruit").html(" >= " + temp.dailyFruitNeeded.toString() + " <span class='en'>portion(s)</span><span class='tc'>份</span>");


        updateDailyAdvice();
    });

    checkLanguage('');
    $("#lang").click(function () {
        checkLanguage('change');
    });

    function createCartObject(addedItem) {
        // display newly added food item in Breakfast/Lunch/Dinner/Other panel 

        if (addedItem != undefined) {
            var div = document.createElement("div");
            $(div).addClass("selected-food row alert alert-primary m-0 mt-2 ml-0 p-0");
            $(div).data("item-id", addedItem.id);

            var col1 = document.createElement("div");
            var col2 = document.createElement("div");
            var col3 = document.createElement("div");

            $(col1).addClass("col-7 p-2 detail");
            $(col2).addClass("col-4 p-2 mb-2");
            $(col3).addClass("col-1 mt-1 delete");

            //$(col1).append("<h6>" + FoodData[addedItem.foodID].name[lang] + "</h6>");
            $(col1).append("<h6><span class='en'>" + FoodData[addedItem.foodID].name["en"] + "</span><span class='tc'>" + FoodData[addedItem.foodID].name["tc"] + "</span></h6><img class='cart_img' src=images/FoodPhotos/"+FoodData[addedItem.foodID].image+">");
            //$(col1).append("<p>details of bread</p>");

            $(col2).append("<label><span class='en'>Quantity</span><span class='tc'>份量</span></label><br/>");
            $(col2).append("<input type=\"number\" min=\"0\" step='0.5' class=\"quantity\" value=\"" + addedItem.qty + "\" />"+"<label class='tc'>"+FoodData[addedItem.foodID].unit["tc"]+"</label>"+"<label class='en'>"+FoodData[addedItem.foodID].unit["en"]+"</label>");
            //$(col2).append("<h7 style=\"padding-left:5px;\">" + $("#add_unit").html() + "</h7><br/>");

            var a_update = document.createElement("a");
            $(a_update).addClass("blueBtn2");
            a_update.href = "#";
            a_update.innerHTML = "<span class=\"en\">Update</span><span class=\"tc\">更新</span>";
            $(a_update).click(function (e) {
                e.preventDefault();
                var item_id = $(this).parent().parent(".selected-food").data("item-id");

                // $(this).prev("input.quantity").val()

                switch (item_id[0]) {
                    case "b":
                        Breakfast.update(item_id, Number($(this).parent().children("input.quantity").val()));
                        break;
                    case "l":
                        Lunch.update(item_id, Number($(this).parent().children("input.quantity").val()));
                        break;
                    case "d":
                        Dinner.update(item_id, Number($(this).parent().children("input.quantity").val()));
                        break;
                    case "o":
                        Other.update(item_id, Number($(this).parent().children("input.quantity").val()));
                        break;
                    default:
                        return false;
                }

                updateMealSummary(item_id[0]);

                return false;
            });
            $(col2).append(a_update);

            var a_delete = document.createElement("a");
            $(a_delete).addClass("close");
            a_delete.href = "#";
            a_delete.innerHTML = "<span>&times;</span>";
            $(a_delete).click(function (e) {
                e.preventDefault();
                var item_id = $(this).parent().parent(".selected-food").data("item-id");

                switch (item_id[0]) {
                    case "b":
                        Breakfast.remove(item_id);
                        break;
                    case "l":
                        Lunch.remove(item_id);
                        break;
                    case "d":
                        Dinner.remove(item_id);
                        break;
                    case "o":
                        Other.remove(item_id);
                        break;
                    default:
                        return false;
                }

                updateMealSummary(item_id[0]);

                $(this).parent().parent(".selected-food").remove();

                return false;
            });
            $(col3).append(a_delete);

            $(div).append(col1);
            $(div).append(col2);
            $(div).append(col3);

            return div;
        }
        else {
            return undefined;
        }
    }

    function updateMealSummary(meal) {
        switch (meal) {
            case "b":
                $("#breakfast_summary").empty();
                $("#breakfast_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fat:</span><span class='tc'>脂質：</span><br/>" + customRoundUp(Breakfast.totalFat()) + " g</p>");
                $("#breakfast_summary").append("<p class='col-4 col-lg-3'><span class='en'>Vegetable:</span><span class='tc'>蔬菜：</span><br/>" + customRoundUp(Breakfast.totalVeg()) + " g</p>");
                $("#breakfast_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fruit:</span><span class='tc'>水果：</span><br/>" + customRoundUp(Breakfast.totalFruit()) + " g</p>");
                $("#breakfast_summary").append("<h5 class='col-12 col-lg-3 text-right'><span class='en'>Energy:</span><span class='tc'>能量：</span><br/>" + customRoundUp(Breakfast.totalEnergy()) + " kJ</h5>");
                break;
            case "l":
                $("#lunch_summary").empty();
                $("#lunch_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fat:</span><span class='tc'>脂質：</span><br/>" + customRoundUp(Lunch.totalFat()) + " g</p>");
                $("#lunch_summary").append("<p class='col-4 col-lg-3'><span class='en'>Vegetable:</span><span class='tc'>蔬菜：</span><br/>" + customRoundUp(Lunch.totalVeg()) + " g</p>");
                $("#lunch_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fruit:</span><span class='tc'>水果：</span><br/>" + customRoundUp(Lunch.totalFruit()) + " g</p>");
                $("#lunch_summary").append("<h5 class='col-12 col-lg-3 text-right'><span class='en'>Energy:</span><span class='tc'>能量：</span><br/>" + customRoundUp(Lunch.totalEnergy()) + " kJ</h5>");
                break;
            case "d":
                $("#dinner_summary").empty();
                $("#dinner_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fat:</span><span class='tc'>脂質：</span><br/>" + customRoundUp(Dinner.totalFat()) + " g</p>");
                $("#dinner_summary").append("<p class='col-4 col-lg-3'><span class='en'>Vegetable:</span><span class='tc'>蔬菜：</span><br/>" + customRoundUp(Dinner.totalVeg()) + " g</p>");
                $("#dinner_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fruit:</span><span class='tc'>水果：</span><br/>" + customRoundUp(Dinner.totalFruit()) + " g</p>");
                $("#dinner_summary").append("<h5 class='col-12 col-lg-3 text-right'><span class='en'>Energy:</span><span class='tc'>能量：</span><br/>" + customRoundUp(Dinner.totalEnergy()) + " kJ</h5>");
                break;
            case "o":
                $("#other_summary").empty();
                $("#other_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fat:</span><span class='tc'>脂質：</span><br/>" + customRoundUp(Other.totalFat()) + " g</p>");
                $("#other_summary").append("<p class='col-4 col-lg-3'><span class='en'>Vegetable:</span><span class='tc'>蔬菜：</span><br/>" + customRoundUp(Other.totalVeg()) + " g</p>");
                $("#other_summary").append("<p class='col-4 col-lg-3'><span class='en'>Fruit:</span><span class='tc'>水果：</span><br/>" + customRoundUp(Other.totalFruit()) + " g</p>");
                $("#other_summary").append("<h5 class='col-12 col-lg-3 text-right'><span class='en'>Energy:</span><span class='tc'>能量：</span><br/>" + customRoundUp(Other.totalEnergy()) + " kJ</h5>");
                break;
            default:
                return false;
        }
        checkLanguage('');
        updateDailySummary();
    }

    function updateDailySummary() {
        temp.energyIntake = customRoundUp(DailyEnergyIntake());
        temp.fatIntake = customRoundUp(DailyFatIntake());
        temp.vegIntake = Math.floor(DailyVegIntake() / 80); // 1 portion ~ 80g
        temp.fruitIntake = Math.floor(DailyFruitIntake() / 80);


        $("#energy_intake").text(temp.energyIntake + " kJ");
        $("#fat_intake").text(temp.fatIntake + " g");
        $("#veg_intake").html(temp.vegIntake + " <span class='en'>portion(s)</span><span class='tc'>份</span>");
        $("#fruit_intake").html(temp.fruitIntake + " <span class='en'>portion(s)</span><span class='tc'>份</span>");

        checkLanguage('');
        updateDailyAdvice();
    }

    function updateDailyAdvice() {
        $("#daily_advise").empty();

        if (temp.dailyEnergyNeeded.lowerBound == undefined || temp.dailyEnergyNeeded.upperBound == undefined) {
            $("#daily_advise").html("<p class='alert alert-info'><span class='en'>Please update the daily energy needed.</span><span class='tc'>請更新每天所需的能量。</span></p>");
        } else {
            if (temp.energyIntake == undefined) {
                $("#daily_advise").html("<p class='alert alert-info'><span class='en'>Please set your meal plans.</span><span class='tc'>請設定您的膳食計劃。</span></p>");
            } else {
                $("#energy_intake, #fat_intake, #veg_intake, #fruit_intake").parent().removeClass("alert-danger alert-warning alert-success");
                if (temp.energyIntake > temp.dailyEnergyNeeded.upperBound) {
                    //$("#daily_advise").append("<p class='alert alert-danger'><span class='en'>The energy intake is <b>more</b> than the energy needed.</span><span class='tc'>攝取的能量<b>多於</b>每日所需。</span></p>");
                    $("#energy_intake").parent().addClass("alert-danger");
                } else if (temp.energyIntake < temp.dailyEnergyNeeded.lowerBound) {
                    //$("#daily_advise").append("<p class='alert alert-warning'><span class='en'>The energy intake is <b>less</b> than the energy needed.</span><span class='tc'>攝取的能量<b>少於</b>每日所需。</span></p>");
                    $("#energy_intake").parent().addClass("alert-warning");
                } else {
                    //$("#daily_advise").append("<p class='alert alert-success'><span class='en'>The energy intake is equal to the energy needed.</span><span class='tc'>攝取的能量<b>符合</b>每日所需。</span></p>");
                    $("#energy_intake").parent().addClass("alert-success");
                }

                if (temp.fatIntake > temp.dailyfatNeeded.upperBound) {
                    //$("#daily_advise").append("<p class='alert alert-danger'><span class='en'>The fat intake is <b>more</b> than the fat needed.</span><span class='tc'>攝取的脂質<b>多於</b>每日所需。</span></p>");
                    $("#fat_intake").parent().addClass("alert-danger");
                } 
                else if (temp.fatIntake < temp.dailyfatNeeded.lowerBound) {
                    //$("#daily_advise").append("<p class='alert alert-warning'><span class='en'>The fat intake is <b>less</b> than the fat needed.</span><span class='tc'>攝取的脂質<b>少於</b>每日所需。</span></p>");
                    $("#fat_intake").parent().addClass("alert-warning");
                }
                else {
                    //$("#daily_advise").append("<p class='alert alert-success'><span class='en'>The fat intake is <b>within the range</b> of the fat needed.</span><span class='tc'>攝取的脂質<b>符合</b>每日所需。</span></p>");
                    $("#fat_intake").parent().addClass("alert-success");
                }

                if (temp.vegIntake < temp.dailyVegNeeded) {
                    $("#veg_intake").parent().addClass("alert-warning");
                }
                else {
                    $("#veg_intake").parent().addClass("alert-success");
                }

                if (temp.fruitIntake < temp.dailyFruitNeeded) {
                    $("#fruit_intake").parent().addClass("alert-warning");
                }
                else {
                    $("#fruit_intake").parent().addClass("alert-success");
                }

            }
        }

        checkLanguage('');
    }


    function createFoodMenuDOM(_foodMenu) {

        // create starting menu
        var div = document.createElement("div");
        $(div).addClass("list-group");
        div.id = "foodMenuRoot";

        for (var i = 0; i < _foodMenu.length; i++) {
            var a = document.createElement("a");
            $(a).addClass("list-group-item list-group-item-action d-flex justify-content-between");
            $(a).data("submenu", _foodMenu[i].id);
            a.href = "#";
            //a.innerText = _foodMenu[i].title[lang];
            a.innerHTML = "<span class='en'>" + _foodMenu[i].title["en"] + "</span><span class='tc'>" + _foodMenu[i].title["tc"] + "</span>";
            var span = document.createElement("span");
            span.innerText = "▶";
            a.appendChild(span);
            div.appendChild(a);

            $(a).click(function () {
                updateFoodMenuModal($(this).data("submenu"));
            });
        }

        $("#food_menu").empty().append(div);

        // update food_menu_nav
        var bc_li = document.createElement("li");
        $(bc_li).addClass("breadcrumb-item active");
        var bc_a = document.createElement("a");
        $(bc_a).data("menu", "foodMenuRoot");
        //bc_a.innerText = (lang == "en") ? "Category" : "類別";
        bc_a.innerHTML = "<span class='en'>Category</span><span class='tc'>類別</span>"
        $(bc_li.appendChild(bc_a));
        $("#food_menu_nav").empty().append(bc_li);

        //$("#food_menu_nav").hide();
        //$("#foodMenuModalTitle").show();
        //$("#food_menu").show();
        //$("#food_nutrient").hide();
        $("#food_data").hide();

        checkLanguage('');
    }

    function updateFoodMenuModal(menuID) {

        // create menu
        var newMenu = FoodMenu.allMenus[menuID].menu;

        var div = document.createElement("div");
        $(div).addClass("list-group");
        div.id = menuID;

        for (var i = 0; i < newMenu.length; i++) {
            var a = document.createElement("a");
            $(a).addClass("list-group-item list-group-item-action d-flex justify-content-between");
            a.href = "#";

            switch (newMenu[i].type) {
                case FoodMenu.itemType.MENU:
                    $(a).data("submenu", newMenu[i].item.id);
                    //a.innerText = newMenu[i].item.title[lang];
                    a.innerHTML = "<span class='en'>" + newMenu[i].item.title["en"] + "</span><span class='tc'>" + newMenu[i].item.title["tc"] + "</span>";
                    var span = document.createElement("span");
                    span.innerText = "▶";
                    a.appendChild(span);

                    $(a).click(function () {
                        updateFoodMenuModal($(this).data("submenu"));
                    });

                    break;
                case FoodMenu.itemType.ITEM:
                    //a.innerText = newMenu[i].item.name[lang];
                    a.innerHTML = "<span class='en'>" + newMenu[i].item.name["en"] + "</span><span class='tc'>" + newMenu[i].item.name["tc"] + "</span>";
                    $(a).data("item", newMenu[i].item.id);

                    $(a).click(function () {
                        $(this).siblings(".list-group-item").removeClass("active");
                        $(this).addClass("active");
                        showFoodModal($(this).data("item"));
                    });

                    break;
                default:
                    break;
            }

            div.appendChild(a);
        }

        $("#food_menu").empty().append(div);

        // update food_menu_nav
        $("#food_menu_nav .breadcrumb-item.active").removeClass("active").children("a").attr("href", "#");

        var bc_li = document.createElement("li");
        $(bc_li).addClass("breadcrumb-item active");
        var bc_a = document.createElement("a");
        $(bc_a).data("menu", menuID);
        //bc_a.innerText = FoodMenu.allMenus[menuID].title[lang];
        bc_a.innerHTML = "<span class='en'>" + FoodMenu.allMenus[menuID].title["en"] + "</span><span class='tc'>" + FoodMenu.allMenus[menuID].title["tc"] + "</span>";
        $(bc_li.appendChild(bc_a));
        $("#food_menu_nav").append(bc_li);


        //$("#food_menu_nav").show();
        //$("#foodMenuModalTitle").hide();
        //$("#food_menu").show();
        //$("#food_nutrient").hide();
        $("#food_data").hide();
        checkLanguage('');
    }

    function showFoodModal(foodID) {
        /*$("#fd_img").attr("src", "images/FoodPhotos/" + FoodData[foodID].image);
        $("#fd_name").text(FoodData[foodID].name[lang]);
        $("#fd_energy").text(FoodData[foodID].energy[lang]);
        $("#fd_protein").text(FoodData[foodID].protein[lang]);
        $("#fd_fat").text(FoodData[foodID].fat[lang]);
        $("#fd_satfat").text(FoodData[foodID].satfat);
        $("#fd_transfat").text(FoodData[foodID].transfat);
        $("#fd_cholesterol").text(FoodData[foodID].cholesterol);
        $("#fd_carbo").text(FoodData[foodID].carbo[lang]);
        $("#fd_fiber").text(FoodData[foodID].fiber[lang]);
        $("#fd_sugar").text(FoodData[foodID].sugar);
        $("#fd_vitamin").text(FoodData[foodID].vitamin[lang]);
        $("#fd_mineral").text(FoodData[foodID].mineral[lang]);
        $("#fd_remark").text(FoodData[foodID].remark[lang]);
        $("#add_unit").text(" " + FoodData[foodID].unit[lang]);
        $("#unit_to_g").text("(1 " + FoodData[foodID].unit[lang] + " ≈ " + FoodData[foodID].num.serving * 100 + " g)");*/

        $("#fd_img").attr("src", "images/FoodPhotos/" + FoodData[foodID].image);
        $("#fd_name").html("<span class='en'>" + FoodData[foodID].name["en"] + "</span><span class='tc'>" + FoodData[foodID].name["tc"] + "</span>");
        $("#fd_energy").html("<span class='en'>" + FoodData[foodID].energy["en"] + "</span><span class='tc'>" + FoodData[foodID].energy["tc"] + "</span>");
        $("#fd_protein").html("<span class='en'>" + FoodData[foodID].protein["en"] + "</span><span class='tc'>" + FoodData[foodID].protein["tc"] + "</span>");
        $("#fd_fat").html("<span class='en'>" + FoodData[foodID].fat["en"] + "</span><span class='tc'>" + FoodData[foodID].fat["tc"] + "</span>");
        $("#fd_satfat").html(FoodData[foodID].satfat);
        $("#fd_transfat").html(FoodData[foodID].transfat);
        $("#fd_cholesterol").html(FoodData[foodID].cholesterol);
        $("#fd_carbo").html("<span class='en'>" + FoodData[foodID].carbo["en"] + "</span><span class='tc'>" + FoodData[foodID].carbo["tc"] + "</span>");
        $("#fd_fiber").html("<span class='en'>" + FoodData[foodID].fiber["en"] + "</span><span class='tc'>" + FoodData[foodID].fiber["tc"] + "</span>");
        $("#fd_sugar").html(FoodData[foodID].sugar);
        $("#fd_vitamin").html("<span class='en'>" + FoodData[foodID].vitamin["en"] + "</span><span class='tc'>" + FoodData[foodID].vitamin["tc"] + "</span>");
        $("#fd_mineral").html("<span class='en'>" + FoodData[foodID].mineral["en"] + "</span><span class='tc'>" + FoodData[foodID].mineral["tc"] + "</span>");
        $("#fd_remark").html("<span class='en'>" + FoodData[foodID].remark["en"] + "</span><span class='tc'>" + FoodData[foodID].remark["tc"] + "</span>");
        $("#add_unit").html(" <span class='en'>" + FoodData[foodID].unit["en"] + "</span><span class='tc'>" + FoodData[foodID].unit["tc"] + "</span>");
        $("#unit_to_g").html("(1 <span class='en'>" + FoodData[foodID].unit["en"] + "</span><span class='tc'>" + FoodData[foodID].unit["tc"] + "</span> ≈ " + FoodData[foodID].num.serving * 100 + " g)");

        //$("#food_menu").hide();
        //$("#food_nutrient").show();
        $("#add_food").val(foodID);
        resetAddPanel();

        $("#food_data").show();
        checkLanguage('');
    }

    function resetAddPanel() {
        $("#add_qty").val(1);
        $("#add_to")[0].selectedIndex = 0;
    }

    function checkLanguage(type) {
        if (type == "change") {
            lang = (lang == "en") ? "tc" : "en";
        }
        if (lang == "tc") {
            $(".tc").show();
            $(".en").hide();

            $("#add_to option[value=b]").html("早餐");
            $("#add_to option[value=l]").html("午餐");
            $("#add_to option[value=d]").html("晚餐");
            $("#add_to option[value=o]").html("其他");
            $("#needs_activity option[value=light]").html("輕");
            $("#needs_activity option[value=moderate]").html("中");
            $("#needs_activity option[value=high]").html("高");

        } else if (lang == "en") {
            $(".en").show();
            $(".tc").hide();

            $("#add_to option[value=b]").html("Breakfast");
            $("#add_to option[value=l]").html("Lunch");
            $("#add_to option[value=d]").html("Dinner");
            $("#add_to option[value=o]").html("Other");
            $("#needs_activity option[value=light]").html("Light");
            $("#needs_activity option[value=moderate]").html("Moderate");
            $("#needs_activity option[value=high]").html("High");
        }
    }

});

