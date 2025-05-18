import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberWithDecimal(value: number | string): string {
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  return value;
}

// obj -> js 
export function convertToPlainObject<T>(value : T): T {
  return JSON.parse(JSON.stringify(value));
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatError(error: any){
  if (error.name === 'ZodError'){
    const fieldErrors = Object.keys(error.errors).map((field) => error.errors[field].message);
    return fieldErrors.join(', ');
  }else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002'){
    const field = error.meta?.target ? error.meta.target[0] : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    return typeof error === 'string' ? error : JSON.stringify(error);
  }

}