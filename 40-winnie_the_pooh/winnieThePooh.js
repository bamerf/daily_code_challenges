let jarsOfHoney = [];

for (let i = 1; i < 101; i++) {
  AJarOfHoney = {
    number: i,
    isOpen: false
  };
  jarsOfHoney.push(AJarOfHoney);
}

for (let i = 1; i < 101; i++) {
  jarsOfHoney.forEach(jar => {
    if (jar.number % i === 0) {
      jar.isOpen = !jar.isOpen;
    }
  });
}

const showOpenJars = jars => {
  numOfOpenJars = [];
  jars.forEach(jar => {
    if (jar.isOpen === true) {
      numOfOpenJars.push(jar.number);
    }
  });
  return numOfOpenJars;
};

console.log(showOpenJars(jarsOfHoney));
