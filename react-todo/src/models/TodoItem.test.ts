import {describe, it, expect} from 'vitest';
import { EXT_TodoItem } from '../api/TodoApi.d';
import TodoItem from './TodoItem';

describe("A TodoItem", () => {

    it("should permit an item to have an id of 0", () => {
        const item = new TodoItem({id: 0, text: "Zero"})
        expect(item.id).toEqual(0)
        expect(item.text).toEqual("Zero")
    })

    it("should initialize with default values", () => {
        const item = new TodoItem();
        expect(item.complete).toBe(false);
        expect(item.text).toEqual("");
    })

    it("should initialize with specified values", () => {
        const id = 5;
        const text = "Do Laundry";
        const complete = true;
        const item = new TodoItem({
            id, text, complete
        })
        expect(item.complete).toEqual(complete);
        expect(item.text).toEqual(text);
        expect(item.id).toEqual(id);
    })

    it("should initialize with another TodoItem", () => {
        const item = new TodoItem({
            id: 2,
            complete: true,
            text: "Honey Badger"
        })

        const testItem = new TodoItem(item);
        expect(testItem.id).toEqual(item.id);
        expect(testItem.text).toEqual(item.text);
        expect(testItem.complete).toEqual(item.complete);
    })

    it("should toggle complete", () => {
        const item = new TodoItem({text: "Eat Dinner"})
        expect(item.complete).toBe(false)

        item.toggleComplete()
        expect(item.complete).toBe(true)

        item.toggleComplete()
        expect(item.complete).toBe(false)

    })

    it("should convert a COMPLETE server object into a TodoItem", () => {
        
        const serverObject = {
            id: 2,
            status: "COMPLETE",
            text: "Honey Badger"
        } as EXT_TodoItem;

        const item = TodoItem.fromServerObject(serverObject);
        expect(item.id).toEqual(serverObject.id)
        expect(item.text).toEqual(serverObject.text);
        expect(item.complete).toBe(true);

    })


    it("should convert an INCOMPLETE server object into a TodoItem", () => {
        const serverObject = {
            id: 0,
            status: "INCOMPLETE",
            text: "Honey Badger"
        } as EXT_TodoItem;

        const item = TodoItem.fromServerObject(serverObject);
        expect(item.id).toEqual(serverObject.id)
        expect(item.text).toEqual(serverObject.text);
        expect(item.complete).toBe(false);
        
    })


})

describe("The toServerObject() method ", () => {
    it("should convert a completed item to a valid server object", () => {

        const item = new TodoItem({id: 1, text: "Test", complete: true})
        const serverObj = item.toServerObject();

        expect(serverObj.id).toEqual(item.id);
        expect(serverObj.text).toEqual(item.text);
        expect(serverObj.status).toEqual("COMPLETE");

    })

    it("should convert a completed item to a valid server object", () => {

        const item = new TodoItem({id: 1, text: "Test", complete: false})
        const serverObj = item.toServerObject();

        expect(serverObj.id).toEqual(item.id);
        expect(serverObj.text).toEqual(item.text);
        expect(serverObj.status).toEqual("INCOMPLETE");

    })
})