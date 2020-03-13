interface IResponse {
    responseText: IFailureMessage;
}

interface IFailureMessage {
    failure: boolean | string;
    errorMessage: string;
}

declare module ErrorHelper {
   function containsErrors(reponse: IResponse) : boolean;
   function trace(message : IResponse) : void; 
}