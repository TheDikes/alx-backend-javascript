export default function iterateThroughObject(reportWithIterator) {
    let result = '';
    let nextEmployee = reportWithIterator.next();
  
    while (!nextEmployee.done) {
      result += nextEmployee.value;
      if (!nextEmployee.done) {
        result += ' | ';
      }
      nextEmployee = reportWithIterator.next();
    }
  
    return result;
  }