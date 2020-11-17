export class MultiplicationTable {
  private isStartSmaller(start:number, end: number): boolean {
    return start >= end ? true : false
  }
  private isInputValidRange(start: number, end: number): boolean {
    return (start >= 1 && start <= 10) && (end >= 1 && end <= 10)
  }

  private calculateMultiplicationTable(start: number, end: number): Expression[][] {
    const size = end - start
    const result : Expression[][] = []
    for (let i = 0; i <= size; ++i)
    {
      result[i]=[]
      for(let j = 0; j <= i; ++j)
      {
        result[i].push(new Expression(start+j, start +i))
      }
    }
    return result
  }

  private getOutPutString (input:Expression[][]): string{
    let outPut = ''
    outPut = input.map(row => row.map(expression => `${expression.factor1}*${expression.factor2}=${expression.product}`)
      .join('  ')).join('\n')
    return outPut
  }

  public render(start: number, end: number): string{
    if (this.isStartSmaller(start, end))
    {
      return ''
    }
    if(!this.isInputValidRange(start,end))
    {
      return 'input number is in invalid range'
    }
    const table = this.calculateMultiplicationTable(start,end)
    const result = this.getOutPutString(table)
    return result
  }
}
export class Expression {
  factor1: number
  factor2: number
  product: number
  constructor(start1:number, end1: number){
    this.factor1 = start1
    this.factor2 = end1
    this.product = this.factor1 * this.factor2
  }
}
