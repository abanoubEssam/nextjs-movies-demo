export class NetworkError extends Error {

}

export class UnProcessableEntityError extends Error {

    errors: Array<any>
    
    constructor(errors) {
        super();
        this.errors = errors;
    }

}