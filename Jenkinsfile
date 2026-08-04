pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t todo-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t todo-frontend ./frontend'
            }
        }

        stage('Run Backend') {
            steps {
                sh 'docker rm -f todo-backend || true'
                sh 'docker run -d --name todo-backend -p 5000:5000 todo-backend'
            }
        }

        stage('Run Frontend') {
            steps {
                sh 'docker rm -f todo-frontend || true'
                sh 'docker run -d --name todo-frontend -p 3000:3000 todo-frontend'
            }
        }

        stage('Check') {
            steps {
                sh 'docker ps'
            }
        }
    }
}