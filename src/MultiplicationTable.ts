export class MultiplicationTable {
  private isStartSmaller(start:number, end: number): boolean {
    return start >= end ? true : false
  }
  public render(start: number, end: number): string{
    if (this.isStartSmaller(start, end))
    {
      return ''
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
