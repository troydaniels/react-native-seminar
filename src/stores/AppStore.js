import { configure, observable, action } from 'mobx';

configure({ enforceActions: 'always' });

class AppStore {
    @observable score = 0;

    @observable lives = 0;

    @action
    resetStore = _ => {
        this.score = 0
        this.lives = 0
    };

}

const appStore = new AppStore();
export default appStore;
