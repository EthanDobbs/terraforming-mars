// TRSource represents the ways an action will gain TR. This is used
// exclusively to compute tax when Reds are in power.
export type TRSource = Partial<{
  oxygen: number,
  temperature: number,
  oceans: number,
  tr: number,
  venus: number
  moonHabitat: number,
  moonMining: number,
  moonLogistics: number,
}>

export function CombineTRSources(sources: Array<TRSource>): TRSource {
  return sources.reduce((acc: TRSource, source) => {
    for(const key in source) {
      const safeKey = key as keyof TRSource;
      let accEntry = acc[safeKey];
      if (accEntry) {
        accEntry += source[safeKey] ?? 0;
      } else {
        accEntry = source[safeKey] ?? 0;
      }   
    }
    return acc;
  })
}

