let factory = {
    buildPart: function(type, model, action) {
        return {
            type: type,
            model: model,
            action: function() {
                console.log(action);
            }
        };
    },
    build: function(parts) {
        let robot = {};
        for (let part in parts) {
            let action = null;
            if (part === 'head') {
                action = 'Светит на 100 метров';
            } else if (part === 'body') {
                action = 'Корпус делает что-то';
            } else if (part === 'arms') {
                action = 'Руки делают что-то';
            } else if (part === 'legs') {
                action = 'Ноги делают что-то';
            }

            if (action !== null) {
                robot[part] = this.buildPart(part, parts[part], action);
                robot[robot[part].model] = robot[part].action;
            }
        }
        return robot;
    }
};

let robot = factory.build({

    head: "headlight",

    body: "barrel",

    arms: "pincers",

    legs: "tracks"

});

console.log(robot)

console.log(robot.head)

robot.headlight()

robot.tracks()