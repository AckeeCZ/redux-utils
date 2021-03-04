import strictObjectAccess, { StrictAccessError } from './strictObjectAccess';

it('Should throw an error if the object property value is undefined', () => {
    const objectWithStrictAccess: object = strictObjectAccess({}, true);
    const propertyKey: PropertyKey = 'foo';
    const readProp = () => objectWithStrictAccess[propertyKey];

    expect(readProp).toThrowError(StrictAccessError);
});

it('Should pass if the object property is defined', () => {
    const propertyKey: PropertyKey = 'foo';
    const objectWithStrictAccess: object = strictObjectAccess({
        [propertyKey]: 'bar',
    });
    const readProp = () => objectWithStrictAccess[propertyKey];

    expect(readProp).not.toThrowError(StrictAccessError);
});
