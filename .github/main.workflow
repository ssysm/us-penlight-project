workflow "Deploy" {
  on = "push"
  resolves = ["GitHub Action for Firebase"]
}

action "GitHub Action for Firebase" {
  uses = "w9jds/firebase-action@master"
  secrets = ["FIREBASE_TOKEN"]
  env = {
    PROJECT_ID = "us-penlight-project"
  }
  args = "deploy"
}
