var FoodMenu = window.FoodMenu || {};

(function () {
    this.itemType = Object.freeze({
        MENU: "menu",
        ITEM: "item"
    });

    var _itemType = this.itemType;
    var _foodmenu = new Object();

    function menuItem(id, title_en, title_tc) {
        this.type = _itemType.MENU;
        this.title = {
            en: title_en || "",
            tc: title_tc || ""
        };
        this.id = id || "";
        this.menu = [];

        _foodmenu[id] = this;
    }
    menuItem.prototype.addItem = function (foodItem) {
        this.menu.push({
            type: _itemType.ITEM,
            item: foodItem
        });
    };
    menuItem.prototype.containsItem = function (foodID) {
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].type == _itemType.ITEM) {
                if (this.menu[i].item.id == foodID) {
                    return true;
                }
            }
        }
        return false;
    };
    /*menuItem.prototype.addMenu = function (id, title_en, title_tc) {
        var new_menu = new menuItem(id, title_en, title_tc);
        this.menu.push(new_menu);
        return new_menu;
    };

    var _foodmenu = [];
    var grainMenu = new menuItem("cat-grain", "Grains and cereals", "");
    grainMenu.addItem(FoodData.rice);
    grainMenu.addItem(FoodData.congee);
    grainMenu.addItem(FoodData.rice_noodle);
    grainMenu.addItem(FoodData.pasta);
    grainMenu.addItem(FoodData.instant_noodle);
    grainMenu.addItem(FoodData.oats);
    var breadMenu = grainMenu.addMenu("Bread", "");
    breadMenu.addItem(FoodData.white_bread);
    breadMenu.addItem(FoodData.wheat_bread);
    _foodmenu.push(grainMenu);

    var vegMenu = new menuItem("cat-veg", "Fruits and vegetables", "");
    vegMenu.addItem(FoodData.leafy_veg);
    var otherVegMenu = vegMenu.addMenu("Other vegetables", "");
    otherVegMenu.addItem(FoodData.tomato);
    otherVegMenu.addItem(FoodData.carrot);
    otherVegMenu.addItem(FoodData.potato);
    otherVegMenu.addItem(FoodData.cucumber);
    otherVegMenu.addItem(FoodData.pumpkin);
    otherVegMenu.addItem(FoodData.eggplant);
    vegMenu.addItem(FoodData.mushroom);
    var fruitMenu = vegMenu.addMenu("Fruits", "");
    fruitMenu.addItem(FoodData.apple);
    fruitMenu.addItem(FoodData.orange);
    fruitMenu.addItem(FoodData.banana);
    fruitMenu.addItem(FoodData.grape);
    fruitMenu.addItem(FoodData.kiwi);
    fruitMenu.addItem(FoodData.melon);
    fruitMenu.addItem(FoodData.berry);
    fruitMenu.addItem(FoodData.pineapple);
    vegMenu.addItem(FoodData.pfruit);
    _foodmenu.push(vegMenu);

    var meatMenu = new menuItem("cat-meat", "Meats and eggs", "");
    var eggMenu = meatMenu.addMenu("eggMenu", "Eggs", "");
    eggMenu.addItem(FoodData.boiled_egg);
    eggMenu.addItem(FoodData.fried_egg);
    var sausageMenu = meatMenu.addMenu("sausageMenu", "Sausages and hams", "");
    sausageMenu.addItem(FoodData.sausage);
    sausageMenu.addItem(FoodData.fried_sausage);
    sausageMenu.addItem(FoodData.ham);
    sausageMenu.addItem(FoodData.luncheon);
    var porkMenu = meatMenu.addMenu("porkMenu", "Pork chops", "");
    porkMenu.addItem(FoodData.fried_pork);
    porkMenu.addItem(FoodData.deep_fried_pork);
    porkMenu.addItem(FoodData.bbq_pork);
    var beefMenu = meatMenu.addMenu("beefMenu", "Beef", "");
    beefMenu.addItem(FoodData.cooked_beef);
    beefMenu.addItem(FoodData.fried_beef);
    beefMenu.addItem(FoodData.steak);
    meatMenu.addItem(FoodData.lamb);
    var chickenMenu = meatMenu.addMenu("chickenMenu", "Chicken", "");
    chickenMenu.addItem(FoodData.chicken_steamed);
    chickenMenu.addItem(FoodData.chicken_roasted);
    chickenMenu.addItem(FoodData.chicken_df);
    chickenMenu.addItem(FoodData.chicken_wing);
    chickenMenu.addItem(FoodData.chicken_leg);
    meatMenu.addItem(FoodData.duck);
    var fishMenu = meatMenu.addMenu("fishMenu", "Fish", "");
    fishMenu.addItem(FoodData.fish_steamed);
    fishMenu.addItem(FoodData.fish_fried);
    fishMenu.addItem(FoodData.fish_df);
    var seafoodMenu = meatMenu.addMenu("seafoodMenu", "Seafood other than fish", "");
    seafoodMenu.addItem(FoodData.shrimp);
    seafoodMenu.addItem(FoodData.crab);
    seafoodMenu.addItem(FoodData.lobster);
    seafoodMenu.addItem(FoodData.oyster);
    _foodmenu.push(meatMenu);

    var dairyMenu = new menuItem("cat-dairy", "Beans and dairy foods", "");
    var milkMenu = dairyMenu.addMenu("milkMenu", "Milk", "");
    milkMenu.addItem(FoodData.whole_milk);
    milkMenu.addItem(FoodData.skim_milk);
    milkMenu.addItem(FoodData.choco_milk);
    dairyMenu.addItem(FoodData.yoghurt);
    dairyMenu.addItem(FoodData.cheese);
    var tofuMenu = dairyMenu.addMenu("tofuMenu", "Tofu", "");
    tofuMenu.addItem(FoodData.tofu_steamed);
    tofuMenu.addItem(FoodData.tofu_df);
    var beanMenu = dairyMenu.addMenu("beanMenu", "Beans", "");
    beanMenu.addItem(FoodData.greenbean);
    beanMenu.addItem(FoodData.pea);
    beanMenu.addItem(FoodData.redbean);
    _foodmenu.push(dairyMenu);

    var drinkMenu = new menuItem("cat-drink", "Drinks", "");
    drinkMenu.addItem(FoodData.softdrink);
    var teaMenu = drinkMenu.addMenu("teaMenu", "Coffee and tea", "");
    teaMenu.addItem(FoodData.tea);
    teaMenu.addItem(FoodData.milk_tea);
    teaMenu.addItem(FoodData.coffee);
    teaMenu.addItem(FoodData.lemon_tea);
    var juiceMenu = drinkMenu.addMenu("juiceMenu", "Fresh fruit juices", "");
    juiceMenu.addItem(FoodData.apple_juice);
    juiceMenu.addItem(FoodData.orange_juice);
    juiceMenu.addItem(FoodData.grape_juice);
    var soupMenu = drinkMenu.addMenu("soupMenu", "Soups");
    soupMenu.addItem(FoodData.cream_soup);
    soupMenu.addItem(FoodData.tomato_soup);
    soupMenu.addItem(FoodData.pumpkin_soup);
    drinkMenu.addItem(FoodData.water);
    _foodmenu.push(drinkMenu);

    var otherMenu = new menuItem("cat-other", "Others", "");
    otherMenu.addItem(FoodData.pizza);
    otherMenu.addItem(FoodData.hamburger);
    otherMenu.addItem(FoodData.applepie);
    otherMenu.addItem(FoodData.frenchfries);
    otherMenu.addItem(FoodData.ice_cream);
    otherMenu.addItem(FoodData.cake);
    otherMenu.addItem(FoodData.chocolate);
    otherMenu.addItem(FoodData.candy);
    otherMenu.addItem(FoodData.chip);
    otherMenu.addItem(FoodData.biscuit);
    otherMenu.addItem(FoodData.salad);
    otherMenu.addItem(FoodData.dumpling);
    _foodmenu.push(otherMenu);

    this.get = function () { return _foodmenu; };*/

    menuItem.prototype.addMenu = function (subMenu) {
        this.menu.push({
            type: _itemType.MENU,
            item: subMenu
        });
    };

    var grainMenu = new menuItem("grainMenu", "Grains and cereals", "五穀類");
    grainMenu.addItem(FoodData.rice);
    grainMenu.addItem(FoodData.congee);
    grainMenu.addItem(FoodData.rice_noodle);
    grainMenu.addItem(FoodData.pasta);
    grainMenu.addItem(FoodData.instant_noodle);
    grainMenu.addItem(FoodData.oats);
    var breadMenu = new menuItem("breadMenu", "Bread", "麵包");
    breadMenu.addItem(FoodData.white_bread);
    breadMenu.addItem(FoodData.wheat_bread);
    grainMenu.addMenu(breadMenu);
    

    var vegMenu = new menuItem("vegMenu", "Fruits and vegetables", "水果及蔬菜");
    vegMenu.addItem(FoodData.leafy_veg);
    var otherVegMenu = new menuItem("otherVegMenu", "Other vegetables", "其他蔬菜");
    otherVegMenu.addItem(FoodData.tomato);
    otherVegMenu.addItem(FoodData.carrot);
    otherVegMenu.addItem(FoodData.potato);
    otherVegMenu.addItem(FoodData.cucumber);
    otherVegMenu.addItem(FoodData.pumpkin);
    otherVegMenu.addItem(FoodData.eggplant);
    vegMenu.addMenu(otherVegMenu);
    vegMenu.addItem(FoodData.mushroom);
    var fruitMenu = new menuItem("fruitMenu", "Fruits", "水果");
    fruitMenu.addItem(FoodData.apple);
    fruitMenu.addItem(FoodData.orange);
    fruitMenu.addItem(FoodData.banana);
    fruitMenu.addItem(FoodData.grape);
    fruitMenu.addItem(FoodData.kiwi);
    fruitMenu.addItem(FoodData.melon);
    fruitMenu.addItem(FoodData.berry);
    fruitMenu.addItem(FoodData.pineapple);
    vegMenu.addMenu(fruitMenu);
    vegMenu.addItem(FoodData.pfruit);
    //_foodmenu.addMenu(vegMenu);

    var meatMenu = new menuItem("meatMenu", "Meats and eggs", "魚、肉及蛋類");
    var eggMenu = new menuItem("eggMenu", "Eggs", "雞蛋");
    eggMenu.addItem(FoodData.boiled_egg);
    eggMenu.addItem(FoodData.fried_egg);
    meatMenu.addMenu(eggMenu);
    var sausageMenu = new menuItem("sausageMenu", "Sausages and hams", "香腸及火腿");
    sausageMenu.addItem(FoodData.sausage);
    sausageMenu.addItem(FoodData.fried_sausage);
    sausageMenu.addItem(FoodData.ham);
    sausageMenu.addItem(FoodData.luncheon);
    meatMenu.addMenu(sausageMenu);
    var porkMenu = new menuItem("porkMenu", "Pork chops", "豬肉");
    porkMenu.addItem(FoodData.fried_pork);
    porkMenu.addItem(FoodData.deep_fried_pork);
    porkMenu.addItem(FoodData.bbq_pork);
    meatMenu.addMenu(porkMenu);
    var beefMenu = new menuItem("beefMenu", "Beef", "牛肉");
    beefMenu.addItem(FoodData.cooked_beef);
    beefMenu.addItem(FoodData.fried_beef);
    beefMenu.addItem(FoodData.steak);
    meatMenu.addMenu(beefMenu);
    meatMenu.addItem(FoodData.lamb);
    var chickenMenu = new menuItem("chickenMenu", "Chicken", "雞");
    chickenMenu.addItem(FoodData.chicken_steamed);
    chickenMenu.addItem(FoodData.chicken_roasted);
    chickenMenu.addItem(FoodData.chicken_df);
    chickenMenu.addItem(FoodData.chicken_wing);
    chickenMenu.addItem(FoodData.chicken_leg);
    meatMenu.addMenu(chickenMenu);
    meatMenu.addItem(FoodData.duck);
    var fishMenu = new menuItem("fishMenu", "Fish", "魚");
    fishMenu.addItem(FoodData.fish_steamed);
    fishMenu.addItem(FoodData.fish_fried);
    fishMenu.addItem(FoodData.fish_df);
    fishMenu.addItem(FoodData.sardine);
    meatMenu.addMenu(fishMenu);
    var seafoodMenu = new menuItem("seafoodMenu", "Seafood other than fish", "魚類以外的海鮮");
    seafoodMenu.addItem(FoodData.shrimp);
    seafoodMenu.addItem(FoodData.crab);
    seafoodMenu.addItem(FoodData.lobster);
    seafoodMenu.addItem(FoodData.oyster);
    meatMenu.addMenu(seafoodMenu);
    //_foodmenu.addMenu(meatMenu);

    var dairyMenu = new menuItem("dairyMenu", "Beans and dairy foods", "豆類及奶品類");
    var milkMenu = new menuItem("milkMenu", "Milk", "奶類");
    milkMenu.addItem(FoodData.whole_milk);
    milkMenu.addItem(FoodData.skim_milk);
    milkMenu.addItem(FoodData.choco_milk);
    dairyMenu.addMenu(milkMenu);
    dairyMenu.addItem(FoodData.yoghurt);
    dairyMenu.addItem(FoodData.cheese);
    var tofuMenu = new menuItem("tofuMenu", "Tofu", "豆腐");
    tofuMenu.addItem(FoodData.tofu_steamed);
    tofuMenu.addItem(FoodData.tofu_df);
    dairyMenu.addMenu(tofuMenu);
    var beanMenu = new menuItem("beanMenu", "Beans", "豆類");
    beanMenu.addItem(FoodData.greenbean);
    beanMenu.addItem(FoodData.pea);
    beanMenu.addItem(FoodData.redbean);
    dairyMenu.addMenu(beanMenu);
    //_foodmenu.addMenu(dairyMenu);

    var drinkMenu = new menuItem("drinkMenu", "Drinks", "飲品");
    drinkMenu.addItem(FoodData.softdrink);
    var teaMenu = new menuItem("teaMenu", "Coffee and tea", "咖啡及茶");
    teaMenu.addItem(FoodData.tea);
    teaMenu.addItem(FoodData.milk_tea);
    teaMenu.addItem(FoodData.coffee);
    teaMenu.addItem(FoodData.lemon_tea);
    drinkMenu.addMenu(teaMenu);
    var juiceMenu = new menuItem("juiceMenu", "Fresh vegetable/fruit juices", "鮮搾蔬/果汁");
    juiceMenu.addItem(FoodData.apple_juice);
    juiceMenu.addItem(FoodData.orange_juice);
    juiceMenu.addItem(FoodData.grape_juice);
    juiceMenu.addItem(FoodData.celery_juice);
    drinkMenu.addMenu(juiceMenu);
    var soupMenu = new menuItem("soupMenu", "Soups", "湯");
    soupMenu.addItem(FoodData.cream_soup);
    soupMenu.addItem(FoodData.tomato_soup);
    soupMenu.addItem(FoodData.pumpkin_soup);
    drinkMenu.addMenu(soupMenu);
    drinkMenu.addItem(FoodData.water);
    //_foodmenu.addMenu(drinkMenu);

    var otherMenu = new menuItem("otherMenu", "Others", "其他");
    otherMenu.addItem(FoodData.sandwich);
    otherMenu.addItem(FoodData.pizza);
    otherMenu.addItem(FoodData.hamburger);
    otherMenu.addItem(FoodData.applepie);
    otherMenu.addItem(FoodData.frenchfries);
    otherMenu.addItem(FoodData.ice_cream);
    otherMenu.addItem(FoodData.cake);
    otherMenu.addItem(FoodData.chocolate);
    otherMenu.addItem(FoodData.candy);
    otherMenu.addItem(FoodData.chip);
    otherMenu.addItem(FoodData.biscuit);
    otherMenu.addItem(FoodData.salad);
    otherMenu.addItem(FoodData.dumpling);
    //_foodmenu.addMenu(otherMenu);

    this.allMenus = _foodmenu;

    this.startingMenu = [grainMenu, vegMenu, meatMenu, dairyMenu, drinkMenu, otherMenu];

    this.checkIsVegetable = function (foodName) {
        return (vegMenu.containsItem(foodName) && (foodName != FoodData.pfruit.id)) || otherVegMenu.containsItem(foodName);
    };
    this.checkIsFruit = function (foodName) {
        return fruitMenu.containsItem(foodName) || (foodName == FoodData.pfruit.id);
    };

}).apply(FoodMenu);
