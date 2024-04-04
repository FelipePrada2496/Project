module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    // Agrega la siguiente línea para que Babel procese los módulos como ES modules
    sourceType: 'unambiguous'
};
