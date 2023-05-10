/**
 * The `git-init` module.
 * @module git-init
 */

/**
 * Initializes a Git repository.
 * @param {string|Function} [path] - The path to the directory where the repository should be initialized. If not provided, defaults to the current directory.
 * @param {Function} [cb] - A callback function that will be called when the initialization is complete or if an error occurs.
 */
declare function _default(path?: string | Function, cb?: Function): void;

/**
 * Initializes a Git repository.
 * @param {string} [path] - The path to the directory where the repository should be initialized. If not provided, defaults to the current directory.
 * @returns {Promise<void>} A Promise that resolves when the initialization is complete, or rejects if an error occurs.
 */
declare function promise(path?: string): Promise<void>;
