import { configure, observable, action } from "mobx";
import axios from "axios";

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
    axios
      .get("http://localhost:8080/get_question")
      .then(response => this.setQuestion(response.data))
      .catch(error => {
        console.error(
          `There has been a problem with your fetch operation: ${error.message}`
        );
      });
  };

  @action
  setQuestion = question => {
    this.question = question;
  };

  @action
  verifyAnswer = option => {
    const { uri } = this.question;
    const postData = {
      uri,
      selection: option
    };

    axios
      .post("http://localhost:8080/verify_answer", postData)
      .then(response => console.log(response.data))
      .catch(error => {
        console.error(
          `There has been a problem with your fetch operation: ${error.message}`
        );
      });
  };
}

const appStore = new AppStore();
export default appStore;
