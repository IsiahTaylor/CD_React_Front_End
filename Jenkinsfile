pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'reactapp:v1'
    }

    stages {
        stage('Checkout') {
            steps {
                /* Pull the latest code to EC2 instance */
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

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                /* For a typical React application using @testing-library/react: */
                sh 'docker run ${DOCKER_IMAGE} npm test -- src/App.test.tsx'
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
