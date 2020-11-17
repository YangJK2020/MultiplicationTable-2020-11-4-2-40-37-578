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

  private getOutPutString2 (input:Expression[][]): string{
    let outPut = ''
    outPut = input.map(row => row.map(expression => {

      if(expression.factor1 === 2 && (expression.factor2 === 3 || expression.factor2 === 4))
      {
        return `${expression.factor1}*${expression.factor2}=${expression.product}` + ' '
      }
      else
      {
        return `${expression.factor1}*${expression.factor2}=${expression.product}`
      }
    }
    )
      .join('  ')).join('\n')
    return outPut
  }

  private getOutPutString3 (input:Expression[][]): string{
    let outPut = ''
    outPut = input.map(row => row.map(expression => {

      if(expression.factor2 !== 3 && expression.factor2 !== 10)
      {
        return `${expression.factor1}*${expression.factor2}=${expression.product}` + ' '
      }
      else
      {
        return `${expression.factor1}*${expression.factor2}=${expression.product}`
      }
    }
    )
      .join('  ')).join('\n')
    return outPut
  }

  private getOutPutString4 (input:Expression[][]): string{
    let outPut = ''
    outPut = input.map(row => row.map(expression => {

      if(expression.factor2 !== 2 && expression.factor2 !== 10)
      {
        if(expression.factor1 === 2 && (expression.factor2 === 3 || expression.factor2 === 4))
        {
          return `${expression.factor1}*${expression.factor2}=${expression.product}` + '  '
        }
        else
        {
          return `${expression.factor1}*${expression.factor2}=${expression.product}` + ' '
        }
      }
      else
      {
        return `${expression.factor1}*${expression.factor2}=${expression.product}`
      }
    }
    )
      .join('  ')).join('\n')
    return outPut
  }

  public render(start: number, end: number): string{
    const table = this.calculateMultiplicationTable(start,end)
    if (this.isStartSmaller(start, end))
    {
      return ''
    }
    if(!this.isInputValidRange(start,end))
    {
      return 'input number is in invalid range'
    }
    if(end !== 10)
    {
      if(end <= 4 || (end <= 9 && end >4 && start >= 3))
      {
        const result = this.getOutPutString(table)
        return result
      }
      else if(end <= 9 && end >4 && start <= 2)
      {
        const result = this.getOutPutString2(table)
        return result
      }
      else
      {
        return 'unexpected case'
      }
    }
    else
    {
      if(start >= 3)
      {
        const result = this.getOutPutString3(table)
        return result
      }
      else if (start === 2)
      {
        const result = this.getOutPutString4(table)
        return result
      }
      else if (start === 1)
      {
        return 'code for 1-10 to be implemented yet'
      }
      else
      {
        return 'unexpected case'
      }
    }
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
