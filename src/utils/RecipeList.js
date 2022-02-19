// https://genshin-impact.fandom.com/wiki/Food

const recipes = {
    "pile-em-up": {
        "name": "\"Pile 'Em Up\"",
        "rarity": 3,
        "location": "Available at Good Hunter (Mondstadt) after AR40"
    },
    "adeptus-temptation": {
        "name": "Adeptus' Temptation",
        "rarity": 5,
        "location": "Chest on Qingyun Peak's floating island, or Nine Pillars of Peace quest"
    },
    "adventurers-breakfast-sandwich": {
        "name": "Adventurers' Breakfast Sandwich",
        "rarity": 3,
        "location": "Mondstadt Rep Lv. 4 reward"
    },
    "almond-tofu": {
        "name": "Almond Tofu",
        "rarity": 2,
        "location": "Somewhere in Wangshu Inn's kitchen"
    },
    "bamboo-shoot-soup": {
        "name": "Bamboo Shoot Soup",
        "rarity": 3,
        "location": "Available from Verr Goldlet (Wangshu Inn, Liyue)"
    },
    "barbatos-ratatouille": {
        "name": "Barbatos Ratatouille",
        "rarity": 3,
        "location": "Available from Vind at Stormbearer Point"
    },
    "berry-mizu-manjuu": {
        "name": "Berry Mizu Manjuu",
        "rarity": 2,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "bird-egg-sushi": {
        "name": "Bird Egg Sushi",
        "rarity": 2,
        "location": "Available at Shimura's (Inazuma)"
    },
    "black-back-perch-stew": {
        "name": "Black-Back Perch Stew",
        "rarity": 3,
        "location": "Available at Wanmin Restaurant (Liyue) after AR30"
    },
    "bountiful-year": {
        "name": "Bountiful Year",
        "rarity": 4,
        "location": "Event exclusive, now unobtainable (Fleeting Colors in Flight)"
    },
    "braised-meat": {
        "name": "Braised Meat",
        "rarity": 3,
        "location": "Event exclusive, now unobtainable (Moonlight Merriment)"
    },
    "butter-crab": {
        "name": "Butter Crab",
        "rarity": 4,
        "location": "Inazuma Rep Lv. 7 reward"
    },
    "calla-lily-seafood-soup": {
        "name": "Calla Lily Seafood Soup",
        "rarity": 3,
        "location": "Available at Good Hunter (Mondstadt) after AR30"
    },
    "chicken-tofu-pudding": {
        "name": "Chicken Tofu Pudding",
        "rarity": 4,
        "location": "Reward from World Quest \"A Dish Beyond Mortal Ken\""
    },
    "chicken-mushroom-skewer": {
        "name": "Chicken-Mushroom Skewer",
        "rarity": 1,
        "location": "Default recipe"
    },
    "chili-mince-cornbread-buns": {
        "name": "Chili-Mince Cornbread Buns",
        "rarity": 4,
        "location": "Event exclusive, now unavailable (Moonlight Merriment)"
    },
    "cold-cut-platter": {
        "name": "Cold Cut Platter",
        "rarity": 3,
        "location": "Reward from one-time domain \"Eagle's Gate\""
    },
    "come-and-get-it": {
        "name": "Come and Get It",
        "rarity": 3,
        "location": "Available at Wanmin Restaurant (Liyue) after AR40"
    },
    "crab-roe-kourayaki": {
        "name": "Crab Roe Kourayaki",
        "rarity": 2,
        "location": "Reward from World Quest \"The Gourmet Supremos: The Seashore Strider\""
    },
    "crab-roe-tofu": {
        "name": "Crab Roe Tofu",
        "rarity": 2,
        "location": "Available at Wanmin Restaurant (Liyue) after AR22"
    },
    "crab-ham-and-veggie-bake": {
        "name": "Crab, Ham & Veggie Bake",
        "rarity": 3,
        "location": "Reward from certain version of Commission \"Food Delivery\""
    },
    "cream-stew": {
        "name": "Cream Stew",
        "rarity": 2,
        "location": "Available at Good Hunter (Mondstadt) after AR25"
    },
    "crispy-potato-shrimp-platter": {
        "name": "Crispy Potato Shrimp Platter",
        "rarity": 3,
        "location": "Available at Good Hunter (Mondstadt) after AR30"
    },
    "crystal-shrimp": {
        "name": "Crystal Shrimp",
        "rarity": 2,
        "location": "Available at Wanmin Restaurant (Liyue) after AR20"
    },
    "cured-pork-dry-hotpot": {
        "name": "Cured Pork Dry Hotpot",
        "rarity": 3,
        "location": "Available at Liuli Pavilion (Liyue)"
    },
    "dragon-beard-noodles": {
        "name": "Dragon Beard Noodles",
        "rarity": 3,
        "location": "Available at Wanmin Restaurant (Liyue)"
    },
    "dry-braised-salted-fish": {
        "name": "Dry-Braised Salted Fish",
        "rarity": 1,
        "location": "Available from Ryouko (Ritou, Inazuma)"
    },
    "egg-roll": {
        "name": "Egg Roll",
        "rarity": 1,
        "location": "Available at Shimura's (Inazuma)"
    },
    "fishermans-toast": {
        "name": "Fisherman's Toast",
        "rarity": 2,
        "location": "Default recipe"
    },
    "five-pickled-treasures": {
        "name": "Five Pickled Treasures",
        "rarity": 3,
        "location": "Available at Shimura's (Inazuma)"
    },
    "flaming-red-bologonese": {
        "name": "Flaming Red Bologonese",
        "rarity": 2,
        "location": "Available at Good Hunter (Mondstadt) after AR20"
    },
    "fragrant-mashed-potatoes": {
        "name": "Fragrant Mashed Potatoes",
        "rarity": 3,
        "location": "Event exclusive, now unavailable (Outland Gastronomy login event)"
    },
    "fried-radish-balls": {
        "name": "Fried Radish Balls",
        "rarity": 2,
        "location": "Default recipe"
    },
    "fullmoon-egg": {
        "name": "Fullmoon Egg",
        "rarity": 3,
        "location": "Available at Xinyue Kiosk (Liyue)"
    },
    "golden-chicken-burger": {
        "name": "Golden Chicken Burger",
        "rarity": 3,
        "location": "Event exclusive, now unavailable (Outland Gastronomy login event)"
    },
    "golden-crab": {
        "name": "Golden Crab",
        "rarity": 4,
        "location": "Reward from Mona's Story Quest Act I"
    },
    "golden-fried-chicken": {
        "name": "Golden Fried Chicken",
        "rarity": 4,
        "location": "Event exclusive, now unavailable (Outland Gastronomy login event)"
    },
    "golden-shrimp-balls": {
        "name": "Golden Shrimp Balls",
        "rarity": 3,
        "location": "Liyue Reputation Lv. 1 reward"
    },
    "goulash": {
        "name": "Goulash",
        "rarity": 2,
        "location": "Reward from World Quest \"Ah, Fresh Meat!\""
    },
    "grilled-tiger-fish": {
        "name": "Grilled Tiger Fish",
        "rarity": 1,
        "location": "Available at Wanmin Restaurant (Liyue) after AR10"
    },
    "grilled-unagi-fillet": {
        "name": "Grilled Unagi Fillet",
        "rarity": 2,
        "location": "Available at Shimura's (Inazuma)"
    },
    "imported-poultry": {
        "name": "Imported Poultry",
        "rarity": 3,
        "location": "Reward from World Quest \"Gazing Three Thousand Miles Away\""
    },
    "invigorating-kitty-meal": {
        "name": "Invigorating Kitty Meal",
        "rarity": 3,
        "location": "Reward from World Quest Series \"Neko is a Cat\""
    },
    "jade-parcels": {
        "name": "Jade Parcels",
        "rarity": 4,
        "location": "Reward from Xiangling's Story Quest Act I"
    },
    "jewelry-soup": {
        "name": "Jewelry Soup",
        "rarity": 2,
        "location": "Reward from World Quest \"Custodian of Clouds\""
    },
    "jueyun-chili-chicken": {
        "name": "Jueyun Chili Chicken",
        "rarity": 2,
        "location": "Available at Wanmin Restaurant (Liyue) after AR20"
    },
    "jueyun-guoba": {
        "name": "Jueyun Guoba",
        "rarity": 3,
        "location": "Available from Ms. Bai (Qingce Village, Liyue)"
    },
    "konda-cuisine": {
        "name": "Konda Cuisine",
        "rarity": 3,
        "location": "Inazuma Reputation Lv. 1 reward"
    },
    "lotus-flower-crisp": {
        "name": "Lotus Flower Crisp",
        "rarity": 3,
        "location": "Liyue Reputation Lv. 4 reward"
    },
    "lotus-seed-and-bird-egg-soup": {
        "name": "Lotus Seed and Bird Egg Soup",
        "rarity": 2,
        "location": "Available from Bubu Pharmacy (Liyue)"
    },
    "matsutake-meat-rolls": {
        "name": "Matsutake Meat Rolls",
        "rarity": 2,
        "location": "Reward from World Quest \"Custodian of Clouds\""
    },
    "mint-jelly": {
        "name": "Mint Jelly",
        "rarity": 1,
        "location": "Available from Good Hunter (Mondstadt) after AR15"
    },
    "mint-salad": {
        "name": "Mint Salad",
        "rarity": 2,
        "location": "Available from Wanmin Restaurant (Liyue)"
    },
    "minty-meat-rolls": {
        "name": "Minty Meat Rolls",
        "rarity": 3,
        "location": "Available from Wanmin Restaurant (Liyue)"
    },
    "miso-soup": {
        "name": "Miso Soup",
        "rarity": 1,
        "location": "Available from Shimura's (Inazuma)"
    },
    "mixed-yakisoba": {
        "name": "Mixed Yakisoba",
        "rarity": 2,
        "location": "Available from Shimura's (Inazuma)"
    },
    "mondstadt-grilled-fish": {
        "name": "Mondstadt Grilled Fish",
        "rarity": 1,
        "location": "Default recipe"
    },
    "mondstadt-hash-brown": {
        "name": "Mondstadt Hash Brown",
        "rarity": 3,
        "location": "Reward from one-time domain \"Temple of the Wolf\""
    },
    "moon-pie": {
        "name": "Moon Pie",
        "rarity": 4,
        "location": "Mondstadt Reputation Lv. 7 reward"
    },
    "mora-meat": {
        "name": "Mora Meat",
        "rarity": 1,
        "location": "Reward from World Quest \"Custodian of Clouds\""
    },
    "more-and-more": {
        "name": "More-and-More",
        "rarity": 3,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "mushroom-pizza": {
        "name": "Mushroom Pizza",
        "rarity": 3,
        "location": "Chest in Stormterror's Lair (Mondstadt) or reward from Kamisato Ayaka's Story Quest Act I"
    },
    "noodles-with-mountain-delicacies": {
        "name": "Noodles with Mountain Delicacies",
        "rarity": 2,
        "location": "Available from Ms. Bai (Qingce Village, Liyue)"
    },
    "northern-apple-stew": {
        "name": "Northern Apple Stew",
        "rarity": 3,
        "location": "Mondstadt Reputation Lv. 1 reward"
    },
    "northern-smoked-chicken": {
        "name": "Northern Smoked Chicken",
        "rarity": 2,
        "location": "Chest in Stormterror's Lair (Mondstadt)"
    },
    "omelette-rice": {
        "name": "Omelette Rice",
        "rarity": 3,
        "location": "Available at Shimura's (Inazuma)"
    },
    "oncidium-tofu": {
        "name": "Oncidium Tofu",
        "rarity": 3,
        "location": "Event exclusive, now unavailable (Moonlight Merriment)"
    },
    "onigiri": {
        "name": "Onigiri",
        "rarity": 2,
        "location": "Reward from World Quest \"The Gourmet Supremos: The Deep Divers\""
    },
    "qingce-stir-fry": {
        "name": "Qingce Stir Fry",
        "rarity": 3,
        "location": "Available from Ms. Bai (Qingce Village, Liyue)"
    },
    "radish-veggie-soup": {
        "name": "Radish Veggie Soup",
        "rarity": 1,
        "location": "Default recipe"
    },
    "radish-and-fish-stew": {
        "name": "Radish and Fish Stew",
        "rarity": 2,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "rice-buns": {
        "name": "Rice Buns",
        "rarity": 1,
        "location": "Available at Wanmin Restaurant (Liyue)"
    },
    "rice-cake-soup": {
        "name": "Rice Cake Soup",
        "rarity": 3,
        "location": "Inazuma Reputation Lv. 4 reward"
    },
    "rice-pudding": {
        "name": "Rice Pudding",
        "rarity": 3,
        "location": "Event exclusvie, now unavailable (Moonlight Merriment)"
    },
    "sakura-mochi": {
        "name": "Sakura Mochi",
        "rarity": 3,
        "location": "Reward from Kamisato Ayaka's Story Quest Act I"
    },
    "sakura-shrimp-crackers": {
        "name": "Sakura Shrimp Crackers",
        "rarity": 3,
        "location": "Available at Shimura's (Inazuma)"
    },
    "sakura-tempura": {
        "name": "Sakura Tempura",
        "rarity": 3,
        "location": "Reward from World Quest \"Gourmet Supremos, Assemble!\""
    },
    "sangayaki": {
        "name": "Sangayaki",
        "rarity": 2,
        "location": "Available at Shimura's (Inazuma)"
    },
    "sashimi-platter": {
        "name": "Sashimi Platter",
        "rarity": 4,
        "location": "Reward from World Quest \"The Gourmet Supremos: The Importance of Eating Well\""
    },
    "satisfying-salad": {
        "name": "Satisfying Salad",
        "rarity": 2,
        "location": "Default recipe"
    },
    "sauteed-matsutake": {
        "name": "Sautéed Matsutake",
        "rarity": 3,
        "location": "Available at Good Hunter (Mondstadt) after AR35"
    },
    "soba-noodles": {
        "name": "Soba Noodles",
        "rarity": 1,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "squirrel-fish": {
        "name": "Squirrel Fish",
        "rarity": 3,
        "location": "Available at Wanmin Restaurant (Liyue) after AR35"
    },
    "steak": {
        "name": "Steak",
        "rarity": 1,
        "location": "Default recipe"
    },
    "sticky-honey-roast": {
        "name": "Sticky Honey Roast",
        "rarity": 3,
        "location": "Reward from Jean Story Quest Act I or a variant of the Food Delivery commission"
    },
    "stir-fried-fillet": {
        "name": "Stir-Fried Fillet",
        "rarity": 1,
        "location": "Chest on Mt. Tianheng"
    },
    "stir-fried-fish-noodles": {
        "name": "Stir-Fried Fish Noodles",
        "rarity": 2,
        "location": "Available at Xinyue Kiosk (Liyue)"
    },
    "stir-fried-shrimp": {
        "name": "Stir-Fried Shrimp",
        "rarity": 3,
        "location": "Available from Verr Goldlet (Wangshu Inn, Liyue)"
    },
    "stone-harbor-delicacies": {
        "name": "Stone Harbor Delicacies",
        "rarity": 2,
        "location": "Available at Liuli Pavilion (Liyue)"
    },
    "sunshine-sprat": {
        "name": "Sunshine Sprat",
        "rarity": 3,
        "location": "Reward from Albedo's Story Quest Act I"
    },
    "sweet-madame": {
        "name": "Sweet Madame",
        "rarity": 2,
        "location": "Default recipe"
    },
    "sweet-shrimp-sushi": {
        "name": "Sweet Shrimp Sushi",
        "rarity": 1,
        "location": "Available at Shimura's (Inazuma)"
    },
    "taiyaki": {
        "name": "Taiyaki",
        "rarity": 3,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "tea-break-pancake": {
        "name": "Tea Break Pancake",
        "rarity": 2,
        "location": "Available at Good Hunter (Mondstadt) after AR15"
    },
    "teyvat-fried-egg": {
        "name": "Teyvat Fried Egg",
        "rarity": 1,
        "location": "Default recipe"
    },
    "tianshu-meat": {
        "name": "Tianshu Meat",
        "rarity": 4,
        "location": "Liyue Reputation Lv. 7 reward"
    },
    "tonkotsu-ramen": {
        "name": "Tonkotsu Ramen",
        "rarity": 3,
        "location": "Available at Shimura's (Inazuma)"
    },
    "tri-flavored-skewer": {
        "name": "Tri-Flavored Skewer",
        "rarity": 3,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "tricolor-dango": {
        "name": "Tricolor Dango",
        "rarity": 3,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "triple-layered-consomme": {
        "name": "Triple-Layered Consommé",
        "rarity": 3,
        "location": "Available at Wanmin Restaurant (Liyue) after AR25"
    },
    "tuna-sushi": {
        "name": "Tuna Sushi",
        "rarity": 2,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "udon-noodles": {
        "name": "Udon Noodles",
        "rarity": 2,
        "location": "Available at Shimura's (Inazuma)"
    },
    "unagi-chazuke": {
        "name": "Unagi Chazuke",
        "rarity": 3,
        "location": "Available at Shimura's (Inazuma)"
    },
    "universal-peace": {
        "name": "Universal Peace",
        "rarity": 3,
        "location": "Available at Wanmin Restaurant (Liyue) after AR30"
    },
    "vegetarian-abalone": {
        "name": "Vegetarian Abalone",
        "rarity": 2,
        "location": "Available from Verr Goldlet (Wangshu Inn, Liyue)"
    },
    "wakatakeni": {
        "name": "Wakatakeni",
        "rarity": 2,
        "location": "Available at Kiminami Restaurant (Inazuma)"
    },
    "zhongyuan-chop-suey": {
        "name": "Zhongyuan Chop Suey",
        "rarity": 3,
        "location": "Reward from World Quest \"Old Tastes Die Hard\""
    }
}

export default recipes