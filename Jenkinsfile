pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'reactapp:v1'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code to the EC2 instance
                checkout scm
                echo "Code checked out on EC2!"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }
    }

    post {
        always {
            echo "CI pipeline finished."
        }
        success {
            echo "Build was a success!"
        }
        failure {
            echo "Build failed. Please check the logs for more details."
        }
    }
}
