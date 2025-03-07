pipeline {
  agent {
    kubernetes {
        inheritFrom 'kaniko'
        defaultContainer 'kaniko'
        yaml """
        apiVersion: v1
        kind: Pod
        metadata:
        spec:
          containers:
          - name: kaniko
            image: 'gcr.io/kaniko-project/executor:debug'
            command:
            - sleep
            args:
            - infinity
          restartPolicy: Never
          volumes:
          - name: jenkins-docker-cfg
            projected:
              sources:
              - secret:
                name: docker-credentials
                items:
                  - key: .dockerconfigjson
                    path: config.json
        """
    }
  }

  environment {
        APP_NAME = "homepage-react"
        RELEASE = "1.0.0"
        DOCKER_USER = credentials('docker-username')
        DOCKER_PASS = credentials('docker-password')
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"

    }

  stages {

    stage("Cleanup Workspace") {
      steps {
        cleanWs()
      }
    }

    stage("Checkout from SCM"){
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/ivansanmartin/homepage-react'
            }

        }

    stage('Build & Push with Kaniko') {
      steps {
        container(name: 'kaniko', shell: '/busybox/sh') {
          sh '''#!/busybox/sh

            /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination=${IMAGE_NAME}:${IMAGE_TAG} --destination=${IMAGE_NAME}:latest
          '''
        }
      }
    }
  }
}