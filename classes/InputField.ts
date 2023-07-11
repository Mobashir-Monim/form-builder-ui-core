import { v4 as uuidv4 } from "uuid";
import {
    validInputTypes,
    inputFieldConstructorParams,
} from "../interfaces/input-field-interfaces";

class InputField {
    constructor({
        type,
        options,
        validators,
        values,
        isConditional = false,
    }: inputFieldConstructorParams) {
        this.type = type;
        this.options = options;
        this.validators = validators;
        this.values = values;
        this.isConditional = isConditional;
        this.errors = [];
        this.id = uuidv4();
    }
}
