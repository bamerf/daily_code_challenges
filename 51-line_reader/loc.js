const fs = require('fs')

let contents = fs.readFileSync(`${process.argv[2]}`, `utf8`)

comments = 0
empty = 0
code = 0

lines = contents.split('\n')

lines.forEach(line => {
  if (line == '') {
    empty += 1
  } else if (line.includes('//')) {
    comments += 1
  } else {
    code += 1
  }
});

console.log(`Total line: ${lines.length}`)
console.log(`Code lines: ${code}`)
console.log(`Comment lines: ${comments}`)
console.log(`Blank lines: ${empty}`)