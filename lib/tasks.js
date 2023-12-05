import { v4 as uuid } from 'uuid';

export const tasks = [{
    id: uuid(),
    name: "Wash the car",
    due_date: Date.now(),
    category: "work",
    created: Date.now(),
    modified: Date.now()
}, {
    id: uuid(),
    name: "Kill the car",
    due_date: Date.now(),
    category: "personal",
    created: Date.now(),
    modified: Date.now()
}, {
    id: uuid(),
    name: "Scratch the car",
    due_date: Date.now(),
    category: "personal",
    created: Date.now(),
    modified: Date.now()
}, {
    id: uuid(),
    name: "Drown the car",
    due_date: Date.now(),
    category: "work",
    created: Date.now(),
    modified: Date.now()
}]