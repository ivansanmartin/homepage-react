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
          volumeMounts:
          - name: jenkins-docker-cfg
            mountPath: /kaniko/.docker/
        restartPolicy: Never
        volumes:
        - name: jenkins-docker-cfg
          secret:
            secretName: harbor-credentials
      """
    }
  }

  environment {
        APP_NAME = "homepage-react"
        RELEASE = "1.0.0"
        HARBOR_REGISTRY = "192.168.1.200:30002"
        HARBOR_PROJECT = "ivansanmartin"                
        IMAGE_NAME = "${HARBOR_REGISTRY}/${HARBOR_PROJECT}/${APP_NAME}"
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
            /kaniko/executor \
              --dockerfile `pwd`/Dockerfile \
              --context `pwd` \
              --destination=${HARBOR_REGISTRY}/${HARBOR_PROJECT}/${APP_NAME}:${IMAGE_TAG} \
              --destination=${HARBOR_REGISTRY}/${HARBOR_PROJECT}/${APP_NAME}:latest
          '''
        }
      }
    }
  }
}
