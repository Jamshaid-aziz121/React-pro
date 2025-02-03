/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}

module.exports = {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
    }
};

// module.exports = {
//     plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//     ]
// };

// module.exports = {
//     content: [
//         "./src/**/*.{js,jsx,ts,tsx}",
//         "./node_modules/bootstrap/dist/css/bootstrap.min.css",
//         "./node_modules/@fortawesome/fontawesome-svg-core/styles.css"
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };

// module.exports = {
//     content: [
//       './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as needed
//       './public/index.html',
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };

// module.exports = {
//     plugins: {
//       'postcss-import': {},
//       '@tailwindcss/postcss': {},
//       autoprefixer: {},
//     },
//   };

  module.exports = {
    plugins: {
      'postcss-import': {},
      '@tailwindcss/postcss': {},
      'postcss-preset-env': {
        stage: 3, // Adjust stage as needed
        features: {
          'nesting-rules': true,
        },
      },
      autoprefixer: {},
    },
  };

