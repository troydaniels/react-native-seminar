import { configure, observable, action } from "mobx";

configure({ enforceActions: "always" });

class AppStore {
  @observable score = 0;

  @observable lives = 3;

  @observable question = undefined;

  @action
  resetStore = () => {
    this.score = 0;
    this.lives = 0;
    this.question = undefined;
  };

  @action
  decrementLives = () => {
    this.lives -= 1;
  };

  @action
  incrementScore = () => {
    this.score += 1;
  };

  @action
  getNewQuestion = () => {
    fetch("http://localhost:8080/get_question", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => this.setQuestion(response));
  };

  @action
  setQuestion = question => {
    console.log("question", question);
    this.question = question;
  };
}

const appStore = new AppStore();
export default appStore;
