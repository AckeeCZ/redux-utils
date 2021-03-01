import strictObjectAccess, { StrictAccessError } from './strictObjectAccess';

it('Should throw an error if the object property value is undefined', () => {
    const objectWithStrictAccess = strictObjectAccess({}, true);
    const propertyKey = 'foo';
    const readProp = () => objectWithStrictAccess[propertyKey];

    expect(readProp).toThrowError(StrictAccessError);
});

it('Should pass if the object property is defined', () => {
    const propertyKey = 'foo';
    const objectWithStrictAccess = strictObjectAccess({
        [propertyKey]: 'bar',
    });
    const readProp = () => objectWithStrictAccess[propertyKey];

    expect(readProp).not.toThrowError(StrictAccessError);
});
