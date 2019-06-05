let jarsOfHoney = [];

// to create 100 jars
for (let i = 1; i < 101; i++) {
  AJarOfHoney = {
    number: i,
    isOpen: false
  };
  jarsOfHoney.push(AJarOfHoney);
}

// for toggling jars open and closed, incrementing by 1 (example every 2nd jar, then every 3rd jar etc...)
for (let i = 1; i < 101; i++) {
  jarsOfHoney.forEach(jar => {
    if (jar.number % i === 0) {
      jar.isOpen = !jar.isOpen;
    }
  });
}

// show which jars are open
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
