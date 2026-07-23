// NOTES



/* ==============================================================================
   NODE.JS URL MODULE & STRUCTURE (NOTES)
   ==============================================================================

   WHAT IS A URL?
   URL stands for Uniform Resource Locator. It is the address used to locate 
   resources on the web.

   ANATOMY OF A URL:
   Example: https://mehmoodcoder.dev:8080/blog/posts?category=nodejs&page=2#top
   
   1. Protocol / Scheme: "https:" 
      - Defines how data is transferred (e.g., http, https, ftp).
   2. Hostname / Domain: "mehmoodcoder.dev"
      - The readable web address mapped to an IP address.
   3. Port: "8080"
      - The specific communication channel (Default: 80 for HTTP, 443 for HTTPS).
   4. Host: "mehmoodcoder.dev:8080"
      - Combines hostname + port.
   5. Pathname / Path: "/blog/posts"
      - Points to the specific file or route on the server.
   6. Search / Query String: "?category=nodejs&page=2"
      - Passes extra key-value parameters to the server (starts with '?').
   7. Hash / Anchor: "#top"
      - Points to a specific section inside the webpage.

   ============================================================================== */

import { URL } from 'url'; // Modern WHATWG URL API (Built-in Node.js module)

// -----------------------------------------------------------------------------
// DEMO: PARSING A URL IN NODE.JS
// -----------------------------------------------------------------------------

const sampleUrl = 'https://mehmoodcoder.dev:8080/blog/posts?category=nodejs&page=2#top';

// Create a URL Object
const myUrl = new URL(sampleUrl);

console.log('--- URL COMPONENTS BREAKDOWN ---');
console.log('Full URL: ', myUrl.href);
console.log('Protocol: ', myUrl.protocol); // 'https:'
console.log('Hostname: ', myUrl.hostname); // 'mehmoodcoder.dev'
console.log('Port:     ', myUrl.port);     // '8080'
console.log('Pathname: ', myUrl.pathname); // '/blog/posts'
console.log('Search:   ', myUrl.search);   // '?category=nodejs&page=2'
console.log('Hash:     ', myUrl.hash);     // '#top'


// -----------------------------------------------------------------------------
// WORKING WITH QUERY PARAMETERS (URLSearchParams)
// -----------------------------------------------------------------------------

console.log('\n--- QUERY PARAMETERS ---');

// Get specific query values
console.log('Category:', myUrl.searchParams.get('category')); // 'nodejs'
console.log('Page:    ', myUrl.searchParams.get('page'));     // '2'

// Append new query parameter dynamically
myUrl.searchParams.append('sort', 'asc');
console.log('Updated URL:', myUrl.href);


// URL Breakdown:
// http://     localhost:3000   /users/profile   ?id=102&status=active   #settings
// |           |                |                |                       |
// Protocol    Host (Domain+Port) Pathname       Query String (Params)   Hash/Anchor