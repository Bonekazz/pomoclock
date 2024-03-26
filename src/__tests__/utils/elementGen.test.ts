import { ElementGen } from "../../utils/elementGen";

describe("Element generation", () => {
    const tags = ["div", "p", "h1", "h2", "span", "main", "header"];

    describe("Valid Arguments", () => {
        tags.forEach(tag => {
            test(`Returns a "${tag}" element with no aditional attributes`, () => {
                const myElement = ElementGen.createElement(`${tag}`);
                const element = document.createElement(`${tag}`);
                expect(myElement).toEqual(element);
            });

            test(`Returns a "${tag}" element with an id`, () => {
                const myElement = ElementGen.createElement(`${tag}`, "id");
                const element = document.createElement(`${tag}`);
                element.id = "id";
                expect(myElement).toEqual(element);
            });
            
            test(`Returns a "${tag}" element with id and class attributes`, () => {
                const myElement = ElementGen.createElement(`${tag}`, "id", "test1 test2");
                const element = document.createElement(`${tag}`);
                element.id = "id";
                element.className = "test1 test2";
                expect(myElement).toEqual(element);
            });

            test(`Returns a "${tag}" element with id, class and one data-set attribute`, () => {
                const myElement = ElementGen.createElement(`${tag}`, "id", "test1 test2", [
                    {key: "lucide", value: "frown"},
                ]);
                const element = document.createElement(`${tag}`);
                element.id = "id";
                element.className = "test1 test2";
                element.dataset.lucide = "frown";
                expect(myElement).toEqual(element);
            });

            test(`Returns a "${tag}" element with id, class and more than one data-set attribute`, () => {
                const myElement = ElementGen.createElement(`${tag}`, "id", "test1 test2", [
                    {key: "lucide", value: "frown"},
                    {key: "visible", value: "true"},
                    {key: "open", value: "false"},
                ]);
                const element = document.createElement(`${tag}`);
                element.id = "id";
                element.className = "test1 test2";
                element.dataset.lucide = "frown";
                element.dataset.visible = "true";
                element.dataset.open = "false";
                expect(myElement).toEqual(element);
            });
        });
    });

    describe("Invalid Arguments", () => {
        test(`throws invalid argument for tagName equals to null`, () => {
            expect(() => ElementGen.createElement(null)).toThrow("you must create an element with at least a tag name");
        });
    });
      
   
});
