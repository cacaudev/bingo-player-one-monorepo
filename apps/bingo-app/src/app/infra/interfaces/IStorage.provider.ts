export interface IStorageProvider {
  setItemValue(itemName: string, itemValue: string): void;
  getItemValue(itemName: string): string;
  clearStorage(): void;
  deleteItem(itemName: string): void;
}
