export interface iCrud{
    get(): Array<Object>;
    find(id: Number): Object;
    create(obj: Object): Boolean;
    update(obj: Object): Boolean;
    deleteID(id: Number): Boolean;
}