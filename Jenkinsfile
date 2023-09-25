pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Checked out the code!"
            }
        }

        stage('Build') {
            steps {
                echo "Simulating a build step..."
                sh 'echo "Building..."'
            }
        }

        stage('Test') {
            steps {
                echo "Simulating tests..."
                sh 'echo "Testing..."'
            }
        }

        stage('Deploy') {
            steps {
                echo "Simulating a deploy step..."
                sh 'echo "Deploying..."'
            }
        }
    }

    post {
        always {
            echo "This will always run"
        }
        success {
            echo "Build was a success!"
        }
        failure {
            echo "Build failed."
        }
    }
}

