pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'reactapp:v1'
    }

    stages {
        stage('Checkout') {
            steps {
                //pull the latest code to EC2 instance
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
        // Uncomment the below section when you're ready to run tests
        /*
        stage('Run Tests') {
            steps {
                echo "Running tests..."
                // Here, you'd run your container in a way that executes your tests. 
                // For a typical React application, it might look something like:
                sh 'docker run ${DOCKER_IMAGE} npm test'
            }
        }
        */
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
