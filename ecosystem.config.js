module.exports = {
  apps : [{
    script: 'npm run start',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      key: 'test3.pem',
      user : 'ubuntu',
      host : '18.183.181.146',
      ref  : 'origin/main',
      repo : 'https://github.com/gold-chen-five/prisma-test',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
