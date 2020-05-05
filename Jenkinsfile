def app
pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Clone repository') {
      steps {
        checkout scm
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }
    
    stage('Build image') {
       steps {
            echo 'Starting to build docker image'
            script {
                app = docker.build("dheeraj/nodeapp")
            }
       }
    }

    stage('Test image') {
        steps {
            echo 'Testing docker image'
            script {
                app.inside {
                    echo "Testing passed"
                }
            }
       }
    }
  }
}
