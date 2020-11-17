export class MultiplicationTable {
  private isStartSmaller(start:number, end: number): boolean {
    return start >= end ? true : false
  }
  private isInputValidRange(start: number, end: number): boolean {
    return (start >= 1 && start <= 10) && (end >= 1 && end <= 10)
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
    return '1*1=1'
  }
}
// function isInputValid (isSmaller: boolean) : string {
//   if (isSmaller)
//   {
//     return ''
//   }
//   else
//   {
//     return 'valid input'
//   }
// }
