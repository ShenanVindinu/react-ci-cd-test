pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t di11soft/reactnodeapp:${BUILD_NUMBER} .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'di11soft-docker-hub-pass', variable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u di11soft --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push di11soft/reactnodeapp:${BUILD_NUMBER}'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
