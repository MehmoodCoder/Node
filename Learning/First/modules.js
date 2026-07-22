// const math = require('./math') // not recommended

console.log("Hello World with npm init and pakage.json");

// console.log("math : ", math);

// console.log("math : ", math(1,9));


// Now 

// console.log(math.Add(1,9));
// console.log(math.Sub(19,7));



// it is a bit complex as 

// const {Add, Sub} = require("./math") // now we can use this approach to get function directly but it is also older now 

// console.log(Add(8,6));
// console.log(Sub(8,6));




// In 26 we use export and import instead of this 


/* ==============================================================================
   NODE.JS MODULE SYSTEMS SUMMARY (CommonJS vs ES Modules)
   ==============================================================================

   Problem: Node.js has TWO module systems, and mixing them causes syntax errors.

   1. COMMONJS (CJS) - Older / Traditional Node.js Standard
      - Uses: `require()` and `module.exports`
      - Active when:
        a) "type": "commonjs" in package.json (or "type" field is omitted)
        b) File has a `.cjs` extension (e.g., `math.cjs`, `First.cjs`)

   2. ES MODULES (ESM) - Modern JS / Web Standard
      - Uses: `import` and `export`
      - Active when:
        a) "type": "module" in package.json
        b) File has a `.mjs` extension (e.g., `math.mjs`, `First.mjs`)
      - NOTE: In ESM, local file imports REQUIRE the `.js` or `.mjs` file extension!
        Example: `import { Add } from './math.js'` (Not `./math`)


   ------------------------------------------------------------------------------
   HOW TO TEST BOTH IN THE SAME PROJECT (3 Approaches)
   ------------------------------------------------------------------------------

   APPROACH 1: Explicit File Extensions (NO package.json config required)
   ----------------------------------------------------------------------
   - Use `.cjs` extension for CommonJS logic:
       const { add } = require('./math.cjs');
   - Use `.mjs` extension for ES Module logic:
       import { add } from './math.mjs';


   APPROACH 2: Toggle via `package.json`
   ----------------------------------------------------------------------
   Option A (For CommonJS practice):
     In package.json -> "type": "commonjs"
     - Standard `.js` files will use `require` and `module.exports`.
     - Using `import`/`export` will throw a SyntaxError.

   Option B (For ES Modules practice):
     In package.json -> "type": "module"
     - Standard `.js` files will use `import` and `export`.
     - Using `require` will throw: "ReferenceError: require is not defined in ES module scope".


   APPROACH 3: Separate Learning Folders (Best Practice for Notes)
   ----------------------------------------------------------------------
   - `01-commonjs/` -> package.json with "type": "commonjs"
   - `02-esmodules/` -> package.json with "type": "module"

   ============================================================================== */

// --- ESM Example Syntax ---
// import { Add, Sub } from './math.js';
// console.log(Add(8, 5));

// --- CJS Example Syntax ---
// const { add, sub } = require('./math');
// console.log(add(8, 5));



import {Add, Sub} from './math.js'

console.log(Add(8,5));
console.log(Sub(8,5));
