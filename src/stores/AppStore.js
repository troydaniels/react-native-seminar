import { configure, observable, action } from "mobx";

configure({ enforceActions: "always" });

class AppStore {
  @observable score = 0;

  @observable lives = 3;

  @observable imageURL = "https://picsum.photos/id/237/200/300";

  @action
  resetStore = _ => {
    this.score = 0;
    this.lives = 0;
  };

  @action
  decrementLives = _ => {
    this.lives -= 1;
  };

  @action
  incrementScore = _ => {
    this.score += 1;
  };
}

const appStore = new AppStore();
export default appStore;
