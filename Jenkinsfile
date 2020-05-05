node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("dheeraj/nodeapp")
    }
    
     stage('Execute tests') {
       steps {
           sh 'npm run test'
        }
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }
}
