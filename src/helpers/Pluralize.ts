/**
 * Функция для плюрализации словосочетаний
 *
 * @param n - количество
 * @param one - слово в единственном числе (друг)
 * @param few - несколько/пара (друга)
 * @param many - много (друзей)
 * @returns {string} - возвращает one, few или many в зависимости от количества
 */
export function pluralize(n: number, one: string, few: string, many: string): string {
  n = Math.abs(n) % 100;
  let n1 = n % 10;

  if (n > 10 && n < 20) {
    return n + " " + many;
  }
  if (n1 > 1 && n1 < 5) {
    return n + " " + few;
  }
  if (n1 == 1) {
    return n + " " + one;
  }
  return n + " " + many;
}
