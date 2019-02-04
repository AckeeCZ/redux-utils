export * as warnings from './warnings';
export * as errors from './errors';
export * as types from './types';

export const UNUSED_ACTION_TYPE = Symbol('UNUSED_ACTION_TYPE');

export const isEnvDevelopment = process.env.NODE_ENV === 'development';
