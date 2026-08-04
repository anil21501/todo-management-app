pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning Repository...'
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Check Running Containers') {
            steps {
                bat 'docker ps'
            }
        }

    }
}