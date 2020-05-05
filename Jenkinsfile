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
        /* This builds the actual image */

        app = docker.build("dheeraj/nodeapp")
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }
  }
}
