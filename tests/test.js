import {assert} from 'chai';
//const assert = require('chai').assert;
//const app = require('../src/index.js');
import {words} from '../src/index.js';
let output;
describe("WordCount", () => {
    describe("handle valid input", () => {
        it("should return {Happy: 2, birthday: 1, my: 1, friend: 1} as wordsCount for 'Happy Happy birthday my friend", () => {
            output = JSON.stringify({"Happy" : 2, "birthday": 1, "my": 1, "friend": 1});
            assert.equal(JSON.stringify(words('Happy Happy birthday my friend')), output);
        });

        it("should return {olly: 2, in: 1, come: 1, free: 1} as wordsCount for 'olly olly in come free'", () => {
            output = JSON.stringify({"olly": 2, "in": 1, "come": 1, "free": 1});
            assert.equal(JSON.stringify(words('olly olly in come free')), output);
        });
    });

    describe('handle invalid input', () => {
        it("should return 'Arguement is empty' as wordCount for null", () => {
            output = 'Arguement is not a string';
            assert.equal(words(), output);
        });

        it("should return 'Arguement is not a string' as wordCount for undefined", () => {
            output = 'Arguement is not a string';
            assert.equal(words(undefined), output);
        });

        it("should return 'Arguement is not a string' as wordCount for []", () => {
            output = 'Arguement is not a string';
            assert.equal(words([]), output);
        });

        it("should return 'Arguement is not a string' as wordCount for boolean", () => {
            output = 'Arguement is not a string';
            assert.equal(words(true) || words(false), output);
        });

        it("should return 'Arguement is not a string' as wordCount for number", () => {
            output = 'Arguement is not a string';
            assert.equal(words(3), output);
        });

        it("should return 'Arguement is not a string' as wordCount for object", () => {
            output = 'Arguement is not a string';
            assert.equal(words({olly: 2, in: 1, come: 1, free: 1}), output);
        });
    });
});