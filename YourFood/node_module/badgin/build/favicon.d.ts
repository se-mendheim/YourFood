import { Value } from './index';
export declare type Options = {
    backgroundColor: string;
    color: string;
    indicator: string;
};
export declare const DefaultValue: Value;
export declare const DefaultOptions: Options;
export declare function isAvailable(): boolean;
export declare function set(value: Value, options?: Partial<Options>): boolean;
export declare function clear(): void;
//# sourceMappingURL=favicon.d.ts.map