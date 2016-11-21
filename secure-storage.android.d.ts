import { SecureStorageApi, GetOptions, SetOptions, RemoveOptions } from "./secure-storage.common";
export declare class SecureStorage implements SecureStorageApi {
    constructor();
    get(arg: GetOptions): Promise<any>;
    set(arg: SetOptions): Promise<boolean>;
    remove(arg: RemoveOptions): Promise<boolean>;
}