node(){
  stage('Prepare'){
    checkout scm
  }
  
  stage('Build'){
    sh "npm install"
    sh "npm start"
    sh "pm2 start src/bot.js"
  }
}
