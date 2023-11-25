function hello(name) {
    return name ? `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!` : "Hello, World!"
  }