import { IStorageProvider } from '../interfaces/IStorage.provider';

export class LocalStorageProvider implements IStorageProvider {
  setItemValue(itemName: string, itemValue: string): void {
    localStorage.setItem(itemName, itemValue);
  }
  getItemValue(itemName: string): string {
    return localStorage.getItem(itemName)!;
  }
  clearStorage(): void {
    localStorage.clear();
  }
  deleteItem(itemName: string): void {
    localStorage.removeItem(itemName);
  }
}
