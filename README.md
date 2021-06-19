# Discussion Forum

Discussion Forum is a e-learning platform that provides user with privilege to post questions to the forum, interact and receive answers from other users.  
Tech Stack: React JS, Redux, Firebase.  
Visit this application at [https://discussion-forum-61117.web.app/](https://discussion-forum-61117.web.app/)

## Setup and run the app

Follow these steps to setup and run the quickstart:

 1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com).
 2.  In the Firebase console, enable Anonymous authentication on your project by doing: **Authentication > SIGN-IN METHOD > Anonymous > Enable > SAVE**
 3. In the Firebase console, enable Firestore on your project by clicking **Create Database** in the **Cloud Firestore** section of the console and answering all prompts.
     1. Select testing mode for the security rules
 4. Clone/Download this repo and open this folder in a Terminal.
 5. Install the Firebase CLI if you do not have it installed on your machine:
    ```bash
    npm -g i firebase-tools
    ```
 1. Set the CLI to use the project you created on step 1:
    ```bash
    firebase use --add
    ```
 1. Deploy the Firestore security rules and indexes:
    ```bash
    firebase deploy --only firestore
    ```
 1. Run a local server:
    ```bash
    firebase serve
    ```
 1. As indicated, open [http://localhost:5000](http://localhost:5000) in your browser and try out the app.
 
 ## How to use this app
 1. Initially register your account using Email or google account.
 2. Login with registered email (or google account) to view the posted questions.
 3. To view answers of the question click the question.
 4. To add your question, click Add Question button on the top right corner in the navbar.
 5. Add image link to the question while posting if needed(optional).
 6. To add answer to the question, click the Answer button on the right side of the question.
 7. To logout from application click logout on the top right corner in the navbar.
 8. You can reset your password by clicking forget password link in Login page.
 9. You can get email to reset your password.

## How the app look like

  ![Screenshot (19)](https://user-images.githubusercontent.com/49742736/122638265-d64d3c80-d110-11eb-9e79-6015aface7e8.png)

  ![Screenshot (20)](https://user-images.githubusercontent.com/49742736/122638267-d77e6980-d110-11eb-9a12-496b351fc20b.png)
  
  ![Screenshot (21)](https://user-images.githubusercontent.com/49742736/122638269-da795a00-d110-11eb-956b-519ed7f4eb43.png)
  
  ![Screenshot (22)](https://user-images.githubusercontent.com/49742736/122638283-ec5afd00-d110-11eb-960c-9b957213799b.png)
  
  ![Screenshot (23)](https://user-images.githubusercontent.com/49742736/122638242-b87fd780-d110-11eb-9f08-e19f88002b19.png)
  
  ![Screenshot (24)](https://user-images.githubusercontent.com/49742736/122638251-c170a900-d110-11eb-9576-8ea0635afd04.png)
  
  ![Screenshot (25)](https://user-images.githubusercontent.com/49742736/122638255-c6cdf380-d110-11eb-9b62-c43af7bfd01a.png)
  
  ![Screenshot (26)](https://user-images.githubusercontent.com/49742736/122638263-d51c0f80-d110-11eb-84f8-5be333887a30.png)
  
