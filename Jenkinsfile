pipeline {
    agent any

    environment {
        NODE_VERSION = '18.0.0'
        S3_BUCKET = 'portfolio-website-self'
        AWS_REGION = 'ap-south-1'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/jyotirmoy44/React-Animated-Portfolio.git'
            }
        }
        stage('Set up Node.js') {
            steps {
                // Install and use the specified Node.js version
                sh '''
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
                    node -v
                    npm -v
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        stage('Lint Code') {
            steps {
                // Run ESLint to check for code quality
                sh 'npm run lint'
            }
        }
        stage('Build Application') {
            steps {
                // Build the React Vite project
                sh 'npm run build'
            }
        }
        stage('Deploy to S3') {
            steps {
                withAWS(region: "${AWS_REGION}", credentials: 'aws-credentials-id') {
                    // Upload the build output (`dist/` by default for Vite) to S3
                    s3Upload(bucket: "${S3_BUCKET}", path: '', includePathPattern: '**/*', workingDir: 'dist')
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed. Check logs for details.'
        }
    }
}
