import {getPrecent} from'../precent';

describe('we get a percentage', ()=>{
    it('calculate the percentage of the numeric value', ()=> expect(getPrecent(34, 300)).toBe(11)),
    it('calculating the percentage of the string value', ()=> expect(getPrecent('34', 300)).toBe(11)),
    it('checking the line input', ()=> expect(getPrecent('str', 300)).toBe('Значение не может быть вычесленно')),
    it('checking the input of an empty string', ()=> expect(getPrecent('',300)).toBe('Значение не может быть вычесленно')),
    it('one of the values is 0', ()=> expect(getPrecent(0, 300)).toBe(0))
});