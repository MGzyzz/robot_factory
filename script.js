let factory = {
    buildPart: function(type, model, action) {
        if (model === null) {
            return null;
        }

        return {
            type: type,
            model: model,
            action: function() {
                console.log(action);
            }
        };
    },

    distribution_of_abilities: function(ability) {
        if (ability === 'headlight') {
            return 'Светит на 100 метров';
        } else if (ability === 'barrel') {
            return 'Что-то делает';
        } else if (ability === 'pincers') {
            return 'Что-то делает';
        } else if (ability === 'tracks') {
            return 'Преодолевает сложные барьеры';
        } else {
            return null;
        }
    },
    createPart: function(partType, model) {
        const action = this.distribution_of_abilities(model);
        if (model === null) {
            return null;
        } else if (action === null) {
            console.log(`Запчасть с моделью ${model} не может быть создана`);
            return null;
        }

        return this.buildPart(partType, model, action);
    },
    buildHead: function(model) {
        return this.createPart('head', model);
    },
    buildBody: function(model) {
        return this.createPart('body', model);
    },
    buildArms: function(model) {
        return this.createPart('arms', model);
    },
    buildLegs: function(model) {
        return this.createPart('legs', model);
    },
    build: function(parts) {
        let robot = {};
        let partActions = {};

        for (let part in parts) {
            const createdPart = this.createPart(part, parts[part]);

            if (createdPart !== null) {
                robot[part] = createdPart;
                partActions[robot[part].model] = robot[part].action;
            }
        }

        Object.assign(robot, partActions);
        return robot;
    },
};


let part = factory.buildLegs('headlight')

console.log(part)

part.action()