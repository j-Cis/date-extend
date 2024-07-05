import type { EnumerateSigned, IntRange } from "./utils/types.ts";
export type TypeC400 = EnumerateSigned<400>;
export type TypeC29 = EnumerateSigned<29>;
export type TypeC400CycleItem = Set<TypeC400>;
export type TypeCountWeeks = 52|53;
export type TypeDay = IntRange< 1, 8>;
export type TypeWeek = IntRange< 1, 54>;
export type TypeOffsetDay = IntRange< -3, 4>;