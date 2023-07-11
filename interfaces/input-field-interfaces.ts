export type validInputTypes =
    | "text"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "email"
    | "number"
    | "password"
    | "file"
    | "date"
    | "tel"
    | "time";

export type inputValues = (string | number)[];

export interface inputOption {
    value: string | number;
    label: string | number;
}

export type inputOptionsType = undefined | string[] | inputOption;

export interface validationResult {
    isValid: boolean;
    errorMessage: undefined | string;
}

export type validationFunction = (values: inputValues) => validationResult;

export interface inputFieldInterface {
    type: validInputTypes;
    name: string;
    id: string;
    group_id: string | null;
    options: inputOptionsType;
    values: inputValues;
    validator: (string | validationFunction)[];
    errors: string[];
    extendedProps: Object;
    isConditional: boolean;
}

export interface inputFieldConstructorParams {
    type: validInputTypes;
    options: inputOptionsType;
    validators: (string | validationFunction)[];
    values: inputValues;
    isConditional: boolean;
}
