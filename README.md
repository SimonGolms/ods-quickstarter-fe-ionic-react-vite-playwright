# OpenDevStack - Quickstarter - Frontend Ionic React

> An advanced OpenDevStack Frontend Quickstarter to build mobile and desktop apps with the ionic framework and react.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge&cacheSeconds=2592000)
![Prerequisite Npm](https://img.shields.io/badge/npm-%3E%3D8.5.5-blue.svg?style=for-the-badge)
![Prerequisite Node](https://img.shields.io/badge/node-%3E%3D16.15-blue.svg?style=for-the-badge)

## Features

- Ionic/React with Typescript for building cross-platform native and web app
- Single-Sign-On (SSO) for user authentication and authorization with Azure Active Directory
- OpenDevStack (ODS) CI/CD configuration out of the box with the basic setup for Docker (incl. injecting Runtime Variables), Jenkins (incl. feature environments, release-manager rollout) and OpenShift (managed with Helm)
  - Ionic Appflow (coming soon)
- Setup for ESlint, Stylelint, Prettier, commitlint, Husky (git hooks) and semantic versioning for a better developer experience

---

<!-- Feel free to delete the section 'Provision Quickstarter' after you successfully provisioned the quickstarter -->

## Provision Quickstarter

### Prerequisites

- A `ODS@4.x` project with the example project id: `foo`.
- In an OpenShift 4 cluster used as `DEV` instance, the following projects:
  - `foo-cd`
  - `foo-dev`
  - `foo-test`
- In an OpenShift 4 cluster used as `PROD` instance, the following projects:

  - `foo-prod`

- Having `helm` and `oc` cli installed and configured.

  ```sh
  # Check helm version
  helm version

  # Check oc version
  oc version
  ```

- A Jenkins agent with Node.js and minimum version `16.x`. In case it does not exist yet, it can be easily created with the following commands:

  ```sh
  # Login
  oc login --server=https://api.OPENSHIFT_DOMAIN_DEV:6443 --token=123...456

  # Switch project
  oc project foo-cd

  # Provision jenkins-agent-nodejs-16
  oc process -f https://raw.githubusercontent.com/SimonGolms/ods-jenkins-agent-nodejs/main/jenkins-agent-nodejs-16-template.yaml | oc create -f -
  ```

  For more information about the Jenkins agent, see: <https://github.com/SimonGolms/ods-jenkins-agent-nodejs>

### Setup Quickstarter

1. Get Source Code

   ```sh
   # Clone Repository
   git clone https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react.git
   cd ods-quickstarter-fe-ionic-react

   # OR download from GitHub
   curl --location --remote-name https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/archive/refs/heads/main.tar.gz && \
   tar -xvzf main.tar.gz && \
   rm main.tar.gz
   cd ods-quickstarter-fe-ionic-react-main
   ```

2. Set your Project Id (e.g. `foo`) for the Quickstarter

   ```sh
   # Search all the files in the current folder’s subdirectories and replace with the given string. This will also include any hidden files.
   # IMPORTANT: Keep your project id in lowercase.
   find . -type f -exec sed --expression 's/PROJECTID/foo/g' --in-place {} +
   ```

3. Set your Component Id (e.g. `app`) for the Quickstarter

   ```sh
   # Search all the files in the current folder’s subdirectories and replace with the given string. This will also include any hidden files.
   # IMPORTANT: Keep your component id in lowercase.
   find . -type f -exec sed --expression 's/COMPONENTID/app/g' --in-place {} +
   ```

4. Set your OpenShift domain url

   ```sh
   find . -type f -exec sed --expression 's/OPENSHIFT_DOMAIN_DEV/dev.ocp.company.com/g' --in-place {} +
   find . -type f -exec sed --expression 's/OPENSHIFT_DOMAIN_PROD/prod.ocp.company.com/g' --in-place {} +
   ```

5. Set your Bitbucket domain url

   ```sh
   find . -type f -exec sed --expression 's/BITBUCKET_DOMAIN/bitbucket.company.com/g' --in-place {} +
   ```

6. Remove template resources

   ```sh
   rm -rf .git .github CHANGELOG.md
   ```

### Setup Bitbucket Code Repository

1. Create BitBucket Repository

   - Replace `USER@COMPANY.COM` with an authorized (administrative) user with access to the Bitbucket project

   ```sh
   # For security reasons (e.g. terminal history) --user 'USERNAME:PASSWORD' should be avoided.
   # Instead, a prompt will show up for the password if --user 'USERNAME' is used!
   curl --data '{"defaultBranch":"master","description":"📱 Repo of the app from PROJECTID build with ionic and react","name":"PROJECTID-COMPONENTID"}' \
     --header "Content-Type: application/json" \
     --request POST \
     --url https://BITBUCKET_DOMAIN/rest/api/1.0/projects/PROJECTID/repos/ \
     --user 'USER@COMPANY.COM'
   ```

2. Get trigger secret from the webhook proxy

   ```sh
   # Login to OpenShift dev instance
   oc login --server=https://api.OPENSHIFT_DOMAIN_DEV:6443 --token=123...456

   # Get trigger secret 'webhook-proxy' in plaintext
   oc get secret webhook-proxy --namespace PROJECTID-cd --output jsonpath='{.data.trigger-secret}' | base64 -d | xargs
   ```

3. Create Webhook

   - Replace `TRIGGER_SECRET` with the obtained trigger secret from step 1.
   - Replace `USER@COMPANY.COM` with an authorized (administrative) user with access to the Bitbucket project

   ```sh
   # For security reasons (e.g. terminal history) --user 'USERNAME:PASSWORD' should be avoided.
   # Instead, a prompt will show up for the password if --user 'USERNAME' is used!
   curl --data '{"active":true,"configuration":{},"events":["pr:merged","repo:refs_changed","pr:declined","pr:deleted"],"name":"Jenkins","url":"https://webhook-proxy-PROJECTID-cd.apps.OPENSHIFT_DOMAIN_DEV?trigger_secret=TRIGGER_SECRET"}' \
     --header "Content-Type: application/json" \
     --request POST \
     --url https://BITBUCKET_DOMAIN/rest/api/1.0/projects/PROJECTID/repos/PROJECTID-COMPONENTID/webhooks \
     --user 'USER@COMPANY.COM'
   ```

4. Publish to Bitbucket Code Repository

   ```sh
   git init --initial-branch=master
   git add --all
   git commit -m "chore: initial version"
   git remote add origin https://BITBUCKET_DOMAIN/scm/PROJECTID/PROJECTID-COMPONENTID.git
   # Before you push your first commit, make sure that no credentials are in the README as a result of the previous steps.
   # You might also delete unnecessary content in this context.
   git push -u origin HEAD:master
   ```

---

## Technology Stack

### Programming Language

[![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![npm](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Node.JS](https://img.shields.io/badge/node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Markdown](https://img.shields.io/badge/markdown-000000.svg?style=for-the-badge&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)

### Frameworks and libraries

[![Ionic](https://img.shields.io/badge/ionic-3880FF.svg?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![React](https://img.shields.io/badge/react-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![RTK Query](https://img.shields.io/badge/RTK%20Query-593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/rtk-query/overview)
[![Azure](https://img.shields.io/badge/Azure%20SSO-0078D4.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)
[![msal-react](https://img.shields.io/badge/MSAL%20React-5E5E5E.svg?style=for-the-badge&logo=microsoft&logoColor=white)](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)

**Testing**:

[![React Testing Library](https://img.shields.io/badge/React--Testing--Library-E33332.svg?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)
[![Jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)

**Tracking**:

N/A

**Linter**:

[![ESLint](https://img.shields.io/badge/ESlint-4B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/stylelint-263238.svg?style=for-the-badge&logo=stylelint&logoColor=white)](https://stylelint.io/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Commitlint](https://img.shields.io/badge/commitlint-121212.svg?style=for-the-badge&&logoColor=black)](https://commitlint.js.org/)

**Compiler**:

[![react-scripts](<https://img.shields.io/badge/react--scripts%20(CRA)-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB>)](https://create-react-app.dev/)

### CI/CD

[![OpenDevStack](https://img.shields.io/badge/OpenDevStack-222.svg?style=for-the-badge&logoColor=white)](https://www.opendevstack.org/)
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939.svg?style=for-the-badge&logo=jenkins&logoColor=white)](https://nginx.org/)
[![Helm](https://img.shields.io/badge/Helm-0F1689.svg?style=for-the-badge&logo=helm&logoColor=white)](https://www.opendevstack.org/)
[![Semantic Release](https://img.shields.io/badge/Semantic%20Release-494949.svg?style=for-the-badge&logo=semantic-release&logoColor=white)](https://semantic-release.gitbook.io/semantic-release/)
[![Husky](https://img.shields.io/badge/%F0%9F%90%B6%20Husky-42b983.svg?style=for-the-badge)](https://typicode.github.io/husky/#/)

### Hosting

[![RedHat OpenShift v4.11](https://img.shields.io/badge/RedHat%20OpenShift-EE0000.svg?style=for-the-badge&logo=red-hat-open-shift&logoColor=white)](https://docs.openshift.com/container-platform/4.10/welcome/index.html)
[![Docker](https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639.svg?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

### Dev Environment

[![WSL2](https://img.shields.io/badge/Windows%20Subsystem%20for%20Linux%20%28WSL2%29-4D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white)](https://docs.microsoft.com/en-us/windows/wsl/)

**IDEs/Editors**:

[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

### Version Control

[![Git](https://img.shields.io/badge/git-F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/doc)
[![Bitbucket](https://img.shields.io/badge/bitbucket-0047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white)](https://bitbucket.org/)

### Social

[![MS Teams](https://img.shields.io/badge/microsoft%20teams-6264a7.svg?style=for-the-badge&logo=microsoft-teams&logoColor=white)](https://www.microsoft.com/en-us/microsoft-teams/)

---

## Prerequisites

1. **Azure App Registration**

   Make sure you have an existing Azure App registry that has a single-page application (SPA) redirect to `http://localhost/`.

   Ideally you have one Azure App registry per environment (`dev`/`test`/`prod`) with at least the following SPA redirects:

   - Dev: `http://localhost/`, `https://PROJECTID-COMPONENTID-dev.apps.OPENSHIFT_DOMAIN_DEV`
   - Test: `http://localhost/`, `https://PROJECTID-COMPONENTID-test.apps.OPENSHIFT_DOMAIN_DEV`
   - Prod: `http://localhost/`, `https://PROJECTID-COMPONENTID.apps.OPENSHIFT_DOMAIN_PROD`

   Update the following entries with the `Application (client) ID` and `Directory (tenant) ID` from the corresponding app registry environment

   1. [`.env`](./.env)

      ```diff
      # Azure - SSO
      - REACT_APP_AZURE_ACTIVE_DIRECTORY_CLIENT_ID=""
      + REACT_APP_AZURE_ACTIVE_DIRECTORY_CLIENT_ID="123...789"
      - REACT_APP_AZURE_ACTIVE_DIRECTORY_TENANT_ID=""
      + REACT_APP_AZURE_ACTIVE_DIRECTORY_TENANT_ID="123...789"
      ```

   2. [`./chart/values.dev.yaml`](./chart/values.dev.yaml)

      _Please make sure that you use the correct client id and tenant id from your app registration for the `dev` environment._

      ```diff
      - azureActiveDirectoryClientId: "11111111-2222-3333-4444-555555555555"
      + azureActiveDirectoryClientId: "123...-dev-...789"
      - azureActiveDirectoryTenantId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
      + azureActiveDirectoryTenantId: "abc...-dev-...xyz"
      ```

   3. [`./chart/values.test.yaml`](./chart/values.test.yaml)

      _Please make sure that you use the correct client id and tenant id from your app registration for the `test` environment._

      ```diff
      - azureActiveDirectoryClientId: "11111111-2222-3333-4444-555555555555"
      + azureActiveDirectoryClientId: "123...-test-...789"
      - azureActiveDirectoryTenantId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
      + azureActiveDirectoryTenantId: "abc...-test-...xyz"
      ```

   4. [`./chart/values.prod.yaml`](./chart/values.prod.yaml)

      _Please make sure that you use the correct client id and tenant id from your app registration for the `prod` environment._

      ```diff
      - azureActiveDirectoryClientId: "11111111-2222-3333-4444-555555555555"
      + azureActiveDirectoryClientId: "123...-prod-...789"
      - azureActiveDirectoryTenantId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
      + azureActiveDirectoryTenantId: "abc...-prod-...xyz"
      ```

   More information: <https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration>

## Local Development

### Requirements

- Node.js v16+
- NPM v8+

#### Using [`NVM`](https://github.com/nvm-sh/nvm)

```sh
# Install latest LTS Version (v16+) with the latest npm version (v8+)
nvm install --lts --latest-npm
```

### Set Environment Variables

See `.env.template` to create appropriate `.env` file. Ask your colleagues which values are currently necessary!

### Install Dependencies

```sh
npm install
```

### Start Development Server

```sh
npm run start
```

Starts the development server and makes your application accessible at `localhost:8100`. Changes in the application code will be hot-reloaded.

### Create Production Build (Web)

```sh
npm run build
```

The app is built for optimal performance: assets are minified and served gzipped.

### Run tests

```sh
npm run test
```

### Docker

#### Create Docker Image

```sh
npm run build
mv build docker
docker build -t PROJECTID-COMPONENTID -f docker/Dockerfile docker
```

In case the command `RUN apk update && apk upgrade` cannot be executed (e.g. working behind a proxy), uncomment it for the moment.

#### Start Docker Image

```sh
docker run -p 8080:8080 --env-file .env PROJECTID-COMPONENTID
```

Starts the [nginx](https://nginx.org) server and makes your application accessible at `localhost:8080`.

## Continuous Integration/Continuous Delivery (CI/CD)

This CI/CD setup has been developed for the 'trunk-based development' approach.

> _[...] Trunk-based development is a version control management practice where developers merge small, frequent updates to a core “trunk” or main branch. [...] Trunk-based development is far more simplified since it focuses on the main branch as the source of fixes and releases. In trunk-based development the main branch is assumed to always be stable, without issues, and ready to deploy [...]._ - <https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development>

### Master Branch

The `master` branch is your only real **source-of-true** 📜 and should always reflect the state as found in all three environments.

It is recommended not to merge any changes into the `master`-branch before a new release is triggered. Otherwise there is the risk of not being able to perform a hotfix immediately. The only solution remains a corresponding Git Strategy to restore the old state, import the necessary hotfix changes, release and then add the reset changes again.

With each commit, the source code in the master branch is checked for its releasability and tagged at the end with a new semantic version based on the git commit history.

```mermaid
%% If the Mermaid Diagram is not rendered (as is the case on BitBucket), it can be viewed at https://mermaid.live/
flowchart TB
    subgraph openshift-dev["OpenShift (DEV)"]
        subgraph ods
            subgraph sonarqube["SonarQube"]
                direction TB
                ods-DC-sonarqube["sonarqube (DeploymentConfig)"]:::classDeploymentConfig <-. Port 9000 .-> ods-S-sonarqube["sonarqube (Service)"]:::classService <-. Port 9000 .-> ods-RT-sonarqube["sonarqube (Route)\nhttps://sonarqube-ods.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
        end
        subgraph aqua
            aqua-aqua["Aqua Container Security"]
        end
        subgraph PROJECTID-cd
            subgraph webhook-proxy
                direction TB
                cd-DC-webhook-proxy["webhook-proxy (DeploymentConfig)"]:::classDeploymentConfig <-. Port 8080 .-> cd-S-webhook-proxy["webhook-proxy (Service)"]:::classService <-. Port 8080 .-> cd-RT-webhook-proxy["webhook-proxy (Route)\nhttps://webhook-proxy-PROJECTID-cd.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
            subgraph Jenkins
                subgraph Jenkinsfile
                    stageInitialize-->stageInstallDependency-->stageVersioning-->stageWorkaroundFindOpenShiftImageOrElse --> stageAnalyzeCode-->odsComponentStageScanWithSonar-->stageBuild-->stageDeploy-->odsComponentStageBuildOpenShiftImage-->stageWorkaroundUnitTest-->stageWorkaroundRolloutDeployment-->stageRelease
                end
            end
            subgraph cd-IS-PROJECTID-COMPONENTID-master["PROJECTID-COMPONENTID-master (Image Stream)"]
                cd-IST-PROJECTID-COMPONENTID-master["PROJECTID-COMPONENTID-master:v1.4.2"]:::classImageStreamTag
            end
        end
    end
    subgraph BitBucket
        subgraph bb-project-PROJECTID["PROJECTID (Project)"]
            subgraph bb-project-PROJECTID-COMPONENTID["PROJECTID-COMPONENTID (Repo)"]
                bb-project-PROJECTID-COMPONENTID-branch-master["master (Branch)"]
            end
        end
    end


aqua-aqua -- scan --> cd-IST-PROJECTID-COMPONENTID-master
bb-project-PROJECTID-COMPONENTID -- trigger --> webhook-proxy -- trigger --> Jenkins
bb-project-PROJECTID-COMPONENTID-branch-master -- pull --> Jenkinsfile
odsComponentStageBuildOpenShiftImage -- push --> cd-IST-PROJECTID-COMPONENTID-master
odsComponentStageBuildOpenShiftImage -. trigger .-> aqua-aqua -. result .-> odsComponentStageBuildOpenShiftImage
odsComponentStageScanWithSonar -. trigger .-> sonarqube -. result .-> odsComponentStageScanWithSonar
stageRelease -- "push (v1.4.2)" --> bb-project-PROJECTID-COMPONENTID-branch-master

%% stlyes
classDef classBitBucket fill:#2684FF22,stroke:#2684FF,stroke-width:4px
classDef classBitBucketProject fill:#2684FF22,stroke:#2684FF
classDef classBuildConfig fill:#00408022,stroke:#004080
classDef classDeployment fill:#00408022,stroke:#004080
classDef classDeploymentConfig fill:#00408022,stroke:#004080
classDef classHelmRelease fill:#2b9af322,stroke:#2b9af3
classDef classImageStream fill:#2b9af322,stroke:#2b9af3
classDef classImageStreamTag fill:#2b9af322,stroke:#2b9af3
classDef classOcpProject fill:#ffffff00,stroke:#f00,stroke-width:2px
classDef classOcpResource fill:#ffffff00,stroke:#06c,stroke-width:2px
classDef classOpenShift fill:#ffffff00,stroke:#f00,stroke-width:4px
classDef classRoute fill:#2b9af322,stroke:#2b9af3
classDef classService fill:#6ca10022,stroke:#6ca100

class BitBucket classBitBucket
class bb-project-PROJECTID,bb-project-PROJECTID-COMPONENTID classBitBucketProject
class cd-IS-PROJECTID-COMPONENTID-master classImageStream
class aqua,ods,PROJECTID-cd,PROJECTID-dev classOcpProject
class aqua-aqua,Jenkins,Jenkinsfile,sonarqube,webhook-proxy classOcpResource
class openshift-dev classOpenShift
```

### Feature Environments

With each new `feature/*` branch created, a new environment is created in the OpenShift Project `PROJECTID-cd`.
Different stages are processed in the Jenkinsfile and finally rolled out and managed via Helm.

Please be aware that a new route (e.g. <https://PROJECTID-COMPONENTID-feature-foo.apps.OPENSHIFT_DOMAIN_DEV>) is created for each new feature environment. If this is required for the SSO login, it must be specified as a new valid redirect URL in the app registration.

```mermaid
%% If the Mermaid Diagram is not rendered (as is the case on BitBucket), it can be viewed at https://mermaid.live/
flowchart TB
    subgraph openshift-dev["OpenShift (DEV)"]
        subgraph ods
            subgraph sonarqube["SonarQube"]
                direction TB
                ods-DC-sonarqube["sonarqube (DeploymentConfig)"]:::classDeploymentConfig <-. Port 9000 .-> ods-S-sonarqube["sonarqube (Service)"]:::classService <-. Port 9000 .-> ods-RT-sonarqube["sonarqube (Route)\nhttps://sonarqube-ods.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
        end
        subgraph PROJECTID-cd
            subgraph webhook-proxy
                direction TB
                cd-DC-webhook-proxy["webhook-proxy (DeploymentConfig)"]:::classDeploymentConfig <-. Port 8080 .-> cd-S-webhook-proxy["webhook-proxy (Service)"]:::classService <-. Port 8080 .-> cd-RT-webhook-proxy["webhook-proxy (Route)\nhttps://webhook-proxy-PROJECTID-cd.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
            subgraph Jenkins
                subgraph Jenkinsfile
                    stageInitialize-->stageInstallDependency-->stageVersioning-->stageWorkaroundFindOpenShiftImageOrElse -->|orElse| stageAnalyzeCode-->odsComponentStageScanWithSonar-->stageBuild-->stageDeploy-->odsComponentStageBuildOpenShiftImage-->stageWorkaroundUnitTest-->stageWorkaroundRolloutDeployment-->stageRelease
                end
            end
            subgraph cd-IS-PROJECTID-COMPONENTID-feature-foo["PROJECTID-COMPONENTID-feature-foo (Image Stream)"]
                cd-IST-PROJECTID-COMPONENTID-feature-foo["PROJECTID-COMPONENTID-feature-foo:hash"]:::classImageStreamTag
            end
        end
        subgraph PROJECTID-dev
            subgraph dev-HR-PROJECTID-COMPONENTID-feature-foo["PROJECTID-COMPONENTID-feature-foo (Helm Release)"]
                dev-D-COMPONENTID["COMPONENTID (Deployment)"]:::classDeployment <-. Port 8080 .-> dev-S-COMPONENTID["COMPONENTID (Service)"]:::classService <-. Port 8080 .-> dev-RT-COMPONENTID["COMPONENTID (Route)\nhttps://PROJECTID-COMPONENTID-feature-foo.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
        end
    end
    subgraph bitbucket["BitBucket"]
        subgraph bitbucket-PROJECTID["PROJECTID (Project)"]
            subgraph bitbucket-PROJECTID-COMPONENTID["PROJECTID-COMPONENTID (Repo)"]
                bitbucket-PROJECTID-COMPONENTID-branch-feature-foo["feature-foo (Branch)"]
            end
        end
    end

bitbucket-PROJECTID-COMPONENTID -- trigger --> webhook-proxy -- trigger --> Jenkins
bitbucket-PROJECTID-COMPONENTID-branch-feature-foo -- pull --> Jenkinsfile
cd-IST-PROJECTID-COMPONENTID-feature-foo --> dev-D-COMPONENTID
odsComponentStageBuildOpenShiftImage -- push --> cd-IST-PROJECTID-COMPONENTID-feature-foo
odsComponentStageScanWithSonar <-.-> sonarqube
stageWorkaroundRolloutDeployment -- stageRolloutWithHelm --> dev-HR-PROJECTID-COMPONENTID-feature-foo

%% stlyes
classDef classBitBucket fill:#2684FF22,stroke:#2684FF,stroke-width:4px
classDef classBitBucketProject fill:#2684FF22,stroke:#2684FF
classDef classBuildConfig fill:#00408022,stroke:#004080
classDef classDeployment fill:#00408022,stroke:#004080
classDef classDeploymentConfig fill:#00408022,stroke:#004080
classDef classHelmRelease fill:#2b9af322,stroke:#2b9af3
classDef classImageStream fill:#2b9af322,stroke:#2b9af3
classDef classImageStreamTag fill:#2b9af322,stroke:#2b9af3
classDef classOcpProject fill:#ffffff00,stroke:#f00,stroke-width:2px
classDef classOcpResource fill:#ffffff00,stroke:#06c,stroke-width:2px
classDef classOpenShift fill:#ffffff00,stroke:#f00,stroke-width:4px
classDef classRoute fill:#2b9af322,stroke:#2b9af3
classDef classService fill:#6ca10022,stroke:#6ca100

class BitBucket classBitBucket
class bitbucket-PROJECTID,bitbucket-PROJECTID-COMPONENTID classBitBucketProject
class dev-HR-PROJECTID-COMPONENTID-feature-foo classHelmRelease
class cd-IS-PROJECTID-COMPONENTID-feature-foo classImageStream
class ods,PROJECTID-cd,PROJECTID-dev classOcpProject
class Jenkins,Jenkinsfile,sonarqube,webhook-proxy classOcpResource
class openshift-dev classOpenShift
```

### Release Manager

#### Release to `dev` environment

```mermaid
%% If the Mermaid Diagram is not rendered (as is the case on BitBucket), it can be viewed at https://mermaid.live/
flowchart TB
    subgraph openshift-dev["OpenShift (DEV)"]

        subgraph PROJECTID-cd
            subgraph jenkins["Jenkins"]
                subgraph jenkinsfile-PROJECTID-COMPONENTID["Jenkinsfile (PROJECTID-COMPONENTID)"]
                    stageInitialize-->stageInstallDependency-->stageVersioning-->stageWorkaroundFindOpenShiftImageOrElse --> stageAnalyzeCode-->odsComponentStageScanWithSonar-->stageBuild-->stageDeploy-->odsComponentStageBuildOpenShiftImage-->stageWorkaroundUnitTest-->stageWorkaroundRolloutDeployment-->stageRelease
                end
                build-with-parameters("<strong>Build with Parameters</strong>\nenvironment: dev\nversion: 20220518.001"):::classManualTask
                subgraph jenkinsfile-releasemanager["Jenkinsfile (Release Manager)"]
                    InitStage --> BuildStage --> DeployStage --> TestStage --> ReleaseStage --> FinalizeStage
                end
            end
            subgraph cd-IS-COMPONENTID["COMPONENTID (Image Stream)"]
                cd-IST-COMPONENTID["COMPONENTID:20220518.001"]:::classImageStreamTag
            end
        end
        subgraph ods
            subgraph sonarqube["SonarQube"]
                direction TB
                ods-DC-sonarqube["sonarqube (DeploymentConfig)"]:::classDeploymentConfig <-. Port 9000 .-> ods-S-sonarqube["sonarqube (Service)"]:::classService <-. Port 9000 .-> ods-RT-sonarqube["sonarqube (Route)\nhttps://sonarqube-ods.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
        end
        subgraph aqua
            aqua-aqua["Aqua Container Security"]
        end
        subgraph PROJECTID-dev
            subgraph dev-HR-COMPONENTID["COMPONENTID (Helm Release)"]
                direction TB
                dev-D-COMPONENTID["COMPONENTID (Deployment)"]:::classDeployment <-. Port 8080 .-> dev-S-COMPONENTID["COMPONENTID (Service)"]:::classService <-. Port 8080 .-> dev-RT-COMPONENTID["COMPONENTID (Route)\nhttps://PROJECTID-dev.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
        end
    end
    subgraph BitBucket
        subgraph bitbucket-PROJECTID["PROJECTID (Project)"]
            subgraph bitbucket-PROJECTID-COMPONENTID["PROJECTID-COMPONENTID (Repo)"]
                bitbucket-PROJECTID-COMPONENTID-branch-master["master (Branch)"]
                bitbucket-PROJECTID-COMPONENTID-branch-release["release/20220518.001 (Branch)"]
            end
            subgraph bitbucket-PROJECTID-releasemanager["PROJECTID-releasemanager (Repo)"]
                bitbucket-PROJECTID-releasemanager-branch-master["master (Branch)"]
            end
        end
    end

aqua-aqua -- scan --> cd-IST-COMPONENTID
cd-IST-COMPONENTID --> dev-D-COMPONENTID
bitbucket-PROJECTID-COMPONENTID-branch-master -- pull --> jenkinsfile-PROJECTID-COMPONENTID
bitbucket-PROJECTID-releasemanager-branch-master -- pull --> jenkinsfile-releasemanager
BuildStage -- trigger --> jenkinsfile-PROJECTID-COMPONENTID
build-with-parameters -. trigger .-> InitStage
FinalizeStage -- push --> bitbucket-PROJECTID-COMPONENTID-branch-release
FinalizeStage -- push --> bitbucket-PROJECTID-releasemanager-branch-master
odsComponentStageBuildOpenShiftImage -- push --> cd-IST-COMPONENTID
odsComponentStageBuildOpenShiftImage -. trigger .-> aqua-aqua -. result .-> odsComponentStageBuildOpenShiftImage
odsComponentStageScanWithSonar -. trigger .-> sonarqube -. result .-> odsComponentStageScanWithSonar
stageWorkaroundRolloutDeployment -- "Rollout with Helm" --> dev-HR-COMPONENTID

%% stlyes
classDef classBitBucket fill:#2684FF22,stroke:#2684FF,stroke-width:4px
classDef classBitBucketProject fill:#2684FF22,stroke:#2684FF
classDef classBuildConfig fill:#00408022,stroke:#004080
classDef classDeployment fill:#00408022,stroke:#004080
classDef classDeploymentConfig fill:#00408022,stroke:#004080
classDef classHelmRelease fill:#2b9af322,stroke:#2b9af3
classDef classImageStream fill:#2b9af322,stroke:#2b9af3
classDef classImageStreamTag fill:#2b9af322,stroke:#2b9af3
classDef classOcpProject fill:#ffffff00,stroke:#f00,stroke-width:2px
classDef classOcpResource fill:#ffffff00,stroke:#06c,stroke-width:2px
classDef classOpenShift fill:#ffffff00,stroke:#f00,stroke-width:4px
classDef classRoute fill:#2b9af322,stroke:#2b9af3
classDef classService fill:#6ca10022,stroke:#6ca100
classDef classManualTask fill:#65bd1022,stroke:#65bd10,stroke-width:4px

class BitBucket classBitBucket
class bitbucket-PROJECTID,bitbucket-PROJECTID-COMPONENTID,bitbucket-PROJECTID-releasemanager classBitBucketProject
class dev-HR-COMPONENTID classHelmRelease
class cd-IS-COMPONENTID classImageStream
class aqua,ods,PROJECTID-cd,PROJECTID-dev classOcpProject
class aqua-aqua,jenkins,jenkinsfile-PROJECTID-COMPONENTID,jenkinsfile-releasemanager,sonarqube,webhook-proxy classOcpResource
class openshift-dev classOpenShift
```

#### Release to `test` environment

```mermaid
%% If the Mermaid Diagram is not rendered (as is the case on BitBucket), it can be viewed at https://mermaid.live/
flowchart TB
    subgraph openshift-dev["OpenShift (DEV)"]
        subgraph PROJECTID-cd
            subgraph jenkins["Jenkins"]
                build-with-parameters{{"<strong>Build with Parameters</strong>\nenvironment: qa\nversion: 20220518.001"}}:::classManualTask
                subgraph jenkinsfile-releasemanager["Jenkinsfile (Release Manager)"]
                    InitStage --> BuildStage --> DeployStage --> TestStage --> ReleaseStage --> FinalizeStage
                end
                subgraph jenkinsfile-PROJECTID-COMPONENTID["Jenkinsfile (PROJECTID-COMPONENTID)"]
                    stageInitialize --> stageInstallDependency --> stageVersioning --> stageWorkaroundFindOpenShiftImageOrElse --> stageWorkaroundUnitTest --> stageWorkaroundRolloutDeployment --> stageRelease
                end
            end
            subgraph cd-IS-COMPONENTID["COMPONENTID (Image Stream)"]
                cd-IST-COMPONENTID["COMPONENTID:20220518.001"]:::classImageStreamTag
            end
        end
        subgraph PROJECTID-test
            subgraph test-HR-COMPONENTID["COMPONENTID (Helm Release)"]
                test-D-COMPONENTID["COMPONENTID (Deployment)"]:::classDeployment <-. Port 8080 .-> test-S-COMPONENTID["COMPONENTID (Service)"]:::classService <-. Port 8080 .-> test-RT-COMPONENTID["COMPONENTID (Route)\nhttps://PROJECTID-test.apps.OPENSHIFT_DOMAIN_DEV"]:::classRoute
            end
        end
    end
    subgraph BitBucket
        subgraph bitbucket-PROJECTID["PROJECTID (Project)"]
            subgraph bitbucket-PROJECTID-COMPONENTID["PROJECTID-COMPONENTID (Repo)"]
                bitbucket-PROJECTID-COMPONENTID-branch-master["master (Branch)"]
                merge{{"<strong>Merge into master</strong>\nrelease/20220518.001 (Branch)"}}:::classManualTask
            end
            subgraph bitbucket-PROJECTID-releasemanager["PROJECTID-releasemanager (Repo)"]
                bitbucket-PROJECTID-releasemanager-branch-master["master (Branch)"]
            end
        end
    end

cd-IST-COMPONENTID <-.-> stageWorkaroundFindOpenShiftImageOrElse
cd-IST-COMPONENTID --> test-D-COMPONENTID
bitbucket-PROJECTID-COMPONENTID-branch-master -- pull --> jenkinsfile-PROJECTID-COMPONENTID
bitbucket-PROJECTID-releasemanager-branch-master -- pull --> jenkinsfile-releasemanager
merge --> bitbucket-PROJECTID-COMPONENTID-branch-master["master (Branch)"]
BuildStage -- trigger --> jenkinsfile-PROJECTID-COMPONENTID
build-with-parameters -. trigger .-> InitStage
FinalizeStage -- push --> bitbucket-PROJECTID-releasemanager-branch-master
stageWorkaroundRolloutDeployment -- "Rollout with Helm" --> test-HR-COMPONENTID

%% stlyes
classDef classBitBucket fill:#2684FF22,stroke:#2684FF,stroke-width:4px
classDef classBitBucketProject fill:#2684FF22,stroke:#2684FF
classDef classBuildConfig fill:#00408022,stroke:#004080
classDef classDeployment fill:#00408022,stroke:#004080
classDef classDeploymentConfig fill:#00408022,stroke:#004080
classDef classHelmRelease fill:#2b9af322,stroke:#2b9af3
classDef classImageStream fill:#2b9af322,stroke:#2b9af3
classDef classImageStreamTag fill:#2b9af322,stroke:#2b9af3
classDef classOcpProject fill:#ffffff00,stroke:#f00,stroke-width:2px
classDef classOcpResource fill:#ffffff00,stroke:#06c,stroke-width:2px
classDef classOpenShift fill:#ffffff00,stroke:#f00,stroke-width:4px
classDef classRoute fill:#2b9af322,stroke:#2b9af3
classDef classService fill:#6ca10022,stroke:#6ca100
classDef classManualTask fill:#65bd1022,stroke:#65bd10,stroke-width:4px

class BitBucket classBitBucket
class bitbucket-PROJECTID,bitbucket-PROJECTID-COMPONENTID,bitbucket-PROJECTID-releasemanager classBitBucketProject
class test-HR-COMPONENTID classHelmRelease
class cd-IS-COMPONENTID classImageStream
class aqua,ods,PROJECTID-cd,PROJECTID-test classOcpProject
class aqua-aqua,jenkins,jenkinsfile-PROJECTID-COMPONENTID,jenkinsfile-releasemanager,sonarqube,webhook-proxy classOcpResource
class openshift-dev classOpenShift
```

#### Release to `prod` environment

```mermaid
%% If the Mermaid Diagram is not rendered (as is the case on BitBucket), it can be viewed at https://mermaid.live/
flowchart TB
    subgraph openshift-dev["OpenShift (DEV)"]
        subgraph PROJECTID-cd
            subgraph jenkins["Jenkins"]
                build-with-parameters{{"<strong>Build with Parameters</strong>\nenvironment: prod\nversion: 20220518.001"}}:::classManualTask
                subgraph jenkinsfile-releasemanager["Jenkinsfile (Release Manager)"]
                    InitStage --> BuildStage --> DeployStage --> TestStage --> ReleaseStage --> FinalizeStage
                end
                subgraph jenkinsfile-PROJECTID-COMPONENTID["Jenkinsfile (PROJECTID-COMPONENTID)"]
                    stageInitialize --> stageInstallDependency --> stageVersioning --> stageWorkaroundFindOpenShiftImageOrElse --> stageWorkaroundUnitTest --> stageWorkaroundRolloutDeployment --> stageRelease
                end
            end
            subgraph cd-IS-COMPONENTID["COMPONENTID (Image Stream)"]
                cd-IST-COMPONENTID["COMPONENTID:20220518.001"]:::classImageStreamTag
            end
        end
    end
    subgraph openshift-prod["OpenShift (PROD)"]
        subgraph PROJECTID-prod
            subgraph prod-HR-COMPONENTID["COMPONENTID (Helm Release)"]
                prod-D-COMPONENTID["COMPONENTID (Deployment)"]:::classDeployment <-. Port 8080 .-> prod-S-COMPONENTID["COMPONENTID (Service)"]:::classService <-. Port 8080 .-> prod-RT-COMPONENTID["COMPONENTID (Route)\nhttps://PROJECTID.apps.OPENSHIFT_DOMAIN_PROD"]:::classRoute
            end
        end
    end
    subgraph BitBucket
        subgraph bitbucket-PROJECTID["PROJECTID (Project)"]
            subgraph bitbucket-PROJECTID-COMPONENTID["PROJECTID-COMPONENTID (Repo)"]
                bitbucket-PROJECTID-COMPONENTID-branch-master["master (Branch)"]
            end
            subgraph bitbucket-PROJECTID-releasemanager["PROJECTID-releasemanager (Repo)"]
                bitbucket-PROJECTID-releasemanager-branch-master["master (Branch)"]
            end
        end
    end

cd-IST-COMPONENTID --> prod-D-COMPONENTID
cd-IST-COMPONENTID <-.-> stageWorkaroundFindOpenShiftImageOrElse
bitbucket-PROJECTID-COMPONENTID-branch-master -- pull --> jenkinsfile-PROJECTID-COMPONENTID
bitbucket-PROJECTID-releasemanager-branch-master -- pull --> jenkinsfile-releasemanager
BuildStage -- trigger --> jenkinsfile-PROJECTID-COMPONENTID
build-with-parameters -. trigger .-> InitStage
FinalizeStage -- push --> bitbucket-PROJECTID-releasemanager-branch-master
stageWorkaroundRolloutDeployment -- "Rollout with Helm" --> prod-HR-COMPONENTID

%% stlyes
classDef classBitBucket fill:#2684FF22,stroke:#2684FF,stroke-width:4px
classDef classBitBucketProject fill:#2684FF22,stroke:#2684FF
classDef classBuildConfig fill:#00408022,stroke:#004080
classDef classDeployment fill:#00408022,stroke:#004080
classDef classDeploymentConfig fill:#00408022,stroke:#004080
classDef classHelmRelease fill:#2b9af322,stroke:#2b9af3
classDef classImageStream fill:#2b9af322,stroke:#2b9af3
classDef classImageStreamTag fill:#2b9af322,stroke:#2b9af3
classDef classOcpProject fill:#ffffff00,stroke:#f00,stroke-width:2px
classDef classOcpResource fill:#ffffff00,stroke:#06c,stroke-width:2px
classDef classOpenShift fill:#ffffff00,stroke:#f00,stroke-width:4px
classDef classRoute fill:#2b9af322,stroke:#2b9af3
classDef classService fill:#6ca10022,stroke:#6ca100
classDef classManualTask fill:#65bd1022,stroke:#65bd10,stroke-width:4px

class BitBucket classBitBucket
class bitbucket-PROJECTID,bitbucket-PROJECTID-COMPONENTID,bitbucket-PROJECTID-releasemanager classBitBucketProject
class prod-HR-COMPONENTID classHelmRelease
class cd-IS-COMPONENTID classImageStream
class aqua,ods,PROJECTID-cd,PROJECTID-prod classOcpProject
class aqua-aqua,jenkins,jenkinsfile-PROJECTID-COMPONENTID,jenkinsfile-releasemanager,sonarqube,webhook-proxy classOcpResource
class openshift-dev,openshift-prod classOpenShift
```

## Housekeeping

💡 From time to time, obsolete resources should be cleaned up. It would be best to have this automated at a later time.

### Git Branches

```sh
git checkout master

# Cleaning outdated branches
git fetch --prune

# Delete all local branches except current branch (e.g. master)
git branch | grep --invert-match '^*' | xargs git branch -D

# Delete all remote branches except master (may take some time)
# Skip git hooks with '--no-verify'
git branch -r | grep 'origin' | grep --invert-match 'master$' | grep --invert-match HEAD | cut -d/ -f2- | while read line; do git push --no-verify origin :heads/$line; done;
```

### Git Tags

```sh
# Delete all local tags that do NOT match a pattern of a semantic version
git tag -l | grep --invert-match '^v[[:digit:]].[[:digit:]].[[:digit:]]' | xargs git tag -d

# Delete all remote tags that do NOT match a pattern of a semantic version (e.g. ods-generated-v20220518.001)
# Skip git hooks with '--no-verify'
git ls-remote --tags origin | cut -d/ -f3- | grep --invert-match '^v[[:digit:]].[[:digit:]].[[:digit:]]' | grep -v '}$'| xargs git push --delete --no-verify origin
```

### OpenShift

#### Feature Environments

With the approach of making each feature available as a new deployed environment for testing before it is merged into the master branch, a number of environments are created in OpenShift over time. The easiest way to delete these is to use the following command:

```sh
# Login
oc login --server=https://api.OPENSHIFT_DOMAIN_DEV:6443 --token=123...456

# Switch to Project
oc project PROJECTID-dev

# Delete/Uninstall all feature charts
helm list | grep -e 'COMPONENTID' | cut -f1 | xargs helm uninstall

# Delete all other feature resources
oc get all --output jsonpath='{range .items[*]}{"oc delete "}{.kind}{" "}{.metadata.name}{" "}{"\n"}{end}' | grep -- "COMPONENTID-feature-" | while read -r line; do eval $line; done
```

#### Jenkins Pipelines

**Feature Pipelines**: Since OpenShift 4, Jenkins pipelines are treated as `BuildConfig`. Unfortunately, with `ODS@4.x` in the Jenkins stage [`odsComponentStageBuildOpenShiftImage`](https://www.opendevstack.org/ods-documentation/opendevstack/4.x/jenkins-shared-library/component-pipeline.html#_odscomponentstagebuildopenshiftimage), all builds are also created as a `BuildConfig` in the `cd` project without any further information filled labels. A distinction is not obvious at first view, but can be figured out via the configuration parameter `.spec.strategy.type` (`JenkinsPipeline` vs `Docker`).

**Release Pipelines**: Can be deleted without any problems, since they do not create any further resources, instead they are directly cancelled due to `[skip ci]` in the commit message.

**ODS Quickstarter**: Can be deleted after successful creation without any problems, as there is no further need for them and they only take up resources unnecessarily.

```sh
# Login
oc login --server=https://api.OPENSHIFT_DOMAIN_DEV:6443 --token=123...456

# Switch Project
oc project PROJECTID-cd

# Delete all feature pipelines (may take some time)
oc get bc --output jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.strategy.type}{"\n"}{end}' | grep -e "JenkinsPipeline" | cut -f1 | grep -e "COMPONENTID-feature-" | while read -r line; do oc delete bc $line && sleep 10s; done

# Delete all release pipelines (may take some time)
oc get bc --output custom-columns=NAME:.metadata.name | grep -e "COMPONENTID-release-" | while read -r line; do oc delete bc $line && sleep 10s; done

# Delete all ods quickstarter pipelines (may take some time)
oc get bc --output custom-columns=NAME:.metadata.name | grep -e "ods-qs-" | while read -r line; do oc delete bc $line && sleep 10s; done
```

## Roadmap

- [ ] Implement Android
- [ ] Implement iOS
- [ ] Implement Ionic Appflow
- [ ] Improve Documentation
- [ ] Improve Testing

## Author

**Simon Golms**

- Digital Card: `npx simongolms`
- Github: [@SimonGolms](https://github.com/SimonGolms)
- Website: [gol.ms](https://gol.ms)

## Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2022 [Simon Golms](https://github.com/SimonGolms).<br />
This project is [Apache-2.0](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/blob/master/LICENSE) licensed.

## Further Resources

- <https://ionicframework.com>
- <https://reactjs.org>
- <https://www.opendevstack.org/>
- <https://helm.sh/>
- <https://docs.atlassian.com/bitbucket-server/rest/7.6.12/bitbucket-rest.html>
