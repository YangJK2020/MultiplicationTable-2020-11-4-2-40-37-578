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

  it ('input should be outside range', () => {
    //given
    const table = new MultiplicationTable()
    const start = 0
    const end = 6

    //when
    const rendered = table.render(start,end)

    //then
    expect(rendered).toBe('input number is in invalid range')
  })
})
