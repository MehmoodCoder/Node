/* ==============================================================================
   NODE.JS EVENT LOOP, FS MODULE & THREAD POOL (SIMPLE NOTES)
   ==============================================================================

   KEY CONCEPTS:
   1. Single Thread: Node.js executes JavaScript on 1 main thread.
   2. Libuv Thread Pool: Background workers for heavy tasks (File System, Crypto).
      - Default Thread Pool Size = 4 threads.
      - Can be changed using: process.env.UV_THREADPOOL_SIZE = 8
   3. Synchronous (Sync): Blocks the main thread. Execution waits until finished.
   4. Asynchronous (Async): Non-blocking. Offloaded to background threads.

   ============================================================================== */

// const fs = require('fs'); // old way

import fs from 'fs'

// -----------------------------------------------------------------------------
// 1. SYNCHRONOUS CODE (Runs first, line by line)
// -----------------------------------------------------------------------------
console.log("1. Start of script");

// Sync File Read (BLOCKING)
// The main thread STOPS here until the file is fully read.
const syncData = fs.readFileSync('./test.txt', 'utf8');
console.log("2. Synchronous file read complete");


// -----------------------------------------------------------------------------
// 3. ASYNCHRONOUS CODE (Offloaded to Libuv Thread Pool)
// -----------------------------------------------------------------------------
// Async File Read (NON-BLOCKING)
// Offloaded to 1 of the 4 background threads. Main thread moves to the next line immediately.
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("5. Async file read complete (Handled by Thread Pool)");
});


// -----------------------------------------------------------------------------
// 4. TIMERS & MICROTASKS
// -----------------------------------------------------------------------------
// Timers phase callback
setTimeout(() => {
    console.log("4. setTimeout completed (Timer phase)");
}, 0);

// Microtask queue (Runs immediately after current synchronous code finishes)
process.nextTick(() => {
    console.log("3. process.nextTick executed (Microtask)");
});


// End of synchronous execution
console.log("End of script");


/* ==============================================================================
   EXPECTED OUTPUT IN TERMINAL:
   ------------------------------------------------------------------------------
   1. Start of script
   2. Synchronous file read complete
   End of script
   3. process.nextTick executed (Microtask)
   4. setTimeout completed (Timer phase)
   5. Async file read complete (Handled by Thread Pool)
   ============================================================================== */




   import os from 'os'

   console.log(os.cpus().length); // 8 means that I change my thread to 8
   