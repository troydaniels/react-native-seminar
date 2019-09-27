import { configure, observable, action } from 'mobx';

configure({ enforceActions: 'always' });

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
        console.log("new question")
        fetch('http://localhost:8080/get_question', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(responseJSON => this.setQuestion(responseJSON))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    };

    @action
    setQuestion = question => {
        console.log('question', question);
        this.question = question;
    };
}

const appStore = new AppStore();
export default appStore;
