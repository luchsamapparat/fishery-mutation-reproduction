import { strict as assert } from 'assert';
import { datatype, lorem, name, random } from 'faker';
import { Factory } from 'fishery';
import { uniqBy } from 'lodash';

type User = {
    id: string;
    firstName: string;
    lastName: string;
}

type Task = {
    title: string;
    completed: boolean;
    user: User;
}

const userFactory = Factory.define<User>(() => ({
    id: datatype.uuid(),
    firstName: name.firstName(),
    lastName: name.lastName(),
}));

const users = userFactory.buildList(20);

const taskFactory = Factory.define<Task>(() => ({
    title: lorem.words(),
    completed: datatype.boolean(),
    user: random.arrayElement(users)
}));

const task = taskFactory.build();

const completedTask = taskFactory.build({ ...task, completed: true });

assert.equal(uniqBy(users, 'id').length, users.length);