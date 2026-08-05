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

        stage('Deploy to EC2') {
            steps {
                sh '''
                ssh -i /root/a.pem -o StrictHostKeyChecking=no ubuntu@18.233.164.82 "
                cd /home/ubuntu/todo-management-app &&
                git pull &&
                docker compose down &&
                docker compose up -d --build
                "
                '''
            }
        }

        stage('Check') {
            steps {
                sh 'echo "Deployment completed successfully"'
            }
        }
    }
}