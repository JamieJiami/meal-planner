/**
* Data Structure
* 
* "id_of_item": Object.freeze({
*        "id": "id_of_item",
*        "name": Object.freeze({
*            "en": "name in english",
*            "tc": "name in chinese"
*        }),
*        "image": "image_filename", // file should be put in folder "images/FoodPhotos/"
*        "natural": "Processed",
*        "energy": Object.freeze({
*            "en": "energy per 100g in english",
*            "tc": "energy per 100g in chinese"
*        }),
*        "kj": 535,
*        "carbo": Object.freeze({
*            "en": "carbohydrate per 100g in english",
*            "tc": "carbohydrate per 100g in chinese"
*        }),
*        "protein": Object.freeze({
*            "en": "protein per 100g in english",
*            "tc": "protein per 100g in chinese"
*        }),
*        "fat": Object.freeze({
*            "en": "fat per 100g in english",
*            "tc": "fat per 100g in chinese"
*        }),
*       "satfat": "saturated fat per 100g",
*       "transfat": "trans fat per 100g",
*        "cholesterol": "cholesterol per 100g",
*        "fiber": Object.freeze({
*            "en": "fiber per 100g in english",
*            "tc": "fiber per 100g in chinese"
*        }),
*        "sugar": "sugar per 100g",
*        "vitamin": Object.freeze({
*            "en": "vitamin per 100g in english",
*            "tc": "vitamin per 100g in chinese"
*        }),
*        "mineral": Object.freeze({
*            "en": "mineral per 100g in english",
*            "tc": "mineral per 100g in chinese"
*        }),
*        "remark": Object.freeze({
*            "en": "remark in english",
*            "tc": "remark in chinese"
*        }),
*        "unit": Object.freeze({
*            "en": "unit in english",
*            "tc": "unit in chinese"
*        }),
*        "num": Object.freeze({  // numerical value of nutrients per 100g
*            "serving": 0.8,   // *(100 g) per serving
*            "energy": 669,                  // energy per 100g in kJ
*            "carbo": 18,                    // carbohydrate per 100g in g
*            "protein": 6.7,                 // protein per 100g in g
*            "fat": 6.7,                     // fat per 100g in g
*            "satfat": 1.8,                  // saturated fat per 100g in g
*            "transfat": 0,                  // trans fat per 100g in g
*            "cholesterol": 69,              // cholesterol per 100g in mg
*            "fiber": 0,                     // fiber per 100g in g
*            "sugar": 1.5,                   // sugar per 100g in g
*            "vitamin": 0,                   // vitamin per 100g in g
*            "mineral": 0,                   // mineral per 100g in g
*        })
*    })
*/

const FoodData = Object.freeze({
    "rice": Object.freeze({
        "id": "rice",
        "name": Object.freeze({
            "en": "Rice",
            "tc": "飯"
        }),
        "image": "rice.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "543 kJ (130 kcal)",
            "tc": "543 kJ (130 kcal)"
        }),
        "kj": 543,
        "carbo": Object.freeze({
            "en": "28.17 g",
            "tc": "28.17 g"
        }),
        "protein": Object.freeze({
            "en": "2.69 g",
            "tc": "2.69 g"
        }),
        "fat": Object.freeze({
            "en": "0.28 g",
            "tc": "0.28 g"
        }),
        "satfat": "0.077 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.4 g",
            "tc": "0.4 g"
        }),
        "sugar": "0.05 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "There are many factors that affect the nutrition value of rice. For example the strain of rice, that is between white, brown, black, red and purple varieties of rice. It also depends on nutrient quality of the soil that rice is grown in, how the rice is processed and how it is prepared before consumption.",
            "tc": "有很多因素會影響大米的營養價值。例如白色、棕色、黑色、紅色和紫色等不同稻米的品種。大米的營養價值也取決於土壤的營養品質、稻米的種植方法、以及食用前的準備等。"
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 543,
            "carbo": 28.17,
            "protein": 2.69,
            "fat": 0.28,
            "satfat": 0.077,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.4,
            "sugar": 0.05,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "congee": Object.freeze({
        "id": "congee",
        "name": Object.freeze({
            "en": "Congee",
            "tc": "粥"
        }),
        "image": "congee.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "192 kJ (46 kcal)",
            "tc": "192 kJ (46 kcal)"
        }),
        "kj": 192,
        "carbo": Object.freeze({
            "en": "10.2 g",
            "tc": "10.2 g"
        }),
        "protein": Object.freeze({
            "en": "0.8 g",
            "tc": "0.8 g"
        }),
        "fat": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 192,
            "carbo": 10.2,
            "protein": 0.8,
            "fat": 0.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.1,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "rice_noodle": Object.freeze({
        "id": "rice_noodle",
        "name": Object.freeze({
            "en": "Rice-flour noodles",
            "tc": "米線"
        }),
        "image": "rice_flour_noodle.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "456 kJ (109 kcal)",
            "tc": "456 kJ (109 kcal)"
        }),
        "kj": 456,
        "carbo": Object.freeze({
            "en": "24.9 g",
            "tc": "24.9 g"
        }),
        "protein": Object.freeze({
            "en": "0.91 g",
            "tc": "0.91 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "0.023 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1 g",
            "tc": "1 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 456,
            "carbo": 24.9,
            "protein": 0.91,
            "fat": 0.2,
            "satfat": 0.023,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pasta": Object.freeze({
        "id": "pasta",
        "name": Object.freeze({
            "en": "Pasta",
            "tc": "麵條"
        }),
        "image": "pasta.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "660 kJ (158 kcal)",
            "tc": "660 kJ (158 kcal)"
        }),
        "kj": 660,
        "carbo": Object.freeze({
            "en": "30.86 g",
            "tc": "30.86 g"
        }),
        "protein": Object.freeze({
            "en": "5.8 g",
            "tc": "5.8 g"
        }),
        "fat": Object.freeze({
            "en": "0.93 g",
            "tc": "0.93 g"
        }),
        "satfat": "0.176 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.8 g",
            "tc": "1.8 g"
        }),
        "sugar": "0.56 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 660,
            "carbo": 30.86,
            "protein": 5.8,
            "fat": 0.93,
            "satfat": 0.176,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.8,
            "sugar": 0.56,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "instant_noodle": Object.freeze({
        "id": "instant_noodle",
        "name": Object.freeze({
            "en": "Instant noodle",
            "tc": "即食麵"
        }),
        "image": "instant_noodle.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1977 kJ (473 kcal)",
            "tc": "1977 kJ (473 kcal)"
        }),
        "kj": 1977,
        "carbo": Object.freeze({
            "en": "61.6 g",
            "tc": "61.6 g"
        }),
        "protein": Object.freeze({
            "en": "9.5 g",
            "tc": "9.5 g"
        }),
        "fat": Object.freeze({
            "en": "21.1 g",
            "tc": "21.1 g"
        }),
        "satfat": "7 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.7 g",
            "tc": "0.7 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "Instant noodles are often criticized as unhealthy or junk food. As instant noodles are high in carbohydrates and fat, but low in fiber, vitamins and minerals.",
            "tc": "由於即食麵含有大量碳水化合物和脂肪，卻只有少量的食用纖維、維生素和礦物質，即食麵經常被指是營養價值低的垃圾食物。"
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 1977,
            "carbo": 61.6,
            "protein": 9.5,
            "fat": 21.1,
            "satfat": 7,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.7,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "white_bread": Object.freeze({
        "id": "white_bread",
        "name": Object.freeze({
            "en": "White bread",
            "tc": "白麵包"
        }),
        "image": "white_bread.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1112 kJ (266 kcal)",
            "tc": "1112 kJ (266 kcal)"
        }),
        "kj": 223,
        "carbo": Object.freeze({
            "en": "50.61 g",
            "tc": "50.61 g"
        }),
        "protein": Object.freeze({
            "en": "7.64 g",
            "tc": "7.64 g"
        }),
        "fat": Object.freeze({
            "en": "3.29 g",
            "tc": "3.29 g"
        }),
        "satfat": "0.717 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2.4 g",
            "tc": "2.4 g"
        }),
        "sugar": "4.31 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "slice",
            "tc": "片"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 1112,
            "carbo": 50.61,
            "protein": 7.64,
            "fat": 3.29,
            "satfat": 0.717,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2.4,
            "sugar": 4.31,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "wheat_bread": Object.freeze({
        "id": "wheat_bread",
        "name": Object.freeze({
            "en": "Wheat bread",
            "tc": "麥包"
        }),
        "image": "wheat_bread.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1032 kJ (247 kcal)",
            "tc": "1032 kJ (247 kcal)"
        }),
        "kj": 207,
        "carbo": Object.freeze({
            "en": "41.29 g",
            "tc": "41.29 g"
        }),
        "protein": Object.freeze({
            "en": "12.95 g",
            "tc": "12.95 g"
        }),
        "fat": Object.freeze({
            "en": "3.35 g",
            "tc": "3.35 g"
        }),
        "satfat": "0.747 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "6.8 g",
            "tc": "6.8 g"
        }),
        "sugar": "5.57 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "slice",
            "tc": "片"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 1032,
            "carbo": 41.29,
            "protein": 12.95,
            "fat": 3.35,
            "satfat": 0.747,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 6.8,
            "sugar": 5.57,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "oats": Object.freeze({
        "id": "oats",
        "name": Object.freeze({
            "en": "Oats",
            "tc": "燕麥"
        }),
        "image": "oats.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "277 kJ (66 kcal)",
            "tc": "277 kJ (66 kcal)"
        }),
        "kj": 277,
        "carbo": Object.freeze({
            "en": "10.2 g",
            "tc": "10.2 g"
        }),
        "protein": Object.freeze({
            "en": "2 g",
            "tc": "2 g"
        }),
        "fat": Object.freeze({
            "en": "1.4 g",
            "tc": "1.4 g"
        }),
        "satfat": "0.2 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.7 g",
            "tc": "1.7 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 277,
            "carbo": 10.2,
            "protein": 2,
            "fat": 1.4,
            "satfat": 0.2,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.7,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "leafy_veg": Object.freeze({
        "id": "leafy_veg",
        "name": Object.freeze({
            "en": "Leafy vegetables",
            "tc": "有葉蔬菜"
        }),
        "image": "leafy_veg.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "125 kJ (30 kcal) in average",
            "tc": "平均 125 kJ (30 kcal)"
        }),
        "kj": 125,
        "carbo": Object.freeze({
            "en": "3.2 g in average",
            "tc": "平均 3.2 g"
        }),
        "protein": Object.freeze({
            "en": "1.5 g in average",
            "tc": "平均 1.5 g"
        }),
        "fat": Object.freeze({
            "en": "0.1 g in average",
            "tc": "平均 0.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1 g in average",
            "tc": "平均 1 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 125,
            "carbo": 3.2,
            "protein": 1.5,
            "fat": 0.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "tomato": Object.freeze({
        "id": "tomato",
        "name": Object.freeze({
            "en": "Tomatoes",
            "tc": "蕃茄"
        }),
        "image": "tomato.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "75 kJ (18 kcal)",
            "tc": "75 kJ (18 kcal)"
        }),
        "kj": 56,
        "carbo": Object.freeze({
            "en": "4.01 g",
            "tc": "4.01 g"
        }),
        "protein": Object.freeze({
            "en": "0.95 g",
            "tc": "0.95 g"
        }),
        "fat": Object.freeze({
            "en": "0.11 g",
            "tc": "0.11 g"
        }),
        "satfat": "0.015 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.2 g",
            "tc": "1.2 g"
        }),
        "sugar": "2.49 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.49,
            "energy": 75,
            "carbo": 4.01,
            "protein": 0.95,
            "fat": 0.11,
            "satfat": 0.015,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.2,
            "sugar": 2.49,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "carrot": Object.freeze({
        "id": "carrot",
        "name": Object.freeze({
            "en": "Carrots",
            "tc": "紅蘿蔔"
        }),
        "image": "carrot.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "92 kJ (22 kcal)",
            "tc": "92 kJ (22 kcal)"
        }),
        "kj": 69,
        "carbo": Object.freeze({
            "en": "4.6 g",
            "tc": "4.6 g"
        }),
        "protein": Object.freeze({
            "en": "1 g",
            "tc": "1 g"
        }),
        "fat": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.8 g",
            "tc": "1.8 g"
        }),
        "sugar": "2.3 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin A",
            "tc": "豐富維生素 A"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "The carrot gets its bright orange colour from β-carotene, which is partly metabolised into vitamin A in humans. Overconsumption of carrots can cause carotenosis, a condition in which the skin turns orange",
            "tc": "紅蘿蔔的顏色來自β-胡蘿蔔素，它在人體中可以轉變為維生素A。過度食用紅蘿蔔會度致胡蘿蔔素沈著，令皮膚變為橙色。"
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.5,
            "energy": 92,
            "carbo": 4.6,
            "protein": 1,
            "fat": 0.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.8,
            "sugar": 2.3,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "potato": Object.freeze({
        "id": "potato",
        "name": Object.freeze({
            "en": "Potatoes",
            "tc": "薯仔"
        }),
        "image": "potato.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "322 kJ (77 kcal)",
            "tc": "322 kJ (77 kcal)"
        }),
        "kj": 242,
        "carbo": Object.freeze({
            "en": "17.2 g",
            "tc": "17.2 g"
        }),
        "protein": Object.freeze({
            "en": "2 g",
            "tc": "2 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2.2 g",
            "tc": "2.2 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.5,
            "energy": 322,
            "carbo": 17.2,
            "protein": 2,
            "fat": 0.2,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2.2,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "cucumber": Object.freeze({
        "id": "cucumber",
        "name": Object.freeze({
            "en": "Cucumbers",
            "tc": "青瓜"
        }),
        "image": "cucumber.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "63 kJ (15 kcal)",
            "tc": "63 kJ (15 kcal)"
        }),
        "kj": 47,
        "carbo": Object.freeze({
            "en": "3.63 g",
            "tc": "3.63 g"
        }),
        "protein": Object.freeze({
            "en": "0.65 g",
            "tc": "0.65 g"
        }),
        "fat": Object.freeze({
            "en": "0.11 g",
            "tc": "0.11 g"
        }),
        "satfat": "0.037 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.5 g",
            "tc": "0.5 g"
        }),
        "sugar": "1.67 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.49,
            "energy": 63,
            "carbo": 3.63,
            "protein": 0.65,
            "fat": 0.11,
            "satfat": 0.037,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.5,
            "sugar": 1.67,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pumpkin": Object.freeze({
        "id": "pumpkin",
        "name": Object.freeze({
            "en": "Pumpkins",
            "tc": "南瓜"
        }),
        "image": "pumpkin.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "109 kJ (26 kcal)",
            "tc": "109 kJ (26 kcal)"
        }),
        "kj": 82,
        "carbo": Object.freeze({
            "en": "6.5 g",
            "tc": "6.5 g"
        }),
        "protein": Object.freeze({
            "en": "1 g",
            "tc": "1 g"
        }),
        "fat": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "satfat": "0.052 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.5 g",
            "tc": "0.5 g"
        }),
        "sugar": "1.36 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin A",
            "tc": "豐富維生素 A"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.5,
            "energy": 109,
            "carbo": 6.5,
            "protein": 1,
            "fat": 0.1,
            "satfat": 0.052,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.5,
            "sugar": 1.36,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "eggplant": Object.freeze({
        "id": "eggplant",
        "name": Object.freeze({
            "en": "Eggplants",
            "tc": "茄子"
        }),
        "image": "eggplant.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "100 kJ (24 kcal)",
            "tc": "100 kJ (24 kcal)"
        }),
        "kj": 75,
        "carbo": Object.freeze({
            "en": "5.7 g",
            "tc": "5.7 g"
        }),
        "protein": Object.freeze({
            "en": "1.01 g",
            "tc": "1.01 g"
        }),
        "fat": Object.freeze({
            "en": "0.19 g",
            "tc": "0.19 g"
        }),
        "satfat": "0.034 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "3.4 g",
            "tc": "3.4 g"
        }),
        "sugar": "2.35 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.5,
            "energy": 100,
            "carbo": 5.7,
            "protein": 1.01,
            "fat": 0.19,
            "satfat": 0.034,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 3.4,
            "sugar": 2.35,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "mushroom": Object.freeze({
        "id": "mushroom",
        "name": Object.freeze({
            "en": "Mushrooms",
            "tc": "蘑菇"
        }),
        "image": "mushroom.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "100 kJ (24 kcal)",
            "tc": "100 kJ (24 kcal)"
        }),
        "kj": 75,
        "carbo": Object.freeze({
            "en": "4.1 g",
            "tc": "4.1 g"
        }),
        "protein": Object.freeze({
            "en": "2.7 g",
            "tc": "2.7 g"
        }),
        "fat": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "satfat": "0.077 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2.1 g",
            "tc": "2.1 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.5,
            "energy": 100,
            "carbo": 4.1,
            "protein": 2.7,
            "fat": 0.1,
            "satfat": 0.077,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2.1,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "apple": Object.freeze({
        "id": "apple",
        "name": Object.freeze({
            "en": "Apples",
            "tc": "蘋果"
        }),
        "image": "apple.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "202 kJ (48 kcal)",
            "tc": "202 kJ (48 kcal)"
        }),
        "kj": 141.4,
        "carbo": Object.freeze({
            "en": "12.8 g",
            "tc": "12.8 g"
        }),
        "protein": Object.freeze({
            "en": "0.27 g",
            "tc": "0.27 g"
        }),
        "fat": Object.freeze({
            "en": "0.13 g",
            "tc": "0.13 g"
        }),
        "satfat": "0.021 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2.4 g",
            "tc": "2.4 g"
        }),
        "sugar": "10.10 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "apple",
            "tc": "個"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 202,
            "carbo": 12.8,
            "protein": 0.27,
            "fat": 0.13,
            "satfat": 0.021,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2.4,
            "sugar": 10.10,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "orange": Object.freeze({
        "id": "orange",
        "name": Object.freeze({
            "en": "Oranges",
            "tc": "橙"
        }),
        "image": "orange.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "200 kJ (48 kcal)",
            "tc": "200 kJ (48 kcal)"
        }),
        "kj": 140,
        "carbo": Object.freeze({
            "en": "11.1 g",
            "tc": "11.1 g"
        }),
        "protein": Object.freeze({
            "en": "0.8 g",
            "tc": "0.8 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "0.077 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2 g",
            "tc": "2 g"
        }),
        "sugar": "8.7 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "orange",
            "tc": "個"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 200,
            "carbo": 11.1,
            "protein": 0.8,
            "fat": 0.2,
            "satfat": 0.077,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2,
            "sugar": 8.7,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "banana": Object.freeze({
        "id": "banana",
        "name": Object.freeze({
            "en": "Bananas",
            "tc": "香蕉"
        }),
        "image": "banana.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "372 kJ (89 kcal)",
            "tc": "372 kJ (89 kcal)"
        }),
        "kj": 260,
        "carbo": Object.freeze({
            "en": "22.84 g",
            "tc": "22.84 g"
        }),
        "protein": Object.freeze({
            "en": "1.09 g",
            "tc": "1.09 g"
        }),
        "fat": Object.freeze({
            "en": "0.33 g",
            "tc": "0.33 g"
        }),
        "satfat": "0.112 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2.6 g",
            "tc": "2.6 g"
        }),
        "sugar": "12.23 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "banana",
            "tc": "隻"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 372,
            "carbo": 22.84,
            "protein": 1.09,
            "fat": 0.33,
            "satfat": 0.112,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2.6,
            "sugar": 12.23,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "grape": Object.freeze({
        "id": "grape",
        "name": Object.freeze({
            "en": "Grapes",
            "tc": "葡萄"
        }),
        "image": "grape.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "184 kJ (44 kcal)",
            "tc": "184 kJ (44 kcal)"
        }),
        "kj": 129,
        "carbo": Object.freeze({
            "en": "10.3 g",
            "tc": "10.3 g"
        }),
        "protein": Object.freeze({
            "en": "0.5 g",
            "tc": "0.5 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.9 g",
            "tc": "0.9 g"
        }),
        "sugar": "8.5 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 184,
            "carbo": 10.3,
            "protein": 0.5,
            "fat": 0.2,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.9,
            "sugar": 8.5,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "kiwi": Object.freeze({
        "id": "kiwi",
        "name": Object.freeze({
            "en": "Kiwi fruits",
            "tc": "奇異果"
        }),
        "image": "kiwi.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "255 kJ (61 kcal)",
            "tc": "255 kJ (61 kcal)"
        }),
        "kj": 153,
        "carbo": Object.freeze({
            "en": "14.66 g",
            "tc": "14.66 g"
        }),
        "protein": Object.freeze({
            "en": "1.14 g",
            "tc": "1.14 g"
        }),
        "fat": Object.freeze({
            "en": "0.52 g",
            "tc": "0.52 g"
        }),
        "satfat": "0.029 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "3 g",
            "tc": "3 g"
        }),
        "sugar": "8.99 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "kiwi fruit",
            "tc": "個"
        }),
        "num": Object.freeze({
            "serving": 1.2,
            "energy": 255,
            "carbo": 14.66,
            "protein": 1.14,
            "fat": 0.52,
            "satfat": 0.029,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 3,
            "sugar": 8.99,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "melon": Object.freeze({
        "id": "melon",
        "name": Object.freeze({
            "en": "Melons",
            "tc": "西瓜"
        }),
        "image": "melon.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "125 kJ (30 kcal)",
            "tc": "125 kJ (30 kcal)"
        }),
        "kj": 88,
        "carbo": Object.freeze({
            "en": "7.55 g",
            "tc": "7.55 g"
        }),
        "protein": Object.freeze({
            "en": "0.61 g",
            "tc": "0.61 g"
        }),
        "fat": Object.freeze({
            "en": "0.15 g",
            "tc": "0.15 g"
        }),
        "satfat": "0.016 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.4 g",
            "tc": "0.4 g"
        }),
        "sugar": "6.2 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.41,
            "energy": 125,
            "carbo": 7.55,
            "protein": 0.61,
            "fat": 0.15,
            "satfat": 0.016,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.4,
            "sugar": 6.2,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "berry": Object.freeze({
        "id": "berry",
        "name": Object.freeze({
            "en": "Berries",
            "tc": "莓"
        }),
        "image": "berry.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "146 kJ (35 kcal)",
            "tc": "146 kJ (35 kcal)"
        }),
        "kj": 102,
        "carbo": Object.freeze({
            "en": "7.7 g",
            "tc": "7.7 g"
        }),
        "protein": Object.freeze({
            "en": "0.7 g",
            "tc": "0.7 g"
        }),
        "fat": Object.freeze({
            "en": "0.3 g",
            "tc": "0.3 g"
        }),
        "satfat": "0.015 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2 g",
            "tc": "2 g"
        }),
        "sugar": "5 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 146,
            "carbo": 7.7,
            "protein": 0.7,
            "fat": 0.3,
            "satfat": 0.015,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2,
            "sugar": 5,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pineapple": Object.freeze({
        "id": "pineapple",
        "name": Object.freeze({
            "en": "Pineapples",
            "tc": "菠蘿"
        }),
        "image": "pineapple.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "209 kJ (50 kcal)",
            "tc": "209 kJ (50 kcal)"
        }),
        "kj": 146,
        "carbo": Object.freeze({
            "en": "13.12 g",
            "tc": "13.12 g"
        }),
        "protein": Object.freeze({
            "en": "0.54 g",
            "tc": "0.54 g"
        }),
        "fat": Object.freeze({
            "en": "0.12 g",
            "tc": "0.12 g"
        }),
        "satfat": "0.009 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.4 g",
            "tc": "1.4 g"
        }),
        "sugar": "9.85 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 209,
            "carbo": 13.12,
            "protein": 0.54,
            "fat": 0.12,
            "satfat": 0.009,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.4,
            "sugar": 9.85,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pfruit": Object.freeze({
        "id": "pfruit",
        "name": Object.freeze({
            "en": "Preserved fruits",
            "tc": "乾果"
        }),
        "image": "preserved_fruit.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "209 kJ (243 kcal)",
            "tc": "209 kJ (243 kcal)"
        }),
        "kj": 146,
        "carbo": Object.freeze({
            "en": "64.06 g",
            "tc": "64.06 g"
        }),
        "protein": Object.freeze({
            "en": "2.46 g",
            "tc": "2.46 g"
        }),
        "fat": Object.freeze({
            "en": "0.49 g",
            "tc": "0.49 g"
        }),
        "satfat": "0.04 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "7.8 g",
            "tc": "7.8 g"
        }),
        "sugar": "54.4 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "Food additives like preservative and thickeners are always added to preserve fruit nowadays.",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.4,
            "energy": 209,
            "carbo": 64.06,
            "protein": 2.46,
            "fat": 0.49,
            "satfat": 0.04,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 7.8,
            "sugar": 54.4,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "boiled_egg": Object.freeze({
        "id": "boiled_egg",
        "name": Object.freeze({
            "en": "Boiled eggs",
            "tc": "烚蛋"
        }),
        "image": "boiled_egg.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "590 kJ (141 kcal)",
            "tc": "590 kJ (141 kcal)"
        }),
        "kj": 118,
        "carbo": Object.freeze({
            "en": "0.3 g",
            "tc": "0.3 g"
        }),
        "protein": Object.freeze({
            "en": "13 g",
            "tc": "13 g"
        }),
        "fat": Object.freeze({
            "en": "9.7 g",
            "tc": "9.7 g"
        }),
        "satfat": "3 g",
        "transfat": "",
        "cholesterol": "384 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "0.3 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "egg",
            "tc": "隻"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 590,
            "carbo": 0.3,
            "protein": 13,
            "fat": 9.7,
            "satfat": 3,
            "transfat": 0,
            "cholesterol": 384,
            "fiber": 0,
            "sugar": 0.3,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "fried_egg": Object.freeze({
        "id": "fried_egg",
        "name": Object.freeze({
            "en": "Fried eggs",
            "tc": "炒蛋"
        }),
        "image": "fried_egg.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "619 kJ (148 kcal)",
            "tc": "619 kJ (148 kcal)"
        }),
        "kj": 124,
        "carbo": Object.freeze({
            "en": "2.1 g",
            "tc": "2.1 g"
        }),
        "protein": Object.freeze({
            "en": "11.4 g",
            "tc": "11.4 g"
        }),
        "fat": Object.freeze({
            "en": "10.6 g",
            "tc": "10.6 g"
        }),
        "satfat": "4 g",
        "transfat": "",
        "cholesterol": "407 mg",
        "fiber": Object.freeze({
            "en": "0.3 g",
            "tc": "0.3 g"
        }),
        "sugar": "1.8 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "egg",
            "tc": "隻"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 619,
            "carbo": 2.1,
            "protein": 11.4,
            "fat": 10.6,
            "satfat": 4,
            "transfat": 0,
            "cholesterol": 407,
            "fiber": 0.3,
            "sugar": 1.8,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "sausage": Object.freeze({
        "id": "sausage",
        "name": Object.freeze({
            "en": "Sausages",
            "tc": "香腸"
        }),
        "image": "sausage.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1104 kJ (264 kcal)",
            "tc": "1104 kJ (264 kcal)"
        }),
        "kj": 221,
        "carbo": Object.freeze({
            "en": "5.2 g",
            "tc": "5.2 g"
        }),
        "protein": Object.freeze({
            "en": "15.4 g",
            "tc": "15.4 g"
        }),
        "fat": Object.freeze({
            "en": "20 g",
            "tc": "20 g"
        }),
        "satfat": "8.1 g",
        "transfat": "",
        "cholesterol": "60 mg",
        "fiber": Object.freeze({
            "en": "1.4 g",
            "tc": "1.4 g"
        }),
        "sugar": "0.7 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "sausage",
            "tc": "條"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 1104,
            "carbo": 5.2,
            "protein": 15.4,
            "fat": 20,
            "satfat": 8.1,
            "transfat": 0,
            "cholesterol": 60,
            "fiber": 1.4,
            "sugar": 0.7,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "fried_sausage": Object.freeze({
        "id": "fried_sausage",
        "name": Object.freeze({
            "en": "Fried sausages",
            "tc": "煎腸仔"
        }),
        "image": "fried_sausage.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1237 kJ (296 kcal)",
            "tc": "1237 kJ (296 kcal)"
        }),
        "kj": 247,
        "carbo": Object.freeze({
            "en": "2.13 g",
            "tc": "2.13 g"
        }),
        "protein": Object.freeze({
            "en": "12.89 g",
            "tc": "12.89 g"
        }),
        "fat": Object.freeze({
            "en": "25.84 g",
            "tc": "25.84 g"
        }),
        "satfat": "9.482 g",
        "transfat": "",
        "cholesterol": "63 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "0.11 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "sausage",
            "tc": "條"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 1237,
            "carbo": 2.13,
            "protein": 12.89,
            "fat": 25.84,
            "satfat": 9.482,
            "transfat": 0,
            "cholesterol": 63,
            "fiber": 0,
            "sugar": 0.11,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "ham": Object.freeze({
        "id": "ham",
        "name": Object.freeze({
            "en": "Hams",
            "tc": "火腿"
        }),
        "image": "ham.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "752 kJ (180 kcal)",
            "tc": "752 kJ (180 kcal)"
        }),
        "kj": 150,
        "carbo": Object.freeze({
            "en": "4.2 g",
            "tc": "4.2 g"
        }),
        "protein": Object.freeze({
            "en": "16.5 g",
            "tc": "16.5 g"
        }),
        "fat": Object.freeze({
            "en": "10.3 g",
            "tc": "10.3 g"
        }),
        "satfat": "3.442 g",
        "transfat": "",
        "cholesterol": "59 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~2 g",
            "tc": "~2 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "slice",
            "tc": "片"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 752,
            "carbo": 4.2,
            "protein": 16.5,
            "fat": 10.3,
            "satfat": 3.442,
            "transfat": 0,
            "cholesterol": 59,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 2
        })
    }),
    "luncheon": Object.freeze({
        "id": "luncheon",
        "name": Object.freeze({
            "en": "Luncheon meats",
            "tc": "午餐肉"
        }),
        "image": "luncheon.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1476 kJ (353 kcal)",
            "tc": "1476 kJ (353 kcal)"
        }),
        "kj": 295,
        "carbo": Object.freeze({
            "en": "2.33 g",
            "tc": "2.33 g"
        }),
        "protein": Object.freeze({
            "en": "12.59 g",
            "tc": "12.59 g"
        }),
        "fat": Object.freeze({
            "en": "32.16 g",
            "tc": "32.16 g"
        }),
        "satfat": "11.59 g",
        "transfat": "",
        "cholesterol": "55 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~2 g",
            "tc": "~2 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "slice",
            "tc": "片"
        }),
        "num": Object.freeze({
            "serving": 0.4,
            "energy": 1476,
            "carbo": 2.33,
            "protein": 12.59,
            "fat": 32.16,
            "satfat": 11.59,
            "transfat": 0,
            "cholesterol": 55,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 2
        })
    }),
    "fried_pork": Object.freeze({
        "id": "fried_pork",
        "name": Object.freeze({
            "en": "Fried pork chops",
            "tc": "煎豬扒"
        }),
        "image": "fried_pork.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "916 kJ (218 kcal)",
            "tc": "916 kJ (218 kcal)"
        }),
        "kj": 732,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "28.11 g",
            "tc": "28.11 g"
        }),
        "fat": Object.freeze({
            "en": "10.87 g",
            "tc": "10.87 g"
        }),
        "satfat": "3.98 g",
        "transfat": "",
        "cholesterol": "70 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 916,
            "carbo": 0,
            "protein": 28.11,
            "fat": 10.87,
            "satfat": 3.98,
            "transfat": 0,
            "cholesterol": 70,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "deep_fried_pork": Object.freeze({
        "id": "deep_fried_pork",
        "name": Object.freeze({
            "en": "Deep fried pork chops",
            "tc": "炸豬扒"
        }),
        "image": "deep_fried_pork.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1141 kJ (273 kcal)",
            "tc": "1141 kJ (273 kcal)"
        }),
        "kj": 913.8,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "25.82 g",
            "tc": "25.82 g"
        }),
        "fat": Object.freeze({
            "en": "18.05 g",
            "tc": "18.05 g"
        }),
        "satfat": "6.72 g",
        "transfat": "",
        "cholesterol": "73 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1141,
            "carbo": 0,
            "protein": 25.82,
            "fat": 18.05,
            "satfat": 6.72,
            "transfat": 0,
            "cholesterol": 73,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "bbq_pork": Object.freeze({
        "id": "bbq_pork",
        "name": Object.freeze({
            "en": "Barbecued pork",
            "tc": "叉燒"
        }),
        "image": "bbq_pork.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1166 kJ (279 kcal)",
            "tc": "1166 kJ (279 kcal)"
        }),
        "kj": 933,
        "carbo": Object.freeze({
            "en": "7.9 g",
            "tc": "7.9 g"
        }),
        "protein": Object.freeze({
            "en": "23.8 g",
            "tc": "23.8 g"
        }),
        "fat": Object.freeze({
            "en": "16.9 g",
            "tc": "16.9 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "68 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1166,
            "carbo": 7.9,
            "protein": 23.8,
            "fat": 16.9,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 68,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "cooked_beef": Object.freeze({
        "id": "cooked_beef",
        "name": Object.freeze({
            "en": "Cooked beef",
            "tc": "熟牛肉"
        }),
        "image": "cooked_beef.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "523 kJ (125 kcal)",
            "tc": "523 kJ (125 kcal)"
        }),
        "kj": 418,
        "carbo": Object.freeze({
            "en": "2 g",
            "tc": "2 g"
        }),
        "protein": Object.freeze({
            "en": "19.9 g",
            "tc": "19.9 g"
        }),
        "fat": Object.freeze({
            "en": "4.2 g",
            "tc": "4.2 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "84 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 523,
            "carbo": 2,
            "protein": 19.9,
            "fat": 4.2,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 84,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "fried_beef": Object.freeze({
        "id": "fried_beef",
        "name": Object.freeze({
            "en": "Fried beef",
            "tc": "炒牛肉"
        }),
        "image": "fried_beef.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "669 kJ (160 kcal)",
            "tc": "669 kJ (160 kcal)"
        }),
        "kj": 535,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "32.7 g",
            "tc": "32.7 g"
        }),
        "fat": Object.freeze({
            "en": "3 g",
            "tc": "3 g"
        }),
        "satfat": "1 g",
        "transfat": "",
        "cholesterol": "77 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 669,
            "carbo": 0,
            "protein": 32.7,
            "fat": 3,
            "satfat": 1,
            "transfat": 0,
            "cholesterol": 77,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "steak": Object.freeze({
        "id": "steak",
        "name": Object.freeze({
            "en": "Fried steaks",
            "tc": "牛扒"
        }),
        "image": "steak.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "698 kJ (167 kcal)",
            "tc": "698 kJ (167 kcal)"
        }),
        "kj": 558,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "31 g",
            "tc": "31 g"
        }),
        "fat": Object.freeze({
            "en": "4.6 g",
            "tc": "4.6 g"
        }),
        "satfat": "1.6 g",
        "transfat": "",
        "cholesterol": "75 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 698,
            "carbo": 0,
            "protein": 31,
            "fat": 4.6,
            "satfat": 1.6,
            "transfat": 0,
            "cholesterol": 75,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "lamb": Object.freeze({
        "id": "lamb",
        "name": Object.freeze({
            "en": "Lamb",
            "tc": "羊肉"
        }),
        "image": "lamb.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "849 kJ (203 kcal)",
            "tc": "849 kJ (203 kcal)"
        }),
        "kj": 679,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "19 g",
            "tc": "19 g"
        }),
        "fat": Object.freeze({
            "en": "14.1 g",
            "tc": "14.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "92 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 849,
            "carbo": 0,
            "protein": 19,
            "fat": 14.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 92,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chicken_steamed": Object.freeze({
        "id": "chicken_steamed",
        "name": Object.freeze({
            "en": "Steamed chicken",
            "tc": "蒸雞"
        }),
        "image": "chicken_steamed.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "698 kJ (167 kcal)",
            "tc": "698 kJ (167 kcal)"
        }),
        "kj": 558,
        "carbo": Object.freeze({
            "en": "1.3 g",
            "tc": "1.3 g"
        }),
        "protein": Object.freeze({
            "en": "20.3 g",
            "tc": "20.3 g"
        }),
        "fat": Object.freeze({
            "en": "7.2 g",
            "tc": "7.2 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "106 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 698,
            "carbo": 1.3,
            "protein": 20.3,
            "fat": 7.2,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 106,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chicken_df": Object.freeze({
        "id": "chicken_df",
        "name": Object.freeze({
            "en": "Deep fried chicken",
            "tc": "炸雞"
        }),
        "image": "chicken_deep_fried.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "915 kJ (219 kcal)",
            "tc": "915 kJ (219 kcal)"
        }),
        "kj": 732,
        "carbo": Object.freeze({
            "en": "1.69 g",
            "tc": "1.69 g"
        }),
        "protein": Object.freeze({
            "en": "30.57 g",
            "tc": "30.57 g"
        }),
        "fat": Object.freeze({
            "en": "9.12 g",
            "tc": "9.12 g"
        }),
        "satfat": "2.46 g",
        "transfat": "",
        "cholesterol": "94 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 915,
            "carbo": 1.69,
            "protein": 30.57,
            "fat": 9.12,
            "satfat": 2.46,
            "transfat": 0,
            "cholesterol": 94,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chicken_roasted": Object.freeze({
        "id": "chicken_roasted",
        "name": Object.freeze({
            "en": "Roasted chicken",
            "tc": "烤雞"
        }),
        "image": "chicken_roasted.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "794 kJ (190 kcal)",
            "tc": "794 kJ (190 kcal)"
        }),
        "kj": 635,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "28.937 g",
            "tc": "28.937 g"
        }),
        "fat": Object.freeze({
            "en": "7.41 g",
            "tc": "7.41 g"
        }),
        "satfat": "2.04 g",
        "transfat": "",
        "cholesterol": "89 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 794,
            "carbo": 0,
            "protein": 28.937,
            "fat": 7.41,
            "satfat": 2.04,
            "transfat": 0,
            "cholesterol": 89,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chicken_wing": Object.freeze({
        "id": "chicken_wing",
        "name": Object.freeze({
            "en": "Chicken wings",
            "tc": "雞翼"
        }),
        "image": "chicken_wing.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "852 kJ (203 kcal)",
            "tc": "852 kJ (203 kcal)"
        }),
        "kj": 213,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "30.46 g",
            "tc": "30.46 g"
        }),
        "fat": Object.freeze({
            "en": "8.13 g",
            "tc": "8.13 g"
        }),
        "satfat": "2.26 g",
        "transfat": "",
        "cholesterol": "85 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 0.5,
            "energy": 852,
            "carbo": 0,
            "protein": 30.46,
            "fat": 8.13,
            "satfat": 2.26,
            "transfat": 0,
            "cholesterol": 85,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chicken_leg": Object.freeze({
        "id": "chicken_leg",
        "name": Object.freeze({
            "en": "Chicken legs",
            "tc": "雞腿"
        }),
        "image": "chicken_leg.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "970 kJ (232 kcal)",
            "tc": "970 kJ (232 kcal)"
        }),
        "kj": 485,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "25.96 g",
            "tc": "25.96 g"
        }),
        "fat": Object.freeze({
            "en": "13.46 g",
            "tc": "13.46 g"
        }),
        "satfat": "3.72 g",
        "transfat": "",
        "cholesterol": "92 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1,
            "energy": 970,
            "carbo": 0,
            "protein": 25.96,
            "fat": 13.46,
            "satfat": 3.72,
            "transfat": 0,
            "cholesterol": 92,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "duck": Object.freeze({
        "id": "duck",
        "name": Object.freeze({
            "en": "Duck/goose",
            "tc": "鴨/鵝"
        }),
        "image": "duck.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1003 kJ (240 kcal)",
            "tc": "1003 kJ (240 kcal)"
        }),
        "kj": 502,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "17.9 g",
            "tc": "17.9 g"
        }),
        "fat": Object.freeze({
            "en": "19.9 g",
            "tc": "19.9 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1,
            "energy": 1003,
            "carbo": 0,
            "protein": 17.9,
            "fat": 19.9,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "fish_steamed": Object.freeze({
        "id": "fish_steamed",
        "name": Object.freeze({
            "en": "Steamed fish",
            "tc": "蒸魚"
        }),
        "image": "fish_steamed.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "502 kJ (120 kcal)",
            "tc": "502 kJ (120 kcal)"
        }),
        "kj": 402,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "26.1 g",
            "tc": "26.1 g"
        }),
        "fat": Object.freeze({
            "en": "1.2 g",
            "tc": "1.2 g"
        }),
        "satfat": "0.3 g",
        "transfat": "",
        "cholesterol": "78 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 502,
            "carbo": 0,
            "protein": 26.1,
            "fat": 1.2,
            "satfat": 0.3,
            "transfat": 0,
            "cholesterol": 78,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "fish_fried": Object.freeze({
        "id": "fish_fried",
        "name": Object.freeze({
            "en": "Fried fish",
            "tc": "煎魚"
        }),
        "image": "fish_fried.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "861 kJ (206 kcal)",
            "tc": "861 kJ (206 kcal)"
        }),
        "kj": 689,
        "carbo": Object.freeze({
            "en": "2.8 g",
            "tc": "2.8 g"
        }),
        "protein": Object.freeze({
            "en": "23.2 g",
            "tc": "23.2 g"
        }),
        "fat": Object.freeze({
            "en": "11.3 g",
            "tc": "11.3 g"
        }),
        "satfat": "3.1 g",
        "transfat": "",
        "cholesterol": "85 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 861,
            "carbo": 2.8,
            "protein": 23.2,
            "fat": 11.3,
            "satfat": 3.1,
            "transfat": 0,
            "cholesterol": 85,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "fish_df": Object.freeze({
        "id": "fish_df",
        "name": Object.freeze({
            "en": "Deep fried fish",
            "tc": "炸魚"
        }),
        "image": "fish_deep_fried.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1212 kJ (290 kcal)",
            "tc": "1212 kJ (290 kcal)"
        }),
        "kj": 970,
        "carbo": Object.freeze({
            "en": "12.7 g",
            "tc": "12.7 g"
        }),
        "protein": Object.freeze({
            "en": "20.8 g",
            "tc": "20.8 g"
        }),
        "fat": Object.freeze({
            "en": "17.3 g",
            "tc": "17.3 g"
        }),
        "satfat": "7.8 g",
        "transfat": "",
        "cholesterol": "99 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1212,
            "carbo": 12.7,
            "protein": 20.8,
            "fat": 17.3,
            "satfat": 7.8,
            "transfat": 0,
            "cholesterol": 99,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "shrimp": Object.freeze({
        "id": "shrimp",
        "name": Object.freeze({
            "en": "Shrimps",
            "tc": "蝦"
        }),
        "image": "shrimp.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "330 kJ (79 kcal)",
            "tc": "330 kJ (79 kcal)"
        }),
        "kj": 264,
        "carbo": Object.freeze({
            "en": "13.5 g",
            "tc": "13.5 g"
        }),
        "protein": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "0.077 g",
        "transfat": "",
        "cholesterol": "106 mg",
        "fiber": Object.freeze({
            "en": "1.2 g",
            "tc": "1.2 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 330,
            "carbo": 13.5,
            "protein": 0.2,
            "fat": 0.2,
            "satfat": 0.077,
            "transfat": 0,
            "cholesterol": 106,
            "fiber": 1.2,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "crab": Object.freeze({
        "id": "crab",
        "name": Object.freeze({
            "en": "Crabs",
            "tc": "蟹"
        }),
        "image": "crab.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "397 kJ (95 kcal)",
            "tc": "397 kJ (95 kcal)"
        }),
        "kj": 318,
        "carbo": Object.freeze({
            "en": "4.7 g",
            "tc": "4.7 g"
        }),
        "protein": Object.freeze({
            "en": "13.8 g",
            "tc": "13.8 g"
        }),
        "fat": Object.freeze({
            "en": "2.3 g",
            "tc": "2.3 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "125 mg",
        "fiber": Object.freeze({
            "en": "1.2 g",
            "tc": "1.2 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 397,
            "carbo": 4.7,
            "protein": 13.8,
            "fat": 2.3,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 125,
            "fiber": 1.2,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "lobster": Object.freeze({
        "id": "lobster",
        "name": Object.freeze({
            "en": "Lobsters",
            "tc": "龍蝦"
        }),
        "image": "lobster.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "410 kJ (98 kcal)",
            "tc": "410 kJ (98 kcal)"
        }),
        "kj": 328,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "22 g",
            "tc": "22 g"
        }),
        "fat": Object.freeze({
            "en": "0.9 g",
            "tc": "0.9 g"
        }),
        "satfat": "0.2 g",
        "transfat": "",
        "cholesterol": "116 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 410,
            "carbo": 0,
            "protein": 22,
            "fat": 0.9,
            "satfat": 0.2,
            "transfat": 0,
            "cholesterol": 116,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "oyster": Object.freeze({
        "id": "oyster",
        "name": Object.freeze({
            "en": "Oysters",
            "tc": "蠔"
        }),
        "image": "oyster.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "251 kJ (60 kcal)",
            "tc": "251 kJ (60 kcal)"
        }),
        "kj": 201,
        "carbo": Object.freeze({
            "en": "5.53 g",
            "tc": "5.53 g"
        }),
        "protein": Object.freeze({
            "en": "5.22 g",
            "tc": "5.22 g"
        }),
        "fat": Object.freeze({
            "en": "1.55 g",
            "tc": "1.55 g"
        }),
        "satfat": "0.443 g",
        "transfat": "",
        "cholesterol": "25 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 251,
            "carbo": 5.53,
            "protein": 5.22,
            "fat": 1.55,
            "satfat": 0.443,
            "transfat": 0,
            "cholesterol": 25,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "whole_milk": Object.freeze({
        "id": "whole_milk",
        "name": Object.freeze({
            "en": "Whole milk",
            "tc": "全脂奶"
        }),
        "image": "whole_milk.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "268 kJ (64 kcal)",
            "tc": "268 kJ (64 kcal)"
        }),
        "kj": 322,
        "carbo": Object.freeze({
            "en": "4.7 g",
            "tc": "4.7 g"
        }),
        "protein": Object.freeze({
            "en": "3.1 g",
            "tc": "3.1 g"
        }),
        "fat": Object.freeze({
            "en": "3.7 g",
            "tc": "3.7 g"
        }),
        "satfat": "1.8 g",
        "transfat": "0.091 g",
        "cholesterol": "14 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "4.2 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2.4,
            "energy": 268,
            "carbo": 4.7,
            "protein": 3.1,
            "fat": 3.7,
            "satfat": 1.8,
            "transfat": 0.091,
            "cholesterol": 14,
            "fiber": 0,
            "sugar": 4.2,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "skim_milk": Object.freeze({
        "id": "skim_milk",
        "name": Object.freeze({
            "en": "Skim milk",
            "tc": "脫脂奶"
        }),
        "image": "skim_milk.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "142 kJ (34 kcal)",
            "tc": "142 kJ (34 kcal)"
        }),
        "kj": 170,
        "carbo": Object.freeze({
            "en": "5.09 g",
            "tc": "5.09 g"
        }),
        "protein": Object.freeze({
            "en": "3.37 g",
            "tc": "3.37 g"
        }),
        "fat": Object.freeze({
            "en": "0.08 g",
            "tc": "0.08 g"
        }),
        "satfat": "0.051 g",
        "transfat": "",
        "cholesterol": "2 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "5.09 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2.39,
            "energy": 142,
            "carbo": 5.09,
            "protein": 3.37,
            "fat": 0.08,
            "satfat": 0.051,
            "transfat": 0,
            "cholesterol": 2,
            "fiber": 0,
            "sugar": 5.09,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "choco_milk": Object.freeze({
        "id": "choco_milk",
        "name": Object.freeze({
            "en": "Chocolate milk",
            "tc": "朱古力奶"
        }),
        "image": "choco_milk.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "292 kJ (70 kcal)",
            "tc": "292 kJ (70 kcal)"
        }),
        "kj": 350,
        "carbo": Object.freeze({
            "en": "11 g",
            "tc": "11 g"
        }),
        "protein": Object.freeze({
            "en": "3.2 g",
            "tc": "3.2 g"
        }),
        "fat": Object.freeze({
            "en": "2.2 g",
            "tc": "2.2 g"
        }),
        "satfat": "1.5 g",
        "transfat": "",
        "cholesterol": "7 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "9 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2.4,
            "energy": 292,
            "carbo": 11,
            "protein": 3.2,
            "fat": 2.2,
            "satfat": 1.5,
            "transfat": 0,
            "cholesterol": 7,
            "fiber": 0,
            "sugar": 9,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "yoghurt": Object.freeze({
        "id": "yoghurt",
        "name": Object.freeze({
            "en": "Yoghurt",
            "tc": "乳酪"
        }),
        "image": "yoghurt.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "300 kJ (72 kcal)",
            "tc": "300 kJ (72 kcal)"
        }),
        "kj": 360,
        "carbo": Object.freeze({
            "en": "9.3 g",
            "tc": "9.3 g"
        }),
        "protein": Object.freeze({
            "en": "2.5 g",
            "tc": "2.5 g"
        }),
        "fat": Object.freeze({
            "en": "2.7 g",
            "tc": "2.7 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "15 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "9.3 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2.4,
            "energy": 300,
            "carbo": 9.3,
            "protein": 2.5,
            "fat": 2.7,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 15,
            "fiber": 0,
            "sugar": 9.3,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "cheese": Object.freeze({
        "id": "cheese",
        "name": Object.freeze({
            "en": "Cheese",
            "tc": "芝士"
        }),
        "image": "cheese.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1371 kJ (328 kcal)",
            "tc": "1371 kJ (328 kcal)"
        }),
        "kj": 1371,
        "carbo": Object.freeze({
            "en": "3.5 g",
            "tc": "3.5 g"
        }),
        "protein": Object.freeze({
            "en": "25.7 g",
            "tc": "25.7 g"
        }),
        "fat": Object.freeze({
            "en": "23.5 g",
            "tc": "23.5 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "11 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~2 g",
            "tc": "~2 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 1371,
            "carbo": 3.5,
            "protein": 25.7,
            "fat": 23.5,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 11,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 2
        })
    }),
    "tofu_steamed": Object.freeze({
        "id": "tofu_steamed",
        "name": Object.freeze({
            "en": "Steamed tofu",
            "tc": "蒸豆腐"
        }),
        "image": "tofu_steamed.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "343 kJ (82 kcal)",
            "tc": "343 kJ (82 kcal)"
        }),
        "kj": 343,
        "carbo": Object.freeze({
            "en": "4.2 g",
            "tc": "4.2 g"
        }),
        "protein": Object.freeze({
            "en": "8.1 g",
            "tc": "8.1 g"
        }),
        "fat": Object.freeze({
            "en": "3.7 g",
            "tc": "3.7 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.4 g",
            "tc": "0.4 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 343,
            "carbo": 4.2,
            "protein": 8.1,
            "fat": 3.7,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.4,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "tofu_df": Object.freeze({
        "id": "tofu_df",
        "name": Object.freeze({
            "en": "Deep fried tofu",
            "tc": "炸豆腐"
        }),
        "image": "tofu_df.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1133 kJ (271 kcal)",
            "tc": "1133 kJ (271 kcal)"
        }),
        "kj": 1133,
        "carbo": Object.freeze({
            "en": "10.49 g",
            "tc": "10.49 g"
        }),
        "protein": Object.freeze({
            "en": "17.19 g",
            "tc": "17.19 g"
        }),
        "fat": Object.freeze({
            "en": "20.187 g",
            "tc": "20.187 g"
        }),
        "satfat": "2.918 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "3.9 g",
            "tc": "3.9 g"
        }),
        "sugar": "2.72 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 1133,
            "carbo": 10.49,
            "protein": 17.19,
            "fat": 20.187,
            "satfat": 2.918,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 3.9,
            "sugar": 2.72,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "greenbean": Object.freeze({
        "id": "greenbean",
        "name": Object.freeze({
            "en": "Green bean",
            "tc": "綠豆"
        }),
        "image": "greenbean.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "155 kJ (37 kcal)",
            "tc": "155 kJ (37 kcal)"
        }),
        "kj": 155,
        "carbo": Object.freeze({
            "en": "5.4 g",
            "tc": "5.4 g"
        }),
        "protein": Object.freeze({
            "en": "2.9 g",
            "tc": "2.9 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "2.6 g",
            "tc": "2.6 g"
        }),
        "sugar": "2.8 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 155,
            "carbo": 5.4,
            "protein": 2.9,
            "fat": 0.2,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 2.6,
            "sugar": 2.8,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pea": Object.freeze({
        "id": "pea",
        "name": Object.freeze({
            "en": "Pea",
            "tc": "豌豆"
        }),
        "image": "pea.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "125 kJ (30 kcal)",
            "tc": "125 kJ (30 kcal)"
        }),
        "kj": 125,
        "carbo": Object.freeze({
            "en": "4.9 g",
            "tc": "4.9 g"
        }),
        "protein": Object.freeze({
            "en": "2.5 g",
            "tc": "2.5 g"
        }),
        "fat": Object.freeze({
            "en": "0.3 g",
            "tc": "0.3 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.4 g",
            "tc": "1.4 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 125,
            "carbo": 4.9,
            "protein": 2.5,
            "fat": 0.3,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.4,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "redbean": Object.freeze({
        "id": "redbean",
        "name": Object.freeze({
            "en": "Red bean soup",
            "tc": "紅豆沙"
        }),
        "image": "redbean.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "1032 kJ (247 kcal)",
            "tc": "1032 kJ (247 kcal)"
        }),
        "kj": 1032,
        "carbo": Object.freeze({
            "en": "52.7 g",
            "tc": "52.7 g"
        }),
        "protein": Object.freeze({
            "en": "5.5 g",
            "tc": "5.5 g"
        }),
        "fat": Object.freeze({
            "en": "1.9 g",
            "tc": "1.9 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.7 g",
            "tc": "1.7 g"
        }),
        "sugar": "8 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 1032,
            "carbo": 52.7,
            "protein": 5.5,
            "fat": 1.9,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.7,
            "sugar": 8,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "softdrink": Object.freeze({
        "id": "softdrink",
        "name": Object.freeze({
            "en": "Soft drinks",
            "tc": "汽水"
        }),
        "image": "softdrink.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "167 kJ (40 kcal)",
            "tc": "167 kJ (40 kcal)"
        }),
        "kj": 501,
        "carbo": Object.freeze({
            "en": "10.6 g",
            "tc": "10.6 g"
        }),
        "protein": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "fat": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "10.6 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "can",
            "tc": "罐"
        }),
        "num": Object.freeze({
            "serving": 6,
            "energy": 167,
            "carbo": 10.6,
            "protein": 0,
            "fat": 0,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 10.6,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "tea": Object.freeze({
        "id": "tea",
        "name": Object.freeze({
            "en": "Tea",
            "tc": "茶"
        }),
        "image": "tea.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "8.4 kJ (2 kcal)",
            "tc": "8.4 kJ (2 kcal)"
        }),
        "kj": 8.4,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "fat": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "It has been suggested that green and black tea may protect against cancer and cardiovascular disease.",
            "tc": "有研究指出綠茶和紅茶能有效防止癌症和心贓病，有益人類健康。"
        }),
        "unit": Object.freeze({
            "en": "cup",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 8.4,
            "carbo": 0,
            "protein": 0.1,
            "fat": 0.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "milk_tea": Object.freeze({
        "id": "milk_tea",
        "name": Object.freeze({
            "en": "Milk tea",
            "tc": "奶茶"
        }),
        "image": "milk_tea.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "188 kJ (45 kcal)",
            "tc": "188 kJ (45 kcal)"
        }),
        "kj": 188,
        "carbo": Object.freeze({
            "en": "3.6 g",
            "tc": "3.6 g"
        }),
        "protein": Object.freeze({
            "en": "2.3 g",
            "tc": "2.3 g"
        }),
        "fat": Object.freeze({
            "en": "2.4 g",
            "tc": "2.4 g"
        }),
        "satfat": "1.3 g",
        "transfat": "",
        "cholesterol": "6.9 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "It depends",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "cup",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 188,
            "carbo": 3.6,
            "protein": 2.3,
            "fat": 2.4,
            "satfat": 1.3,
            "transfat": 0,
            "cholesterol": 6.9,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "coffee": Object.freeze({
        "id": "coffee",
        "name": Object.freeze({
            "en": "Coffee",
            "tc": "咖啡"
        }),
        "image": "coffee.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "180 kJ (43 kcal)",
            "tc": "180 kJ (43 kcal)"
        }),
        "kj": 180,
        "carbo": Object.freeze({
            "en": "3.9 g",
            "tc": "3.9 g"
        }),
        "protein": Object.freeze({
            "en": "2.2 g",
            "tc": "2.2 g"
        }),
        "fat": Object.freeze({
            "en": "2.1 g",
            "tc": "2.1 g"
        }),
        "satfat": "1.2 g",
        "transfat": "",
        "cholesterol": "6.2 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "It depends",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "cup",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 180,
            "carbo": 3.9,
            "protein": 2.2,
            "fat": 2.1,
            "satfat": 1.2,
            "transfat": 0,
            "cholesterol": 6.2,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "lemon_tea": Object.freeze({
        "id": "lemon_tea",
        "name": Object.freeze({
            "en": "Lemon tea",
            "tc": "檸檬茶"
        }),
        "image": "lemon_tea.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "192 kJ (46 kcal)",
            "tc": "192 kJ (46 kcal)"
        }),
        "kj": 192,
        "carbo": Object.freeze({
            "en": "11 g",
            "tc": "11 g"
        }),
        "protein": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "fat": Object.freeze({
            "en": "1.3 g",
            "tc": "1.3 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "8 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "cup",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 192,
            "carbo": 11,
            "protein": 0,
            "fat": 1.3,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 8,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "orange_juice": Object.freeze({
        "id": "orange_juice",
        "name": Object.freeze({
            "en": "Fresh orange juice",
            "tc": "橙汁"
        }),
        "image": "orange_juice.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "188 kJ (45 kcal)",
            "tc": "188 kJ (45 kcal)"
        }),
        "kj": 188,
        "carbo": Object.freeze({
            "en": "10.4 g",
            "tc": "10.4 g"
        }),
        "protein": Object.freeze({
            "en": "0.7 g",
            "tc": "0.7 g"
        }),
        "fat": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "satfat": "0.024 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "sugar": "8.4 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 188,
            "carbo": 10.4,
            "protein": 0.7,
            "fat": 0.2,
            "satfat": 0.024,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.2,
            "sugar": 8.4,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "apple_juice": Object.freeze({
        "id": "apple_juice",
        "name": Object.freeze({
            "en": "Fresh apple juice",
            "tc": "蘋果汁"
        }),
        "image": "apple_juice.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "192.4 kJ (46 kcal)",
            "tc": "192.4 kJ (46 kcal)"
        }),
        "kj": 192,
        "carbo": Object.freeze({
            "en": "11.3 g",
            "tc": "11.3 g"
        }),
        "protein": Object.freeze({
            "en": "0.1 g",
            "tc": "0.1 g"
        }),
        "fat": Object.freeze({
            "en": "0.13 g",
            "tc": "0.13 g"
        }),
        "satfat": "0.022 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "sugar": "9.62 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 192.4,
            "carbo": 11.3,
            "protein": 0.1,
            "fat": 0.13,
            "satfat": 0.022,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.2,
            "sugar": 9.62,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "grape_juice": Object.freeze({
        "id": "grape_juice",
        "name": Object.freeze({
            "en": "Fresh grape juice",
            "tc": "提子汁"
        }),
        "image": "grape_juice.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "221 kJ (53 kcal)",
            "tc": "221 kJ (53 kcal)"
        }),
        "kj": 221,
        "carbo": Object.freeze({
            "en": "13.4 g",
            "tc": "13.4 g"
        }),
        "protein": Object.freeze({
            "en": "0.2 g",
            "tc": "0.2 g"
        }),
        "fat": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "13.4 g",
        "vitamin": Object.freeze({
            "en": "Rich in vitamin C",
            "tc": "豐富維生素 C"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 221,
            "carbo": 13.4,
            "protein": 0.2,
            "fat": 0,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 13.4,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "cream_soup": Object.freeze({
        "id": "cream_soup",
        "name": Object.freeze({
            "en": "Cream soup",
            "tc": "忌廉湯"
        }),
        "image": "cream_soup.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "217 kJ (52 kcal)",
            "tc": "217 kJ (52 kcal)"
        }),
        "kj": 217,
        "carbo": Object.freeze({
            "en": "8.1 g",
            "tc": "8.1 g"
        }),
        "protein": Object.freeze({
            "en": "1.21 g",
            "tc": "1.21 g"
        }),
        "fat": Object.freeze({
            "en": "1.69 g",
            "tc": "1.69 g"
        }),
        "satfat": "0.53 g",
        "transfat": "",
        "cholesterol": "3 mg",
        "fiber": Object.freeze({
            "en": "0.6 g",
            "tc": "0.6 g"
        }),
        "sugar": "2.13 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 217,
            "carbo": 8.1,
            "protein": 1.21,
            "fat": 1.69,
            "satfat": 0.53,
            "transfat": 0,
            "cholesterol": 3,
            "fiber": 0.6,
            "sugar": 2.13,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "tomato_soup": Object.freeze({
        "id": "tomato_soup",
        "name": Object.freeze({
            "en": "Tomato soup",
            "tc": "蕃茄湯"
        }),
        "image": "tomato_soup.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "251 kJ (60 kcal)",
            "tc": "251 kJ (60 kcal)"
        }),
        "kj": 251,
        "carbo": Object.freeze({
            "en": "13.41 g",
            "tc": "13.41 g"
        }),
        "protein": Object.freeze({
            "en": "1.61 g",
            "tc": "1.61 g"
        }),
        "fat": Object.freeze({
            "en": "0.569 g",
            "tc": "0.569 g"
        }),
        "satfat": "0.155 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.2 g",
            "tc": "1.2 g"
        }),
        "sugar": "8.11 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 251,
            "carbo": 13.41,
            "protein": 1.61,
            "fat": 0.569,
            "satfat": 0.155,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.2,
            "sugar": 8.11,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pumpkin_soup": Object.freeze({
        "id": "pumpkin_soup",
        "name": Object.freeze({
            "en": "Pumpkin soup",
            "tc": "南瓜湯"
        }),
        "image": "pumpkin_soup.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "209 kJ (50 kcal)",
            "tc": "209 kJ (50 kcal)"
        }),
        "kj": 209,
        "carbo": Object.freeze({
            "en": "4.1 g",
            "tc": "4.1 g"
        }),
        "protein": Object.freeze({
            "en": "1.6 g",
            "tc": "1.6 g"
        }),
        "fat": Object.freeze({
            "en": "2.8 g",
            "tc": "2.8 g"
        }),
        "satfat": "0.6 g",
        "transfat": "",
        "cholesterol": "2 mg",
        "fiber": Object.freeze({
            "en": "1 g",
            "tc": "1 g"
        }),
        "sugar": "3.3 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 209,
            "carbo": 4.1,
            "protein": 1.6,
            "fat": 2.8,
            "satfat": 0.6,
            "transfat": 0,
            "cholesterol": 2,
            "fiber": 1,
            "sugar": 3.3,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "water": Object.freeze({
        "id": "water",
        "name": Object.freeze({
            "en": "Water",
            "tc": "水"
        }),
        "image": "water.jpg",
        "natural": "Natural",
        "energy": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "kj": 0,
        "carbo": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "protein": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "fat": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "glass",
            "tc": "杯"
        }),
        "num": Object.freeze({
            "serving": 0,
            "energy": 0,
            "carbo": 0,
            "protein": 0,
            "fat": 0,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "pizza": Object.freeze({
        "id": "pizza",
        "name": Object.freeze({
            "en": "Pizzas",
            "tc": "薄餅"
        }),
        "image": "pizza.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1103 kJ (264 kcal)",
            "tc": "1103 kJ (264 kcal)"
        }),
        "kj": 882,
        "carbo": Object.freeze({
            "en": "32.58 g",
            "tc": "32.58 g"
        }),
        "protein": Object.freeze({
            "en": "11.91 g",
            "tc": "11.91 g"
        }),
        "fat": Object.freeze({
            "en": "9.51 g",
            "tc": "9.51 g"
        }),
        "satfat": "4.22 g",
        "transfat": "",
        "cholesterol": "21 mg",
        "fiber": Object.freeze({
            "en": "1.7 g",
            "tc": "1.7 g"
        }),
        "sugar": "4.02 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "slice",
            "tc": "片"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1103,
            "carbo": 32.58,
            "protein": 11.91,
            "fat": 9.51,
            "satfat": 4.22,
            "transfat": 0,
            "cholesterol": 21,
            "fiber": 1.7,
            "sugar": 4.02,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "hamburger": Object.freeze({
        "id": "hamburger",
        "name": Object.freeze({
            "en": "Hamburgers",
            "tc": "漢堡包"
        }),
        "image": "hamburger.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1233 kJ (295 kcal)",
            "tc": "1233 kJ (295 kcal)"
        }),
        "kj": 986,
        "carbo": Object.freeze({
            "en": "33.71 g",
            "tc": "33.71 g"
        }),
        "protein": Object.freeze({
            "en": "14.74 g",
            "tc": "14.74 g"
        }),
        "fat": Object.freeze({
            "en": "11.24 g",
            "tc": "11.24 g"
        }),
        "satfat": "3.56 g",
        "transfat": "0.57 g",
        "cholesterol": "33 mg",
        "fiber": Object.freeze({
            "en": "1.2 g",
            "tc": "1.2 g"
        }),
        "sugar": "5.8 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "~1 g",
            "tc": "~1 g"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "hamburger",
            "tc": "個"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1233,
            "carbo": 33.71,
            "protein": 14.74,
            "fat": 11.24,
            "satfat": 3.56,
            "transfat": 0.57,
            "cholesterol": 33,
            "fiber": 1.2,
            "sugar": 5.8,
            "vitamin": 0,
            "mineral": 1
        })
    }),
    "applepie": Object.freeze({
        "id": "applepie",
        "name": Object.freeze({
            "en": "Apple pies",
            "tc": "蘋果批"
        }),
        "image": "apple_pie.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "990 kJ (237 kcal)",
            "tc": "990 kJ (237 kcal)"
        }),
        "kj": 792,
        "carbo": Object.freeze({
            "en": "34 g",
            "tc": "34 g"
        }),
        "protein": Object.freeze({
            "en": "1.9 g",
            "tc": "1.9 g"
        }),
        "fat": Object.freeze({
            "en": "11 g",
            "tc": "11 g"
        }),
        "satfat": "3.797 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.6 g",
            "tc": "1.6 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "slice",
            "tc": "片"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 990,
            "carbo": 34,
            "protein": 1.9,
            "fat": 11,
            "satfat": 3.797,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.6,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "frenchfries": Object.freeze({
        "id": "frenchfries",
        "name": Object.freeze({
            "en": "French fries",
            "tc": "薯條"
        }),
        "image": "french_fries.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1226 kJ (292 kcal)",
            "tc": "1226 kJ (292 kcal)"
        }),
        "kj": 981,
        "carbo": Object.freeze({
            "en": "36.6 g",
            "tc": "36.6 g"
        }),
        "protein": Object.freeze({
            "en": "3.65 g",
            "tc": "3.65 g"
        }),
        "fat": Object.freeze({
            "en": "14.53 g",
            "tc": "14.53 g"
        }),
        "satfat": "2.67 g",
        "transfat": "0.11 g",
        "cholesterol": "1 mg",
        "fiber": Object.freeze({
            "en": "3.5 g",
            "tc": "3.5 g"
        }),
        "sugar": "0.28 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1226,
            "carbo": 36.6,
            "protein": 3.65,
            "fat": 14.53,
            "satfat": 2.67,
            "transfat": 0.11,
            "cholesterol": 1,
            "fiber": 3.5,
            "sugar": 0.28,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "ice_cream": Object.freeze({
        "id": "ice_cream",
        "name": Object.freeze({
            "en": "Ice-cream",
            "tc": "雪糕"
        }),
        "image": "ice_cream.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "531 kJ (127 kcal)",
            "tc": "531 kJ (127 kcal)"
        }),
        "kj": 424,
        "carbo": Object.freeze({
            "en": "17.3 g",
            "tc": "17.3 g"
        }),
        "protein": Object.freeze({
            "en": "2.4 g",
            "tc": "2.4 g"
        }),
        "fat": Object.freeze({
            "en": "5.3 g",
            "tc": "5.3 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "6 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 531,
            "carbo": 17.3,
            "protein": 2.4,
            "fat": 5.3,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 6,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "cake": Object.freeze({
        "id": "cake",
        "name": Object.freeze({
            "en": "Cakes with cream",
            "tc": "忌廉蛋糕"
        }),
        "image": "cake.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1455 kJ (348 kcal)",
            "tc": "1455 kJ (348 kcal)"
        }),
        "kj": 1164,
        "carbo": Object.freeze({
            "en": "67.1 g",
            "tc": "67.1 g"
        }),
        "protein": Object.freeze({
            "en": "8.6 g",
            "tc": "8.6 g"
        }),
        "fat": Object.freeze({
            "en": "5.1 g",
            "tc": "5.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "0.4 g",
            "tc": "0.4 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "piece",
            "tc": "件"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1455,
            "carbo": 67.1,
            "protein": 8.6,
            "fat": 5.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0.4,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chocolate": Object.freeze({
        "id": "chocolate",
        "name": Object.freeze({
            "en": "Chocolates",
            "tc": "朱古力"
        }),
        "image": "chocolate.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "2462 kJ (589 kcal)",
            "tc": "2462 kJ (589 kcal)"
        }),
        "kj": 1970,
        "carbo": Object.freeze({
            "en": "53.4 g",
            "tc": "53.4 g"
        }),
        "protein": Object.freeze({
            "en": "4.3 g",
            "tc": "4.3 g"
        }),
        "fat": Object.freeze({
            "en": "40.1 g",
            "tc": "40.1 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1.5 g",
            "tc": "1.5 g"
        }),
        "sugar": "45.4 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 2462,
            "carbo": 53.4,
            "protein": 4.3,
            "fat": 40.1,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1.5,
            "sugar": 45.4,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "candy": Object.freeze({
        "id": "candy",
        "name": Object.freeze({
            "en": "Candies",
            "tc": "糖果"
        }),
        "image": "candy.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1668 kJ (399 kcal)",
            "tc": "1668 kJ (399 kcal)"
        }),
        "kj": 1668,
        "carbo": Object.freeze({
            "en": "90.4 g",
            "tc": "90.4 g"
        }),
        "protein": Object.freeze({
            "en": "0.3 g",
            "tc": "0.3 g"
        }),
        "fat": Object.freeze({
            "en": "3.3 g",
            "tc": "3.3 g"
        }),
        "satfat": "2.065 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "80.5 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 2,
            "energy": 1668,
            "carbo": 90.4,
            "protein": 0.3,
            "fat": 3.3,
            "satfat": 2.065,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 0,
            "sugar": 80.5,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "chip": Object.freeze({
        "id": "chip",
        "name": Object.freeze({
            "en": "Potato chips",
            "tc": "薯片"
        }),
        "image": "chip.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "2265 kJ (542 kcal)",
            "tc": "2265 kJ (542 kcal)"
        }),
        "kj": 1812,
        "carbo": Object.freeze({
            "en": "50.81 g",
            "tc": "50.81 g"
        }),
        "protein": Object.freeze({
            "en": "6.56 g",
            "tc": "6.56 g"
        }),
        "fat": Object.freeze({
            "en": "36.4 g",
            "tc": "36.4 g"
        }),
        "satfat": "4.01 g",
        "transfat": "0.048 g",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "4.4 g",
            "tc": "4.4 g"
        }),
        "sugar": "0.37 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 2265,
            "carbo": 50.81,
            "protein": 6.56,
            "fat": 36.4,
            "satfat": 4.01,
            "transfat": 0.048,
            "cholesterol": 0,
            "fiber": 4.4,
            "sugar": 0.37,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "biscuit": Object.freeze({
        "id": "biscuit",
        "name": Object.freeze({
            "en": "Biscuits",
            "tc": "餅乾"
        }),
        "image": "biscuit.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "1818 kJ (435 kcal)",
            "tc": "1818 kJ (435 kcal)"
        }),
        "kj": 1454,
        "carbo": Object.freeze({
            "en": "71.7 g",
            "tc": "71.7 g"
        }),
        "protein": Object.freeze({
            "en": "9 g",
            "tc": "9 g"
        }),
        "fat": Object.freeze({
            "en": "12.7 g",
            "tc": "12.7 g"
        }),
        "satfat": "",
        "transfat": "",
        "cholesterol": "81 mg",
        "fiber": Object.freeze({
            "en": "1.1 g",
            "tc": "1.1 g"
        }),
        "sugar": "0.2 g",
        "vitamin": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 1818,
            "carbo": 71.7,
            "protein": 9,
            "fat": 12.7,
            "satfat": 0,
            "transfat": 0,
            "cholesterol": 81,
            "fiber": 1.1,
            "sugar": 0.2,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "salad": Object.freeze({
        "id": "salad",
        "name": Object.freeze({
            "en": "Salads",
            "tc": "沙律"
        }),
        "image": "salad.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "125 kJ (30 kcal)",
            "tc": "125 kJ (30 kcal)"
        }),
        "kj": 100,
        "carbo": Object.freeze({
            "en": "7.87 g",
            "tc": "7.87 g"
        }),
        "protein": Object.freeze({
            "en": "0.35 g",
            "tc": "0.35 g"
        }),
        "fat": Object.freeze({
            "en": "0.07 g",
            "tc": "0.07 g"
        }),
        "satfat": "0.009 g",
        "transfat": "",
        "cholesterol": "",
        "fiber": Object.freeze({
            "en": "1 g",
            "tc": "1 g"
        }),
        "sugar": "",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "bowl",
            "tc": "碗"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 125,
            "carbo": 7.87,
            "protein": 0.35,
            "fat": 0.07,
            "satfat": 0.009,
            "transfat": 0,
            "cholesterol": 0,
            "fiber": 1,
            "sugar": 0,
            "vitamin": 0,
            "mineral": 0
        })
    }),
    "dumpling": Object.freeze({
        "id": "dumpling",
        "name": Object.freeze({
            "en": "Dumplings",
            "tc": "餃子"
        }),
        "image": "dumpling.jpg",
        "natural": "Processed",
        "energy": Object.freeze({
            "en": "669 kJ (160 kcal)",
            "tc": "669 kJ (160 kcal)"
        }),
        "kj": 535,
        "carbo": Object.freeze({
            "en": "18 g",
            "tc": "18 g"
        }),
        "protein": Object.freeze({
            "en": "6.7 g",
            "tc": "6.7 g"
        }),
        "fat": Object.freeze({
            "en": "6.7 g",
            "tc": "6.7 g"
        }),
        "satfat": "1.8 g",
        "transfat": "",
        "cholesterol": "69 mg",
        "fiber": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "sugar": "1.5 g",
        "vitamin": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "mineral": Object.freeze({
            "en": "Very little",
            "tc": "非常少"
        }),
        "remark": Object.freeze({
            "en": "",
            "tc": ""
        }),
        "unit": Object.freeze({
            "en": "dumpling",
            "tc": "個"
        }),
        "num": Object.freeze({
            "serving": 1.6,
            "energy": 669,
            "carbo": 18,
            "protein": 6.7,
            "fat": 6.7,
            "satfat": 1.8,
            "transfat": 0,
            "cholesterol": 69,
            "fiber": 0,
            "sugar": 1.5,
            "vitamin": 0,
            "mineral": 0
        })
    }),

    "sardine": Object.freeze({
            "id": "sardine",
            "name": Object.freeze({
                "en": "Sardine",
                "tc": "沙甸魚"
            }),
            "image": "sardine.jpg",
            "natural": "Processed",
            "energy": Object.freeze({
                "en": "1005 kJ (240 kcal)",
                "tc": "1005 kJ (240 kcal)"
            }),
            "kj": 372,
            "carbo": Object.freeze({
                "en": "0 g",
                "tc": "0 g"
            }),
            "protein": Object.freeze({
                "en": "19.8 g",
                "tc": "19.8 g"
            }),
            "fat": Object.freeze({
                "en": "17 g",
                "tc": "17 g"
            }),
            "satfat": "2 g",
            "transfat": "",
            "cholesterol": "158 mg",
            "fiber": Object.freeze({
                "en": "",
                "tc": ""
            }),
            "sugar": "0 g",
            "vitamin": Object.freeze({
                "en": "",
                "tc": "含豐富的維他命D"
            }),
            "mineral": Object.freeze({
                "en": "",
                "tc": "含豐富的鈣"
            }),
            "remark": Object.freeze({
                "en": "",
                "tc": ""
            }),
            "unit": Object.freeze({
                "en": "",
                "tc": "條"
            }),
            "num": Object.freeze({
                "serving": 0.4,
                "energy": 1005,
                "carbo": 0,
                "protein": 19.8,
                "fat": 17,
                "satfat": 2,
                "transfat": 0,
                "cholesterol": 158,
                "fiber": 0,
                "sugar": 0,
                "vitamin": 0,
                "mineral": 0
            })
        }),

        "celery_juice": Object.freeze({
            "id": "celery_juice",
            "name": Object.freeze({
                "en": "Celery Juice",
                "tc": "西芹汁"
            }),
            "image": "celery_juice.jpg",
            "natural": "Natural",
            "energy": Object.freeze({
                "en": "58.6 kJ (14 kcal)",
                "tc": "58.6 kJ (14 kcal)"
            }),
            "kj": 58.6,
            "carbo": Object.freeze({
                "en": "3 g",
                "tc": "3 g"
            }),
            "protein": Object.freeze({
                "en": "0.9 g",
                "tc": "0.9 g"
            }),
            "fat": Object.freeze({
                "en": "0.17 g",
                "tc": "0.17 g"
            }),
            "satfat": "",
            "transfat": "",
            "cholesterol": "",
            "fiber": Object.freeze({
                "en": "1.7 g",
                "tc": "1.7 g"
            }),
            "sugar": "1.27 g",
            "vitamin": Object.freeze({
                "en": "",
                "tc": "含豐富的維他命A、C、K"
            }),
            "mineral": Object.freeze({
                "en": "",
                "tc": "含豐富的鉀"
            }),
            "remark": Object.freeze({
                "en": "",
                "tc": ""
            }),
            "unit": Object.freeze({
                "en": "cup",
                "tc": "杯"
            }),
            "num": Object.freeze({
                "serving": 2.36,
                "energy": 58.6,
                "carbo": 3,
                "protein": 0.9,
                "fat": 0.17,
                "satfat": 0,
                "transfat": 0,
                "cholesterol": 0,
                "fiber": 1.7,
                "sugar": 1.27,
                "vitamin": 0,
                "mineral": 0
            })
        }),

        "sandwich": Object.freeze({
            "id": "sandwich",
            "name": Object.freeze({
                "en": "Sandwich",
                "tc": "三文治"
            }),
            "image": "sandwich.webp",
            "natural": "With processed ingredients",
            "energy": Object.freeze({
                "en": "1087.8 kJ (260 kcal)",
                "tc": "1087.8 kJ (260 kcal)"
            }),
            "kj": 1087.,
            "carbo": Object.freeze({
                "en": "29 g",
                "tc": "29 g"
            }),
            "protein": Object.freeze({
                "en": "12.5 g",
                "tc": "12.5 g"
            }),
            "fat": Object.freeze({
                "en": "10.8 g",
                "tc": "10.8 g"
            }),
            "satfat": "4.8 g",
            "transfat": "",
            "cholesterol": "25 mg",
            "fiber": Object.freeze({
                "en": "1.5 g",
                "tc": "1.5 g"
            }),
            "sugar": "3 g",
            "vitamin": Object.freeze({
                "en": "",
                "tc": ""
            }),
            "mineral": Object.freeze({
                "en": "",
                "tc": ""
            }),
            "remark": Object.freeze({
                "en": "This sandwich includes vegetables, ham, cheese, mayonnaise. You can also add some more vegetables or other ingredients depending on your favourite, but the nutrition may change.",
                "tc": "此三文治內含蔬菜、火腿、芝士、美乃滋，亦可根據個人喜好，適當地添加蔬菜或其他材料，但營養價值可能會有所改變。"
            }),
            "unit": Object.freeze({
                "en": "portion",
                "tc": "份"
            }),
            "num": Object.freeze({
                "serving": 1.55,
                "energy": 1087.8,
                "carbo": 29,
                "protein": 12.5,
                "fat": 10.8,
                "satfat": 4.8,
                "transfat": 0,
                "cholesterol": 25,
                "fiber": 1.5,
                "sugar": 3,
                "vitamin": 0,
                "mineral": 0
            })
        })

});
