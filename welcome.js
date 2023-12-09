function greet(language) {
    let greetings = [
      ["english", "Welcome"],
      ["czech", "Vitejte"],
      ["danish", "Velkomst"],
      ["dutch", "Welkom"],
      ["estonian", "Tere tulemast"],
      ["finnish", "Tervetuloa"],
      ["flemish", "Welgekomen"],
      ["french", "Bienvenue"],
      ["german", "Willkommen"],
      ["irish", "Failte"],
      ["italian", "Benvenuto"],
      ["latvian", "Gaidits"],
      ["lithuanian", "Laukiamas"],
      ["polish", "Witamy"],
      ["spanish", "Bienvenido"],
      ["swedish", "Valkommen"],
      ["welsh", "Croeso"]
    ];
    
      let index = greetings.findIndex(pair => pair[0] === language)
      return index > 0 ? greetings[index][1] : "Welcome"
    }