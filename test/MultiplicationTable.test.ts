import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it ('should be invalid input', () => {
    //given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start,end)

    //then
    expect(rendered).toBe('')
  })



})
