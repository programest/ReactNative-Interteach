export default function extractNestedParams(obj: any): Record<string, any> {
    const result: Record<string, any> = {};
  
    for (const key in obj) {
        console.log(result[key])
      if (Array.isArray(obj[key])) {
        result[key] = obj[key].map((item: any) => extractNestedParams(item));
      } else if (typeof obj[key] === 'object') {
        result[key] = extractNestedParams(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  
    return result;
  }