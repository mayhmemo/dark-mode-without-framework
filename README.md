# DMWF - Dark Mode Without Framework
A simple dark mode with Tailwind CSS that works only with HTML, CSS and JS

<p align="center">
  <img align="center" alt="Coding" width="100%" src="https://cdn.discordapp.com/attachments/718883307441487922/1016195925653327884/darkmode.gif">
  <a href="https://darkmode.mayhm.repl.co">Demo</a>
</p>

## Usability
I've seen a lot of tutorials teaching how to make Dark Mode using Tailwind with Frameworks or Node, but i wanted a simple functional Dark Mode for a single or few pages. So i made this project.
**I DON'T recommend this if you want to make a scalable project.**

## How to use
Download 'darkmode.js' file and call it in HTML head with Tailwind and Flowbite ones too, like the code below:
```html
<head>
    <script src="/darkmode.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
</head>
```

Now put this script below the previous code to make Tailwind identify dark mode by "class":
```html
  <script>
      tailwind.config = {
          darkMode: 'class',
      }
  </script>
```

Before the ```<\body>``` code, put Flowbite script for making dropdowns work propely:
```html
    <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
</body>
```

Now put an ```onload``` at ```<body>``` tag like below calling the functions:
```html
<body onload="darkbtn();onloads();variable();">
```
*'darkbtn' is not used if you want a no-icon button.*

And for the final touch, let's put the ```onclick``` at the button:
```html
  <button id="theme-toggle" type="button"
      class="md:ml-5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      onclick="dark();">
      <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
  </button>
```
*Here we are using a pre-made button with sun and moon icons that change when clicking, but you can use 'darkmodetwo.js' for a no-icon button.*

Now it's perfectly working and you can use it in your project!

## To-do list
- Script code that works without need of 'onload' and 'onclick' on HTML;
- Cleaner code (maybe);
- How it works guide.

## References
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com)
- [Implementing Dark Mode Using Tailwind CSS](https://www.section.io/engineering-education/implementing-dark-mode-using-tailwind-css/)
