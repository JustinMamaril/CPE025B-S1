class ValidationError extends Error {
    constructor(fields) {
        super();
        this.fields = fields;
    }
}

function validateSchema(data, schema) {
    const invalid = [];
    for (const key in schema) {
        if (!data.hasOwnProperty(key)) {
            invalid.push(key);
        } else {
            const expectedType = schema[key];
            const actualType = typeof data[key];
            if (actualType !== expectedType) {
                invalid.push(key);
            }
        }
    }
    if (invalid.length) {
        throw new ValidationError(invalid);
    }
    return true;
}

function safeValidate(data, schema) {
    try {
        validateSchema(data, schema);
        return '';
    } catch (err) {
        if (err instanceof ValidationError) {
            return err.fields.join(', ');
        }
        throw err;
    }
}

    // Test Code
    const userSchema = { name: 'string', age: 'number', active: 'boolean' };
    const userData = { name: 'Alice', age: 'thirty', active: 1 };
    console.log(safeValidate(userData, userSchema));
    