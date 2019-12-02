module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread']
};
