export interface Strategy {
  name: string;
  sort(arr: number[]): number[];
}

export class MergeSort implements Strategy {
  public get name(): string {
    return 'MergeSort';
  }

  public sort(arr: number[]): number[] {
    // resource: https://dev.to/godcrampy/merge-sort-quick-sort-in-5-languages-21n2
    this.mergeSortRange(arr, 0, arr.length - 1);
    return arr;
  }

  private mergeSortRange(list: number[], l: number, r: number) {
    // Guard Clause
    if (l >= r) {
      return;
    }
    const m = Math.floor(l + (r - l) / 2);
    this.mergeSortRange(list, l, m);
    this.mergeSortRange(list, m + 1, r);
    this.merge(list, l, m, r);
  }

  private merge(list: number[], l: number, m: number, r: number) {
    const res = list.slice(l, r + 1);
    let i1 = l;
    let i2 = m + 1;
    let i = l;

    while (i1 <= m && i2 <= r) {
      const v1 = res[i1 - l];
      const v2 = res[i2 - l];

      if (v1 < v2) {
        list[i++] = v1;
        ++i1;
      } else {
        list[i++] = v2;
        ++i2;
      }
    }

    while (i1 <= m) {
      list[i++] = res[i1++ - l];
    }
    while (i2 <= m) {
      list[i++] = res[i2++ - l];
    }
  }
}

export class QuickSort implements Strategy {
  public get name(): string {
    return 'QuickSort';
  }

  public sort(arr: number[]): number[] {
    this.quickSortRange(arr, 0, arr.length - 1);
    return arr;
  }

  private partition(list: number[], l: number, r: number): number {
    let i: number = l;
    const pivot: number = list[r];

    for (let j = l; j < r; ++j) {
      if (list[j] < pivot) {
        [list[j], list[i]] = [list[i], list[j]];
        ++i;
      }
    }

    [list[i], list[r]] = [list[r], list[i]];
    return i;
  }

  private quickSortRange(list: number[], l: number, r: number) {
    if (l < r) {
      const p = this.partition(list, l, r);
      this.quickSortRange(list, l, p - 1);
      this.quickSortRange(list, p + 1, r);
    }
  }
}
