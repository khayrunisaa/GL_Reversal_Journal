  
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Compile
                sh 'npm install'
            }
        }
        
        stage('Excute') {
            steps {
                // Compile
                sh 'gauge run specs'
            }
        }
    }
}
