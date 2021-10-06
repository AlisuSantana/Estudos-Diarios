GameReactor = {
    computerCombination: [],
    playerCombination: [],
    computerCombinatPosition: 1,
    combinatMaxPosition: 5,
    momeryMaxCombination: 9,

    audio: {
        start: 'start.mp3',
        fail: 'fail.mp3',
        complete: 'complete.mp3',
        combinations: //[m0, m1, m2, m3, m4, m5, m6, m7, m8, m9] = 
        ['0.mp3','1.mp3','2.mp3','3.mp3','4.mp3','4.mp3','6.mp3', '7.mp3', '9.mp3'],
        typeObject: false,

        preparedAudio(filename) {
            const file = `./audio/${filename}?cb=${new Date().getTime()}`;
            const audio = new Audio(file);
            audio.load();
            return audio;
        },

        loadAudios() {
            if(GameReactor.audio.typeObject === true) return;

            GameReactor.audio.start = GameReactor.audio.preparedAudio(GameReactor.audio.start);
            GameReactor.audio.complete = GameReactor.audio.preparedAudio(GameReactor.audio.complete);
            GameReactor.audio.fail = GameReactor.audio.preparedAudio(GameReactor.audio.fail);
            GameReactor.audio.combinations = GameReactor.audio.combinations.map (
                audio => GameReactor.audio.preparedAudio(audio)
            );
            GameReactor.audio.typeObject = true;
        },

    },
    interface: {

        memoryPanel: document.querySelector(".panelMemory"),
        computerLedPanel: document.querySelector(".computerLedPanel"),
        playerLedPanel: document.querySelector(".playerLedPanel"),
        playerMemory: document.querySelector(".playerMemory"),
        playerMemoryButtons: document.getElementsByClassName("player_memory"),

        ledOn(index, ledPanel) {
            ledPanel.children[index].classList.add("ledOn");
        },

        ledAllOff() {
            const computerLedPanel = GameReactor.interface.computerLedPanel;
            const playerLedPanel = GameReactor.interface.playerLedPanel;

            for(let i = 0; i < computerLedPanel.children.length; i++) {
                computerLedPanel.children[i].classList.remove("ledOn");
                playerLedPanel.children[i].classList.remove("ledOn");
            }
        },

        async start() {
            return GameReactor.audio.start.play();
        },

        playItem(index, combinationPosition, location = 'computer') {
            const leds = (location == 'computer') 
            ? GameReactor.interface.computerLedPanel 
            : GameReactor.interface.playerLedPanel;
            const myPanel = GameReactor.interface.memoryPanel.children[index];

            myPanel.classList.add("memoryActive");
            GameReactor.interface.ledOn(combinationPosition, leds);
            GameReactor.audio.combinations[index].play().then(() => {
                setTimeout(() => {
                    myPanel.classList.remove("memoryActive");
                }, 200);
            });
        }

    },

    load() {  },
    start() { 
        GameReactor.computerCombination = GameReactor.createCombination();
        GameReactor.computerCombinatPosition = 1;
        GameReactor.playerCombination = [];

        GameReactor.interface.start().then( () => {
            setTimeout( () => {
                GameReactor.playCombination();
            }, 500 );
        });

    },
    
    createCombination() {
        let newCombination = [];
        for(let i = 0; i < GameReactor.combinatMaxPosition; i++) {
            const position = Math.floor( (Math.random() * GameReactor.momeryMaxCombination) + 1 );
            newCombination.push(position - 1);
        }
        return newCombination;
    },

    playCombination() {

    }
}
