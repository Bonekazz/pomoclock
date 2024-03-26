interface IDataAtt {
    key: string | null,
    value: string | null;
}

export class ElementGen {
    private constructor() {
        throw new Error("this class cannot be instantiated!");
    }

    static createElement(tagName: string | null = null, id: string | null = null, classAtt: string | null = null, dataAtt: IDataAtt[] | null  = null) {

        if(tagName === null) throw new Error("you must create an element with at least a tag name");

        const element = document.createElement(tagName);

        if(id !== null) element.id = id;
        if(classAtt !== null) element.className = classAtt;
        if(dataAtt !== null)
        {
            dataAtt.forEach(dataset => {
                if(dataset.key === null || dataset.value === null) throw new Error("You must especify the key and value of an dataset");
                element.dataset[dataset.key] = dataset.value;
            });
        }

        return element;
    }

}