/* ==============================================================================
   SEMANTIC VERSIONING (SemVer) & NPM PACKAGE MANAGEMENT GUIDE
   ==============================================================================

   WHAT IS SEMANTIC VERSIONING?
   A standard 3-part versioning format: MAJOR . MINOR . PATCH (e.g., 4.18.3)

   ==============================================================================
   1. UNDERSTANDING THE VERSION NUMBERS (X.Y.Z)
   ==============================================================================

   Example: Version 4.18.3

   * PATCH (3rd Part -> 4.18.3)
     - Purpose: Bug fixes, performance improvements, and minor internal fixes.
     - Impact : Backward-compatible. Safe & optional to update.
     - Example: 4.18.2 ➔ 4.18.3

   * MINOR (2nd Part -> 4.18.3)
     - Purpose: New features or new functionality added.
     - Impact : Backward-compatible (Existing code will NOT break).
     - Example: 4.17.8 ➔ 4.18.0

   * MAJOR (1st Part -> 4.18.3)
     - Purpose: Major API changes, refactoring, or breaking updates.
     - Impact : NOT backward-compatible (May break existing application code).
     - Example: 3.18.9 ➔ 4.0.0

   ==============================================================================
   2. VERSION PREFIX SYMBOLS IN package.json
   ==============================================================================

   When installing packages, npm adds special symbols before the version number:

   * Caret Symbol (^) — [RECOMMENDED]
     - Syntax : "^5.2.1"
     - Meaning: Allows automatic updates for MINOR and PATCH versions.
     - Range  : From 5.2.1 up to < 6.0.0 (Will NOT auto-update to v6.0.0).
     - Best For: Staying up to date with non-breaking features and bug fixes.

   * Tilde Symbol (~) — [APPROXIMATE]
     - Syntax : "~5.2.1"
     - Meaning: Allows automatic updates for PATCH versions only.
     - Range  : From 5.2.1 up to < 5.3.0 (Locks the minor version).
     - Best For: Maximum stability when you only want critical bug fixes.

   * Wildcard / Exact Versions:
     - Syntax : "latest"
     - "5.2.1"  : Exact version. Locks the package to this precise version only.
     - "*" / "x": Latest version. Installs the newest release (Dangerous in prod).

   ==============================================================================
   3. NPM COMMANDS GUIDE FOR INSTALLING PACKAGES
   ==============================================================================

   # Install the latest stable version of a package
   npm install express

   # Install a specific version
   npm install express@4.18.3

   # Install a specific major version tag
   npm install express@5

   # Install exact version without caret/tilde (Locks version in package.json)
   npm install express --save-exact

   # Check for outdated packages in your project
   npm outdated

   # Update all packages based on package.json ranges (^ or ~)
   npm update

   ============================================================================== */