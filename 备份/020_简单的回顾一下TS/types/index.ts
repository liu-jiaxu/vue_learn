// 定义一个接口，用于限制person对象的具体属性
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}

// 一个自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[];

// types/index.ts
export const isNotEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return false;

  // 如果是字符串，检查是否为空或纯空格
  if (typeof value === "string") {
    return value.trim() !== "";
  }

  // 如果是数组，检查是否有元素
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  // 如果是对象，检查是否有属性
  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }

  // 其他类型（数字、布尔值等）只要不是 null/undefined 就视为有值
  return true;
};
