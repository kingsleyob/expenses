module.exports = {
    presets: [
      '@babel/preset-env',        // Transpile modern JavaScript (ES6+)
      '@babel/preset-react',      // Handle React JSX
      '@babel/preset-typescript'  // Handle TypeScript
    ],
    plugins: [
      '@babel/plugin-proposal-private-methods', 
      '@babel/plugin-proposal-private-property-in-object',
      'babel-plugin-transform-runtime',  // For async/await, etc.
    ],
  };
  