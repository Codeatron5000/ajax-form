// @flow
const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn (obj: Object, key: string): boolean %checks {
    return hasOwnProperty.call(obj, key)
}

export function isFile(val: mixed): boolean %checks {
    return !!val && (val instanceof File || val instanceof Blob);
}

export function fileTooBig(val: mixed, maxSize: number): boolean {
    return isFile(val) && val.size >= (maxSize * 1024 * 1024);
}

export function mixin(source: Object, target: Object): Object {
    let mix = {};

    for (const key in source) {
        mix[key] = hasOwn(target, key) ? target[key] : source[key]
    }

    return mix;
}

export function clone(obj: { [string]: mixed }): string {
    return JSON.parse(JSON.stringify(obj));
}

export function emptyValue(original: mixed): [] | {} | '' | null {
    if (original instanceof Array) {
        return [];
    }
    if (typeof original === 'object') {
        return {};
    }
    if (typeof original === 'string') {
        return '';
    }
    return null;
}

export function isUndef(value: mixed): %checks {
    return typeof value === 'undefined';
}

export function isObj(value: mixed): %checks {
    return typeof value === 'object';
}

export function isArr(value: mixed): %checks {
    return value instanceof Array;
}

export function isNil(value: mixed): %checks {
    return value == null;
}

export function isFunc(value: mixed): %checks {
    return value instanceof Function;
}

export function escapeRegExp(string: string) {
    return string.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}
