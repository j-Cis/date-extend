//=====================================================================//=====================================================================//
// https://catchts.com/range-numbers
// type ComputeRange< N extends number, Result extends Array<unknown> = [], > = (Result['length'] extends N ? Result : ComputeRange<N, [...Result, Result['length']]> );
// type Add<A extends number, B extends number> = [...ComputeRange<A>, ...ComputeRange<B>]['length'];
// type IsGreater<A extends number, B extends number> = IsLiteralNumber<[...ComputeRange<B>][Last<[...ComputeRange<A>]>]> extends true ? false : true;
// type Last<T extends any[]> = T extends [...infer _, infer Last] ? Last extends number ? Last : never : never;
// type RemoveLast<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : never;
// type IsLiteralNumber<N> = N extends number ? number extends N ? false : true : false;
// type AddIteration< Min extends number, Max extends number, ScaleBy extends number, Result extends Array<unknown> = [Min] > = IsGreater<Last<Result>, Max> extends true ? RemoveLast<Result> : AddIteration< Min, Max, ScaleBy, [...Result, Add<Last<Result>, ScaleBy>] >;
// https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
//=====================================================================//=====================================================================//
export type IsPositive<N extends number> = `${N}` extends `-${number}` ? false : true;
export type IsSameSign<N1 extends number, N2 extends number> = IsPositive<N1> extends IsPositive<N2> ? true : false;
export type ToNumber<T> = T extends `${infer N extends number}` ? N : never;
export type NegateNumber<N extends number> = N extends 0 ? 0 : `${N}` extends `-${infer PN}` ? ToNumber<PN> : ToNumber<`-${N}`>;
export type Abs<N extends number> = `${N}` extends `-${infer PN extends number}` ? PN : N;
export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
export type EnumerateSigned<N extends number> = IsPositive<N> extends true ? Enumerate<Abs<N>> : NegateNumber<Enumerate<Abs<N>>>;
export type IntRange<From extends number, To extends number> = IsSameSign<From, To> extends true ?  Exclude<EnumerateSigned<To>, EnumerateSigned<From>> : From | EnumerateSigned<From> | EnumerateSigned<To>;
//=====================================================================//=====================================================================//