module.exports = {
  apps : [{
    script: 'src/bot.js',
    node_args: "--experimental-modules",
    env: {
      NODE_ENV: 'development',
      "BOT_TOKEN": "<REDACTED>",
    },
    env_production: {
      NODE_ENV: 'production'
    }
    
  }]
};
