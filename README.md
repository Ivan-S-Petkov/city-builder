 # City Builder App

 The goal of this app is to build city, that dynamically constructs houses based on input data. This feature should offer an intuitive and interactive user experience, enabling users to:
* Customize Houses: Adjust attributes like the color, number of floors, and name of each house.
* Manage Houses: Add new houses, duplicate existing ones, or remove them with ease.
* Display Weather: Add sun, rain, or snow icons and display the current temperature based on the selected location.

  ### Additional Enhancements

  * Add smooth animations/transitions for an enhanced user experience.
  * Implement drag & drop functionality.
  * Allow users to change the color of individual floors.
  * Write and include tests to ensure the reliability of your solution.


## Description

The user is able to perform the following operations for:

Build a new house\
Delete house\
Duplicate house\
Customize house:
  - change color
  - change number of floors
  - change name


## Validations
 House name - should be between 4 and 12 characters. Can not have houses with same names.\
 Number of Floors - should be between 1 and 10 floors.

## Tech Stack
  Next.js\
  Tailwind CSS\
  React Query

## Implementation steps:
 * Create Header - 5min
 * Create aside ssection - 40min
   * Create aside header
   * Create single house input form
   * Create aside "Build a new house" footer
  * Create main section - 120min
    * Create building component
      * Create roof component
      * Create floor component
      * Create ground floor component
        * Create window component
        * Create door component
  * Create array state called "houses" that on mount reads the value from localStorage. - 30min
  * Implement "Build a new house" functionality - 15min
  * Implement delete house functionality - 10min
  * Implement copy house functionality - 15min
  * Implement "Customize house" functionality - 120min

    ### Additional Enhancements

    TO BE FURTHER EVALUATED
    

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
