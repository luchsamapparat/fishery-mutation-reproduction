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

const user1Task = taskFactory.build({ ...task, user: users[0] });
const user2Task = taskFactory.build({ ...task, user: users[2] });
const user3Task = taskFactory.build({ ...task, user: users[3] });
const user4Task = taskFactory.build({ ...task, user: users[4] });
const user5Task = taskFactory.build({ ...task, user: users[5] });

assert.equal(uniqBy(users, 'id').length, users.length);